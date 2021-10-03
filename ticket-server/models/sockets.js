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
    });
  }
}

module.exports = Sockets;
