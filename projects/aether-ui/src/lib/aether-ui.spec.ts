import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AetherUi } from './aether-ui';

describe('AetherUi', () => {
  let component: AetherUi;
  let fixture: ComponentFixture<AetherUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AetherUi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AetherUi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
