import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppCommonModule } from './app-common/app-common.module';
import { RouterModule } from '@angular/router';
import { ErrorService } from 'src/utils/error/error.service';
import { HttpServiceService } from 'src/utils/http/http-service.service';
import { CommonServiceService } from 'src/utils/common/common-service.service';
import { NgxWebstorageModule } from 'ngx-webstorage';

AppCommonModule
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppCommonModule,
    RouterModule,
    HttpModule,
    NgxWebstorageModule.forRoot(),
  ],
  providers: [
    ErrorService,
    HttpServiceService,
    CommonServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
