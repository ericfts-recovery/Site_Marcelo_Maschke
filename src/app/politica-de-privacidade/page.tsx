import type { Metadata } from "next";
import type { ReactNode } from "react";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = buildMetadata({
  title: "Política de privacidade",
  description: `Como o ${siteConfig.name} coleta, usa e protege seus dados pessoais, em conformidade com a LGPD (Lei nº 13.709/2018).`,
  path: "/politica-de-privacidade",
});

/**
 * Modelo de política alinhado à LGPD. Recomenda-se revisão jurídica e o
 * preenchimento dos dados do controlador antes da publicação.
 */
export default function PrivacyPage() {
  const { name, contact } = siteConfig;

  return (
    <>
      <PageHero eyebrow="LGPD" title="Política de privacidade">
        <p className="text-ash mt-6">Última atualização: [DATA DA PUBLICAÇÃO]</p>
      </PageHero>

      <article className="container-page text-stone [&_h2]:text-ink [&_strong]:text-ink max-w-3xl py-16 text-lg sm:py-24 [&_h2]:mt-14 [&_h2]:mb-4 [&_h2]:text-4xl [&_li]:mt-2 [&_p]:mt-4 [&_strong]:font-medium [&_ul]:list-disc [&_ul]:pl-6">
        <p>
          Esta política explica como o <strong>{name}</strong> trata os dados pessoais de quem
          visita este site ou entra em contato conosco, de acordo com a Lei Geral de Proteção de
          Dados (Lei nº 13.709/2018 — LGPD).
        </p>

        <Section title="1. Quem é o controlador">
          <p>
            [RAZÃO SOCIAL], inscrita no CNPJ sob o nº [CNPJ], com sede em [ENDEREÇO COMPLETO],
            responsável pelo {name}.
          </p>
        </Section>

        <Section title="2. Quais dados coletamos">
          <ul>
            <li>
              <strong>Formulário de agendamento:</strong> nome, número de WhatsApp, serviço de
              interesse, período preferido e mensagem opcional.
            </li>
            <li>
              <strong>Contato pelo WhatsApp:</strong> as informações que você nos enviar na
              conversa.
            </li>
            <li>
              <strong>Navegação (somente com seu consentimento):</strong> dados de uso coletados por
              cookies de análise, como páginas visitadas, dispositivo e localização aproximada, de
              forma agregada.
            </li>
          </ul>
          <p>
            Não solicitamos dados sensíveis pelo site. Por favor, não envie informações de saúde no
            campo de mensagem.
          </p>
        </Section>

        <Section title="3. Para que usamos seus dados">
          <ul>
            <li>
              Responder ao seu pedido de agendamento e confirmar horários (base legal: consentimento
              e procedimentos preliminares a contrato).
            </li>
            <li>
              Entender o uso do site para melhorá-lo, apenas se você aceitar os cookies de análise
              (base legal: consentimento).
            </li>
            <li>Cumprir obrigações legais, quando aplicável.</li>
          </ul>
        </Section>

        <Section title="4. Com quem compartilhamos">
          <p>
            Não vendemos seus dados. Eles podem ser processados por fornecedores que nos ajudam a
            operar o site, sob contrato e apenas para essa finalidade:
          </p>
          <ul>
            <li>Hospedagem do site: [VERCEL INC. OU OUTRO PROVEDOR].</li>
            <li>Envio de e-mails do formulário: [RESEND OU OUTRO PROVEDOR].</li>
            <li>Análise de audiência, se você consentir: Google Analytics (Google LLC).</li>
          </ul>
          <p>
            Alguns desses fornecedores podem armazenar dados fora do Brasil, com as salvaguardas
            previstas na LGPD.
          </p>
        </Section>

        <Section title="5. Por quanto tempo guardamos">
          <p>
            Os dados do formulário são mantidos pelo tempo necessário para atender ao seu pedido e
            por até [PRAZO, ex.: 12 meses], salvo obrigação legal de guarda por prazo maior.
          </p>
        </Section>

        <Section title="6. Cookies">
          <p>
            Usamos cookies estritamente necessários para o funcionamento do site e, somente com o
            seu consentimento, cookies de análise. Você pode mudar sua escolha a qualquer momento
            pelo link “Preferências de cookies”, no rodapé.
          </p>
        </Section>

        <Section title="7. Seus direitos">
          <p>Você pode, a qualquer momento, solicitar:</p>
          <ul>
            <li>confirmação e acesso aos seus dados;</li>
            <li>correção de dados incompletos ou desatualizados;</li>
            <li>anonimização, bloqueio ou eliminação de dados desnecessários;</li>
            <li>portabilidade e informação sobre compartilhamentos;</li>
            <li>revogação do consentimento.</li>
          </ul>
        </Section>

        <Section title="8. Como falar com a gente">
          <p>
            Encarregado pelo tratamento de dados: [NOME DO ENCARREGADO]. Contato:{" "}
            <strong>{contact.email}</strong>. Você também pode procurar a Autoridade Nacional de
            Proteção de Dados (ANPD).
          </p>
        </Section>
      </article>
    </>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
