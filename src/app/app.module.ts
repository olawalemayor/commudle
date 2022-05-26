import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NbLayoutModule, NbThemeModule } from '@nebular/theme';
import { PageModule } from './modules/page.module';
import { PageRoutingModule } from './modules/page-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    PageModule,
    PageRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
