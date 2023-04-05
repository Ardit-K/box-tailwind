import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SalesPageComponent } from "./sales-page.component";
import { SalesRowComponent } from "./sales-row.component";
import { salesRoutes } from "./sales.routes";
import { SwapComponent } from "./screen-swap.component";

@NgModule({
    declarations:[SalesPageComponent, SalesRowComponent, SwapComponent],
    imports: [HttpClientModule, FormsModule, CommonModule, RouterModule.forChild(salesRoutes), ReactiveFormsModule]
})

export class SalesModule{}