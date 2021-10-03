const Ticket = require("./ticket");

class TickeList {
  constructor() {
    this.lastNumber = 0;
    this.pendingTickets = [];
    this.assignedTickets = [];
  }

  get nextNumber() {
    return this.lastNumber++;
  }

  // get last 3 as card and previous 10 in side list
  get last13() {
    return this.assignedTickets.slice(0, 13);
  }

  createTicket() {
    const newTicket = new Ticket(this.nextNumber);
    this.pendingTickets.push(newTicket);
    return newTicket;
  }

  assignTicket(agent, desk) {
    if (this.pendingTickets.length === 0) {
      return null;
    }
    const nextTicket = this.pendingTickets.shift();
    nextTicket.agent = agent;
    nextTicket.desk = desk;

    this.assignedTickets.unshift(nextTicket);
    return nextTicket;
  }
}

module.exports = TickeList;
