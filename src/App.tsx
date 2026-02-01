
import React from "react";
import "./styles.css";


type Block =
  | { kind: "title"; text: string }
  | { kind: "text"; text: string }
  | { kind: "sep" }
  | { kind: "bullets"; items: string[] }
  | { kind: "subbullets"; items: string[] };

function Sep() {
  return <div className="sep">________________________________________</div>;
}

function TextLine({ text }: { text: string }) {
  return <div className="line">{text}</div>;
}

function Bullets({ items }: { items: string[] }) {
  return (
    <div className="bullets">
      {items.map((t, i) => (
        <div className="line" key={i}>
          {t}
        </div>
      ))}
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <details className="accordion" open={false}>
      <summary className="accordionSummary">{title}</summary>
      <div className="accordionBody">{children}</div>
    </details>
  );
}

export default function App() {
  return (
    <div className="page">
      <div className="card">
        {/* 🔷 SOCIETÀ DI MANAGEMENT */}
        <TextLine text="🔷 SOCIETÀ DI MANAGEMENT" />
        <TextLine text="FACILIS Srl" />
        <TextLine text="Facilitazione tecnico-strategica a tutela dell’Assemblea Condominiale" />
        <TextLine text="La società opera esclusivamente nell’interesse della committenza condominiale e delle decisioni assembleari." />
        <Sep />

        {/* ✅ TITOLO DELLA FUNZIONE */}
        <TextLine text="✅ TITOLO DELLA FUNZIONE " />
        <TextLine text="Facilitazione tecnico-strategica a tutela dell’Assemblea Condominiale" />
        <TextLine text="(in coordinamento con Amministratore e Direzione Lavori)" />
        <Sep />

        {/* 🔹 OFFERTA */}
        <Section title="🔹 OFFERTA">
          <TextLine text="Cosa faccio" />
          <TextLine text="Svolgo una funzione di facilitazione tecnico-strategica a tutela dell’assemblea condominiale, affiancando l’amministratore di condominio e la Direzione Lavori affinché le decisioni assembleari siano consapevoli, motivate e basate su elementi tecnici ed economici verificabili." />
          <TextLine text="Il mio ruolo nasce per garantire che l’assemblea:" />
          <Bullets
            items={[
              "•\tcomprenda realmente l’opera proposta",
              "•\tvaluti la congruità dei prezzi",
              "•\tdecida con piena cognizione di causa, prima di impegnare risorse rilevanti.",
            ]}
          />
          <TextLine text="Intervengo quando:" />
          <Bullets
            items={[
              "•\tin assemblea emergono dubbi sulla congruità dei prezzi rispetto alla natura dell’opera",
              "•\tl’assemblea richiede una visione fattuale e concreta dell’intervento da realizzare",
              "•\tl’amministratore e la Direzione Lavori necessitano di un supporto indipendente per rappresentare in modo chiaro le scelte tecniche ed economiche all’assemblea",
            ]}
          />
        </Section>

        <Section title="Come lavoro">
          <Bullets
            items={[
              "•\tOpero nell’interesse primario dell’assemblea condominiale, lavorando in stretta collaborazione e coordinato con:",
              "o\tAmministratore di condominio",
              "o\tDirezione Lavori",
              "o\tAssemblea, nelle fasi deliberative",
              "•\tFavorisco il lavoro di squadra, con l’obiettivo di:",
              "o\trendere comprensibili all’assemblea i contenuti tecnici",
              "o\tchiarire le implicazioni economiche delle scelte",
              "o\tevidenziare rischi e criticità potenziali prima che emergano in cantiere",
            ]}
          />
        </Section>

        <Section title="Attività principali">
          <Bullets
            items={[
              "•\tVerifica della congruità tra prezzo preventivato e natura dell’opera, a tutela dell’assemblea",
              "•\tAnalisi tecnica ed economica dei preventivi e dei computi",
              "•\tChiarimento puntuale di ciò che è incluso ed escluso nelle lavorazioni",
              "•\tSupporto all’assemblea nella comprensione delle alternative decisionali",
              "•\tAffiancamento ad amministratore e Direzione Lavori per conto dell’assemblea in caso di derive del cantiere, in termini:",
              "o\teconomici",
              "o\ttecnici",
              "o\tdi pianificazione",
            ]}
          />
        </Section>

        <Section title="Valore per l’Assemblea Condominiale">
          <Bullets
            items={[
              "•\tDecisioni assembleari basate su fatti, dati e verifiche, non su percezioni",
              "•\tRiduzione del rischio di extracosti e contestazioni future",
              "•\tMaggiore trasparenza tra assemblea, amministratore e Direzione Lavori",
              "•\tPrevenzione delle criticità prima che diventino contenzioso",
            ]}
          />
        </Section>

        <Section title="Cosa NON faccio">
          <Bullets
            items={[
              "•\tNon sostituisco la Direzione Lavori",
              "•\tNon eseguo opere",
              "•\tNon rappresento imprese o fornitori",
            ]}
          />
          <TextLine text="👉 Rappresento esclusivamente l’interesse dell’assemblea condominiale nella qualità delle decisioni assunte." />
          <TextLine text="5️⃣ Perché questo posizionamento :" />
          <Bullets
            items={[
              "•\tEntro prima dei problemi",
              "•\tLavoro con tutti, non contro qualcuno",
              "•\tRiduco i conflitti futuri",
              "•\tSono utile anche quando “va tutto bene”",
            ]}
          />
        </Section>

        <Section title="Ruoli e responsabilità nel progetto">
          <TextLine text="Ruoli e responsabilità nel progetto" />
          <Sep />

          <TextLine text="🏢 ASSEMBLEA CONDOMINIALE" />
          <TextLine text="Decide" />
          <Bullets
            items={[
              "•\tApprova gli interventi e gli impegni economici",
              "•\tDelibera sulla base delle informazioni ricevute",
              "•\tÈ il soggetto titolare delle decisioni finali",
            ]}
          />
          <TextLine text="👉 Deve poter decidere in modo consapevole e informato." />
          <Sep />

          <div className="twoCols">
            <div className="colBox">
              <TextLine text="🧾 AMMINISTRATORE DI CONDOMINIO" />
              <TextLine text="Gestisce" />
              <Bullets
                items={[
                  "•\tConvoca e coordina l’assemblea",
                  "•\tCura gli aspetti amministrativi e contrattuali",
                  "•\tÈ il referente formale del Condominio",
                  "•\tAttua le decisioni assembleari",
                ]}
              />
              <TextLine text="👉 Garantisce la corretta gestione amministrativa del processo." />
            </div>

            <div className="colBox">
              <TextLine text="🛠 DIREZIONE LAVORI" />
              <TextLine text="Progetta e controlla l’esecuzione" />
              <Bullets
                items={[
                  "•\tRedige il progetto, il computo metrico, e i documenti tecnici per permettere ai fornitori di presentare un preventivo sulla base del computo metrico.",
                  "•\tDirige e controlla i lavori in cantiere",
                  "•\tVerifica la corretta esecuzione a regola d’arte",
                  "•\tCertifica stati di avanzamento e conformità",
                ]}
              />
              <TextLine text="👉 È responsabile degli aspetti tecnici ed esecutivi." />
            </div>
          </div>

          <Sep />

          <TextLine text="🧭 FACILITAZIONE TECNICO-STRATEGICA (FACILIS Srl)" />
          <TextLine text="Tutela la qualità delle decisioni dell’Assemblea" />
          <Bullets
            items={[
              "•\tVerifica la congruità tra prezzi e natura dell’opera",
              "•\tTraduce contenuti tecnici ed economici in elementi comprensibili all’assemblea",
              "•\tFavorisce il lavoro di squadra tra assemblea, amministratore e DL",
              "•\tAffianca amministratore e Direzione Lavori per conto dell’assemblea",
              "•\tSupporta la gestione delle criticità economiche, tecniche e di pianificazione",
            ]}
          />
          <TextLine text="👉 Non decide, non esegue, non sostituisce nessuno:" />
          <TextLine text="rende possibile una decisione consapevole." />
          <TextLine text="________________________________________" />

          <TextLine text="❌ COSA NON FA LA FACILITAZIONE" />
          <Bullets
            items={[
              "•\tNon sostituisce la Direzione Lavori",
              "•\tNon assume responsabilità esecutive",
              "•\tNon rappresento imprese o fornitori",
            ]}
          />
        </Section>
      </div>
    </div>
  );
}
