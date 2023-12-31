import { NgModule } from "@angular/core";

import { MatButtonModule } from "@angular/material/button";
import { MatRippleModule } from "@angular/material/core";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatIconModule } from "@angular/material/icon";
import { MatBadgeModule } from "@angular/material/badge";

const MaterialComponents: any[] = [
  MatButtonModule,
  MatRippleModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialModule {}
