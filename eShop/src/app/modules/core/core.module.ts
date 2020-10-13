
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, PagenotfoundComponent],
  imports: [CommonModule, MaterialModule],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
