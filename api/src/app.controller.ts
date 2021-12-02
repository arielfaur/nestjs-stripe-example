import { Controller } from '@nestjs/common';
import { TicketService } from './ticket/ticket.service';
import { CreateTicketDto } from './ticket/dto/create-ticket.dto';
import { Ticket } from './ticket/entities/ticket.entity';
import { OrderService } from './order/order.service';
import { CreateOrderDto } from './order/dto/create-order.dto';

@Controller()
export class AppController {
  constructor(
    private readonly ticketSvc: TicketService,
    private readonly orderSvc: OrderService) {
    this.createEntities();
  }

  /**
   * Creates default entities
   */
  createEntities() {

    const t1 =
      {
        id: '1D',
        price: 10,
        description: '1-Day Ticket'
      } as Ticket;

    const t2 =
      {
        id: '2D',
        price: 20,
        description: '2-Day Ticket'
      } as Ticket;

    this.ticketSvc.create(new CreateTicketDto(t1));
    this.ticketSvc.create(new CreateTicketDto(t2));
  }
}
