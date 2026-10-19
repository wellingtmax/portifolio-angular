import { Projeto } from '../interface/projetoInterface';

// Catálogo público: não expor URLs de repositórios privados ou demos não verificadas.
// Atualize status, imagens e links à medida que os projetos evoluem.
export const MEUS_PROJETOS: Projeto[] = [
  {
    "id": 1,
    "titulo": "StartTreino",
    "descricaoCurta": "Aplicativo Android para montar treinos, registrar evolução e acompanhar resultados.",
    "descricaoCompleta": "Aplicativo de musculação com fichas personalizadas, séries, repetições, cargas, histórico, evolução, metas e recursos de compartilhamento e backup. Desenvolvido com Ionic, Angular e Capacitor. Publicado no Google Play; o repositório de desenvolvimento é privado.",
    "tecnologias": [
      "Angular",
      "Ionic",
      "Capacitor",
      "Android"
    ],
    "categoria": "Aplicativos",
    "status": "Publicado",
    "icone": "🏋️",
    "cor": "#16a34a",
    "imagemUrl": "",
    "linkGithub": "",
    "linkDemo": "",
    "destaque": true
  },
  {
    "id": 2,
    "titulo": "StartPlantão",
    "descricaoCurta": "Escalas de trabalho, plantões extras e controle financeiro mensal em um só aplicativo.",
    "descricaoCompleta": "Aplicativo Android local-first para gestão de escalas ordinárias, vínculos de trabalho, plantões extras, previsões de recebimento e controle financeiro mensal. Possui foco em funcionamento offline, preservação do histórico e proteção local opcional. Primeira versão publicada no Google Play em outubro de 2026; código privado.",
    "tecnologias": [
      "Angular",
      "Ionic",
      "Capacitor",
      "SQLite"
    ],
    "categoria": "Aplicativos",
    "status": "Publicado",
    "icone": "🗓️",
    "cor": "#2563eb",
    "imagemUrl": "",
    "linkGithub": "",
    "linkDemo": "",
    "destaque": true
  },
  {
    "id": 3,
    "titulo": "SmartÓrbita",
    "descricaoCurta": "Plataforma de gestão multiempresa voltada a pequenos negócios e prestadores de serviços.",
    "descricaoCompleta": "Plataforma SaaS multiempresa e multissegmento. A fundação técnica inclui autenticação, permissões, isolamento por empresa e APIs administrativas. Catálogo, pedidos, agendamentos e operações comerciais integram o planejamento de evolução. Projeto em desenvolvimento com código privado.",
    "tecnologias": [
      "Angular",
      "NestJS",
      "Prisma",
      "PostgreSQL"
    ],
    "categoria": "Sistemas Web",
    "status": "Em desenvolvimento",
    "icone": "🪐",
    "cor": "#7c3aed",
    "imagemUrl": "",
    "linkGithub": "",
    "linkDemo": "",
    "destaque": true
  },
  {
    "id": 4,
    "titulo": "StartLar",
    "descricaoCurta": "Projeto de aplicativo para organizar compras, despensa e rotinas da casa.",
    "descricaoCompleta": "Aplicativo Android em desenvolvimento com estrutura para Início, Compras, Despensa, Casa e Perfil. A etapa de identidade visual, navegação, temas e responsividade foi implementada e testada. As funções de organização e persistência de dados fazem parte das próximas etapas.",
    "tecnologias": [
      "Angular",
      "Ionic",
      "Capacitor",
      "TypeScript"
    ],
    "categoria": "Aplicativos",
    "status": "Em desenvolvimento",
    "icone": "🏡",
    "cor": "#ea580c",
    "imagemUrl": "",
    "linkGithub": "",
    "linkDemo": "",
    "destaque": false
  },
  {
    "id": 5,
    "titulo": "Sistema Lotofácil",
    "descricaoCurta": "Software em Python voltado à organização e análise de jogos da Lotofácil.",
    "descricaoCompleta": "Projeto de software desktop em Python com estrutura de aplicação, testes e empacotamento. Voltado ao estudo de combinações e à organização de análises da Lotofácil, sem promessa de previsão dos resultados. Repositório privado.",
    "tecnologias": [
      "Python",
      "Desktop",
      "Análise de dados"
    ],
    "categoria": "Dados & IA",
    "status": "Em desenvolvimento",
    "icone": "📊",
    "cor": "#0891b2",
    "imagemUrl": "",
    "linkGithub": "",
    "linkDemo": "",
    "destaque": false
  },
  {
    "id": 6,
    "titulo": "Agendamento PROEIS",
    "descricaoCurta": "Extensão Chrome para preparar agendamentos salvos no portal PROEIS.",
    "descricaoCompleta": "Extensão Manifest V3 que permite cadastrar modelos de agendamento, recuperar preferências e preparar o preenchimento de campos no portal PROEIS, inclusive por horário programado. O CAPTCHA e a confirmação final permanecem manuais. Repositório privado, com validação no portal real ainda necessária.",
    "tecnologias": [
      "JavaScript",
      "Chrome Extension",
      "Manifest V3"
    ],
    "categoria": "Automação",
    "status": "Em validação",
    "icone": "⚙️",
    "cor": "#d97706",
    "imagemUrl": "",
    "linkGithub": "",
    "linkDemo": "",
    "destaque": false
  },
  {
    "id": 7,
    "titulo": "Análise de Futebol",
    "descricaoCurta": "Projeto de API para processamento e análise de informações do futebol.",
    "descricaoCompleta": "Projeto de backend em JavaScript para estudos e análises relacionados a futebol, com repositório público de API. A interface web correspondente ainda não possui uma versão pública concluída.",
    "tecnologias": [
      "JavaScript",
      "API",
      "Dados esportivos"
    ],
    "categoria": "Dados & IA",
    "status": "Protótipo",
    "icone": "⚽",
    "cor": "#059669",
    "imagemUrl": "",
    "linkGithub": "https://github.com/wellingtmax/analise_de_futebol_api",
    "linkDemo": "",
    "destaque": false
  },
  {
    "id": 8,
    "titulo": "Karkara IA",
    "descricaoCurta": "Interface web Angular para um projeto de chatbot com inteligência artificial.",
    "descricaoCompleta": "Projeto de interface web em Angular dedicado à experiência de um chatbot de inteligência artificial. O repositório público permite acompanhar a estrutura do frontend; recursos de produção e disponibilidade pública do serviço não foram confirmados.",
    "tecnologias": [
      "Angular",
      "TypeScript",
      "Chatbot"
    ],
    "categoria": "Dados & IA",
    "status": "Protótipo",
    "icone": "🤖",
    "cor": "#9333ea",
    "imagemUrl": "",
    "linkGithub": "https://github.com/wellingtmax/karkara-ia-frontend",
    "linkDemo": "",
    "destaque": false
  },
  {
    "id": 9,
    "titulo": "App Clima",
    "descricaoCurta": "Aplicação web para consultar informações meteorológicas por meio de API.",
    "descricaoCompleta": "Projeto Angular de consulta de informações do tempo por integração com API. O código do frontend está disponível no GitHub.",
    "tecnologias": [
      "Angular",
      "TypeScript",
      "API"
    ],
    "categoria": "Sistemas Web",
    "status": "Projeto desenvolvido",
    "icone": "⛅",
    "cor": "#0284c7",
    "imagemUrl": "projetos/clima.jpeg",
    "linkGithub": "https://github.com/wellingtmax/app-clima",
    "linkDemo": "",
    "destaque": false
  },
  {
    "id": 10,
    "titulo": "Tetris Python",
    "descricaoCurta": "Recriação do clássico Tetris com lógica de jogo e interface gráfica em Python.",
    "descricaoCompleta": "Projeto de estudo em Python com movimentação de peças, detecção de colisões, pontuação e progressão de níveis. Código disponível em repositório público.",
    "tecnologias": [
      "Python",
      "Pygame",
      "Jogos"
    ],
    "categoria": "Jogos",
    "status": "Projeto desenvolvido",
    "icone": "🧩",
    "cor": "#4f46e5",
    "imagemUrl": "projetos/tetris.jpeg",
    "linkGithub": "https://github.com/wellingtmax/tetris_py",
    "linkDemo": "",
    "destaque": false
  }
];
