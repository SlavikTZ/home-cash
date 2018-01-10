import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AuthModule} from './auth/auth.module';
import {AppRoutingModule} from './app-routing.module';
import { TreeComponent } from './tree/tree.component';
import { TreeViewComponent } from './tree/tree-view/tree-view.component';
import {TreeService} from "./tree/tree.service";

@NgModule({
    declarations: [
        AppComponent,
        TreeComponent,
        TreeViewComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        AuthModule,
        AppRoutingModule,
    ],
    providers: [TreeService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
