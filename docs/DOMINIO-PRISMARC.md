# Publicar o site em prismarc.com.br

Hoje `prismarc.com.br` aponta para um site no **Wix**, e este projeto é
publicado em `https://osmarsbarbosa.github.io/PrismaRC_Site/`. Este guia
transfere o domínio para o site deste repositório (GitHub Pages).

Quem faz cada etapa:

| Etapa | Onde | Quem |
|---|---|---|
| 1. Verificar o domínio no GitHub | GitHub (conta **OsmarSBarbosa**) + Wix | dono do repositório + quem administra o Wix |
| 2. Configurar o domínio no GitHub Pages | GitHub, repositório | dono do repositório (**OsmarSBarbosa**) |
| 3. Publicar a versão do site para o domínio | aceitar o branch `dominio-prismarc` no `main` | dono do repositório |
| 4. Apontar o DNS para o GitHub | painel do Wix | quem administra o Wix |
| 5. Ativar HTTPS | GitHub, repositório | dono do repositório |

> **Antes de começar:** o site do Wix sai do ar na etapa 4. Confira se há algo
> nele (textos, páginas, formulários, integrações) que ainda não existe neste
> projeto. O domínio não tem e-mail configurado (não há registro MX), então
> nenhuma caixa de e-mail é afetada.

---

## 1. Verificar o domínio na conta do GitHub (recomendado)

Impede que outra conta do GitHub use o seu domínio.

1. Logado como **OsmarSBarbosa**, abra **Settings** (da conta, não do repositório) →
   **Pages** → **Add a domain**.
2. Digite `prismarc.com.br` e clique em **Add domain**. O GitHub mostra um
   registro **TXT** com um nome parecido com
   `_github-pages-challenge-OsmarSBarbosa` e um valor (código).
3. No Wix, crie esse registro TXT (veja "Onde editar o DNS no Wix" abaixo):
   - **Tipo:** TXT
   - **Nome / Host:** `_github-pages-challenge-OsmarSBarbosa` (sem o domínio no fim)
   - **Valor:** o código exibido pelo GitHub
4. Volte ao GitHub e clique em **Verify**. Pode levar alguns minutos até o DNS
   atualizar; se falhar, tente de novo mais tarde.

## 2. Configurar o domínio no GitHub Pages

1. No repositório **PrismaRC_Site** → **Settings** → **Pages**.
2. Em **Custom domain**, digite `prismarc.com.br` e clique em **Save**.
3. O GitHub vai acusar que o DNS ainda não aponta para ele. **Isso é esperado**
   até a etapa 4. Deixe salvo.

## 3. Publicar a versão do site para o domínio

Aceite (merge) o branch **dominio-prismarc** no `main` (abrindo um PR dele).
Ele faz o site funcionar na raiz do domínio (`/`) em vez de `/PrismaRC_Site/`. O deploy leva cerca de
2 minutos (aba **Actions**).

> A partir daqui, o endereço antigo `osmarsbarbosa.github.io/PrismaRC_Site`
> passa a redirecionar para `prismarc.com.br`, que ainda abre o Wix até a etapa
> 4. Faça as etapas 3 e 4 em sequência.

## 4. Apontar o DNS para o GitHub (no Wix)

### Onde editar o DNS no Wix

O DNS do domínio é gerenciado pelo Wix (servidores `ns8/ns9.wixdns.net`).

1. Entre no Wix → menu da conta → **Domínios**.
2. Ao lado de `prismarc.com.br`, abra o menu **⋯** → **Gerenciar registros
   DNS** (os nomes podem variar um pouco).
3. Se o Wix não deixar editar o registro **A** do domínio raiz, é porque o
   domínio ainda está conectado ao site do Wix. Nesse caso, primeiro
   **desconecte o domínio do site** (em **Domínios** → **⋯**), depois edite os
   registros.

### Registros a configurar

**Remova** os registros atuais que apontam para o Wix:

- Registros **A** do domínio raiz (`@` / `prismarc.com.br`) com IPs
  `185.230.63.x`
- O **CNAME** de `www` que aponta para `cdn3.wixdns.net`

**Crie** estes registros:

| Tipo | Nome / Host | Valor |
|---|---|---|
| A | `@` (raiz) | `185.199.108.153` |
| A | `@` (raiz) | `185.199.109.153` |
| A | `@` (raiz) | `185.199.110.153` |
| A | `@` (raiz) | `185.199.111.153` |
| AAAA | `@` (raiz) | `2606:50c0:8000::153` |
| AAAA | `@` (raiz) | `2606:50c0:8001::153` |
| AAAA | `@` (raiz) | `2606:50c0:8002::153` |
| AAAA | `@` (raiz) | `2606:50c0:8003::153` |
| CNAME | `www` | `osmarsbarbosa.github.io` |

Os registros AAAA (IPv6) são opcionais, mas recomendados. Não altere o registro
TXT criado na etapa 1.

A propagação costuma levar de minutos a algumas horas (até 48 h em casos
raros). Durante esse período, alguns visitantes ainda verão o site do Wix;
ambos funcionam, então não há tela quebrada.

## 5. Ativar HTTPS

1. Em **Settings → Pages** do repositório, aguarde a mensagem de que o DNS está
   correto ("DNS check successful").
2. O GitHub emite o certificado automaticamente (pode levar até 1 hora).
3. Marque **Enforce HTTPS**.

## Conferência final

- [ ] `https://prismarc.com.br` abre o novo site, com cadeado (HTTPS)
- [ ] `https://www.prismarc.com.br` redireciona para `https://prismarc.com.br`
- [ ] `https://osmarsbarbosa.github.io/PrismaRC_Site/` redireciona para o domínio
- [ ] Imagens, planta e galeria carregam
- [ ] Depois de alguns dias sem problemas, cancele o plano pago do Wix se ele só
      servia a este site (o **domínio** em si não deve ser cancelado)

## Se precisar voltar ao Wix

1. No Wix, restaure os registros antigos (ou reconecte o domínio ao site do Wix,
   que recria os registros).
2. No GitHub, apague o **Custom domain** em **Settings → Pages**.
3. Reverta o merge do branch `dominio-prismarc` para o site voltar a funcionar em
   `osmarsbarbosa.github.io/PrismaRC_Site/`.
