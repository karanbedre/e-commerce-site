import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppCommonModule } from './app-common/app-common.module';
import { RouterModule } from '@angular/router';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { ErrorService } from 'src/app/utils/error/error.service';
import { HttpServiceService } from 'src/app/utils/http/http-service.service';
import { CommonServiceService } from 'src/app/utils/common/common-service.service';
import { SuccessBoxComponent } from 'src/app/utils/components/success-box/success-box.component';


AppCommonModule
@NgModule({
  declarations: [
    AppComponent,
    SuccessBoxComponent
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
  entryComponents: [SuccessBoxComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
