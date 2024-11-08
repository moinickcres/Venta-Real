import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';       // Import CommonModule
import { FormsModule } from '@angular/forms';         // Import FormsModule
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-sale',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-sale.component.html',
  styleUrl: './create-sale.component.scss'
})

export class CreateSaleComponent {
  sale = {
    IdCliente: null,
    conceptos: [
      { idProducto: null, precioUnitario: null, cantidad: null, importe: null }
    ]
  };

  private apiUrl = 'https://localhost:7119/api/Venta';

  constructor(private http: HttpClient, private router: Router) {}

  addConcepto() {
    this.sale.conceptos.push({ idProducto: null, precioUnitario: null, cantidad: null, importe: null });
  }

  createSale() {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json'
    });
    this.http.post(this.apiUrl, this.sale, { headers }).subscribe(response => {
      // Handle response
    });
  }

  logout() {
    localStorage.removeItem('token');  // Clear the token
    this.router.navigate(['/']);       // Redirect to login page
  }
}
