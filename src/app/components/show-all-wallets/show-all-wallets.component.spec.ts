import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllWalletsComponent } from './show-all-wallets.component';

describe('ShowAllWalletsComponent', () => {
  let component: ShowAllWalletsComponent;
  let fixture: ComponentFixture<ShowAllWalletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllWalletsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAllWalletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
