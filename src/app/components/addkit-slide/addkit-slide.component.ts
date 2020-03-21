import { Router } from '@angular/router';
import { AuthConstantsService } from './../../config/auth-constants.service';
import { StorageService } from './../../services/storage.service';
import { KitsService } from './../../services/kits.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addkit-slide',
  templateUrl: './addkit-slide.component.html',
  styleUrls: ['./addkit-slide.component.scss']
})
export class AddkitSlideComponent implements OnInit {
  slideOpts = {
    initialSlide: 0
  };

  public kitData = {
    kitType: '',
    disease: '',
    serial: '',
    results: '',
    user_id: ''
  };

  constructor(
    private kitsService: KitsService,
    private storageService: StorageService,
    private authConstants: AuthConstantsService,
    private router: Router
  ) {}

  ngOnInit() {}

  submitKit() {
    if (this.kitData.kitType === 'multi') {
      this.kitData.disease = 'HIV, Hepatitis B, Chlamydia, Gonorrhoea, Malaria';
    }
    console.log(this.kitData);

    this.storageService.get(this.authConstants.AUTH).then(data => {
      console.log(data);
      this.kitData.user_id = data.id;

      this.kitsService.registerKit(this.kitData).subscribe(
        (res: any) => {
          if (res.success) {
            // The Kit was added successfully
            if (this.kitData.results === 'negative') {
              this.router.navigate(['home/negative']);
            } else {
              this.router.navigate(['home/chat']);
            }
          } else {
            // There was a problem adding the kit
            console.log('Uh, error adding kit');
          }
          console.log(res);
        },
        (error: any) => {
          console.log('Uh, problem', error);
        }
      );
    });
  }
}
