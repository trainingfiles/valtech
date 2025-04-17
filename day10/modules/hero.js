import { Person } from "./person.js";
class Hero extends Person {
  firstname = "default";
  lastname = "default";
  static version = 1001;
  #mission = "My Secret Mission";
  constructor(fname, lname, args) {
    super(args);
    this.firstname = fname;
    this.lastname = lname;
  }
  fullname() {
    return this.firstname + " " + this.lastname;
  }
  get mission() {
    return this.#mission;
  }
  set mission(nmission) {
    this.#mission = nmission;
  }
}

export { Hero };
