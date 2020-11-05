import { CheckoutModule } from './modules/checkout/checkout.module';
import { UsersModule } from './modules/users/users.module';
import { ProductsModule } from './modules/products/products.module';
import { LoggingInterceptor } from './modules/core/interceptors/logging-inteceptor';
import { ErrorInterceptor } from './modules/core/interceptors/error-interceptor';
import { RootStoreModule } from './modules/root-store/root-store.module';
import { MaterialModule } from './modules/material/material.module';
import { CoreModule } from './modules/core/core.module';
import { AuthModule } from './modules/auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AuthModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    RootStoreModule,
    ProductsModule,
    UsersModule,
    CheckoutModule,
    CoreModule,
    AppRoutingModule,
    EffectsModule.forRoot([]),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
