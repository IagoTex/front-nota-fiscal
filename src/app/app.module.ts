import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DxHttpModule } from 'devextreme-angular/http';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { FooterModule} from './shared/components';
import {ScreenService, AppInfoService } from './shared/services';
import { UnauthenticatedContentModule } from './unauthenticated-content';
import { AppRoutingModule } from './app-routing.module';
import {ClienteModule} from "./pages/cliente/cliente.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {LoginComponentModule} from "./pages/login/login.component";
import {AuthService} from "./shared/services/security/auth.service";
import {JwtInterceptorService} from "./shared/services/security/jwt.interceptor.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DxHttpModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    UnauthenticatedContentModule,
    AppRoutingModule,
    ClienteModule,
    HttpClientModule,
    LoginComponentModule
  ],
  providers: [
    ScreenService,
    AppInfoService,
    AuthService,{ provide: HTTP_INTERCEPTORS,
                  useClass: JwtInterceptorService,
                  multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
