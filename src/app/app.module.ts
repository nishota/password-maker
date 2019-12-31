import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContentComponent } from './content/content.component';
import { FootterComponent } from './footer/footer.component';
import { PasswordMakerComponent } from './password-maker/password-maker.component';
import { PasswordPlaceComponent } from './password-place/password-place.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ContentComponent,
    FootterComponent,
    PasswordMakerComponent,
    PasswordPlaceComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
