import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantReviewComponent } from './merchant-review.component';

describe('MerchantReviewComponent', () => {
  let component: MerchantReviewComponent;
  let fixture: ComponentFixture<MerchantReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
