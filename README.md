# JSTECH — Site institucional

Site institucional e vitrine dos aplicativos, sistemas e projetos digitais da **JSTECH**.

## Tecnologias

- Angular 19 (standalone)
- Angular Material (janelas de detalhes)
- CSS responsivo, sem biblioteca adicional de UI
- Renderização no servidor (SSR) conforme configuração original do repositório

## Rodar localmente

Requisitos: Node.js compatível com Angular 19 e npm.

```bash
npm ci
npm start
```

Acesse `http://localhost:4200`.

## Verificar compilação de produção

```bash
npm run build
```

## Publicar no GitHub Pages

O site está configurado para o endereço:

https://wellingtmax.github.io/portifolio-angular/

O **GitHub Pages** disponibiliza arquivos estáticos, não executa o servidor Node.js do Angular. O workflow publica apenas `dist/portifolio/browser`, incluindo as páginas pré-renderizadas.

1. No repositório do GitHub, abra **Settings → Pages**.
2. Em **Build and deployment → Source**, selecione **GitHub Actions**.
3. As alterações enviadas à branch `main` executam automaticamente `.github/workflows/deploy-pages.yml`.
4. Acompanhe **Actions → Publicar JSTECH no GitHub Pages** para confirmar a publicação.

O build utiliza `npm run build -- --base-href=/portifolio-angular/`. As imagens usam URLs relativas à base para funcionar também no desenvolvimento local. A publicação gera `404.html` para permitir que o Angular trate navegação direta em rotas.

Para testar localmente o mesmo build do Pages:

```bash
npm ci
npm run build -- --base-href=/portifolio-angular/
```

**Segurança:** a versão Angular 19 ainda possui avisos de `npm audit`. Planejar migração para uma versão suportada antes de ampliar as funcionalidades públicas. O Pages publica apenas a aplicação estática, não o servidor SSR.

## Organização

- `src/app/pages/home/` — apresentação institucional e produtos em destaque
- `src/app/pages/sobre/` — soluções, abordagem de trabalho e tecnologias
- `src/app/pages/projetos/` — catálogo pesquisável por categorias
- `src/app/pages/contato/` — canais de contato reais
- `src/app/data/projetos.data.ts` — conteúdo dos produtos e projetos
- `public/projetos/jstech.png` — símbolo oficial enviado pelo autor; cabeçalho, Sobre, rodapé e favicon
- `src/styles.css` — tokens da identidade JSTECH

## Orientações de manutenção

1. A identidade visual oficial JSTECH utiliza azul-ciano, azul elétrico, branco e fundo escuro. Use o mesmo símbolo da pasta `public/projetos/jstech.png` em toda a comunicação.
2. Mantenha as imagens reais dos produtos em `public/projetos/`.
3. Cadastre apenas URLs de demonstração e repositórios públicos que realmente correspondam a cada projeto.
4. Confirme os canais comerciais: o WhatsApp e o e-mail atuais foram preservados do site anterior.
5. Não exiba números de clientes, avaliações, depoimentos ou cases sem autorização/comprovação.
6. Os projetos ainda em desenvolvimento não devem aparecer como produtos disponíveis ao público.

## Observações

Esta proposta de redesign foi criada a partir da `main` após as atualizações do catálogo feitas pelo autor em 19/10/2026. A validação de produção deve ser realizada antes do merge/deploy.
