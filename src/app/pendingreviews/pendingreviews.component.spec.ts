import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingreviewsComponent } from './pendingreviews.component';

describe('PendingreviewsComponent', () => {
  let component: PendingreviewsComponent;
  let fixture: ComponentFixture<PendingreviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingreviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingreviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
