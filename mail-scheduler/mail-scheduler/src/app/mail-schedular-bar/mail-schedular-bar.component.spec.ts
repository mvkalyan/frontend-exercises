import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailSchedularBarComponent } from './mail-schedular-bar.component';

describe('MailSchedularBarComponent', () => {
  let component: MailSchedularBarComponent;
  let fixture: ComponentFixture<MailSchedularBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailSchedularBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailSchedularBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});