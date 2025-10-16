export default function LegalPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-32 font-cm leading-relaxed text-base text-justify">
      <h1 className="text-3xl sm:text-4xl mb-8 font-semibold text-left">Impressum</h1>

      <p className="mb-4">
        <strong>Angaben gemäß § 5 TMG</strong><br />
        Dr. Miriam von Felbert<br />
        Schwanenweg 19<br />
        24558 Henstedt-Ulzburg<br />
        Deutschland
      </p>

      <p className="mb-4">
        <strong>Kontakt</strong><br />
        Telefon: +49 (0)151 65122333<br />
        E-Mail: hello@radicalsensitiveleadership.com
      </p>

      <p className="mb-4">
        <strong>Umsatzsteuer-ID</strong><br />
        DE366062230 (gemäß § 27a Umsatzsteuergesetz)
      </p>

      <p className="mb-4">
        <strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</strong><br />
        Dr. Miriam von Felbert<br />
        Anschrift wie oben
      </p>

      <p className="mb-4">
        <strong>Leistungsumfang</strong><br />
        Diese Website bietet digitale Produkte und Dienstleistungen an, 
        darunter kostenpflichtige Mitgliedschaften, Coachings, 
        herunterladbare Materialien sowie Programme für Führungskräfte und Organisationen.
      </p>

      <p className="mb-4">
        <strong>Online-Streitbeilegung</strong><br />
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
        <a
          href="https://ec.europa.eu/consumers/odr/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          https://ec.europa.eu/consumers/odr/
        </a>
        .<br />
        Wir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren 
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <p className="mb-4">
        <strong>Haftung für Inhalte</strong><br />
        Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. 
        Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte 
        können wir jedoch keine Gewähr übernehmen. 
        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen 
        nach den allgemeinen Gesetzen bleiben hiervon unberührt. 
        Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis 
        einer konkreten Rechtsverletzung möglich. 
        Bei Bekanntwerden entsprechender Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
      </p>

      <p className="mb-4">
        <strong>Haftung für Links</strong><br />
        Unsere Website enthält ggf. Links zu externen Websites Dritter, 
        auf deren Inhalte wir keinen Einfluss haben. 
        Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
        Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
        Rechtswidrige Inhalte waren zu diesem Zeitpunkt nicht erkennbar. 
        Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte 
        einer Rechtsverletzung nicht zumutbar. 
        Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
      </p>

      <p className="mb-4">
        <strong>Urheberrecht</strong><br />
        Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf dieser Website 
        unterliegen dem deutschen Urheberrecht. 
        Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung 
        außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung der Autorin. 
        Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
      </p>

      <div className="mt-16">
        <a href="/" className="text-sm underline hover:opacity-60">
          ← Zurück zur Startseite
        </a>
      </div>
    </main>
  );
}
