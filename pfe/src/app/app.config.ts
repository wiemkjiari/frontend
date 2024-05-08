import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
HttpClientModule
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { AngularFontAwesomeComponent } from 'angular-font-awesome';
export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes), provideClientHydration(), provideAnimations(),provideHttpClient()]
};