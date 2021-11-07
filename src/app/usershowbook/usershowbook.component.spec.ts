import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsershowbookComponent } from './usershowbook.component';

describe('UsershowbookComponent', () => {
  let component: UsershowbookComponent;
  let fixture: ComponentFixture<UsershowbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsershowbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsershowbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
