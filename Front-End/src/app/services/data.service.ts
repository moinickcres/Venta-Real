import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// This is the service that will call  the .NET controller and return the data

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //private apiUrl = 'https://localhost:7119/api/cliente'; // URL of your .NET controller
  private apiUrl = 'https://localhost:7119/api/user/login'

  constructor(private http: HttpClient) {}

  // Fetch data from the .NET back-end
  getData(email: string, password: string): Observable<any> {

    //const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIyIiwiZW1haWwiOiJ1c3VhcmlvQGdtYWlsLmNvbSIsIm5iZiI6MTczMTA2ODE5MCwiZXhwIjoxNzM2MjUyMTkwLCJpYXQiOjE3MzEwNjgxOTB9.iRIzi_vyaSMensA_LmD5qXWIXMecL4El-Rztc2YZMy8';  // Replace this with your actual token (or get it from localStorage/sessionStorage)
    
    const headers = new HttpHeaders({
      //'Authorization': `Bearer ${token}`, // Set the Authorization header with the token
      'Access-Control-Allow-Origin': "*",
      'Content-Type': 'application/json'
    });

    //return this.http.get<any>(this.apiUrl, { headers });

    const content = {
      email,
      password
    }
    console.log(content);
    return this.http.post<any>(this.apiUrl, {email, password});
  }
}
