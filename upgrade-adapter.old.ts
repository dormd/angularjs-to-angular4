import { NgModule, forwardRef } from '@angular/core';
import { UpgradeAdapter } from '@angular/upgrade';
import { BrowserModule } from '@angular/platform-browser';

export const upgradeAdapter = new UpgradeAdapter(forwardRef(() => AppModule));

@NgModule({
  imports: [
    BrowserModule
  ]
})
export class AppModule {}
