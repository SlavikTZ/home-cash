import {Component, Input} from '@angular/core';
import {TreeService} from "../tree.service";

@Component({
    selector: 'tree-view',
    templateUrl: './tree-view.component.html',
    styleUrls: ['./tree-view.component.scss']
})
export class TreeViewComponent {

    constructor(private serviceTree: TreeService) {
    }

    @Input('tree') tree;

    toggle(event, node) {
        event.stopPropagation();
        if (node.isChildren && node.expand === undefined) {
            node.expand = true;
            this.serviceTree
                .getChildren(node._id)
                .subscribe((nodes) => {
                    node.children = nodes;
                });
        } else {
            node.expand = !node.expand;
        }


    }
}
