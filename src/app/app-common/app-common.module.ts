import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { MatBadgeModule } from '@angular/material/badge';
import { NumberDirective } from './directives/number.directive';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LayoutComponent, NumberDirective],
  imports: [
    CommonModule,
    MatBadgeModule,
    RouterModule
  ],
  exports: [LayoutComponent, NumberDirective]
})
export class AppCommonModule { }
