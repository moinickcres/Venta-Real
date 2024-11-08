import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common'; // This provides commonly used directives such as *ngFor, *ngIf, ngClass, etc.
import { FormsModule } from '@angular/forms';       // Import FormsModule
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulary',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulary.component.html',
  styleUrls: ['./formulary.component.scss']
})

export class FormularyComponent /*implements OnInit*/ {
  //data: any[] = [];
  //apiData: any;  // Store the entire API response here
  //token: string = ''; // Store the token separately

  email = '';
  password = '';

  constructor(private dataService: DataService, private router: Router) {}

  /*ngOnInit(): void {
    this.dataService.getData().subscribe((response) => {
      console.log(response);  // Check the structure of the response
      this.data = response;

      // Assign the 'data' object to apiData
      this.apiData = response;

      // Extract the token from the data
      this.token = response.data.token;
    });
  }*/

  login() {
    console.log('Login data:', { email: this.email, password: this.password });
    this.dataService.getData(this.email, this.password).subscribe(response => {
      const token = response.data.token;
      localStorage.setItem('token', token);
      this.router.navigate(['/clients']);
    });
  }
}
