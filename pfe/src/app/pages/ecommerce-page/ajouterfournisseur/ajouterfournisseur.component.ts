import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { HttpClient ,HttpClientModule} from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Router,ActivatedRoute } from '@angular/router';
import { FournisseurControllerService } from '../../../services/services';
import { FournisseurDto } from '../../../services/models';
import { AdresseDto } from '../../../services/models';
import { Save2$Params } from '../../../services/fn/fournisseur-controller/save-2';
@Component({
  selector: 'app-ajouterfournisseur',
  standalone: true,
  imports: [HttpClientModule,MatCardModule, MatMenuModule, MatButtonModule, RouterLink, FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule,    ],
  templateUrl: './ajouterfournisseur.component.html',
  styleUrl: './ajouterfournisseur.component.scss'
})
export class AjouterfournisseurComponent {

  fournisseur : FournisseurDto = {};
  adresseDto: AdresseDto = {};
  errorMsg: Array<string> = [];
  file: File | null = null;
  fournisseurDto: FournisseurDto = {};
    // isToggled
    isToggled = false;

    constructor(
      private router: Router,
      private activatedRoute: ActivatedRoute,
      private http: HttpClient,
      private fournisseurcontroller : FournisseurControllerService,
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

    savefournisseur(): void {
      this.fournisseurDto.adresse = this.adresseDto; 
  
      const saveParams: Save2$Params = {
        body: this.fournisseurDto 
      };
  
      this.fournisseurcontroller.save2(saveParams)
        .subscribe(
          (fournisseur: FournisseurDto) => {
            this.router.navigate(['ecommerce-page/fournisseur']);          
          },
          (error) => {
            console.error('Erreur lors de l\'enregistrement du fournisseurr :', error);
            this.errorMsg = error.error.errors; 
          }
        );
      }
      onFileSelected(event: any): void {
        const file = event.target.files[0];
        if (file) {
            // Vous pouvez ajouter des vérifications supplémentaires ici (taille, type, etc.)
            const reader = new FileReader();
            reader.onload = (e: any) => {
                // Ici vous avez deux options, en fonction de ce que votre backend attend :
    
                // Option 1: Base64 - utile pour les petites images ou si vous n'avez pas de backend pour stocker les fichiers
                this.fournisseurDto.photo = e.target.result; // Stocke l'image en base64
    
                // Option 2: Upload and get URL - nécessite un endpoint backend pour traiter le chargement du fichier
                // this.uploadImageAndGetURL(file);
            };
            reader.readAsDataURL(file); // Convertit l'image en base64
        }
    }
   /* 
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
    */
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
        this.router.navigate(['ecommerce-page/fournisseur']);
     
    }
}
