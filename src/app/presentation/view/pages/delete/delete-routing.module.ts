import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteComponent } from './delete.component';

const routes: Routes = [
  {
    path: '',
    component: DeleteComponent,
    data: {
      title: 'Deletar Cliente',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteRoutingModule {}
