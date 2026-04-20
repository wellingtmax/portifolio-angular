import { Component, ElementRef, HostListener, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-matrix-rain',
  imports: [],
  templateUrl: './matrix-rain.component.html',
  styleUrl: './matrix-rain.component.css'
})
export class MatrixRainComponent implements AfterViewInit {
  @ViewChild('matrixCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;
  private charcteres = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  private fontSinze = 16;
  private columns = 0;
  private drops: number[] = [];

  ngAfterViewInit(): void {
    this.ctx = this.canvasRef.nativeElement.getContext('2d')!;
    this.initializeCanvas();
    this.animate();
  }

  // AJUSTA O TAMANHO SE O USUARIO REDIMENSIONAR A JANELA
  @HostListener('window:resize')
  onResize() {
    this.initializeCanvas();
  }

  private initializeCanvas() {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    this.columns = Math.floor(canvas.width / this.fontSinze);
    // INICIALIZA AS GOTAS (drops) no topo da tela (y = 1)
    this.drops = new Array(this.columns).fill(1);
  }

  private draw() {
    // Cria o efeito de rastro: desenha um retangulo semi-transparente sobre o frame anterior
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    this.ctx.fillRect(0, 0, this.canvasRef.nativeElement.width, this.canvasRef.nativeElement.height);

    // Estilo do texto
    this.ctx.fillStyle = 'rgb(0, 255, 0)';//Verde Matrix
    this.ctx.font = this.fontSinze + 'px monospace';

    for (let i = 0; i < this.drops.length; i++) {
      const text = this.charcteres.charAt(Math.floor(Math.random() * this.charcteres.length));

      //Desenha o caractere
      const x = i * this.fontSinze;
      const y = this.drops[i] * this.fontSinze;
      this.ctx.fillText(text, x, y);

      //Reinicia a gota no topo aleatoriamente apos sair da tela
      if (y > this.canvasRef.nativeElement.height && Math.random() > 0.975) {
        this.drops[i] = 0;
      }

      this.drops[i]++;
    }


  }
  private animate(){
    this.draw();
    requestAnimationFrame(() => this.animate());
  }

}
