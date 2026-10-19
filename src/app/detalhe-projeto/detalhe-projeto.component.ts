import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Projeto } from '../interface/projetoInterface';

@Component({
  selector: 'app-detalhe-projeto',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  template: `
    <h2 mat-dialog-title>{{ data.icone }} {{ data.titulo }}</h2>
    <mat-dialog-content style="max-height: 65vh;">
      <img *ngIf="data.imagemUrl" [src]="data.imagemUrl" [alt]="'Imagem de ' + data.titulo"
           style="width:100%;max-height:260px;object-fit:cover;border-radius:12px;">
      <div *ngIf="!data.imagemUrl" [style.background]="'linear-gradient(135deg,' + data.cor + ',#0f172a)'"
           style="height:145px;display:flex;align-items:center;justify-content:center;border-radius:12px;font-size:60px;">
        <span aria-hidden="true">{{ data.icone }}</span>
      </div>
      <p style="margin-top:20px;line-height:1.7;">{{ data.descricaoCompleta }}</p>
      <p><strong>Categoria:</strong> {{ data.categoria }}</p>
      <p><strong>Situação:</strong> {{ data.status }}</p>
      <p><strong>Tecnologias:</strong> {{ data.tecnologias.join(', ') }}</p>
      <p *ngIf="!data.linkGithub" style="font-size:13px;opacity:.7;">
        Repositório privado. Informações técnicas e demonstrações podem ser apresentadas separadamente.
      </p>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Fechar</button>
      <a *ngIf="data.linkDemo" mat-raised-button color="primary" [href]="data.linkDemo" target="_blank" rel="noopener noreferrer">Abrir projeto</a>
      <a *ngIf="data.linkGithub" mat-raised-button color="primary" [href]="data.linkGithub" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
    </mat-dialog-actions>
  `
})
export class DetalheProjetoComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Projeto) {}
}
