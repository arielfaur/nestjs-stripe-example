import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ticket } from '../ticket/entities/ticket.entity';
import { Stripe } from 'stripe';
import { CreateOrderDto, CreateOrderItemDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { CheckoutDto } from './dto/checkout.dto';
@Injectable()
export class OrderService {
  private readonly _stripe: Stripe;

  private redirect_url = 'http://localhost:4200';

  get stripe() {
    return this._stripe;
  }

  constructor(@InjectModel(Order.name) private readonly orderModel: Model<Order>, @InjectModel(Ticket.name) private readonly ticketModel: Model<Ticket>) {
    this._stripe = new Stripe(process.env.STRIPE_TEST_KEY, { apiVersion: '2020-08-27' });
  }

  async create(checkoutDto: CheckoutDto) {
    const { qty, ticket_id, price } = checkoutDto;

    const session = await this._stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: ticket_id,
            },
            unit_amount: price * 100,
          },
          quantity: qty,
        },
      ],
      mode: 'payment',
      success_url: this.redirect_url.concat('/success'),
      cancel_url: this.redirect_url.concat(`/checkout/${ticket_id}`),
    });

    return { id: session.id };
  }

  findAll() {
    return `This action returns all orders`;
  }

  findOne(id: string) {
    return `This action returns a ${id} order`;
  }

  async fulfill(session: Stripe.Checkout.Session) {
    const expanded_session = await this._stripe.checkout.sessions.retrieve(
      session.id,
      {
        expand: ['customer', 'line_items'],
      }
    );

    const customer = expanded_session.customer_details;
    const items = expanded_session.line_items.data;

    const createOrderDto: CreateOrderDto = {

      user_id: customer.email,
      total: expanded_session.amount_total,
      items: items.map(item => {
        return {
          ticket_id: item.description,
          subtotal: item.amount_total,
          unit_price: item.price.unit_amount,
          qty: item.quantity,
        } as CreateOrderItemDto
      })
    }

    const newOrder = new this.orderModel(createOrderDto);
    return newOrder.save();
  }

  update(id: string, updateOrderDto: UpdateOrderDto) {
    return `This action updates a ${id} order`;
  }

  remove(id: string) {
    return `This action removes a ${id} order`;
  }
}
