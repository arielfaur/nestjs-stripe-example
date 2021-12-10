export interface Order {
  readonly _id: any;

  readonly user_id?: string;

  readonly total: number;

  readonly items: ReadonlyArray<OrderItem>;
}

export interface OrderItem {
  readonly ticket_id: string;

  readonly unit_price: number;

  readonly qty: number;

  readonly subtotal: number;
}
