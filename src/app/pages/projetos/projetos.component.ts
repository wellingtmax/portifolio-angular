import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
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
  readonly projetos = MEUS_PROJETOS;
  readonly categorias = ['Todos', 'Aplicativos', 'Plataformas', 'Automação', 'Dados & IA', 'Jogos'];
  categoriaAtiva = 'Todos';
  termo = '';

  get projetosFiltrados(): Projeto[] {
    const busca = this.termo.trim().toLocaleLowerCase('pt-BR');
    return this.projetos.filter(p => {
      const correspondeCategoria = this.categoriaAtiva === 'Todos' || this.categoriaAtiva === p.categoria;
      const texto = [p.titulo, p.descricaoCurta, p.categoria, ...p.tecnologias].join(' ').toLocaleLowerCase('pt-BR');
      return correspondeCategoria && (!busca || texto.includes(busca));
    });
  }

  selecionarCategoria(categoria: string): void {
    this.categoriaAtiva = categoria;
  }

  buscar(event: Event): void {
    this.termo = (event.target as HTMLInputElement).value;
  }

  limparFiltros(): void {
    this.termo = '';
    this.categoriaAtiva = 'Todos';
  }

  abrirDialog(projeto: Projeto): void {
    this.dialog.open(DetalheProjetoComponent, {
      data: projeto,
      width: '720px',
      maxWidth: '95vw',
      panelClass: 'jstech-dialog'
    });
  }
}
