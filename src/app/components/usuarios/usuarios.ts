import { Component } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [],
  templateUrl: 'usuarios.html',
   styleUrl: './usuarios.css',
})
export class Usuarios { 
  usuarios = [
    'Juan Perez',
    'Ana Gomez',
    'Carlos Rodriguez',
    'Maria Lopez'
  ];}
