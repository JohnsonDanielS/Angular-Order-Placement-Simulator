import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MerchantComponent } from './merchant/merchant.component';
import { PendingreviewsComponent } from './pendingreviews/pendingreviews.component';
import { SubmitReviewComponent } from './submit-review/submit-review.component';
import { MerchantReviewComponent } from './merchant-review/merchant-review.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  { path: 'merchant', component: MerchantComponent },
  { path: 'pendingreviews', component: PendingreviewsComponent },
  { path: 'submit-review', component: SubmitReviewComponent},
  {path: 'merchant-review', component: MerchantReviewComponent},
  {path:'test',component:TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
