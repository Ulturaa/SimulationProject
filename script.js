$(document).ready(function () {
    function isPowerOfTwo(n) {
        return n > 0 && (n & (n - 1)) === 0;
    }
    $("#submit").click(function(){
        let mat = 10;
        let cat = 1;  

        let block_size = parseInt($("#block-input").val());
        let memory_size = parseInt($("#memory-input").val());
        let cache_size = parseInt($("#cache-input").val());
        let sequence = $("#sequence-input").val();

        if (!block_size || !memory_size || !cache_size || !sequence || !isPowerOfTwo(block_size)) {
            $("#error").show();
        } else {
            $("#error").hide();

            let sequence_array = sequence.split(',').map(function(item) {
                return parseInt(item.trim());
            }).filter(function(item) {
                return !isNaN(item);
            });

            let hits = 0;
            let misses = 0;
            let cache = new Array(block_size).fill(null);
            //console.log(cache.length);
            
            for (let i = 0; i < sequence_array.length; i++) {
                let block = sequence_array[i];
                //console.log(block);
                let cache_block = block % cache_size;
                //console.log(cache_block);
                if(cache[cache_block] === block){
                    hits++;
                    cache[cache_block] = block;
                } else {
                    misses++;
                    cache[cache_block] = block;
                }
            }
                    
            
            let miss_penalty = (2 * cat) + (block_size * mat);
            let amat = (hits/sequence_array.length) * cat + (misses/sequence_array.length) * miss_penalty;
            let tmat = (hits * block_size * cat) + (misses * block_size * (mat + cat)) + (misses * cat);

            $("#hit").text(`Hit: ${hits}`);
            $("#miss").text(`Miss: ${misses}`);
            $("#miss-penalty").text(`Miss Penalty: ${miss_penalty} ns`);
            $("#amat").text(`Average Memory Access Time: ${amat.toFixed(2)} ns`);
            $("#tmat").text(`Total Memory Access Time: ${tmat} ns`);
            $("#snapshot").text(`Snapshot: ${cache}`);

            $("#block-input").val("");
            $("#memory-input").val("");
            $("#cache-input").val("");
            $("#sequence-input").val("");
        }
    });
});