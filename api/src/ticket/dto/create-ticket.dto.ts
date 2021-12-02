import { Ticket } from "../entities/ticket.entity";

export class CreateTicketDto {
    constructor(public ticket: Ticket) {}
}
