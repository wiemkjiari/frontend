import { bootstrapApplication } from '@angular/platform-browser'; // Importez bootstrapApplication depuis @angular/platform-browser
import { appConfig } from './app/app.config'; // Importez votre configuration d'application depuis votre fichier app.config
import { AppComponent } from './app/app.component'; // Importez votre composant racine AppComponent

bootstrapApplication(AppComponent, appConfig) // Démarrez l'application en passant AppComponent et la configuration de l'application
    .catch((err) => console.error(err)); 
