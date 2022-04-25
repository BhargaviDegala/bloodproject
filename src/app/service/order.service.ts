import { Injectable } from '@angular/core';
import { Order } from '../interfaces/order';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OrderService 
{

  constructor(private http:HttpClient) { }
  add(oinfo)
  {
    return this.http.post('http://localhost:3000/orders1',oinfo);
  }
}
