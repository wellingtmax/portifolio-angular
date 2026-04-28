import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { DetalheProjetoComponent } from '../../detalhe-projeto/detalhe-projeto.component';
import { Projeto } from '../../interface/projetoInterface';
import { MEUS_PROJETOS } from '../../data/projetos.data';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule], 
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.css'
})
export class ProjetosComponent {

  public readonly dialog = inject(MatDialog);
  meusProjetos = MEUS_PROJETOS; 
  
  constructor() {} 

  abrirDialog(projeto: Projeto) {
    this.dialog.open(DetalheProjetoComponent, {
      data: projeto,
      width: '800px',
      panelClass: 'custom-dialog-container'
    });
  }
}




