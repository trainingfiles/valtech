class Person {
  canWalk = "I can walk";
  constructor(newability = null) {
    if (newability) {
      this.canWalk = newability;
    }
  }
}

// named export
export { Person };
// default export
