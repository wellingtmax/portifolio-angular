import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-detalhe-projeto',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  template: `
    <h2 mat-dialog-title>{{ data.titulo }}</h2>
    <mat-dialog-content style="height: 60vh;">
      <img [src]="data.imagemUrl" style="width: 100%; border-radius: 8px;">
      <p style="margin-top: 30px;">{{ data.descricaoCompleta }}</p>
      <strong>Tecnologias:</strong> <span 
      style="padding: 5px;  
      border-radius: 5px; 
      margin: 5px; 
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);"
      >{{ data.tecnologias.join(', ') }}</span>
    </mat-dialog-content>
    <mat-dialog-actions align="center">
    <a mat-raised-button color="primary" href="{{ data.linkDemo }}" target="_blank">Entrar</a>
    </mat-dialog-actions>
    
    <mat-dialog-actions align="end">
    <button mat-button mat-dialog-close>Fechar</button>
    <a mat-raised-button color="primary" [href]="data.linkGithub" target="_blank">Ver no GitHub</a>
    </mat-dialog-actions>
  `
})
export class DetalheProjetoComponent {
  // O @Inject(MAT_DIALOG_DATA) é o que recebe o objeto "projeto"
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
