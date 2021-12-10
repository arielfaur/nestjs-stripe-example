import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { StripeService } from 'ngx-stripe';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { CheckoutService } from '../checkout.service';
import { Ticket } from '../models/ticket.entity';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckoutComponent implements OnInit {

  ticket$!: Observable<Ticket>;
  qty = 1;
  selectedId!: string;
  error: string | undefined;

  constructor(private route: ActivatedRoute, private checkout: CheckoutService, private stripeService: StripeService) { }

  ngOnInit(): void {
    this.ticket$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = String(params.get('id'));
        return this.checkout.getTicket(this.selectedId);
      })
    );
  }

  buy(ticket: Ticket) {
    this.checkout.checkout({
      ticket_id: ticket._id,
      price: ticket.price,
      qty: this.qty,
    })
      .pipe(
        switchMap(session => {
          return this.stripeService.redirectToCheckout({ sessionId: session.id });
        })
      )
      .subscribe(result => {
        if (result.error) {
          this.error = result.error.message;
        }
      });
  }

}
