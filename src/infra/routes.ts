import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpecialistsSearchPage } from 'src/domain/specialists/pages/SpecialistsSearch/Specialists.page';

const APP_ROUTES: Routes = [
  { path: '/specialists/search', component: SpecialistsSearchPage },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
