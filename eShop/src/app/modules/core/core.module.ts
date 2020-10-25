
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { MiniFooterComponent } from './components/mini-footer/mini-footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PagenotfoundComponent,
    MiniFooterComponent,
  ],
  imports: [CommonModule, MaterialModule, HttpClientModule],
  exports: [HeaderComponent, FooterComponent, MiniFooterComponent],
})
export class CoreModule {}
