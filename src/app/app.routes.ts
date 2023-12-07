import { Routes } from '@angular/router';

import { ContactComponent } from './component/contact/contact.component';
import { ProduitsComponent } from './component/produits/produits.component';
import { TaskComponent } from './component/task/task.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'}, ///Route par defaut
    {path: 'home', component: HomeComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'produits', component: ProduitsComponent},
    {path: 'task', component: TaskComponent},

];
