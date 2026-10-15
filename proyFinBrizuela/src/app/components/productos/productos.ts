import { Component } from '@angular/core';
import { Animal } from '../../models/animal';
import { ProductoCard } from '../producto-card/producto-card';



@Component({
  imports: [ProductoCard],
  selector: 'app-productos',
  styleUrl: './productos.css',
  templateUrl: './productos.html',
})
export class Productos {

   animales: Animal[] = [
    { nombre: "Mamíferos", descripcion:"Tienen pelo y las hembras producen leche para sus crías" , id: 1 },
    { nombre: "Aves", descripcion:"Tienen plumas, alas y la mayoría puede volar" , id: 2 },
    { nombre: "Reptiles", descripcion:"Su cuerpo está cubierto de escamas y suelen poner huevos" , id: 3 },
    { nombre: "Anfibios", descripcion:"Viven parte en el agua y parte en la tierra; pasan por una metamorfosis" , id: 4 },
    { nombre: "Peces", descripcion:"Viven en el agua, respiran por branquias y tienen aletas." , id: 5 }
  ]
  onEliminado(id: number): void {
    this.animales = this.animales.filter(
      p => p.id !== id
    );
  }
}
