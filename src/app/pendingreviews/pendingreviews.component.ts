import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-pendingreviews',
  templateUrl: './pendingreviews.component.html',
  styleUrls: ['./pendingreviews.component.css']
})
export class PendingreviewsComponent implements OnInit {
  data:any=[];
  registerForm!:FormGroup;
  onSubmit(){
      this.review.setdata(this.registerForm.value.OrderID);
  }
  constructor(private review:ReviewService,private router:Router,private formBuilder:FormBuilder) {
    this.loaddata();
   }
  loaddata()
  {
    this.review.getorders().subscribe((res)=>{
      this.data=res;
    });
  }
  upreview(OrderID: any,MerchantID: any)
  {
    var array=[OrderID,MerchantID];
    this.review.setdata(array);
    //this.router.navigate([`/submit-review`]);
  }
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      OrderID:[''],
      MerchantID:['']
      });
  }

}
