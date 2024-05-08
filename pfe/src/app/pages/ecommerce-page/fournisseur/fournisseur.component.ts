import { Component ,OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-fournisseur',
  standalone: true,
  imports: [ CommonModule, HttpClientModule,MatCardModule, MatMenuModule, MatButtonModule, RouterLink, FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule,    ],
  templateUrl: './fournisseur.component.html',
  styleUrl: './fournisseur.component.scss'
})
export class FournisseurComponent   implements OnInit{
  adresseDto: AdresseDto = {};
  file: File | null = null;
  fournisseurDto: FournisseurDto= {};
  listfournisseur: FournisseurDto[] ;
  errorMsg = '';

    // isToggled
    isToggled = false;

    constructor(
      private router: Router,
      private activatedRoute: ActivatedRoute,
      private http: HttpClient,
      private fournisseurService : FournisseurControllerService,
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
    ngOnInit() {
      this.loadfournisseur();
  }

  loadfournisseur(): void {
    this.fournisseurService.findAll2().subscribe({
        next: (fournisseurs: FournisseurDto[]) => {
            console.log("Fournisseurs chargés:", fournisseurs);  // Ajoutez ce log
            this.listfournisseur = fournisseurs;
            this.listfournisseur.forEach(fournisseur => {
                if (!fournisseur.adresse) {
                    fournisseur.adresse = {};
                }
            });
        },
        error: (error) => {
            console.error('Erreur lors du chargement des fournisseurs', error);
            this.errorMsg = "Une erreur est survenue lors du chargement des fournisseurs.";
        }
    });
}


}
    
    

    
    


