import {Component, OnInit, Input} from '@angular/core';
import {Response} from '@angular/http';
import {TreeService} from './tree.service';

@Component({
    selector: 'tree',
    templateUrl: './tree.component.html',
    styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

    public tree = [];

    constructor(private serviceTree: TreeService) {
    }

    ngOnInit() {
        this.serviceTree.getRoot()
            .subscribe((root) => {
                this.tree.push(root);
            });
    }

}
