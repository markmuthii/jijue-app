import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddkitSlideComponent } from './addkit-slide.component';

describe('AddkitSlideComponent', () => {
  let component: AddkitSlideComponent;
  let fixture: ComponentFixture<AddkitSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddkitSlideComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddkitSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
