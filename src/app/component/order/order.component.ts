import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/order';
import { OrderService } from 'src/app/service/order.service';
@Component({
  selector: 'app-root',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit 
{
rec:Order=new Order();

  constructor(private order:OrderService)
   { }

add(rec)
{
  this.order.add(rec).subscribe((res:any)=>{
    if(res.order_id!==0)
    {
      alert(res.order_id);
      // var id=res.order_id;
      localStorage.setItem('id',res.order_id);
    }
  },()=>{
    alert('task completed');
    this.rec.amount=null;
  });
}
pay()
{
  
}
  ngOnInit(): void {
  }

}
