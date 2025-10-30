import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-foreground">Impressum</h1>
          
          <div className="prose prose-lg max-w-none text-foreground">
            <div className="mb-8">
              <p className="text-lg font-semibold">Dolittle AI GbR</p>
              <p>Pfarrer-Birnkammer-Str. 24 e, 83059 Kolbermoor.</p>
              <p>andreas@dolittle-ai.de</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Geschäftsführer:</h3>
              <p>Andreas Reichert</p>
              <p>USt-idNr: DE411483986</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Urheber- und Nutzungsrechte</h3>
              <p className="mb-4">
                Wir achten sorgfältig darauf, nur solche Grafiken, Ton- und Videodateien sowie Texte zu verwenden, 
                für die wir die erforderlichen Rechte besitzen oder die gemeinfrei sind. Sollten Sie dennoch einen 
                möglichen Verstoß gegen Urheber- oder sonstige Schutzrechte entdecken, bitten wir um einen 
                schriftlichen Hinweis per E-Mail oder Post. Nach Prüfung werden wir die betreffenden Inhalte 
                umgehend entfernen.
              </p>
              <p>
                Das Urheberrecht an sämtlichen auf dieser Website veröffentlichten Inhalten verbleibt ausschließlich 
                bei uns. Eine Vervielfältigung, Bearbeitung, Verbreitung oder sonstige Nutzung in elektronischen 
                oder gedruckten Publikationen ist ohne unsere vorherige ausdrückliche Zustimmung nicht gestattet.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Haftungsausschluss</h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-medium mb-2">Externe Links</h4>
                <p>
                  Diese Website enthält Verknüpfungen zu Internetseiten Dritter („externe Links"). Für den Inhalt 
                  dieser externen Seiten sind ausschließlich deren Betreiber verantwortlich. Bei der ersten 
                  Verknüpfung haben wir die Seiten auf mögliche Rechtsverstöße überprüft, es waren zu diesem 
                  Zeitpunkt keine rechtswidrigen Inhalte erkennbar. Eine permanente inhaltliche Kontrolle der 
                  verlinkten Seiten ist jedoch ohne konkrete Hinweise auf Rechtsverletzungen nicht zumutbar. 
                  Sollten uns Rechtsverletzungen bekannt werden, entfernen wir derartige Links unverzüglich. 
                  Die Erwähnung kommerzieller Anbieter stellt keine Empfehlung dar; zu Produkten dieser Anbieter 
                  wird keine Aussage getroffen.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-medium mb-2">Inhalte dieser Website</h4>
                <p>
                  Die bereitgestellten Informationen werden mit größtmöglicher Sorgfalt erstellt. Für deren 
                  Aktualität, Richtigkeit und Vollständigkeit übernehmen wir jedoch keine Gewähr. Haftungsansprüche 
                  materieller oder ideeller Art, die aus der Nutzung oder Nichtnutzung der angebotenen Informationen 
                  entstehen, sind ausgeschlossen, sofern kein vorsätzliches oder grob fahrlässiges Verschulden 
                  unsererseits vorliegt. Alle Inhalte sind freibleibend und unverbindlich; wir behalten uns vor, 
                  Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, 
                  zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-2">Rechtswirksamkeit</h4>
                <p>
                  Sofern einzelne Bestimmungen dieses Haftungsausschlusses ganz oder teilweise unwirksam sein 
                  sollten, bleibt die Gültigkeit der übrigen Bestimmungen unberührt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;