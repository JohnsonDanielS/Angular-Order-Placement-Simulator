import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MerchantComponent } from './merchant/merchant.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PendingreviewsComponent } from './pendingreviews/pendingreviews.component';
import { SubmitReviewComponent } from './submit-review/submit-review.component';
import { MerchantReviewComponent } from './merchant-review/merchant-review.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    MerchantComponent,
    PendingreviewsComponent,
    SubmitReviewComponent,
    MerchantReviewComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
