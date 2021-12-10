import { Ticket } from "./ticket.entity";

export class Order {
  _id!: string;
  user_id?: string;
  ticket!: Ticket;
  qty: number = 0;
}
