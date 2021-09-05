import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LocationComponent } from './location/location.component';
import { ProfileComponent } from './profile/profile.component';
import { EventsComponent } from './events/events.component';
import { TopnavComponent } from './topnav/topnav.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent},
  {path: 'events', component: EventsComponent},
  {path: 'location', component: LocationComponent},
  {path: 'profile', component: ProfileComponent},
  {path: "", redirectTo:'login', pathMatch:"full"},
  {path:"home", component:TopnavComponent},
  {path: "**",redirectTo:'/home', pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }