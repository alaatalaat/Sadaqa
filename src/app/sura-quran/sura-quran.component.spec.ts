import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuraQuranComponent } from './sura-quran.component';

describe('SuraQuranComponent', () => {
  let component: SuraQuranComponent;
  let fixture: ComponentFixture<SuraQuranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuraQuranComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuraQuranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
