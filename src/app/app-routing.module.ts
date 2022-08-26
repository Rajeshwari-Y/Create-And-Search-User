import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', redirectTo: '/createUser', pathMatch: 'full' },
  { path: 'user', component: SearchUserComponent, },
  { path: 'createUser', component: CreateUserComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes),
    FormsModule],
  exports: [RouterModule,
    FormsModule]
})
export class AppRoutingModule { }
