import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddkitPage } from './addkit.page';

describe('AddkitPage', () => {
  let component: AddkitPage;
  let fixture: ComponentFixture<AddkitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddkitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddkitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
