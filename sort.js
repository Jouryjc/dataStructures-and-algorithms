function ArrayList(){
	var array = [];
	this.insert = function(item){
		array.push(item);
	}
	this.toString = function(){
		return array.join();
	}
	this.bubbleSort = function(){   
		var length = array.length;
		for(var i = 0 ; i < length ; i++){
			for(var j = 0 ; j < length - 1 ; j++){            //for(var j = 0 ; i < length - 1 - j ; j++)
				if(array[j] > array[j+1]){
					swap(j,j+1);
				}
			}
		}
	}
	this.selectionSort = function(){
		var length = array.length,
			indexMin;
		for(var i = 0 ; i < length - 1; i++){
			indexMin = i;
			for(var j = i ; i < length ; j++){
				if(array[indexMin] > array[j]){
					indexMin = j;
				}
			}
			if(i !== indexMin){
				swap(i , indexMin);
			}
		}
	}
	this.insertionSort = function(){
		var length = array.length,
			j , temp;
		for(var i = 1; i < length ; i++){
			j = i;
			temp = array[i];
			while(j > 0 && array[j-1] > temp){
				array[i] = array[j-1];
				j--;
			}
			array[j] = temp;
		}
	}
	this.mergeSort = function(){
		array = mergeSortRec(array);
	}
	var mergeSortRec = function(array){
		var length = array.length;
		if(length === 1){
			return array;
		}
		var mid = Math.floor(length / 2),
			left = array.slice(0 , mid),
			right = array.slice(mid , length);

		return merge(mergeSortRec(left) , mergeSortRec(right));
	}
	var merge = function(left , right){
		var result = [],
			il = 0,
			ir = 0;
		while(il < left.length && ir < right.length){
			if(left[il] < right[ir] && ir < right.length){
				if(left[i] < right[ir]){
					result.push(left[il++]);
				}else{
					result.push(right[ir++]);
				}
			}
		}
		while(il < left.length){
			result.push(left[il++]);
		}
		while(ir < right.length){
			result.push(right[ir++]);
		}
		return result;
	}
	this.quickSort = function() {
	　　if (arr.length <= 1) { 
			return arr; 
		}
	　　var pivotIndex = Math.floor(arr.length / 2);
	　　var pivot = arr.splice(pivotIndex, 1)[0];
	　　var left = [];
	　　var right = [];
	　　for (var i = 0; i < arr.length; i++){
	　　　　if (arr[i] < pivot) {
	　　　　　　left.push(arr[i]);
	　　　　} else {
	　　　　　　right.push(arr[i]);
	　　　　}
	　　}
	　　return quickSort(left).concat([pivot], quickSort(right));
	}
	this.binarySearch = function(item){
		this.quickSort();

		var low = 0,
			high = array.length - 1,
			mid , element;
		while(low <= high){
			mid = Math.floor((low + high) / 2);
			element = array[mid];
			if(element < item){
				low = mid + 1;
			}else if(element > item){
				high = mid - 1;
			}else{
				return mid;
			}
		}
		return -1;
	}
	function swap(index1 , index2){
		var aux = array[index1];
		array[index1] = array[index2];
		array[index2] = aux;
	}
}