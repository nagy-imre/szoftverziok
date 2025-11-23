import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerzioComponent } from './verzio.component';

describe('VerzioComponent', () => {
  let component: VerzioComponent;
  let fixture: ComponentFixture<VerzioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerzioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerzioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
