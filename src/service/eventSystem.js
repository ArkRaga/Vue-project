class EventSystem {
  constructor() {
    this.Events = {};
  }
  registerEvent(eventname, fn) {
    console.log("Event Registerd: ", eventname);
    if (this.Events[eventname]) {
      return console.log("Event already exists");
    }
    this.Events[eventname] = (args) => fn(args);
  }
  invokeEvent(eventname, args = null) {
    if (!this.Events[eventname]) {
      return console.log("Event doesnt Exists");
    }
    this.Events[eventname](args);
  }
}

const eventSystem = new EventSystem();
export default eventSystem;
