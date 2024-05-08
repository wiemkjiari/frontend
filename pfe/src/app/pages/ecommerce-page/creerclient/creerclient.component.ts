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
<<<<<<< HEAD

=======
>>>>>>> 4ffd8b841a4886bc77d1d90d3f4028a82594965e
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
<<<<<<< HEAD
  clientDto: ClientDto = {};
=======
  clientDto: ClientDto = {
     // Assurez-vous que AdresseDto est importé correctement et que le chemin est correct
};
>>>>>>> 4ffd8b841a4886bc77d1d90d3f4028a82594965e
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
<<<<<<< HEAD
            this.router.navigate(['ecommerce-page/costumers']);          
=======
            this.router.navigate(['ecommerce-page/clients']);          
>>>>>>> 4ffd8b841a4886bc77d1d90d3f4028a82594965e
          },
          (error) => {
            console.error('Erreur lors de l\'enregistrement du client :', error);
            this.errorMsg = error.error.errors; 
          }
        );
      }
<<<<<<< HEAD
      onFileSelected(event: any): void {
        const file = event.target.files[0];
        if (file) {
            // Vous pouvez ajouter des vérifications supplémentaires ici (taille, type, etc.)
            const reader = new FileReader();
            reader.onload = (e: any) => {
                // Ici vous avez deux options, en fonction de ce que votre backend attend :
    
                // Option 1: Base64 - utile pour les petites images ou si vous n'avez pas de backend pour stocker les fichiers
                this.clientDto.photo = e.target.result; // Stocke l'image en base64
    
                // Option 2: Upload and get URL - nécessite un endpoint backend pour traiter le chargement du fichier
                // this.uploadImageAndGetURL(file);
            };
            reader.readAsDataURL(file); // Convertit l'image en base64
        }
    }
    
    // Exemple de méthode pour charger une image et récupérer une URL (à adapter selon votre API)
    uploadImageAndGetURL(file: File): void {
        const formData = new FormData();
        formData.append('file', file);
    
        // Remplacez 'your-api-url' par l'URL de votre service d'upload
        this.http.post('your-api-url', formData).subscribe({
            next: (response: any) => {
                // Supposons que l'API retourne l'URL de l'image dans 'imageUrl'
                this.clientDto.photo = response.imageUrl;
            },
        error: (error) => {
    console.error('Erreur lors du chargement de limage, error');
}

        });
    }
    
=======
>>>>>>> 4ffd8b841a4886bc77d1d90d3f4028a82594965e
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
<<<<<<< HEAD
        this.router.navigate(['ecommerce-page/costumers']);
=======
        this.router.navigate(['ecommerce-page/clients']);
>>>>>>> 4ffd8b841a4886bc77d1d90d3f4028a82594965e
     
    }
}
