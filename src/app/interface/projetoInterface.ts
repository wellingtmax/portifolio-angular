export interface Projeto {
    id: number;
    titulo: string;
    descricaoCurta: string;
    descricaoCompleta: string;
    tecnologias: string[];
    imagemUrl: string; // aqui vai o print do seu projeto
    linkGithub: string;
    linkDemo: string;
}