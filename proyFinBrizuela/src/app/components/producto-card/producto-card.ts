import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from '../../models/animal';

@Component({
  imports: [],
  selector: 'app-producto-card',
  styleUrl: './producto-card.css',
  templateUrl: './producto-card.html',
})
export class ProductoCard {
  @Input() animales!: Animal
  @Output() eliminado = new EventEmitter<number>();

   OnEliminar(): void {
    this.eliminado.emit(this.animales.id);
  }
}
