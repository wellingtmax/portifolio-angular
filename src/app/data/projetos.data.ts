import { Projeto } from "../interface/projetoInterface";

export const MEUS_PROJETOS: Projeto[] = [
    {
        id: 1,
        titulo: 'Tetris Python',
        descricaoCurta: 'Clássico Tetris desenvolvido com lógica pura e interface gráfica.',
        descricaoCompleta: 'Projeto desenvolvido para praticar matrizes e colisão em Python. Possui sistema de níveis e pontuação.',
        tecnologias: ['Python', 'Pygame'],
        imagemUrl: 'projetos/tetris.jpeg', 
        linkGithub: 'https://github.com/wellingtmax/tetris_py.git',
        linkDemo: 'https://tetrispy--wellingtmax.replit.app/'
    },
    // para baixo e meus textes
    {
        id: 2,
        titulo: 'StartTreino',
        descricaoCurta: 'App de treino completo com acompanhamento de progresso.',
        descricaoCompleta: 'Sistema desenvolvido para gerenciar treinos e acompanhar o progresso dos usuários.',
        tecnologias: ['Angular', 'Node.js', 'MongoDB'],
        imagemUrl: 'projetos/starttreino.png', 
        linkGithub: 'https://github.com/wellingtmax/tetris_py.git',
        linkDemo: 'https://play.google.com/store/apps/details?id=br.com.starttreino.app&pcampaignid=web_share'
    },
    {
        id: 3,
        titulo: 'Cola&Troca',
        descricaoCurta: 'Sua plataforma digital de albuns e figurinhas.',
        descricaoCompleta: 'O Cola&Troca transforma o colecionismo em uma experiencia digital com albuns interativos, games, packs de figurinhas, chat global, trocas entre usuarios, sistema de XP, niveis e recompensas.',
        tecnologias: ['Angular', 'Firebase'],
        imagemUrl: 'projetos/colaetroca.png',
        linkGithub: 'https://github.com/wellingtmax/ecommerce_angular.git',
        linkDemo: 'https://www.colaetroca.com/home'

    },
    {
        id: 4,
        titulo: 'Chatbot IA',
        descricaoCurta: 'Chatbot inteligente para atendimento ao cliente.',
        descricaoCompleta: 'Projeto desenvolvido para criar um chatbot inteligente para atendimento ao cliente.',
        tecnologias: ['Python', 'NLP'],
        imagemUrl: 'projetos/chatbot.png',
        linkGithub: 'https://github.com/wellingtmax/chatbot_ia.git',
        linkDemo: 'https://chatbotia--wellingtmax.replit.app/'
    },
    {
        id: 5,
        titulo: 'App Clima',
        descricaoCurta: 'Aplicativo de previsão do tempo com API.',
        descricaoCompleta: 'Projeto desenvolvido para criar um aplicativo de previsão do tempo utilizando uma API de clima.',
        tecnologias: ['Flutter', 'API'],
        imagemUrl: 'projetos/clima.jpeg',
        linkGithub: 'https://github.com/wellingtmax/app-clima',
        linkDemo: 'https://stately-jalebi-5c13c7.netlify.app/'

    },
    {
        id: 6,
        titulo: 'StartPlantão',
        descricaoCurta: 'Organize sua rotina de plantões de forma simples.',
        descricaoCompleta: 'O StartPlantão foi desenvolvido para profissionais que trabalham com escalas, turnos e plantões e precisam reunir agenda, vínculos profissionais e controle financeiro em um único aplicativo.',
        tecnologias: ['Angular', 'Node.js', 'MongoDB'],
        imagemUrl: 'projetos/startplantao.png',
        linkGithub: 'https://github.com/wellingtmax',
        linkDemo: 'https://play.google.com/store/apps/details?id=br.com.jstech.startplantao&pcampaignid=web_share'

    }
]