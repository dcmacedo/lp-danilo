# dcmacedo.com.br

Landing page profissional construída com Next.js App Router, React, TypeScript e CSS próprio. O site não depende de banco de dados nem de variáveis de ambiente para executar.

## Requisitos

- Node.js 20.9 ou superior
- npm
- Git (opcional, recomendado para versionamento)

## Executar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Validar antes de publicar

```bash
npm run lint
npm run build
npm run start
```

Depois do build, `npm run start` serve a versão de produção em http://localhost:3000.

## Personalizações prioritárias

1. Revise o texto de apresentação em `src/app/page.tsx` para refletir sua experiência real.
2. Confirme se `contato@dcmacedo.com.br` será o endereço público. O botão de contato abre o aplicativo de email, mas o endereço precisa existir para receber mensagens.
3. Atualize título, descrição e URL canônica em `src/app/layout.tsx` caso altere o domínio principal.
4. A fonte Manrope e a fonte DM Mono são carregadas do Google Fonts. O site mantém fontes de fallback se o serviço não estiver acessível.

## Publicação sugerida: Vercel

1. Crie um repositório Git e envie este projeto.
2. Importe o repositório no painel da Vercel.
3. Mantenha as configurações padrão de build do Next.js.
4. Adicione `dcmacedo.com.br` e, se desejar, `www.dcmacedo.com.br` nas configurações de domínio do projeto.
5. Configure no provedor onde o domínio foi comprado os registros DNS exatamente conforme os valores indicados pela Vercel.
6. Aguarde a validação do DNS e a emissão do certificado HTTPS.
7. Teste o domínio raiz, a versão `www` se configurada, `/robots.txt` e `/sitemap.xml`.

Não altere os registros de email existentes no DNS sem confirmar a configuração atual, pois isso pode interromper o recebimento de mensagens.

## Observações

- Não há formulário de contato backend nesta versão. O contato usa `mailto:`.
- Não há analytics, cookies de rastreamento ou integrações externas de negócio.
- O conteúdo é uma primeira proposta editorial e deve ser revisado antes da publicação para garantir que as descrições representem corretamente a experiência e os serviços oferecidos.

## Sites para analisar
- https://lympdesign.com/
- https://www.next4.com.br/
- https://www.agenciafante.com.br/
