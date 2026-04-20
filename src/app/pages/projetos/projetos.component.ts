import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'; // Adicione este
import { MatButtonModule } from '@angular/material/button'; // Adicione este
import { DetalheProjetoComponent } from '../../detalhe-projeto/detalhe-projeto.component';
import { Projeto } from '../../interface/projetoInterface';

@Component({
  selector: 'app-projetos',
  standalone: true,
  // IMPORTANTE: Adicione DetalheProjetoComponent e MatCardModule aqui
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule], 
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.css'
})
export class ProjetosComponent {

  public readonly dialog = inject(MatDialog);
  // Aqui você cria a lista que o HTML vai ler
  meusProjetos: Projeto[] = [
    {
      id: 1,
      titulo: 'Tetris Python',
      descricaoCurta: 'Clássico Tetris desenvolvido com lógica pura e interface gráfica.',
      descricaoCompleta: 'Projeto desenvolvido para praticar matrizes e colisão em Python. Possui sistema de níveis e pontuação.',
      tecnologias: ['Python', 'Pygame'],
      imagemUrl: 'projetos/tetris.png', // Verifique se o arquivo está na pasta assets
      linkGithub: 'https://github.com/wellingtmax/tetris_py.git',
      linkDemo: ''
    }
    // Adicione outros projetos aqui...
  ];

  constructor() {} 

  abrirDialog(projeto: Projeto) {
    this.dialog.open(DetalheProjetoComponent, {
      data: projeto,
      width: '800px',
      panelClass: 'custom-dialog-container'
    });
  }
}




