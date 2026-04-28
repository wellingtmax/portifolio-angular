import { Component } from '@angular/core';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  imports: [],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.css'
})
export class SobreComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    // ✅ Verificar se estamos no navegador (não no servidor SSR)
    if (typeof document === 'undefined') {
      return;
    }

    // ✨ DIGITANDO
    const text = "Sobre Mim";
    let i = 0;
    const el = document.querySelector('.typing') as HTMLElement;

    const typing = setInterval(() => {
      if (i < text.length) {
        el.innerHTML += text.charAt(i);
        i++;
      } else {
        clearInterval(typing);
      }
    }, 100);

    const text2 = "Timeline";
    let j = 0;
    const el2 = document.querySelector('.timeline h1') as HTMLElement;

    const typing2 = setInterval(() => {
      if (j < text2.length) {
        el2.innerHTML += text2.charAt(j);
        j++;
      } else {
        clearInterval(typing2);
      }
    }, 100);

    // 🔢 CONTADOR
    const counters = document.querySelectorAll('.counter');

    counters.forEach((counter: any) => {
      const update = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const increment = target / 50;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(update, 30);
        } else {
          counter.innerText = target;
        }
      };

      update();
    });
  }
}
