import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Ticket } from "src/ticket/entities/ticket.entity";
@Schema()
export class Order extends Document {
    @Prop({ unique: true })
    id: string;

    @Prop()
    user_id?: string;

    @Prop()
    ticket: Ticket;

    @Prop()
    qty: number;
}

export const OrderSchema = SchemaFactory.createForClass(Order);