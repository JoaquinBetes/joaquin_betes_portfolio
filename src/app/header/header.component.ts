import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() modoChanged = new EventEmitter<string>();
  modo = true;
  icono = "btn bi bi-brightness-high-fill";
  onClick() {
    this.modo = !this.modo;
  
    // Agregar una clase de animación temporal
    const iconoElement = document.querySelector('.bi');
    iconoElement?.classList.add('icon-transition');
  
    setTimeout(() => {
      this.icono = (this.icono === "btn bi bi-brightness-high-fill") 
        ? "btn bi bi-moon-stars-fill" 
        : "btn bi bi-brightness-high-fill";
  
      // Remover la clase después del cambio
      iconoElement?.classList.remove('icon-transition');
    }, 400);
  
    const res = this.modo ? 'dark' : 'light';
    this.modoChanged.emit(res);
  }
  
}
