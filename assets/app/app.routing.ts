import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


import { ListComponent } from "./list/list.component";
import { EditComponent } from "./edit/edit.component";
import { DeleteComponent } from "./delete/delete.component";

const APP_ROUTES: Routes = [
	{ path: '', redirectTo: '/delete' , pathMatch: 'full' },
  // { path: '', component:AppComponent },
	{ path: 'list', component:ListComponent },
	{ path: 'edit', component:EditComponent },
	{ path: 'delete', component:DeleteComponent },
];


export const routing = RouterModule.forRoot(APP_ROUTES);