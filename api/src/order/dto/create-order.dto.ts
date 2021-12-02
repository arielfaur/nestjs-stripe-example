import { Order } from "../entities/order.entity";

export class CreateOrderDto {
    constructor(public order: Order) {}
}
