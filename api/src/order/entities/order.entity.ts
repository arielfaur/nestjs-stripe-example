import { Ticket } from "src/ticket/entities/ticket.entity";

export class Order {
    id: string;
    user_id?: string;
    ticket: Ticket;
    qty: number;
}
