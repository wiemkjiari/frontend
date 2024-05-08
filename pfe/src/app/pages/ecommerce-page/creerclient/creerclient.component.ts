import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { FileUploadModule } from '@iplab/ngx-file-upload';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { HttpClient ,HttpClientModule} from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Router,ActivatedRoute } from '@angular/router';
import { ClientControllerService } from '../../../services/services';
import {Save6$Params} from '../../../services/fn/client-controller/save-6';
import { ClientDto } from '../../../services/models';
import { AdresseDto } from '../../../services/models';
@Component({
    selector: 'app-e-create-order',
    standalone: true,
    imports: [HttpClientModule,MatCardModule, MatMenuModule, MatButtonModule, RouterLink, FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule,    ],
  templateUrl: './creerclient.component.html',
  styleUrl: './creerclient.component.scss'
})
export class CreerclientComponent {
  
  
  clients : ClientDto = {};
  adresseDto: AdresseDto = {};
  errorMsg: Array<string> = [];
  file: File | null = null;
  clientDto: ClientDto = {
     // Assurez-vous que AdresseDto est importé correctement et que le chemin est correct
};
    // isToggled
    isToggled = false;

    constructor(
      private router: Router,
      private activatedRoute: ActivatedRoute,
      private http: HttpClient,
      private clientcontroller : ClientControllerService,
        public themeService: CustomizerSettingsService
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }
    private subscriptions = new Subscription();

    // Dark Mode
    toggleTheme() {
        this.themeService.toggleTheme();
    }

    // RTL Mode
    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

    saveclient(): void {
      this.clientDto.adresse = this.adresseDto; 
  
      const saveParams: Save6$Params = {
        body: this.clientDto 
      };
  
      this.clientcontroller.save6(saveParams)
        .subscribe(
          (client: ClientDto) => {
            this.router.navigate(['ecommerce-page/clients']);          
          },
          (error) => {
            console.error('Erreur lors de l\'enregistrement du client :', error);
            this.errorMsg = error.error.errors; 
          }
        );
      }
  /*  savePhoto(idObject?: number, titre?: string): void {
      if (idObject && titre && this.file) {
        const params: SavePhotoParams = {
          id: idObject,
          file: this.file,
          title: titre,
          context: this.origin
        };
        this.photoService.savePhoto(params)
        .subscribe(res => {
          this.cancelClick();
        });
      } else {
        this.cancelClick();
      }
    }
    */
    cancelClick(): void {
        this.router.navigate(['ecommerce-page/clients']);
     
    }
}
