import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';

import { DocumentsService } from './documents-service.v4';

@NgModule({
  providers: [ DocumentsService ],
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  bootstrap: []
})
export class AppModule {
  ngDoBootstrap() {}
}
