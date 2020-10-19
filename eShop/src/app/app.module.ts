import { RootStoreModule } from './modules/root-store/root-store.module';
import { MaterialModule } from './modules/material/material.module';
import { CoreModule } from './modules/core/core.module';
import { AuthModule } from './modules/auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    BrowserAnimationsModule,
    CoreModule,
    MaterialModule,
    HttpClientModule,
    RootStoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
