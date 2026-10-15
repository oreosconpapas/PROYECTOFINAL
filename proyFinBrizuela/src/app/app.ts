import { Component, Output, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductoCard } from './components/producto-card/producto-card';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';

@Component({
  imports: [RouterOutlet,Navbar,Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('proyFinBrizuela');
}