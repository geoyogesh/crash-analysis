import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
		path: '',
		loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
	},
  {
		path: 'home',
		loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
	},
	{
		path: 'repos',
		loadChildren: () => import('./repositories/repositories.module').then(m => m.RepositoriesModule)
	},
  {
		path: 'dashboard',
		loadChildren: () => import('./repositories/repositories.module').then(m => m.RepositoriesModule)
	},
  {
		path: 'summary',
		loadChildren: () => import('./repositories/repositories.module').then(m => m.RepositoriesModule)
	},
  {
		path: 'juris-map',
		loadChildren: () => import('./repositories/repositories.module').then(m => m.RepositoriesModule)
	},
  {
		path: 'crash-info',
		loadChildren: () => import('./repositories/repositories.module').then(m => m.RepositoriesModule)
	},
  {
		path: 'route-info',
		loadChildren: () => import('./repositories/repositories.module').then(m => m.RepositoriesModule)
	},
	{
		path: '',
		redirectTo: '',
		pathMatch: 'full'
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
