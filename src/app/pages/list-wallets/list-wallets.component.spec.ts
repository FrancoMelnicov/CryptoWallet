import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWalletsComponent } from './list-wallets.component';

describe('ListWalletsComponent', () => {
  let component: ListWalletsComponent;
  let fixture: ComponentFixture<ListWalletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListWalletsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWalletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
