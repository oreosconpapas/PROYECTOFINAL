import { Routes } from '@angular/router';
import { Inicio } from './components/inicio/inicio';
import { Productos } from './components/productos/productos';
import { Nosotros } from './components/nosotros/nosotros';
import { Contacto } from './components/contacto/contacto';
import { NotFound } from './components/not-found/not-found';

export const routes: Routes = [
    { path: '', component: Inicio },
        { path: 'inicio', component: Inicio },
        { path: 'productos', component: Productos },
            { path: 'nosotros', component: Nosotros },
                { path: 'contacto', component: Contacto },
                    { path: '**', component: NotFound }
];
