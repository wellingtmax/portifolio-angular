import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MEUS_PROJETOS } from '../../data/projetos.data';
import { RouterLink } from "@angular/router";
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    //escrevendo jhota
    const text3 = "J H O T A";
    let i = 0;
    const el3 = document.querySelector('.typing3') as HTMLElement;

    const typing3 = setInterval(() => {
      if (i < text3.length) {
        el3.innerHTML += text3.charAt(i);
        i++;
      } else {
        clearInterval(typing3);
      }
    }, 100);
  }


  // DADOS DOS CARDS
  items = MEUS_PROJETOS;


  get carouselItems() {
    // deixei os intens soa para demonstração, depois tirar
    return [...this.items,]; // duplica os itens para rolagem infinita
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
