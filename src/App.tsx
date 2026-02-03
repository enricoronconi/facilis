
import React from "react";
import "./styles.css";
import logo from "./assets/logo.png";
import sitoInCostruzione from "./assets/sitoInCostruzione.png";




function Sep() {
  return <div className="sep">___________________________________________________________________</div>;
}

function Sep2() {
  return <div className="sep">_____________________________________________________________________________________________________________________________________________</div>;
}



function TextLine({ children }: { children: React.ReactNode }) {
  return <div className="line">{children}</div>;
}



function Bullets({ items }: { items: React.ReactNode[] }) {
  return (
    <div className="bullets">
      {items.map((item, i) => (
        <div className="line" key={i}>
          {item}
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
      <div className="card" style={{ position: "relative" }}>
        <img
          src={logo}
          alt="FacilisManagER Srl"
          style={{
            position: "absolute",
            top: 8,
            right: 16,
            height: 60,       // cambia qui se lo vuoi più grande/piccolo
            width: "auto",
            borderRadius: 8,  // opzionale
          }}
        />
        <div className="under-construction">
        <img
          src={sitoInCostruzione}
          alt="Sito in costruzione"
        />
        </div>

        {/* 🔷 SOCIETÀ DI MANAGEMENT */}
        <div className="line"> 🏛️ <strong>FacilisManagER Srl</strong></div>
        <div className="line">       <strong>SOCIETÀ DI MANAGEMENT</strong></div>
              <TextLine>                                   </TextLine>
              <TextLine>    <strong>Facilitazione</strong> tecnico-strategica a <strong>tutela</strong> dell’Assemblea Condominiale. </TextLine>
              <TextLine>    La società opera esclusivamente <strong>nell’interesse</strong> della committenza <strong>condominiale</strong> e</TextLine>
              <TextLine>    delle decisioni assembleari.</TextLine>
        <Sep2/>

        {/* ✅ TITOLO DELLA FUNZIONE */}
        <div className="line"><strong>🎯 FUNZIONE</strong></div>
        <TextLine>        <strong>Facilitazione</strong> tecnico-strategica a <strong>tutela</strong> dell’Assemblea <strong>Condominiale</strong></TextLine>
        <TextLine>        (in coordinamento con Amministratore e Direzione Lavori).</TextLine>
        <Sep2 />

        {/* 🔹 OFFERTA */}
        <Section title="⚙️ OFFERTA">
          <TextLine><strong>Cosa faccio</strong></TextLine>
          <TextLine>Svolgo una funzione di <strong>facilitazione tecnico-strategica</strong> a tutela dell’assemblea condominiale, <strong>affiancando l’amministratore</strong> di condominio e la <strong>Direzione Lavori</strong> affinché le <strong>decisioni</strong> assembleari siano consapevoli, <strong>motivate</strong> e basate su elementi <strong>tecnici ed economici verificabili</strong>.</TextLine>
          <TextLine>Il mio <strong>ruolo</strong> nasce per garantire che l’assemblea:</TextLine>
          <Bullets
            items={[
              <>• comprenda realmente l’opera proposta,</>,
              <>• valuti la <strong>congruità dei prezzi</strong>,</>,
              <>• <strong>decida</strong> con piena cognizione di causa, <strong>prima di impegnare risorse rilevanti</strong>.</>,
            ]}
          />
          <TextLine><strong>Intervengo quando:</strong></TextLine>
          <Bullets
            items={[
              <>• in assemblea emergono <strong>dubbi</strong> sulla <strong>congruità dei prezzi</strong> rispetto alla natura dell’opera,</>,
              <>• l’assemblea richiede una visione fattuale e concreta dell’intervento da realizzare,</>,
              <>• l’amministratore e la Direzione Lavori necessitano di un <strong>supporto indipendente</strong> per rappresentare in modo chiaro le <strong>scelte tecniche ed economiche</strong> all’assemblea. </>,
            ]}
          />
        </Section>

        <Section title="🤝 Come lavoro">
          <Bullets
            items={[
              <>• Opero <strong>nell’interesse primario dell’assemblea condominiale</strong>, lavorando in stretta <strong>collaborazione</strong> e coordinato con:</>,
              <>• Amministratore di condominio,</>,
              <>• Direzione Lavori,</>,
              <>• Assemblea, nelle fasi deliberative,</>,
              <>        </>,
              <>Favorisco il <strong>lavoro di squadra</strong>, con l’obiettivo di:</>,
              <>   • rendere comprensibili all’assemblea i contenuti tecnici,</>,
              <>   • chiarire le implicazioni economiche delle scelte,</>,
              <>   • <strong>evidenziare rischi e criticità</strong> potenziali prima che emergano in cantiere.</>,
            ]}
          />
        </Section>

        <Section title="📊 Attività principali">
          <Bullets
            items={[
              <>• Verifica della <strong>congruità tra prezzo preventivato</strong> e natura dell’opera, a <strong>tutela dell’assemblea.</strong></>,
              <>• Analisi <strong>tecnica ed economica</strong> dei preventivi e dei computi.</>,
              <>• Chiarimento puntuale di ciò che è incluso ed escluso nelle lavorazioni.</>,
              <>• Supporto all’assemblea nella comprensione delle alternative decisionali.</>,
              <><strong>Affiancamento</strong> ad amministratore e Direzione Lavori per <strong>conto dell’assemblea</strong> in caso di derive del cantiere, in termini:</>,
              <>• <strong>economici,</strong></>,
              <>• <strong>tecnici,</strong></>,
              <>• di <strong>pianificazione</strong>.</>,
            ]}
          />
        </Section>

        <Section title="🛡️ Valore per l’Assemblea Condominiale">
          <Bullets
            items={[
              <>• <strong>Decisioni</strong> assembleari basate su <strong>fatti, dati</strong> e verifiche, non su percezioni.</>,
              <>• <strong>Riduzione del rischio</strong> di extracosti e contestazioni future.</>,
              <>• Maggiore <strong>trasparenza</strong> tra assemblea, amministratore e Direzione Lavori.</>,
              <>• <strong>Prevenzione</strong> delle criticità prima che diventino contenzioso.</>,
            ]}
          />
        </Section>

        <Section title=" ❌Cosa NON faccio">
          <Bullets
            items={[
              <>• Non sostituisco la Direzione Lavori.</>,
              <>• Non eseguo opere.</>,
              <>• Non rappresento imprese o fornitori.</>,
            ]}
          />
          <TextLine>👉 Rappresento esclusivamente <strong>l’interesse dell’assemblea condominiale</strong> nella qualità delle decisioni assunte.</TextLine>
          <TextLine>                                              </TextLine>
          <TextLine> <strong>Perché questo posizionamento</strong> :</TextLine>
          <Bullets
            items={[               
              <>• Entro <strong>prima dei problemi</strong></>,
              <>• <strong>Lavoro con tutti</strong>, non contro qualcuno</>,
              <>• Riduco i conflitti futuri</>,
              <>• Sono utile anche quando “va tutto bene”</>,
            ]}
          />
        </Section>

        <Section title="📎 Ruoli e responsabilità nel progetto">
          <Sep2 /> 
          <TextLine><strong>🏢 ASSEMBLEA CONDOMINIALE </strong></TextLine>
          <TextLine>      <strong>Decide</strong></TextLine>
          <Bullets
            items={[
              <>• <strong>Approva</strong> gli interventi e gli impegni economici.</>,
              <>• <strong>Delibera</strong> sulla base delle informazioni ricevute.</>,
              <>• È il soggetto <strong>titolare</strong> delle <strong>decisioni</strong> finali.</>,
            ]}
          />
          <TextLine>👉 Deve <strong>poter decidere</strong> in modo <strong>consapevole</strong> e informato.</TextLine>
          <Sep />

          <div className="twoCols">
            <div className="colBox">
              <TextLine><strong>🧾 AMMINISTRATORE DI CONDOMINIO</strong></TextLine> 
              <TextLine>     <strong>Gestisce</strong> </TextLine>
              <Bullets
                items={[
                  <>• Convoca e coordina l’assemblea.</>,
                  <>• Cura gli aspetti amministrativi e contrattuali.</>,
                  <>• È il <strong>referente formale</strong> del Condominio.</>,
                  <>• Attua le decisioni assembleari.</>,
                ]}
              />
              <TextLine>👉 <strong>Garantisce la corretta gestione</strong> amministrativa del processo.</TextLine>
            </div>

            <div className="colBox">
              <TextLine> <strong>🛠 DIREZIONE LAVORI</strong></TextLine>
              <TextLine>      <strong>Progetta e controlla l’esecuzione</strong></TextLine>
              <Bullets
                items={[
                  <>• <strong>Redige</strong> il progetto, il computo metrico, e i documenti</>,
                  <>   tecnici per <strong>permettere ai fornitori</strong> di presentare</>,
                  <>   un <strong>preventivo</strong> sulla base del <strong>computo metrico</strong>.</>,
                  <>• <strong>Dirige e controlla</strong> i lavori in cantiere.</>,
                  <>• <strong>Verifica la corretta esecuzione a regola d’arte.</strong></>,
                  <>• <strong>Certifica</strong> stati di avanzamento e conformità.</>,
                ]}
              />
              <TextLine>👉 È <strong>responsabile degli aspetti tecnici</strong> ed esecutivi.</TextLine>
            </div>
          </div>

          <Sep />

          <TextLine><strong>🧭 FACILITAZIONE TECNICO-STRATEGICA (FacilisManagER Srl)</strong></TextLine>
          <TextLine >      <strong>Tutela la qualità delle decisioni dell’Assemblea </strong></TextLine>
          <Bullets
            items={[
              <>• Verifica la <strong>congruità</strong> tra <strong>prezzi</strong> e natura dell’opera.</>,
              <>• <strong>Traduce</strong> contenuti tecnici ed economici in elementi comprensibili all’assemblea.</>,
              <>• <strong>Favorisce</strong> il <strong>lavoro di squadra</strong> tra assemblea, amministratore e DL.</>,
              <>• <strong>Affianca</strong> amministratore e Direzione Lavori per conto dell’assemblea.</>,
              <>• <strong>Supporta</strong> la gestione delle <strong>criticità</strong> economiche, tecniche e di pianificazione.</>,
            ]}
          />
          <TextLine> 👉 Non decide, non esegue, <strong>non sostituisce nessuno</strong>:</TextLine>
          <TextLine ><strong>rende possibile</strong> una decisione consapevole.</TextLine>
          <Sep2/>
          
        </Section>
        <Section title="📩 SEZIONE CONTATTO ">
        
          <TextLine>Compila i campi qui sotto: i dati ci arrivano via email e ti ricontattiamo telefonicamente.</TextLine>
          <TextLine >La richiesta è senza impegno e serve solo per inquadrare correttamente il progetto.</TextLine>

          <form
            action="https://formspree.io/f/meezpkpv"
            method="POST"
            style={{ display: "grid", gap: 12, marginTop: 12 }}
          >
            <input name="nome" placeholder="Nome" required />
            <input name="cognome" placeholder="Cognome" required />
            <input name="email" type="email" placeholder="Email" required />
            <input name="telefono" placeholder="Telefono (consigliato)" />
            <input name="indirizzo" placeholder="Indirizzo / Condominio / Città" required />

            <textarea
              name="descrizione_progetto"
              placeholder="Descrizione progetto / problematica"
              rows={5}
              required
            />

            <input
              name="valore_progetto"
              placeholder="Valore del progetto allo stato attuale (€)"
            />

            <textarea
              name="note"
              placeholder="Note aggiuntive (urgenza, scadenze, vincoli, ecc.)"
              rows={3}
            />

            <input type="hidden" name="_subject" value="Nuovo contatto dal sito FACILIS" />

            <button type="submit" style={{ padding: "10px 14px", cursor: "pointer" }}>
              Invia richiesta
            </button>

          </form>
      </Section>

      </div>
    </div>
  );
}
