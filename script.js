function mincost(arr)
{ 
//write your code here
	const minHeap = new MinHeap();
	for(let i=0;i<arr.length;i++){
		minHeap.push(arr[i]);
	}
	while(minHeap.size()>1){
		let first = minHeap.pop();
		let sec = minHeap.pop();
		let cost += first+sec;
		minHeap.push(cost);
	}
	minHeap.pop();
// return the min cost
  
}

module.exports=mincost;
