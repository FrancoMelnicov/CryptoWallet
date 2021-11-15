import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//modules
import { PagesRoutingModule } from './pages/pages-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';

//components
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
