import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ReviewService } from '../review.service';
@Component({
  selector: '',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.css'],
})
export class MerchantComponent implements OnInit {
  registerForm!: FormGroup;
  data: any;
  constructor(
    private review: ReviewService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}
  onSubmit() {
    //var formdata=new FormData();
    //formdata.append('MerchantID',this.registerForm.value.MerchantID);
    //this.review.setdata(formdata);
    if (Number(this.registerForm.value.MerchantID)) {
      this.review.setdata(this.registerForm.value.MerchantID);
      this.router.navigate([`/merchant-review`]);
    } else {
      this.invalidMerchantId();
    }
  }
  invalidMerchantId() {
    Swal.fire({
      title: 'Oops!!',
      text: 'Please Enter a Valid Merchant ID',
      icon: 'error',
    });
  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      MerchantID: [''],
    });
  }
}
