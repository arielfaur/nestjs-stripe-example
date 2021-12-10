import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Res, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';
import { OrderService } from './order.service';
import Stripe from 'stripe';
import { CheckoutDto } from './dto/checkout.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) { }

  @Post()
  create(@Body() checkoutDto: CheckoutDto) {
    return this.orderService.create(checkoutDto);
  }

  /**
   * Order fulfillment
   * https://stripe.com/docs/payments/checkout/fulfill-orders
   * @param request 
   * @param response 
   * @returns 
   */
  @Post('webhook')
  webhook(@Req() request: Request, @Res() response: Response) {

    const payload = request['rawBody'];
    const sig = request.headers['stripe-signature'];

    let event: Stripe.Event;

    try {
      event = this.orderService.stripe.webhooks.constructEvent(payload, sig, process.env.STRIPE_WEBHOOK_SECRET);
    } catch (err) {
      return response.status(HttpStatus.FORBIDDEN).send(`Webhook Error: ${err.message}`);
    }

    // Handle the checkout.session.completed event
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session;

      // Fulfill the purchase...
      this.orderService.fulfill(session);
    }

    response.status(HttpStatus.OK).send();
  }

  @Get()
  findAll() {
    return this.orderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderService.findOne(id);
  }
}
