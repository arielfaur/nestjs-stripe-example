import { Injectable } from '@nestjs/common';
import { of } from 'rxjs';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { Ticket } from './entities/ticket.entity';

@Injectable()
export class TicketService {
  private _tickets: Array<Ticket> = [];

  create(createTicketDto: CreateTicketDto) {
    const { ticket } = createTicketDto;
    this._tickets.push(ticket);
    return of(ticket);
  }

  findAll() {
    return of(this._tickets);
  }

  findOne(id: string) {
    return this._tickets.find(t => t.id === id);
  }

  update(id: string, updateTicketDto: UpdateTicketDto) {
    return `This action updates a #${id} ticket`;
  }

  remove(id: string) {
    return `This action removes a #${id} ticket`;
  }
}
