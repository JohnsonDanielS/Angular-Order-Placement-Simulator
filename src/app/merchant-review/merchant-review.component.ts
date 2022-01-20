import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ReviewService } from '../review.service';
@Component({
  selector: 'app-merchant-review',
  templateUrl: './merchant-review.component.html',
  styleUrls: ['./merchant-review.component.css'],
})
export class MerchantReviewComponent implements OnInit {
  data: any;
  data1: any;
  @ViewChild('Rating')
  Rating!: ElementRef;
  constructor(
    private router: Router,
    private review: ReviewService,
    private formBuilder: FormBuilder
  ) {
    this.loaddata();
  }
  loaddata() {
    this.data1 = this.review.getdata();
    this.review.testreview(this.data1).subscribe((res) => {
      this.data = res;
      if (!Object.keys(this.data).length) {
        console.log('no data found');
        this.data = [{ Rating: '0' }];
      }
    });
  }
  warning() {
    if (this.Rating.nativeElement.value <= 2) {
      Swal.fire({
        title: 'Warning!!',
        text: 'Merchant Rating is too low!!Proceed At your Own Risk',
        icon: 'warning',
        showDenyButton: true,
        confirmButtonText: 'Proceed',
        denyButtonText: 'Cancel',
        customClass: {
          actions: 'my-actions',
          cancelButton: 'order-1 right-gap',
          confirmButton: 'order-2',
          denyButton: 'order-3',
        },
      }).then((result: any) => {
        if (result.isConfirmed) {
          this.onSubmit1();
        } else if (result.isDenied) {
          Swal.fire('Payment Cancelled', '', 'info');
          this.router.navigate([`/`]);
        }
      });
    } else {
      this.onSubmit1();
    }
  }
  onSubmit1() {
    if (Number(this.registerForm.value.Amount)) {
      Swal.fire({
        title: '',
        text: 'Are you sure to proceed with the payment?',
        icon: 'question',
        showDenyButton: true,
        confirmButtonText: 'Proceed',
        denyButtonText: 'Cancel',
        customClass: {
          actions: 'my-actions',
          cancelButton: 'order-1 right-gap',
          confirmButton: 'order-2',
          denyButton: 'order-3',
        },
      }).then((result: any) => {
        if (result.isConfirmed) {
          this.onSubmit();
        } else if (result.isDenied) {
          Swal.fire('Payment Cancelled', '', 'info');
          this.router.navigate([`/`]);
        }
      });
    } else {
      Swal.fire({
        title: 'Oops!!',
        text: 'Please Enter a Valid Amount',
        icon: 'error',
      });
    }
  }
  registerForm!: FormGroup;
  onSubmit() {
    var formdata = new FormData();
    formdata.append('MerchantID', this.data1);
    formdata.append('Amount', this.registerForm.value.Amount);
    this.review.addorder(formdata);
    Swal.fire({
      title: 'Hurray!!',
      text: 'Your Payment has been completed successfully',
      icon: 'success',
    });
    this.router.navigate([`/`]);
  }
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      Amount: [''],
    });
  }
}
