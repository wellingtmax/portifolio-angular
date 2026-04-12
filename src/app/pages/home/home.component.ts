import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

  // 🔥 DADOS DOS CARDS
  items = [
    {
      titulo: 'Projetos',
      descricao: 'Veja meus projetos desenvolvidos...',
      img: 'projetos/pro1.jpg',
      tags: ['Angular', 'Node']
    },
    {
      titulo: 'Sistema Fitness',
      descricao: 'App de treino completo...',
      img: 'projetos/pro2.webp',
      tags: ['Flutter', 'Firebase']
    },
    {
      titulo: 'IA Futebol',
      descricao: 'Análise com inteligência artificial...',
      img: 'projetos/pro4.jpg',
      tags: ['Python', 'ML']
    }
  ];

  get carouselItems() {
    return [...this.items, ...this.items]; // duplica os itens para rolagem infinita
  }

  @ViewChild('carouselTrack') carouselTrack!: ElementRef<HTMLDivElement>;

  scrollRight(): void {
    const track = this.carouselTrack.nativeElement;
    const maxScroll = track.scrollWidth - track.clientWidth;
    const step = track.clientWidth / 2; // rola metade da largura do track

    track.scrollBy({
      left: 400, // rola 400px para a direita
      behavior: 'smooth'
    });

    setTimeout(() => {
      if (track.scrollLeft >= maxScroll) {
        track.scrollLeft = 0; // volta para o início
      }
    }, 300);
  }

  scrollLeft(): void {
    const track = this.carouselTrack.nativeElement;
    const maxScroll = track.scrollWidth - track.clientWidth;
    const step = track.clientWidth / 2; // rola metade da largura do track
    // 
    track.scrollBy({
      left: -400, // rola 400px para a esquerda
      behavior: 'smooth'
    });

    setTimeout(() => {
      if (track.scrollLeft <= 0) {
        track.scrollLeft = maxScroll; // volta para o final
      }
    }, 300);
  }
}
