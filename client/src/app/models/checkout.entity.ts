
export class CheckoutDto {
  user_id?: string;
  ticket_id!: string;
  price!: number;
  qty: number = 0;
}
