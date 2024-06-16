import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: '**', redirectTo: '', pathMatch: 'full' },
  {
    path: 'insert',
    loadChildren: () =>
      import('./insert/insert.module').then((m) => m.InsertModule),
  },
  {
    path: 'delete',
    loadChildren: () =>
      import('./delete/delete.module').then((m) => m.DeleteModule),
  },
  {
    path: 'update',
    loadChildren: () =>
      import('./update/update.module').then((m) => m.UpdateModule),
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then((m) => m.ListModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
