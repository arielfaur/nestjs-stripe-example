import { IsNotEmpty, Max, IsNumber, IsString } from 'class-validator';

export class CreateOrderDto {

    @IsString()
    readonly user_id?: string;

    @IsNumber()
    readonly total: number;

    readonly items: ReadonlyArray<CreateOrderItemDto>; 
}

export class CreateOrderItemDto {
    @IsString()
    @IsNotEmpty()
    readonly ticket_id: string;

    @IsNumber()
    @IsNotEmpty()
    readonly unit_price: number;

    @IsNumber()
    @IsNotEmpty()
    readonly qty: number;

    @IsNumber()
    @IsNotEmpty()
    readonly subtotal: number;
}
