import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

@Injectable()
export class TreeService {
    private host = `http://18.196.121.208:3001`;

    constructor(private http: Http) {
    }

    getRoot() {
        return this.http.get(`${this.host}/api/nodes/root`)
            .map((res: Response) => {
                return (res.json())[0];
            });
    }

    getChildren(id) {
        return this.http.get(`${this.host}/api/nodes/${id}`)
            .map((res: Response) => {
                return res.json();
            });
    }

    save(node) {
        return this.http.put(`${this.host}/api/nodes/${node._id}`, {name: node.name}).map((res: Response) => {
            return res.json();
        });
    }

    delete(node) {
        console.log(node);
        return this.http.delete(`${this.host}/api/nodes/${node._id}`).map((res: Response) => {
            return res.json();
        });
    }

    add(node) {

        return this.http.post(`${this.host}/api/nodes`, {parent_id: node._id}).map((res: Response) => {
            return res.json();
        });
    }
}
