import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'

import { ElementModule } from './element.module'
import { AppComponent } from './app.component'
import { ComponentsModule } from './components/components.module';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, ElementModule, ComponentsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
