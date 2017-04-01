import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';

import { DocumentComponent } from './document-component.v4';

@NgModule({
  declarations: [ DocumentComponent ],
  entryComponents: [ DocumentComponent ],
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  bootstrap: []
})
export class AppModule {
  ngDoBootstrap() {}
}
