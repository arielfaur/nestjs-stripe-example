import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CheckoutService } from '../checkout.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersComponent implements OnInit {

  orders$ = this.checkout.getOrders();

  readonly displayedColumns: string[] = ['id', 'customer', 'total'];

  constructor(private checkout: CheckoutService) { }

  ngOnInit(): void {
  }

}
