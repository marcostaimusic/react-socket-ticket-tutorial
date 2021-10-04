const Ticket = require("./ticket");
const TickeList = require("./ticketList");

class Sockets {
  constructor(io) {
    this.io = io;
    this.ticketList = new TickeList();

    this.socketEvents();
  }

  socketEvents() {
    // On connection
    this.io.on("connection", (socket) => {
      console.log("client connected");

      // Escuchar evento: mensaje-to-server
      socket.on("newTicket", (data, callback) => {
        const newTicket = this.ticketList.createTicket();
        callback(newTicket);
      });

      socket.on("nextTicket", ({ agent, desk }, callback) => {
        const yourTicket = this.ticketList.assignTicket(agent, desk);
        callback(yourTicket);
        this.io.emit("newTicketAssigned", this.ticketList.last13); //ricordati che è un getter e quindi niente parentesi
      });
    });
  }
}

module.exports = Sockets;
