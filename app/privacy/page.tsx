export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-32 font-cm leading-relaxed text-base text-justify">
      <h1 className="text-3xl sm:text-4xl mb-8 font-semibold text-left">Datenschutzerklärung</h1>

      <p className="mb-4">
        Wir nehmen den Schutz deiner persönlichen Daten sehr ernst. Diese Datenschutzerklärung erläutert, 
        wie „Radical Sensitive Leadership“ („wir“, „uns“, „unser“) personenbezogene Daten über diese Website 
        und die damit verbundenen Dienste erhebt, nutzt, weitergibt und schützt.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4 text-left">1. Verantwortliche Stelle</h2>
      <p className="mb-4">
        Dr. Miriam von Felbert<br />
        Schwanenweg 19, 24558 Henstedt-Ulzburg, Deutschland<br />
        E-Mail: hello@radicalsensitiveleadership.com
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4 text-left">2. Erhobene Daten</h2>
      <p className="mb-4">
        • Kontaktdaten (z. B. E-Mail-Adresse), wenn du dich anmeldest, Buchungen vornimmst oder Anfragen sendest.<br />
        • Technische Daten (z. B. IP-Adresse, Browsertyp, Gerätedaten) zur anonymisierten Analyse der Nutzung.<br />
        • Zahlungsdaten (über Stripe) sowie vertrauliche Sitzungsnotizen, die sicher gespeichert werden.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4 text-left">3. Zweck und Rechtsgrundlage</h2>
      <p className="mb-4">
        Wir verarbeiten personenbezogene Daten zur Bereitstellung unserer Angebote, zur Abwicklung von Zahlungen, 
        zur Kommunikation mit dir und zur Verbesserung unserer Website. 
        Die Verarbeitung erfolgt auf Grundlage deiner Einwilligung (Art. 6 Abs. 1 a DSGVO) 
        sowie zur Vertragserfüllung (Art. 6 Abs. 1 b DSGVO).
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4 text-left">4. Cookies und Analyse</h2>
      <p className="mb-4">
        Wir verwenden nur technisch notwendige Cookies. 
        Für statistische Auswertungen nutzen wir Plausible Analytics (oder ein vergleichbares Tool), 
        das vollständig DSGVO-konform arbeitet und keine personenbezogenen Profile erstellt.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4 text-left">5. Weitergabe von Daten</h2>
      <p className="mb-4">
        • Stripe (Zahlungsabwicklung) – DSGVO-konform.<br />
        • Ghost und CAL – zur Verwaltung von Inhalten und Buchungen.<br />
        • Auf Anfrage kannst du jederzeit die Löschung oder Herausgabe deiner gespeicherten Daten verlangen.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4 text-left">6. Internationale Datenübermittlung</h2>
      <p className="mb-4">
        Die Verarbeitung erfolgt grundsätzlich innerhalb der EU. 
        Bei Nutzung von Stripe können Daten in die USA übertragen werden. 
        Stripe stellt durch Standardvertragsklauseln die DSGVO-Konformität sicher.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4 text-left">7. Deine Rechte</h2>
      <p className="mb-4">
        Du hast das Recht auf Auskunft, Berichtigung, Löschung oder Einschränkung der Verarbeitung deiner Daten. 
        Außerdem kannst du der Verarbeitung widersprechen oder die Übertragung deiner Daten anfordern 
        (Datenportabilität).
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4 text-left">8. Aufbewahrungsdauer</h2>
      <p className="mb-4">
        Wir speichern personenbezogene Daten nur so lange, wie es für den jeweiligen Zweck erforderlich ist 
        oder gesetzliche Aufbewahrungspflichten bestehen. 
        Auf Wunsch löschen wir deine Daten, sofern keine rechtlichen Gründe dagegensprechen.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4 text-left">9. Kontakt und Beschwerderecht</h2>
      <p className="mb-4">
        Bei Fragen oder Anliegen kannst du dich jederzeit an hello@radicalsensitiveleadership.com wenden.<br />
        Du hast zudem das Recht, dich bei einer Datenschutzaufsichtsbehörde zu beschweren.
      </p>

      <div className="mt-16">
        <a href="/" className="text-sm underline hover:opacity-60">
          ← Zurück zur Startseite
        </a>
      </div>
    </main>
  );
}
