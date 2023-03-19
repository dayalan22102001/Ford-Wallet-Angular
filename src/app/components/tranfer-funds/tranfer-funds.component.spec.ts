import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranferFundsComponent } from './tranfer-funds.component';

describe('TranferFundsComponent', () => {
  let component: TranferFundsComponent;
  let fixture: ComponentFixture<TranferFundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranferFundsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranferFundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
