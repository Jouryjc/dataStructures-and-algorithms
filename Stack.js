//栈实现
function Stack(){
	var items = [];

	this.push = function(element){
		items.push(element);
	}
	this.pop = function(){
		items.pop();
	}
	this.peek = function(){
		return items[items.length - 1];
	}
	this.isEmpty = function(){
		return items.length === 0;
	}
	this.size = function(){
		return items.length;
	}
	this.print = function(){
		console.log(items.toString());
	}
}

var stack = new Stack();
console.log(stack.isEmpty());
stack.push(5);
stack.push(8);
console.log(stack.peek());
stack.push(1);
console.log(stack.size());
console.log(stack.isEmpty());

//十进制转二进制
function dividedBy2(decNumber){
	var remStack = new Stack(),
		rem,
		binaryString = '';

	while(decNumber > 0){
		rem = Math.floor(decNumber % 2);
		remStack.push(rem);
		decNumber = Math.floor(decNumber / 2);
	}

	while(!remStack.isEmpty()){
		binaryString += remStack.pop().toString(); 
	}

	return binaryString;
}
//测试
console.log(baseConverter(2541));
console.log(baseConverter(1120));
console.log(baseConverter(10));

//十进制转化为任意进制
function baseConverter(decNumber , base){
	var remStack = new Stack(),
		rem,
		baseString = '',
		digits = '0123456789ABCDEF';

	while(decNumber > 0){
		rem = Math.floor(decNumber % base);
		remStack.push(rem);
		decNumber = Math.floor(decNumber / base);
	}

	while(!remStack.isEmpty()){
		baseString += digits[remStack.pop()]; 
	}

	return baseString;
}

//测试
console.log(baseConverter(100345 , 2));
console.log(baseConverter(100345 , 8));
console.log(baseConverter(100345 , 16));
