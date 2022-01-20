import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Router } from '@angular/router';
import 'node_modules/font-awesome/less/font-awesome.less';
import { Merchant } from 'src/Merchant';
import Swal from 'sweetalert2';
import { MerchantComponent } from '../merchant/merchant.component';
import { PendingreviewsComponent } from '../pendingreviews/pendingreviews.component';
import { ReviewService } from '../review.service';
@Component({
  selector: 'app-submit-review',
  templateUrl: './submit-review.component.html',
  styleUrls: ['./submit-review.component.css'],
})
export class SubmitReviewComponent implements OnInit {
  data!: Merchant;
  string!: string;
  obj: any;
  obj1: any;
  Order: any;
  Merchant1: any;
  Rate: any;
  Rate1: any = 0;
  newrate1: any;
  Count: any = 0;
  array: any;
  objnew: any;
  objcast!: Array<Merchant>;
  constructor(private review: ReviewService, private router: Router) {
    this.array = this.review.getdata();
  }
  @ViewChild('OrderID')
  OrderID!: ElementRef;
  @ViewChild('MerchantID')
  MerchantID!: ElementRef;
  @ViewChild('Rating')
  Rating!: ElementRef;
  getValue() {
    // console.log(this.OrderID.nativeElement.value);
    // console.log(this.MerchantID.nativeElement.value);
    // console.log(this.Rating.nativeElement.value);
    this.Order = this.OrderID.nativeElement.value;
    this.Merchant1 = this.MerchantID.nativeElement.value;
    this.Rate = this.Rating.nativeElement.value;
    this.review.testreview(this.Merchant1).subscribe((res: any) => {
      this.objcast = <Array<Merchant>>res;
      //Wrong Type Casting
      //this.data = <Merchant>res;
      //console.log(this.data.Rating);

      //Iterator
      // const iterate1 = Object.values(res).values();
      // this.objnew = iterate1.next().value;

      //console.log(this.objnew);
      if (this.objcast[0]) {
        // //console.log(this.objnew.Rating);
        // //console.log(this.objnew.Count);
        // // console.log(this.data);
        // // console.log(this.data.Rating);
        // // console.log(this.data.Count);
        // this.obj = JSON.stringify(res);
        // //console.log(this.obj);
        // for (let key of this.obj) {
        //   for (var i in key) {
        //     //console.log('key: ' + i + ',  value: ' + key[i]);
        //     this.string += key[i];
        //   }
        // }
        // this.string = this.string.replace('undefined', '');
        // //console.log(this.string);
        // this.obj1 = JSON.parse(this.string);
        // //console.log(this.obj1);
        // for (let key of this.obj1) {
        //   for (var i in key) {
        //     //console.log('key: ' +  i + ',  value: ' + key[i]);
        //     //console.log(i);
        //     if (i == 'Rating') {
        //       //console.log(key[i]);
        //       this.Rate1 = key[i];
        //     }
        //     if (i == 'Count') {
        //       //console.log(key[i]);
        //       this.Count = key[i];
        //     }
        //   }
        // }
        // //console.log(this.Rate1);

        //Iterator
        // this.Count = Number(this.objnew.Count);
        // this.Rate1 = Number(this.objnew.Rating);

        console.log(this.objcast[0].Rating);
        console.log(this.objcast[0].Count);
        this.Count = Number(this.objcast[0].Count);
        this.Rate1 = Number(this.objcast[0].Rating);
      } else {
        this.Count = 0;
        this.Rate1 = 0;
      }
      this.Rate = Number(this.Rate);
      var newrate = (this.Rate1 * this.Count + this.Rate) / (this.Count + 1);
      console.log(newrate);
      newrate = Math.round((newrate + Number.EPSILON) * 100) / 100;
      this.newrate1 = String(newrate);
      this.Count += 1;
      this.Count = String(this.Count);
      var formdata = new FormData();
      this.Merchant1 = String(this.Merchant1);
      //console.log(this.Merchant1 + this.Count + this.newrate1);
      formdata.append('MerchantID', this.Merchant1);
      formdata.append('Rating', this.newrate1);
      formdata.append('Count', this.Count);
      this.review.updatereview(formdata);
      if (this.Count == 1) {
        this.review.updatereview1(formdata);
      }
      var formdata1 = new FormData();
      formdata1.append('OrderID', this.Order);
      this.review.deleteorder(formdata1);
      this.success();
    });
  }
  confirmReview(rating: any) {
    Swal.fire({
      title: '',
      text: `Are you sure to proceed with giving the rating of ${rating}?`,
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
      if (result.isConfirmed) this.getValue();
    });
  }
  success() {
    Swal.fire({
      title: 'Hurray!!',
      text: 'Your Review has been submitted successfully',
      icon: 'success',
    });
    this.router.navigate([`/`]);
  }

  ngOnInit(): void {}
}
