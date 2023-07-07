import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsimpleFormComponent } from './reservationsimple-form.component';

describe('ReservationsimpleFormComponent', () => {
  let component: ReservationsimpleFormComponent;
  let fixture: ComponentFixture<ReservationsimpleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationsimpleFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationsimpleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
