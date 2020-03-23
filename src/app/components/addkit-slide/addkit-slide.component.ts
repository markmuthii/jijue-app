import { NegativePage } from './../../pages/negative/negative.page';
import { ToastService } from './../../services/toast.service';
import { Router } from '@angular/router';
import { AuthConstantsService } from './../../config/auth-constants.service';
import { StorageService } from './../../services/storage.service';
import { KitsService } from './../../services/kits.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-addkit-slide',
  templateUrl: './addkit-slide.component.html',
  styleUrls: ['./addkit-slide.component.scss']
})
export class AddkitSlideComponent implements OnInit {
  @ViewChild('slider', { read: false, static: true }) slider: IonSlides;

  isLastSlide = false;
  isFirstSlide = true;

  slideOpts = {
    initialSlide: 0
  };

  kitData = {
    kitType: '',
    disease: '',
    serial: '',
    results: '',
    user_id: ''
  };

  userId: string;

  btnText = 'Confirm Kit';
  isRunning = false;

  constructor(
    private kitsService: KitsService,
    private storageService: StorageService,
    private authConstants: AuthConstantsService,
    private router: Router,
    private toast: ToastService,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    console.log(this.slider);
  }

  submitKit() {
    this.btnText = 'Please wait...';
    this.isRunning = true;

    if (this.kitData.kitType === 'multi') {
      this.kitData.disease = 'HIV, Hepatitis B, Chlamydia, Gonorrhoea, Malaria';
    }
    console.log(this.kitData);

    this.storageService.get(this.authConstants.AUTH).then(data => {
      console.log(data);
      this.kitData.user_id = this.userId = data.id;

      this.kitsService.registerKit(this.kitData).subscribe(
        (res: any) => {
          if (res.success) {
            // The Kit was added successfully
            this.toast.showToast('Kit added successfully.', 2000);

            this.btnText = 'Confirm Kit';
            this.isRunning = false;

            if (this.kitData.results === 'negative') {
              // this.router.navigate(['home/negative']);
              this.openPreventionModal();
            } else {
              this.router.navigate(['home/chats']);
            }

            this.kitData = {
              kitType: '',
              disease: '',
              serial: '',
              results: '',
              user_id: ''
            };

            this.slider.slideTo(0);
          } else {
            // There was a problem adding the kit
            console.log('Uh, error adding kit');
            this.btnText = 'Confirm Kit';
            this.isRunning = false;
            this.toast.showToast(
              'There was a problem adding the kit. Please check your inputs and try again.',
              4000
            );
          }
          console.log(res);
        },
        (error: any) => {
          this.btnText = 'Confirm Kit';
          this.isRunning = false;
          this.toast.showToast(
            'There was a problem adding the kit. Please check your connection and try again.',
            4000
          );
        }
      );
    });
  }

  nextSlide() {
    this.slider.slideNext();
  }

  previousSlide() {
    this.slider.slidePrev();
  }

  checkStartEnd() {
    this.slider.isBeginning().then(pos => (this.isFirstSlide = pos));
    this.slider.isEnd().then(pos => (this.isLastSlide = pos));
  }

  async openPreventionModal() {
    const chatModal = await this.modalController.create({
      component: NegativePage
    });

    return await chatModal.present();
  }
}
