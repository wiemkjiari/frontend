import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit{
  private apiUrl = 'http://localhost:8081/gestiondestock/v1';
http = inject(HttpClient)
posts:any=[];

ngOnInit(): void{
}
createCategory(categoryData: any): void {
  this.http.post(this.apiUrl + '/create', categoryData)
    .subscribe({
      next: (response) => {
        console.log('Category created:', response);
        // Vous pouvez ici rediriger l'utilisateur ou afficher un message de succès
      },
      error: (error) => console.error('There was an error!', error)
    });
}
}
