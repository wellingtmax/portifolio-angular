export interface Projeto {
  id: number;
  titulo: string;
  descricaoCurta: string;
  descricaoCompleta: string;
  tecnologias: string[];
  categoria: string;
  status: string;
  icone: string;
  cor: string;
  imagemUrl: string;
  linkGithub: string; // string vazia quando o repositório é privado
  linkDemo: string;   // string vazia até que uma demonstração seja confirmada
  destaque: boolean;
}
