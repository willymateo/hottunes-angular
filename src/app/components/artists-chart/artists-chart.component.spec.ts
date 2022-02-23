import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsChartComponent } from './artists-chart.component';

describe('ArtistsChartComponent', () => {
  let component: ArtistsChartComponent;
  let fixture: ComponentFixture<ArtistsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistsChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
