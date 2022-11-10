import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user.component';
import { UserResolver } from './user.resolver';

const routes: Routes = [{
    path:"", component: UserComponent
  },
  {
    path:"user/register", component: RegisterComponent, resolve: { item: UserResolver}
  },
  {
    path:"user/login", component: LoginComponent, resolve: { item: UserResolver}
  }];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class UserRoutingModule { }
