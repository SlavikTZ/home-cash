import {Component, Input} from '@angular/core';

@Component({
    selector: 'tree-view',
    templateUrl: './tree-view.component.html',
    styleUrls: ['./tree-view.component.scss']
})
export class TreeViewComponent {

    constructor() {
    }

    @Input('tree') tree;

    toggle(node) {
       node.expand = node.expand ? false : true;
    }
}
