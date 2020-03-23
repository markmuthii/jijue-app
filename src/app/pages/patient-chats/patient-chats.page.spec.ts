import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PatientChatsPage } from './patient-chats.page';

describe('PatientChatsPage', () => {
  let component: PatientChatsPage;
  let fixture: ComponentFixture<PatientChatsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientChatsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PatientChatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
