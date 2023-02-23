import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulPageComponent } from './successful-page.component';

describe('SuccessfulPageComponent', () => {
  let component: SuccessfulPageComponent;
  let fixture: ComponentFixture<SuccessfulPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessfulPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessfulPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
