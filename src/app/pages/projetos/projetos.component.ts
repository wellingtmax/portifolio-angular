import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { DetalheProjetoComponent } from '../../detalhe-projeto/detalhe-projeto.component';
import { Projeto } from '../../interface/projetoInterface';
import { MEUS_PROJETOS } from '../../data/projetos.data';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.css'
})
export class ProjetosComponent {
  private readonly dialog = inject(MatDialog);
  readonly meusProjetos = MEUS_PROJETOS;
  readonly categorias = ['Todos', 'Aplicativos', 'Sistemas Web', 'Automação', 'Dados & IA', 'Jogos'];
  categoriaAtiva = 'Todos';
  termoBusca = '';

  get projetosFiltrados(): Projeto[] {
    const termo = this.termoBusca.trim().toLocaleLowerCase('pt-BR');
    return this.meusProjetos.filter(projeto => {
      const correspondeCategoria = this.categoriaAtiva === 'Todos' || projeto.categoria === this.categoriaAtiva;
      const texto = [projeto.titulo, projeto.descricaoCurta, projeto.categoria, ...projeto.tecnologias]
        .join(' ').toLocaleLowerCase('pt-BR');
      return correspondeCategoria && (!termo || texto.includes(termo));
    });
  }

  selecionarCategoria(categoria: string): void {
    this.categoriaAtiva = categoria;
  }

  buscar(termo: string): void {
    this.termoBusca = termo;
  }

  limparFiltros(): void {
    this.categoriaAtiva = 'Todos';
    this.termoBusca = '';
  }

  abrirDialog(projeto: Projeto): void {
    this.dialog.open(DetalheProjetoComponent, {
      data: projeto,
      width: 'min(720px, 95vw)',
      maxWidth: '95vw',
      panelClass: 'custom-dialog-container'
    });
  }
}
