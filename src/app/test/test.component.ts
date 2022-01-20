import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
data:any;
  constructor(private review:ReviewService) {
    this.review.testreview('2').subscribe((res)=>{
      this.data=res;
    });
   }
  @ViewChild("myNameElem")
  myNameElem!: ElementRef;
  
  getValue() {
    console.log(this.myNameElem.nativeElement.value);
  }
  
  resetValue() {
    this.myNameElem.nativeElement.value = "";
  }

  ngOnInit(): void {
  }

}
