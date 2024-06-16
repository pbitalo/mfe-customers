import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';

// import { InsertModule } from './insert/insert.module';
// import { UpdateModule } from './update/update.module';
// import { DeleteModule } from './delete/delete.module';
// import { ListModule } from './list/list.module';

@NgModule({
  imports: [
    CommonModule,
    // InsertModule,
    // UpdateModule,
    // DeleteModule,
    // ListModule,
    PagesRoutingModule,
  ],
  exports: [PagesRoutingModule],
})
export class PagesModule {}
