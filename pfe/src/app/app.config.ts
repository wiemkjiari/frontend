import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
HttpClientModule
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
<<<<<<< HEAD
import { AngularFontAwesomeComponent } from 'angular-font-awesome';
=======

>>>>>>> 4ffd8b841a4886bc77d1d90d3f4028a82594965e
export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes), provideClientHydration(), provideAnimations(),provideHttpClient()]
};