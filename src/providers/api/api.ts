import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }

  getTasks(){
    return this.http.get('http://localhost:8081/tasks');
  }

  postTask(name, description){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let body = {
      message: "TEST"
    }

    return this.http.post('http://localhost:8081/tasks', JSON.stringify(body), { headers: headers }).subscribe(data => console.log(data));
  }

}
