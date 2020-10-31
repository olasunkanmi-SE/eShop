import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { MiniFooterComponent } from './components/mini-footer/mini-footer.component';
import { SkeletonUiComponent } from './components/skeleton-ui/skeleton-ui.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PagenotfoundComponent,
    MiniFooterComponent,
    SkeletonUiComponent,
    SearchComponent,
  ],
  imports: [CommonModule, MaterialModule, HttpClientModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    MiniFooterComponent,
    SkeletonUiComponent,
    SearchComponent,
  ],
})
export class CoreModule {}
