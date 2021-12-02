import { Ticket } from "./ticket.entity";

export class Order {
    id?: string;
    user_id?: string;
    ticket!: Ticket;
    qty: number = 0;

    static create(ticket: Ticket, qty = 1) {
      return new Order(ticket, qty);
    }

    private constructor(ticket: Ticket, qty: number) {
      this.ticket = ticket;
      this.qty = qty;
    }
}
