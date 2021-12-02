import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutSuccessComponent } from './checkout-success/checkout-success.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrdersComponent } from './orders/orders.component';
import { TicketsComponent } from './tickets/tickets.component';

const routes: Routes = [
  { path: '', component: TicketsComponent },
  { path: 'checkout/:id', component: CheckoutComponent },
  { path: 'success', component: CheckoutSuccessComponent },
  { path: 'orders', component: OrdersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
