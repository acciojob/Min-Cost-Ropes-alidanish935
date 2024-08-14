function mincost(arr)
{ 
//write your code here
	// const minHeap = new MinHeap();
	// for(let i=0;i<arr.length;i++){
	// 	minHeap.push(arr[i]);
	// }
	// while(minHeap.size()>1){
	// 	let first = minHeap.pop();
	// 	let sec = minHeap.pop();
	// 	let cost += first+sec;
	// 	minHeap.push(cost);
	// }
	// minHeap.pop();


	 let totalCost = 0;

    // Continue until we have only one rope left
    while (arr.length > 1) {
        // Sort the array to find the two smallest elements
        arr.sort((a, b) => a - b);

        // Remove the two smallest ropes from the array
        let first = arr.shift();
        let second = arr.shift();

        // Combine the two ropes
        let cost = first + second;
        totalCost += cost;

        // Add the combined rope back to the array
        arr.push(cost);
    }

    return totalCost;
// return the min cost
  
}

module.exports=mincost;
