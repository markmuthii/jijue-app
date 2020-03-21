import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DocChatsPage } from './doc-chats.page';

describe('DocChatsPage', () => {
  let component: DocChatsPage;
  let fixture: ComponentFixture<DocChatsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocChatsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DocChatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
