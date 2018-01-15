import {Component, ElementRef, Input, Renderer2, ViewChild} from '@angular/core';
import {TreeService} from "../tree.service";

@Component({
    selector: 'tree-view',
    templateUrl: './tree-view.component.html',
    styleUrls: ['./tree-view.component.scss']
})
export class TreeViewComponent {

    private dbClickFlag = false;
    renameField = '';

    constructor(private serviceTree: TreeService) {
    }

    @Input('tree') tree;

    toggle(event, node) {
        event.stopPropagation();
        setTimeout(() => {
            if (!this.dbClickFlag) {
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
        }, 300);

    }

    rename(event, node) {
        event.stopPropagation();
        event.preventDefault();
        let input = event.target.parentNode.children.item(2);
        if (!input) {
            input = event.target.parentNode.children.item(1);
        }
        this.dbClickFlag = true;
        node.isRename = true;
        this.renameField = node.name;
        setTimeout(() => {
            input.focus();
        }, 100);
    }

    saveNode(node) {
        this.dbClickFlag = false;
        node.isRename = false;
        this.serviceTree.save(node).subscribe((newNode) => {
            node.name = newNode.name;
        });
    }

    saveNodeKey(event, node) {
        if (event.key === 'Enter') {
            this.saveNode(node);
        }
    }

    addModal(event, node) {
        event.preventDefault();
        if (event.ctrlKey) {
            this.delete(node);
            return;
        }
        this.serviceTree.add(node).subscribe((addNode) => {
            if (!node.isChildren) {
                node.children = [];
                node.isChildren = true;
            }
            node.expand = true;
            addNode.isRename = true;
            node.children.push(addNode);

        });
    }

    delete(node) {
        this.serviceTree.delete(node).subscribe((result) => {
            var childrenNew = [];
            if (this.tree.length < 2) {
                this.tree = [];
                return;
            }
            this.tree.forEach((nextNode) => {
                if (nextNode._id !== node._id) {
                    childrenNew.push(nextNode);
                }
            });
            this.tree = childrenNew;
        });
    }
}
