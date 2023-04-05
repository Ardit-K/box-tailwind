import { Route } from "@angular/router";
import { ScreenListComponent } from "./screen-list.component";

export const screenRoutes: Route[]= [
    {path:'', component: ScreenListComponent},
    {path:'**', redirectTo: '/', pathMatch: "full"}
];