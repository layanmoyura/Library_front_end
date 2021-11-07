import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddupdatebookComponent } from './addupdatebook.component';

describe('AddupdatebookComponent', () => {
  let component: AddupdatebookComponent;
  let fixture: ComponentFixture<AddupdatebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddupdatebookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddupdatebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
