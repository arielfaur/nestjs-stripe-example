import { MaxLength, IsNotEmpty, Max, IsString, IsNumber } from 'class-validator';

export class CreateTicketDto {
    @IsString()
    @IsNotEmpty()
    readonly id: string;

    @IsString()
    @MaxLength(100)
    @IsNotEmpty()
    readonly description: string;

    @Max(1000)
    @IsNumber()
    @IsNotEmpty()
    readonly price: number;
}
