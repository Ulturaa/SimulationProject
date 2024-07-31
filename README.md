READ ME 

DIRECT CACHE MAPPING SIMULATOR 
This is a Direct This is a Direct Cache Mappinng Simulator. It simulates how the cache performs
direct mapping between the CPU, Cache, and Main Memory. This simulator calculates the number of
hits and misses, miss penalty, and average access time, average total time, and the final cache.

----- NOTE! -----  
For the purposes of consistency this simulator uses fixed values for cahce and memory access times.

----- Interface -----  
Block size:   Size of words in a block  
Memory Size:   Size of the Main Memory in blocks (Must be larger than the cache)  
Cache Size:   Size of cache in blocks  
Memory Block Sequence: The sequence of memory blocks

----- Output -----  
Hits: Number of hits  
Miss: Number of misses  
Miss Penalty: Time penalty for a miss
Average Access Time: The average time to access a memory block  
Total Access Time: The total time of the sequence  
Snapshot: The cache after executing the sequence  
  
----- How to use the Direct Cache Mapping Simulator -----  
1. Input the block size. Block size is the number of words per block  
2. Input the memory size. This is the size for the main memory.  
3. Input the cache size. This is the size of the cache memory.  
4. Input the sequence. The sequence of memory blocks to be accessed.  
   - All fields must be filled before clicking submit.  
6. After all fields are filled click submit.  
7. The results will be displayed below.  
8. Optional: Option to save results as a text file.  
