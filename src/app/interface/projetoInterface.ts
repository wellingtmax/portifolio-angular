export interface Projeto {
  id: number;
  titulo: string;
  descricaoCurta: string;
  descricaoCompleta: string;
  tecnologias: string[];
  imagemUrl: string;
  linkGithub: string;
  linkDemo: string;
  categoria: 'Aplicativos' | 'Plataformas' | 'Automação' | 'Dados & IA' | 'Jogos';
  status: 'Disponível' | 'Em desenvolvimento' | 'Protótipo' | 'Projeto desenvolvido';
  icone: string;
  cor: string;
  destaque: boolean;
}
