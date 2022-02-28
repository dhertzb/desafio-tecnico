import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SpecialistsSearchPage } from 'src/domain/specialists/pages/SpecialistsSearch/Specialists.page';

const routes: Routes = [
  { path: 'specialists/search', component: SpecialistsSearchPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
