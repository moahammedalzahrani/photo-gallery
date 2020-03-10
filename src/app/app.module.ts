import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { MetalInspectComponent } from './metal-inspect/metal-inspect.component';
import { MetalInspectResultComponent } from './metal-inspect/metal-inspect-result/metal-inspect-result.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, MetalInspectComponent, ReactiveFormsModule,
    MetalInspectResultComponent ],

  entryComponents: [],
  imports: [BrowserModule, HttpClientModule,
    ReactiveFormsModule
],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
