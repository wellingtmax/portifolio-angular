import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Projeto } from '../interface/projetoInterface';

@Component({
  selector: 'app-detalhe-projeto',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  template: `
    <div style="background:#0b1a2b;color:#f4f7ff;padding:10px 6px 5px;">
      <div mat-dialog-title style="display:flex;align-items:center;gap:13px;margin-bottom:5px;">
        <span [style.background]="data.cor" style="display:inline-flex;width:44px;height:44px;align-items:center;justify-content:center;border-radius:10px;color:white;font-size:13px;font-weight:800;">{{ data.icone }}</span>
        <span>{{ data.titulo }}</span>
      </div>
      <mat-dialog-content style="max-height:65vh;color:#b9cde5;">
        <img *ngIf="data.imagemUrl" [src]="data.imagemUrl" [alt]="'Imagem de ' + data.titulo"
             style="width:100%;max-height:250px;object-fit:cover;border-radius:10px;margin-bottom:20px;">
        <p style="font-size:14px;line-height:1.85;">{{ data.descricaoCompleta }}</p>
        <p><strong style="color:#fff;">Categoria:</strong> {{ data.categoria }}</p>
        <p><strong style="color:#fff;">Situação:</strong> {{ data.status }}</p>
        <p><strong style="color:#fff;">Tecnologias:</strong> {{ data.tecnologias.join(', ') }}</p>
      </mat-dialog-content>
      <mat-dialog-actions align="end">
        <button mat-button mat-dialog-close style="color:#c7d8ef;">Fechar</button>
        <a *ngIf="data.linkGithub" mat-stroked-button [href]="data.linkGithub" target="_blank" rel="noopener noreferrer" style="color:#c7d8ef;">Ver código</a>
        <a *ngIf="data.linkDemo" mat-flat-button color="primary" [href]="data.linkDemo" target="_blank" rel="noopener noreferrer">Acessar projeto ↗</a>
      </mat-dialog-actions>
    </div>
  `
})
export class DetalheProjetoComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Projeto) {}
}
