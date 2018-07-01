import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdZeraDoZuomiarzaGroszowekComponent } from './od-zera-do-zuomiarza-groszowek.component';

describe('OdZeraDoZuomiarzaGroszowekComponent', () => {
  let component: OdZeraDoZuomiarzaGroszowekComponent;
  let fixture: ComponentFixture<OdZeraDoZuomiarzaGroszowekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdZeraDoZuomiarzaGroszowekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdZeraDoZuomiarzaGroszowekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
