import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainrdvComponent } from './mainrdv.component';

describe('MainrdvComponent', () => {
  let component: MainrdvComponent;
  let fixture: ComponentFixture<MainrdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainrdvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainrdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
