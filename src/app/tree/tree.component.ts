import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'tree',
    templateUrl: './tree.component.html',
    styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

    public tree;

    constructor() {
    }

    ngOnInit() {
        this.tree =
            {
                name: 'Корень',
                children: [
                    {name: 'Глава 1', children: [
                        {name: 'Глава 1.1', children: [
                            {name: 'Глава 1.1.1', children:[
                                {name: 'Глава 1.1.1.1'}
                            ]},
                            {name: 'Глава 1.1.2', children:[
                                {name: 'Глава 1.1.2.1'}
                            ]},
                            {name: 'Глава 1.1.3'}
                        ]},
                        {name: 'Глава 2'},
                        {name: 'Глава 3'},
                        {name: 'Глава 4'},
                    ]
                    },
                ]
            };
    }

}
