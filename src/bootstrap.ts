import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import {
  provideRouter,
  RouterModule,
  withComponentInputBinding,
} from '@angular/router';

import { CUSTOMERS_ROUTES } from './app/presentation/view/routes';
import { InsertComponent } from './app/presentation/view/pages/insert/insert.component';

bootstrapApplication(InsertComponent, {
  providers: [
    importProvidersFrom(BrowserModule, RouterModule),
    provideRouter(CUSTOMERS_ROUTES, withComponentInputBinding()),
  ],
});
