import { Route } from "@angular/router";
import { SalesPageComponent } from "./sales-page.component";

export const salesRoutes: Route[] = [
    {path: '', component: SalesPageComponent},
    {path: '**', redirectTo: '/'}
];