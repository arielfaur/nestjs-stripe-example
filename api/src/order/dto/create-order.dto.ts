import { IsNotEmpty, Max, IsNumber } from 'class-validator';
import { Ticket } from 'src/ticket/entities/ticket.entity';

export class CreateOrderDto {

    @IsNotEmpty()
    readonly ticket: Ticket;

    @IsNumber()
    @Max(10)
    @IsNotEmpty()
    readonly qty: number;
}
