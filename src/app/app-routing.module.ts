import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ButtonToggleComponent } from "./button-toggle/button-toggle.component";
import { ButtonsComponent } from "./buttons/buttons.component";
import { IconComponent } from "./icon/icon.component";
import { BadgeComponent } from "./badge/badge.component";

const routes: Routes = [
  { path: "", component: ButtonsComponent },
  { path: "button-toggle", component: ButtonToggleComponent },
  { path: "icon", component: IconComponent },
  { path: "badge", component: BadgeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
