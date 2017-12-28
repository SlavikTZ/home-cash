import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'cash-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

    title = 'Домашняя бугхалтерия';

    constructor(private router:Router) {
    }

    ngOnInit() {
        this.router.navigate(['/login']);
    }

}
