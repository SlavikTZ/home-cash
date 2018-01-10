import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

@Injectable()
export class TreeService {
    private host = `http://localhost:3000`;

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
}
