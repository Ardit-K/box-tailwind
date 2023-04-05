import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ScreenListComponent } from "./screen-list.component";
import { ScreenRowComponent } from "./screen-row.component";
import { screenRoutes } from "./screens.routes";

@NgModule({
    declarations:[ScreenListComponent, ScreenRowComponent],
    imports:[HttpClientModule, FormsModule, CommonModule, RouterModule.forChild(screenRoutes)]
})

export class ScreensModule{}