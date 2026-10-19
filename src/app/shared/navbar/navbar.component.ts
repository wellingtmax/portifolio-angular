import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  menuAberto = false;
  alternarMenu(): void { this.menuAberto = !this.menuAberto; }
  fecharMenu(): void { this.menuAberto = false; }
}
