import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CubeModule } from './cube/cube.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CubeModule
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
