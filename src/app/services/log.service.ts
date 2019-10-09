import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class LogService {
    protected apiUrl = 'http://localhost:3001/api';

    constructor(protected http: HttpClient) { }

    findAll() {
        return this.http.get(this.apiUrl + '/logs').toPromise();
    }

    findById(id: number) {
        return this.http.get(this.apiUrl + '/logs/' + id).toPromise();
    }

}