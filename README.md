# Marcelo Maschke Hair Salon — site institucional

Site do salão com foco em **conversão (WhatsApp + pré-agendamento)**, **SEO local** e **design editorial premium** (preto, cinza claro, branco e dourado fosco).

## Stack

- Next.js 16 (App Router, Cache Components, Turbopack) + TypeScript estrito
- Tailwind CSS v4 com design tokens em variáveis CSS (`src/app/globals.css`)
- React Hook Form + Zod (o mesmo schema valida no navegador e no servidor)
- Server Action + Resend para o formulário
- Fontes auto-hospedadas via `next/font/local` (Cormorant Garamond + Jost, licença OFL)

## Como rodar

```bash
npm install
cp .env.example .env.local   # preencha as variáveis
npm run dev                  # http://localhost:3000
```

Scripts úteis: `npm run build`, `npm run lint`, `npm run typecheck`, `npm run format`.

## Variáveis de ambiente

| Variável               | Obrigatória       | Uso                                                    |
| ---------------------- | ----------------- | ------------------------------------------------------ |
| `NEXT_PUBLIC_SITE_URL` | Sim (produção)    | Domínio final: canonical, sitemap, Open Graph, JSON-LD |
| `NEXT_PUBLIC_GA_ID`    | Não               | GA4. Carrega **apenas** após consentimento de cookies  |
| `RESEND_API_KEY`       | Para o formulário | Chave do Resend (somente servidor)                     |
| `BOOKING_TO_EMAIL`     | Para o formulário | Quem recebe os pedidos                                 |
| `BOOKING_FROM_EMAIL`   | Para o formulário | Remetente com domínio verificado no Resend             |

Sem as variáveis do Resend o formulário continua funcionando no front, mas mostra uma mensagem amigável com o botão do WhatsApp em vez de enviar.

## Onde editar o conteúdo

| O quê                                                        | Arquivo                   |
| ------------------------------------------------------------ | ------------------------- |
| Nome, contato, endereço, horários, Instagram, números        | `src/content/site.ts`     |
| Serviços (textos, FAQ, SEO, mensagem de WhatsApp de cada um) | `src/content/services.ts` |
| Textos da home, depoimentos, galeria, FAQ geral              | `src/content/home.ts`     |
| Cores, fontes, espaçamentos, animações                       | `src/app/globals.css`     |

### Fotos

Enquanto não houver fotos, o site mostra molduras elegantes com a legenda do que deve entrar ali. Para trocar:

1. Coloque as imagens em `public/images/` (JPG/PNG grandes; o Next gera AVIF/WebP automaticamente).
2. Preencha o campo `image` (ou `heroImage`, `portrait`, `bridalImage`) com `{ src, alt, width, height }`.

## Estrutura

```
src/
  app/            rotas, layout, metadata, sitemap, robots, OG image, 404/erro
    agendar/      página + Server Action do pré-agendamento
    servicos/[slug]/  uma página por serviço (geradas no build)
  components/
    layout/       header, footer, barra mobile, cookies, analytics, mapa
    sections/     seções da home e das páginas internas
    ui/           botões, ícones, molduras, títulos, FAQ, JSON-LD
    booking/      formulário
  content/        todo o conteúdo do cliente (reaproveitável)
  lib/            seo, schema (JSON-LD), analytics, consent, whatsapp, validação
  services/       integrações (e-mail)
  types/          tipos de conteúdo
```

## Eventos de analytics

`whatsapp_click`, `phone_click`, `instagram_click`, `booking_submit`, `booking_error`, `map_open` — todos com o parâmetro `location` (e `service`, quando houver). Configure-os como conversões no GA4.

## Checklist de lançamento (dados do cliente)

- [ ] `src/content/site.ts`: WhatsApp, telefone, e-mail, endereço completo, CEP, horários (preencha também `schema` de cada horário para o Google), link do Google Meu Negócio, coordenadas
- [ ] Cidade no lugar de `[CIDADE]` (hero e títulos de SEO dos serviços)
- [ ] Bio do Marcelo (`src/content/home.ts > aboutContent`)
- [ ] Números reais (anos, clientes, nota no Google) ou remover o bloco
- [ ] Depoimentos reais, com autorização das clientes
- [ ] Revisar com o Marcelo técnicas/métodos de mechas e mega hair e o protocolo de biossegurança das unhas
- [ ] Fotos reais: retrato, salão, noiva e galeria
- [ ] Logo oficial em SVG (substituir `src/components/ui/logo.tsx` e `src/app/icon.svg`)
- [ ] Política de privacidade: razão social, CNPJ, encarregado, prazos (recomenda-se revisão jurídica)
- [ ] Domínio + `NEXT_PUBLIC_SITE_URL`, Resend com domínio verificado, GA4
- [ ] Cadastrar o site no Google Search Console e enviar o `sitemap.xml`

## Deploy (Vercel)

1. Suba o repositório no GitHub e importe na Vercel.
2. Cadastre as variáveis de ambiente (Production e Preview).
3. Aponte o domínio. HTTPS e HSTS ficam ativos automaticamente.

> Rate limit do formulário é em memória (por instância). Se o volume crescer, troque `src/lib/rate-limit.ts` por Upstash Redis.
