import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Data } from './data';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private apiURL ="http://localhost:5055/api";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
   
    const token = window.localStorage.getItem("app_token");
 
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`)
    return this.httpClient.get(this.apiURL+'/FindTickets', {headers});
  }
  
  getAll(): Observable<any> {
  
    return this.httpClient.get(this.apiURL + '/FindTickets/')
  
    .pipe(
      catchError(this.errorHandler)
    )
  }

  create(data:any): Observable<any> {
    const token = window.localStorage.getItem("app_token");
    // console.log(token);
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`)
    return this.httpClient.post(this.apiURL + '/FindTickets', data,{headers} )
    .pipe(
      catchError(this.errorHandler)
    )
  }


  find(id:number): Observable<any> {
  
    return this.httpClient.get(this.apiURL + '/FindTickets/' + id)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }
  update(id:number, data:Data): Observable<any> {
  
    return this.httpClient.put(this.apiURL + '/FindTickets/' + id, JSON.stringify(data), this.httpOptions)
 
    .pipe( 
      catchError(this.errorHandler)
    )
  }
  delete(id:number){
    return this.httpClient.delete(this.apiURL + '/FindTickets/' + id, this.httpOptions)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
