import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    // otherwise redirect to room
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);