import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsertComponent } from './insert.component';
import { InsertRoutingModule } from './insert-routing.module';

@NgModule({
  declarations: [InsertComponent],
  imports: [CommonModule, InsertRoutingModule],
})
export class InsertModule {}
