import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//router
import { AppRoutingModule } from './app-routing.module';

//modules
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';

//components
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }