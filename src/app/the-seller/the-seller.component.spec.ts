import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheSellerComponent } from './the-seller.component';

describe('TheSellerComponent', () => {
  let component: TheSellerComponent;
  let fixture: ComponentFixture<TheSellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheSellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
