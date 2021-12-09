import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
export class Ticket extends Document {
    @Prop({ unique: true })
    id: string;

    @Prop()
    description: string;

    @Prop()
    price: number;
}

export const TicketSchema = SchemaFactory.createForClass(Ticket);