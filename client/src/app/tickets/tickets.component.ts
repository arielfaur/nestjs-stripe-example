import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CheckoutService } from '../checkout.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketsComponent implements OnInit {

  tickets$ = this.checkout.getTickets();

  constructor(public checkout: CheckoutService) { }

  ngOnInit(): void {

  }

  buy() {}

}
