import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpatientComponent } from './mainpatient.component';

describe('MainpatientComponent', () => {
  let component: MainpatientComponent;
  let fixture: ComponentFixture<MainpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainpatientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
