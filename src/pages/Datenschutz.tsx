import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Datenschutz</h1>
          
          <div className="prose prose-lg max-w-none text-foreground">
            <p className="mb-8 text-lg">
              Wir freuen uns über Ihr Interesse an <strong>Dolittle AI</strong>. Der Schutz Ihrer personenbezogenen 
              Daten ist uns ein wichtiges Anliegen. Auf dieser Seite informieren wir Sie darüber, wie wir Ihre 
              Daten beim Besuch unserer Webseite verarbeiten und welche Rechte Sie in Bezug auf den Datenschutz haben.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Verantwortlicher</h2>
              <p className="mb-2">Verantwortlich für die Datenverarbeitung im Rahmen dieser Website ist:</p>
              <div className="ml-4">
                <p className="font-semibold">Dolittle AI GbR</p>
                <p>Pfarrer-Birnkammer-Str. 24 e, 83059 Kolbermoor.</p>
                <p>andreas@dolittle-ai.de</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Allgemeine Hinweise zur Datenverarbeitung</h2>
              <p className="mb-4">
                Beim Besuch unserer Website verarbeiten wir personenbezogene Daten ausschließlich, soweit dies zur 
                Bereitstellung unserer Inhalte, zur Kontaktaufnahme mit Interessenten oder zur Verbesserung unseres 
                Angebots notwendig ist. Die Verarbeitung erfolgt im Einklang mit der Datenschutz-Grundverordnung (DSGVO), 
                insbesondere auf Grundlage von:
              </p>
              <ul className="list-disc ml-6">
                <li><strong>Art. 6 Abs. 1 lit. a DSGVO</strong> – Einwilligung (z. B. bei Kontaktformularen)</li>
                <li><strong>Art. 6 Abs. 1 lit. b DSGVO</strong> – Vertragserfüllung oder Durchführung vorvertraglicher Maßnahmen</li>
                <li><strong>Art. 6 Abs. 1 lit. f DSGVO</strong> – berechtigtes Interesse (z. B. technische Sicherheit, Webanalyse)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Welche Daten wir erfassen</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-medium mb-3">Server-Logfiles</h3>
                <p className="mb-3">
                  Beim Aufrufen unserer Webseite überträgt Ihr Browser automatisch bestimmte Daten an unseren Server. 
                  Dazu gehören u. a.:
                </p>
                <ul className="list-disc ml-6 mb-3">
                  <li>Ihre IP-Adresse (gekürzt/anonymisiert)</li>
                  <li>Datum und Uhrzeit des Zugriffs</li>
                  <li>abgerufene Seite/Datei</li>
                  <li>verwendeter Browser und Betriebssystem</li>
                  <li>Referrer-URL</li>
                </ul>
                <p>
                  Diese Daten werden ausschließlich zur Sicherstellung des technischen Betriebs und zur Fehleranalyse 
                  verwendet. Eine personenbezogene Auswertung erfolgt nicht.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-medium mb-3">Kontaktaufnahme über das Formular oder per E-Mail</h3>
                <p className="mb-3">
                  Wenn Sie uns über ein Formular auf der Website oder per E-Mail kontaktieren, erfassen wir die von 
                  Ihnen angegebenen Daten (z. B. Name, E-Mail-Adresse, Telefonnummer, Nachricht), um Ihre Anfrage 
                  zu beantworten.
                </p>
                <p>
                  Diese Daten nutzen wir ausschließlich zur Bearbeitung Ihrer Anfrage und speichern sie nur so lange, 
                  wie es für die Kommunikation oder eine mögliche Zusammenarbeit erforderlich ist.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-medium mb-3">Cookies</h3>
                <p>
                  Unsere Webseite verwendet nur technisch notwendige Cookies, die für den Betrieb der Seite erforderlich 
                  sind. Cookies zu Analyse- oder Marketingzwecken setzen wir <strong>nicht</strong> ein.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-medium mb-3">Kontaktformular</h3>
                <p className="mb-3">
                  Wenn du uns über das Kontaktformular kontaktierst, verarbeiten wir die von dir eingegebenen Daten 
                  (z. B. Name, E-Mail, Nachricht), um deine Anfrage zu beantworten.
                </p>
                <p>
                  Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahme)
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-medium mb-3">Einsatz von HubSpot</h3>
                <p className="mb-3">
                  Wir nutzen HubSpot, ein CRM- und Marketing-Tool der HubSpot Inc., 25 First Street, Cambridge, MA 02141 USA. 
                  Die eingegebenen Formulardaten werden in HubSpot gespeichert und verarbeitet, um Anfragen zu bearbeiten 
                  und ggf. weiterführende Kommunikation zu ermöglichen.
                </p>
                
                <p className="mb-3 font-medium">Datenübertragung in Drittstaaten:</p>
                <p className="mb-3">
                  Die Daten können in die USA übertragen werden. HubSpot ist nach dem EU-US Data Privacy Framework 
                  zertifiziert, wodurch ein angemessenes Datenschutzniveau gewährleistet ist.
                </p>

                <h4 className="text-lg font-medium mb-2">Rechtsgrundlage:</h4>
                <ul className="list-disc ml-6 mb-3">
                  <li>Für Anfragen: Art. 6 Abs. 1 lit. b DSGVO</li>
                  <li>Für Marketing (z. B. Newsletter): Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</li>
                </ul>
                <p className="italic">
                  Hinweis: Wenn du nicht möchtest, dass deine Daten in HubSpot verarbeitet werden, nutze bitte einen 
                  anderen Weg zur Kontaktaufnahme (z. B. E-Mail).
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Weitergabe an Dritte</h2>
              <p>
                Eine Weitergabe Ihrer Daten an Dritte erfolgt nicht, es sei denn, wir sind gesetzlich dazu verpflichtet 
                oder Sie haben ausdrücklich eingewilligt.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Ihre Rechte</h2>
              <p className="mb-4">
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf:
              </p>
              <ul className="list-disc ml-6 mb-4">
                <li><strong>Auskunft</strong> über Ihre gespeicherten personenbezogenen Daten (Art. 15 DSGVO)</li>
                <li><strong>Berichtigung</strong> unrichtiger Daten (Art. 16 DSGVO)</li>
                <li><strong>Löschung</strong> Ihrer Daten (Art. 17 DSGVO)</li>
                <li><strong>Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO)</li>
                <li><strong>Widerspruch</strong> gegen bestimmte Verarbeitungen (Art. 21 DSGVO)</li>
                <li><strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
              </ul>
              <p>
                Zur Ausübung dieser Rechte genügt eine formlose Mitteilung an: <strong>andreas@dolittle-ai.de</strong>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Datensicherheit</h2>
              <p>
                Wir setzen angemessene technische und organisatorische Maßnahmen ein, um Ihre Daten vor unbefugtem 
                Zugriff, Verlust oder Missbrauch zu schützen. Unsere Website wird regelmäßig auf Sicherheitslücken 
                überprüft und durch aktuelle Standards geschützt.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Änderungen dieser Datenschutzerklärung</h2>
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf zu aktualisieren, etwa bei rechtlichen 
                Änderungen oder Erweiterung unserer Website. Die jeweils aktuelle Version finden Sie stets auf dieser Seite.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Datenschutz;