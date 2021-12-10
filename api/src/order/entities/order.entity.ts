import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@Schema()
export class Order extends Document {
    @Prop()
    user_id?: string;

    @Prop()
    readonly total: number;

    @Prop()
    readonly items: ReadonlyArray<OrderItem>; 
}

export class OrderItem {
    @Prop()
    readonly ticket_id: string;

    @Prop()
    readonly unit_price: number;

    @Prop()
    readonly qty: number;

    @Prop()
    readonly subtotal: number;
} 

export const OrderSchema = SchemaFactory.createForClass(Order);