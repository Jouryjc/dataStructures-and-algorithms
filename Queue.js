//队列
function Queue(){
	var items = [];

	this.enqueue = function(element){
		items.push(element);
	}
	this.dequeue = function(){
		return items.shift();
	}
	this.front = function(){
		return items[0];
	}
	this.isEmpty = function(){
		return items.length === 0;
	}
	this.clear = function(){
		items = [];
	}
	this.size = function(){
		return items.length;
	}
	this.print = function(){
		console.log(items.toString());
	}
}

//测试
var queue = new Queue();
console.log(queue.isEmpty());

queue.enqueue('John');
queue.enqueue('Jour');
queue.enqueue('Cat');

queue.print();
console.log(queue.size());
console.log(queue.isEmpty());

queue.dequeue();
queue.dequeue();

queue.print();


//最小优先队列
function PriorityQueue(){
	var items = [];
	function QueueElement(element , priority){            //声明一个包含元素和优先级的构造函数
		this.element = element;
		this.priority = priority;
	}
	this.enqueue = function(element , priority){
		var queueElement = new QueueElement(element , priority);
		if(this.isEmpty()){                               //如果为空，直接入列
			items.push(queueElement);
		}else{
			var added = false;
			for(var i = 0 ; i < items.length ; i++){
				if(queueElement.priority < items[i].priority){      //插在优先级比自己大的元素的前面
					items.splice(i,0,queueElement);
					added = true;
					break;
				}
				if(!added){                                   //如果没有优先级比自己大的元素，直接插入队尾
					items.push(queueElement);
				}
			}
		}
	}
}

//测试
var priorityQueue = new PriorityQueue();
priorityQueue.enqueue("John" , 2);
priorityQueue.enqueue("Jour" , 1);
priorityQueue.enqueue("Cat" , 1);
priorityQueue.print();

//循环队列
function hotPotato(nameList , num){
	var queue = new Queue();
	for(var i = 0 ; i < nameList.length ; i++){       //把全部人加入到队列中
		queue.enqueue(nameList[i]);
	}

	var eliminated = '';
	while(queue.size() > 1){
		for(var i = 0 ; i < num ; i++){                  //循环
			queue.enqueue(queue.dequeue());
		}
		eliminated = queue.dequeue();                  //到达传递次数，淘汰
		console.log(eliminated + '被淘汰');
	}
	return queue.dequeue();         					//最后一个胜利者
}

//测试
var names = ['John' , 'Jack' , 'Cat' , 'Dog'];
var winner = hotPotato(names , 5);
console.log('赢家' + winner);

