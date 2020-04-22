import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NewComponent } from './components/new-component/new-component.component';
import { TestComponentComponent } from './components/test-component/test-component.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';

//services
import { UsersService } from './services/users.service';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    TestComponentComponent,
    PruebaComponent,
    NavbarComponent,
    FormularioComponent,
    ListUsersComponent,
    EditUserComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
