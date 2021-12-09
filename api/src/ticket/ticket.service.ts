import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { Ticket } from './entities/ticket.entity';

@Injectable()
export class TicketService {

  constructor(@InjectModel(Ticket.name) private readonly ticketModel: Model<Ticket>) {}

  async create(createTicketDto: CreateTicketDto) {
    const newTicket = new this.ticketModel(createTicketDto);
    return newTicket.save();
  }

  async findAll() {
    return this.ticketModel.find().exec();
  }

  async findOne(id: string) {
    return this.ticketModel
      .findById({ _id: id })
      .exec();
  }

  update(id: string, updateTicketDto: UpdateTicketDto) {
    return `This action updates a #${id} ticket`;
  }

  remove(id: string) {
    return `This action removes a #${id} ticket`;
  }
}
