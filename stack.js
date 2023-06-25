class Stack {
    constructor() {
      this.items = []; // Array to store stack elements
    }
  
    // Push an element onto the stack
    push(element) {
      this.items.push(element);
    }
  
    // Remove and return the top element from the stack
    pop() {
      if (this.isEmpty()) {
        return "Underflow"; // If the stack is empty
      }
      return this.items.pop();
    }
  
    // Return the top element of the stack without removing it
    peek() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items[this.items.length - 1];
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Return the size of the stack
    size() {
      return this.items.length;
    }
  
    // Empty the stack
    clear() {
      this.items = [];
    }
  }
  
  // Usage example
  const stack = new Stack();
  console.log(stack.isEmpty()); // Output: true
  
  stack.push(10);
  stack.push(20);
  stack.push(30);
  
  console.log(stack.peek()); // Output: 30
  
  console.log(stack.pop()); // Output: 30
  console.log(stack.pop()); // Output: 20
  
  console.log(stack.size()); // Output: 1
  
  console.log(stack.isEmpty()); // Output: false
  
  stack.clear();
  console.log(stack.isEmpty()); // Output: true
  