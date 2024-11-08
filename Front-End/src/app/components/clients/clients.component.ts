import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';       // Import CommonModule
import { FormsModule } from '@angular/forms';         // Import FormsModule
import { RouterModule } from '@angular/router';  // Import RouterModule
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent implements OnInit {

  clients: any[] = [];
  newClient = { Id: null, Nombre: '' };
  updatedClient = { Id: null, Nombre: '' };
  deleteClientId: number | null = null;

  private apiUrl = 'https://localhost:7119/api/cliente';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    //this.getClients();
  }

  getClients() {
    const headers = this.getHeaders();
    this.http.get<any>(this.apiUrl, { headers }).subscribe(response => {
      this.clients = response.data;
    });
  }

  addClient() {
    const headers = this.getHeaders();
    this.http.post(this.apiUrl, this.newClient, { headers }).subscribe(() => {
      this.getClients();  // Refresh the list
    });
  }

  updateClient() {
    const headers = this.getHeaders();
    this.http.put(this.apiUrl, this.updatedClient, { headers }).subscribe(() => {
      this.getClients();  // Refresh the list
    });
  }

  deleteClient() {
    const headers = this.getHeaders();
    this.http.delete(`${this.apiUrl}/${this.deleteClientId}`, { headers }).subscribe(() => {
      this.getClients();  // Refresh the list
    });
  }

  private getHeaders() {
    const token = localStorage.getItem('token');
    return new HttpHeaders({ 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' });
  }

  logout() {
    localStorage.removeItem('token');  // Clear the token
    this.router.navigate(['/']);       // Redirect to login page
  }
}