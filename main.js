class Stack 
{
  constructor(){
    this.stack = [];
    /*this.minValueStack = [];*/
  }

  print(){
    console.log(this.stack);
  }

  push(x){
    /*if ((this.isEmpty()) || (x <= this.minValueStack[this.minValueStack.length-1])) {
      this.minValueStack[this.minValueStack.length] = x;  
    }*/
    this.stack[this.stack.length] = x;
  }

  isEmpty(){
     return this.stack.length == 0
  }

  peek(){
     if (this.isEmpty()) { return null }
     return this.stack[this.stack.length-1]
  }

  pop(){
    if (this.isEmpty()) { return null }
    /*if(this.peek() == this.minValueStack[this.minValueStack.length-1]) {
      this.minValueStack.splice(this.minValueStack.length-1)
    }*/
    return this.stack.splice(this.stack.length-1)[0]
  }

  /*getMin() {
    if (this.minValueStack.length == 0) { return null }
    return this.minValueStack[this.minValueStack.length-1]
  }*/
}

class MinValueStack{
  constructor() {
    this.stack = [];
    this.minValuesStack = new Stack();   
  }

  print() {
    console.log(this.stack);
  }

  push(x) {
    if (x <= this.getMin() || this.getMin() == null) {
      this.minValuesStack.push(x)
    }
    this.stack[this.stack.length] = x;
  }

  isEmpty(){
    return this.stack.length == 0
  }

  peek(){
    if (this.isEmpty()) { return null }
    return this.stack[this.stack.length-1]
  }

  pop() {
    if (this.isEmpty()) { return null }
    if (this.peek() == this.getMin()) {
      this.minValuesStack.pop();
    }
    return this.stack.splice(this.stack.length-1, 1)[0];
  }

  getMin() {
    if (this.isEmpty()) { return null }
    return this.minValuesStack.peek();
  }
}