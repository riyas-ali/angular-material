import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";
import { ButtonToggleComponent } from "./button-toggle/button-toggle.component";
import { ButtonsComponent } from "./buttons/buttons.component";
import { IconComponent } from "./icon/icon.component";
import { BadgeComponent } from "./badge/badge.component";

@NgModule({
  declarations: [
    AppComponent,
    ButtonToggleComponent,
    ButtonsComponent,
    IconComponent,
    BadgeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
