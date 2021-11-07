import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminshowbookComponent } from './adminshowbook.component';

describe('AdminshowbookComponent', () => {
  let component: AdminshowbookComponent;
  let fixture: ComponentFixture<AdminshowbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminshowbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminshowbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
