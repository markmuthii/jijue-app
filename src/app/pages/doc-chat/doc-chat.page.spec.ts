import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DocChatPage } from './doc-chat.page';

describe('DocChatPage', () => {
  let component: DocChatPage;
  let fixture: ComponentFixture<DocChatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocChatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DocChatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
