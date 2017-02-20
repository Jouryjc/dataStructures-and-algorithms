//链表
function LinkedList(){
	var Node = function(element){      //元素结构
		this.element = element;
		this.next = null;
	}

	var length = 0;                    //存储列表项的数量的length属性
	var head = null;			       //存储第一个节点的引用

	this.append = function(element){
		var node = new Node(element),
			current;
		if(head === null){            //链表为空，添加的是第一个元素
			head = node;
		}else{
			current = head;
			while(current.next){	  //列表不为空，向其追加元素
				current = current.next;
			}
			current.next = node;
		}
		length++;
	}
	this.removeAt = function(position){
		if(position > -1 && position < length){    //检查元素有没超越链表范围
			var current = head,
				previous,
				index = 0;
			if(position === 0){             //移除第一项
				head = current.next;
			}else{
				while(index++ < position){
					previous = current;
					current = current.next;
				}
				previous.next = current.next;   //将previous与current的下一项连接起来，跳过current，从而移除它
			}
			length--;
			return current.element;
		}else{
			return null;
		}
	}
	this.insert = function(position , element){
		if(position >= 0 && position <= length){    //检查越界值
			var node = new Node(element),
				current = head,
				previous,
				index = 0;
			if(position === 0){               		//在第一个位置上添加
				node.next = current;
				head = node;
			}else{
				while(index++ < position){
					previous = current;
					current = current.next;
				}
				node.next = current;
				current = current.next;
			}
			length++;
			return true;
		}else{
			return false;
		}
	}
	this.indexOf = function(element){
		var current = head,
			index = 0;
		while(current){
			if(element === current.element){
				return index;
			}
			index++;
			current = current.next;
		}
		return -1;
	}
	this.isEmpty = function(){
		return length === 0;
	}
	this.size = function(){
		return length;
	}
	this.toString = function(){
		var current = head,
			string = '';

		while(current){
			string += "," + current.element;
			current = current.next;
		}
		return string.slice(1);
	}
	this.getHead = function(){
		return head;
	}
	
}

//双向链表
function DoublyLinkedList(){
	var Node = function(element){
		this.element = element;
		this.next = null;
		this.prev = null;			//新增的
	};
	var length = 0;
	var head = null;
	var tail = null;     			//新增的

	this.insert = function(position , element){
		if(position >= 0 && position <= length){
			var node = new Node(element),
				current = head,
				previous,
				index = 0;

			if(position === 0){          			//在列表的第一个位置插入元素
				if(!head){
					head = node;
					tail = node;
				}else{
					node.next = current;
					current.prev = node; 
					head = node;
				}
			}else if(position === length){			//在列表最后一个位置插入元素
				current = tail;
				current.next = node;
				node.prev = current;
				tail = node;
			}else{
				while(index++ < position){			//在中间位置插入元素
					previous = current;
					current = current.next;
				}
				node.next = current;
				previous.next = node;

				current.prev = node;
				node.prev = previsou;
			}

			length++;
			return true;
		}else{
			return false;
		}
	}

	this.removeAt = function(position){
		if(position > -1 && position < length){
			var current = head,
			previous,
			index = 0;

			if(position === 0){						//删除列表的第一个元素
				head = current.next;
				if(length === 1){
					tail = null;
				}else{
					head.prev = null;
				}
			}else if(position === length - 1){  	//删除列表中的最后一个元素
				current = tail;
				tail = current.prev;
				tail.next = null;
			}else{									//删除列表中间某个位置的元素
				while(index++ < position){			
					previous = current;
					current = current.next;
				}

				previous.next = current.next;
				current.next.prev = previous;
			}

			length--;

			return current.element;
		}else{
			return null;
		}
	}
}