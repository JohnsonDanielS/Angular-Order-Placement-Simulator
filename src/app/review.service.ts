import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  data2:any;
  constructor(private httpclient:HttpClient,private router:Router) { }
  public getorders(){
    return this.httpclient.get('http://localhost/payment/getorders.php');
  }
  public addorder(data1:any){
    return this.httpclient.post('http://localhost/payment/addorder.php',data1).subscribe(() => {
      this.getorders();
    });
  }
  public getreview(){
      return this.httpclient.get('http://localhost/payment/getreview.php');
  }
  public testreview(data1:any){
    return this.httpclient.get('http://localhost/payment/testreview.php?MerchantID='+data1);
  }
  public deleteorder(userid:any)
  {
    return this.httpclient.post('http://localhost/payment/deleteorder.php/', userid).subscribe(() => {});
  } 
  public updatereview(data:any)
  {
    return this.httpclient.post('http://localhost/payment/updatereview.php/',data).subscribe(()=>{});
  }
  public updatereview1(data:any)
  {
    return this.httpclient.post('http://localhost/payment/updatereview1.php/',data).subscribe(()=>{});
  }
  
  private data:any;
  public setdata(data: any)
  {
    this.data=data;
  }
  public getdata(){
    let temp=this.data;
    this.cleardata();
    return temp;
  }
  public cleardata()
  {
    this.data=undefined;
  }
}
