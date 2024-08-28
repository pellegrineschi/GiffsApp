import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LyzeImageComponent } from './components/lyzeImage/lyzeImage.component';



@NgModule({
  declarations: [
    SidebarComponent,
    LyzeImageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    LyzeImageComponent
  ]
})
export class SharedModule { }
