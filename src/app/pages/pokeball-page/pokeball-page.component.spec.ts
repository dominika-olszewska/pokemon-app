import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeballPageComponent } from './pokeball-page.component';

describe('PokeballPageComponent', () => {
  let component: PokeballPageComponent;
  let fixture: ComponentFixture<PokeballPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeballPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeballPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
