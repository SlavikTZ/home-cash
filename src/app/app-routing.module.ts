import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TreeComponent} from './tree/tree.component';

const routes: Routes = [
    {path: '', redirectTo: 'register', pathMatch: 'full'},
    {path: 'tree', component: TreeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
