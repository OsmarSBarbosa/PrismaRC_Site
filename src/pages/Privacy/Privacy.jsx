import { privacyController, retentionMonths } from '../../config';
import { asset } from '../../utils/asset';
import Footer from '../../components/Footer/Footer';
import './Privacy.css';

const UPDATED_AT = '11 de outubro de 2026';

function Field({ label, value }) {
  return (
    <li>
      <strong>{label}:</strong> {value || <em className="privacy__missing">a definir</em>}
    </li>
  );
}

// Política de Privacidade (LGPD). Descreve exatamente o que o rastreamento de
// cliques (src/utils/tracking.js) coleta; mantenha os dois em sincronia.
export default function Privacy() {
  const home = import.meta.env.BASE_URL;
  const c = privacyController;

  return (
    <>
      <header className="privacy__header">
        <div className="container privacy__header-inner">
          <a href={home} aria-label="Prisma Empresarial — página inicial">
            <img src={asset('brand/logo-prisma.png')} alt="Prisma Empresarial" />
          </a>
          <a href={home} className="privacy__back">
            ← Voltar ao site
          </a>
        </div>
      </header>

      <main className="privacy section">
        <article className="container privacy__content">
          <span className="section-tag">LGPD</span>
          <h1 className="section-title">Política de Privacidade</h1>
          <p className="privacy__updated">Última atualização: {UPDATED_AT}</p>

          <p>
            Esta política explica quais dados o site do Prisma Empresarial coleta, para quê e
            quais são os seus direitos, conforme a Lei Geral de Proteção de Dados (Lei
            13.709/2018 — LGPD).
          </p>

          <h2>1. Quem é o responsável pelos seus dados</h2>
          <ul>
            <Field label="Razão social" value={c.razaoSocial} />
            <Field label="CNPJ" value={c.cnpj} />
            <Field label="Endereço" value={c.endereco} />
            <Field label="Contato para assuntos de privacidade" value={c.email} />
          </ul>

          <h2>2. Quais dados coletamos</h2>
          <h3>Quando você clica em um botão de WhatsApp ou de telefone</h3>
          <ul>
            <li>Data e hora do clique, qual botão foi clicado e em qual página.</li>
            <li>
              Um <strong>código de referência</strong> (ex.: PR-7K3F), que também é incluído na
              mensagem do WhatsApp.
            </li>
            <li>
              Origem da visita: o site de onde você veio e os parâmetros do anúncio que o trouxe
              (por exemplo, campanha e anúncio, e os identificadores de clique do LinkedIn, do
              Google e da Meta).
            </li>
            <li>
              Dados do dispositivo: tipo (celular, tablet ou computador), sistema operacional,
              navegador, tamanho da tela, idioma e fuso horário.
            </li>
            <li>
              Uso da página: tempo até o clique, quanto da página foi rolada e quais seções foram
              vistas.
            </li>
            <li>
              Um identificador aleatório do seu navegador, o número de visitas e a data da
              primeira visita (não identificam você pelo nome).
            </li>
            <li>
              Seu <strong>endereço IP</strong> e a <strong>localização aproximada</strong>{' '}
              estimada a partir dele (cidade, estado, país, CEP e coordenadas aproximadas), além
              da operadora ou organização da conexão. Não usamos o GPS do seu aparelho.
            </li>
          </ul>

          <h3>Quando você nos envia uma mensagem pelo WhatsApp</h3>
          <p>
            Recebemos seu número, seu nome de perfil e o conteúdo da conversa. O código de
            referência da mensagem nos permite relacionar a conversa aos dados do clique acima.
          </p>

          <h3>Ao navegar pelo site</h3>
          <p>
            O serviço de hospedagem registra dados técnicos de acesso (como IP e data/hora) para
            funcionamento e segurança. As fontes do site e o mapa de localização são carregados
            de servidores do Google.
          </p>

          <h2>3. Para que usamos os dados</h2>
          <ul>
            <li>
              Medir o alcance e o resultado das nossas campanhas: quais anúncios, canais e regiões
              geram interesse.
            </li>
            <li>Atender o seu contato, sabendo por onde você conheceu o empreendimento.</li>
            <li>Melhorar o conteúdo e o funcionamento do site.</li>
            <li>Garantir a segurança do site e prevenir abusos.</li>
          </ul>

          <h2>4. Base legal</h2>
          <p>
            Tratamos esses dados com base no nosso <strong>legítimo interesse</strong> em medir
            e melhorar nossas ações de divulgação (art. 7º, IX, da LGPD) e, quando você entra em
            contato, para atender a sua solicitação e negociar a aquisição de um lote (art. 7º,
            V).
          </p>

          <h2>5. Com quem compartilhamos</h2>
          <p>Não vendemos seus dados. Eles são tratados com o apoio de:</p>
          <ul>
            <li>
              <strong>Google</strong> (Planilhas Google e Apps Script), onde os registros de
              cliques ficam armazenados; e Google Fonts e Google Maps.
            </li>
            <li>
              <strong>ipwhois.io</strong>, que recebe o seu endereço IP para informar a
              localização aproximada.
            </li>
            <li>
              <strong>WhatsApp (Meta)</strong>, pelo qual a conversa acontece.
            </li>
            <li>
              <strong>GitHub</strong>, que hospeda o site.
            </li>
          </ul>
          <p>
            Alguns desses fornecedores mantêm servidores fora do Brasil. Nesses casos, a
            transferência internacional segue o art. 33 da LGPD.
          </p>

          <h2>6. Dados guardados no seu navegador</h2>
          <p>
            Guardamos no armazenamento local do navegador o identificador aleatório, o número de
            visitas, a data da primeira visita e o registro de que você viu o aviso de
            privacidade. A origem da visita e a localização aproximada ficam apenas até você
            fechar o navegador. Você pode apagar esses dados a qualquer momento nas
            configurações do navegador (limpar dados do site).
          </p>

          <h2>7. Por quanto tempo guardamos</h2>
          <p>
            Os registros de cliques são guardados por até {retentionMonths} meses e depois
            excluídos ou anonimizados, salvo obrigação legal de guarda por mais tempo.
          </p>

          <h2>8. Seus direitos</h2>
          <p>
            Você pode, a qualquer momento, pedir: confirmação de que tratamos seus dados; acesso;
            correção; anonimização, bloqueio ou eliminação de dados desnecessários; portabilidade;
            informação sobre com quem compartilhamos; e se opor ao tratamento (art. 18 da LGPD).
          </p>
          <p>
            Para isso, escreva para{' '}
            {c.email ? (
              <a href={`mailto:${c.email}`}>{c.email}</a>
            ) : (
              <em className="privacy__missing">a definir</em>
            )}
            . Se tiver o código de referência da sua mensagem (ex.: PR-7K3F), informe-o para
            localizarmos o registro mais rápido. Você também pode reclamar à Autoridade Nacional
            de Proteção de Dados (ANPD).
          </p>

          <h2>9. Alterações desta política</h2>
          <p>
            Esta política pode ser atualizada. A versão vigente estará sempre nesta página, com a
            data da última atualização.
          </p>
        </article>
      </main>

      <Footer />
    </>
  );
}
