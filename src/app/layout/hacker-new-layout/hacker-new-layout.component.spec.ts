import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackerNewLayoutComponent } from './hacker-new-layout.component';

describe('HackerNewLayoutComponent', () => {
  let component: HackerNewLayoutComponent;
  let fixture: ComponentFixture<HackerNewLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HackerNewLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HackerNewLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
