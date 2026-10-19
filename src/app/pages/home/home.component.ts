import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MEUS_PROJETOS } from '../../data/projetos.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly destaques = MEUS_PROJETOS.filter(projeto => projeto.destaque).slice(0, 4);
}
