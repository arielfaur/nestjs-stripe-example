import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxStripeModule } from 'ngx-stripe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrdersComponent } from './orders/orders.component';
import { SharedModule } from './shared/shared.module';
import { TicketsComponent } from './tickets/tickets.component';
import { CheckoutSuccessComponent } from './checkout-success/checkout-success.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckoutComponent,
    OrdersComponent,
    TicketsComponent,
    CheckoutSuccessComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxStripeModule.forRoot('pk_test_51K1u84Dgsa00qbj9VfxDJGGbaZFqqSCQ5uaRwtKaDWGAFDjPzXF44LsbNuMFaNsE1FMOWo7XDzejSeJFlYEcyEPe00xfX1nOce'),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
