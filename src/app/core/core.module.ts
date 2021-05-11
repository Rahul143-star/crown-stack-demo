import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

const components = [HeaderComponent, FooterComponent]

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule
  ],
  exports: [components]
})
export class CoreModule { }
