import { __decorate } from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponent } from './components/new-component/new-component.component';
import { TestComponentComponent } from './components/test-component/test-component.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
//services
import { UsersService } from './services/users.service';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            NewComponent,
            TestComponentComponent,
            PruebaComponent,
            NavbarComponent,
            FormularioComponent,
            ListUsersComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule
        ],
        providers: [
            UsersService
        ],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map