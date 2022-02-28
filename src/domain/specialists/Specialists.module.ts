import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecialistsSearchPage } from './pages/SpecialistsSearch/Specialists.page';
import { SharedModule } from 'src/shared/shared.module';
import { SpecialistInfoComponent } from './components/SpecialistInfo/SpecialistInfo.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [SpecialistInfoComponent, SpecialistsSearchPage],
})
export class SpecialistsModule {}
