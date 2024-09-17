import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { CrissisesComponent } from './pages/crissises/crissises.component';
import { DonationsComponent } from './pages/donations/donations.component';
import { VolunteersComponent } from './pages/volunteers/volunteers.component';



export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'./donation',component:DonationsComponent},
    {path:'./crissis',component:CrissisesComponent},
    {path:'./volunteer',component:VolunteersComponent},
    {path:'./login',component:LoginComponent},
    {path:'./register',component:RegisterComponent},
    {path:'./admin-dashboard',component:AdminDashboardComponent},
    {path:'./inventory',component:InventoryComponent},
    {path:'./profile',component:ProfileComponent},
];
