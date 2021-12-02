import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {  } from 'ngx-stripe';
import { Ticket } from './models/ticket.entity';
import { environment } from 'src/environments/environment';
import { catchError, throwError } from 'rxjs';
import { Order } from './models/order.entity';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http: HttpClient) { }

  getTickets() {
    return this.http.get<Ticket[]>(environment.api.concat('ticket'))
    .pipe(
      catchError(this.handleError)
    );
  }

  getTicket(id: string) {
    return this.http.get<Ticket>(environment.api.concat(`ticket/${id}`))
    .pipe(
      catchError(this.handleError)
    );
  }

  checkout(order: Order) {
    const payload = {
      order: {
        ...order
      }
    }

    return this.http.post<{ id: string }>(environment.api.concat('order'), payload)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(() => new Error("We're not able to process your request now. Please contact our customer service."));
  }
}