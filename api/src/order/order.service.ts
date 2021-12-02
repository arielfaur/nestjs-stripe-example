import { Injectable } from '@nestjs/common';
import { Stripe } from 'stripe';
import { of } from 'rxjs';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrderService {
  private _stripe: Stripe;
  private _orders: Array<Order> = [];

  constructor() {
    this._stripe = new Stripe(process.env.STRIPE_TEST_KEY, { apiVersion: '2020-08-27' });
  }

  async create(createOrderDto: CreateOrderDto) {
    const { order } = createOrderDto;

    const session = await this._stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: order.ticket.description,
            },
            unit_amount: order.ticket.price*100,
          },
          quantity: order.qty,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:4200/checkout/success',
      cancel_url: `http://localhost:4200/checkout/${order.ticket.id}`,
    });

    return { id: session.id };
  }

  findAll() {
    return of(this._orders);
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
