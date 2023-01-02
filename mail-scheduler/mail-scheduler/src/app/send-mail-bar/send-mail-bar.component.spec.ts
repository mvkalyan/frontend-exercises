import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMailBarComponent } from './send-mail-bar.component';

describe('SendMailBarComponent', () => {
  let component: SendMailBarComponent;
  let fixture: ComponentFixture<SendMailBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendMailBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendMailBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
