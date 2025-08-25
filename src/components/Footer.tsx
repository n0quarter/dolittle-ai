
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary text-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">
                  <span className="font-extrabold">D</span><span className="font-normal italic">AI</span>
                </span>
              </div>
              <span className="text-xl font-bold">
                <span className="text-foreground">Dolittle</span> <span className="text-primary">AI</span>
              </span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Ihr Partner für DSGVO-konforme KI-Lösungen für Ihr Unternehmen.
              Von der Strategieentwicklung bis zur Implementierung.
            </p>
            <div className="text-muted-foreground">
              <p>E-Mail: andreas@dolittle-ai.de</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/#services" className="hover:text-foreground transition-colors">KI-Strategieberatung</Link></li>
              <li><Link to="/#services" className="hover:text-foreground transition-colors">Framework Entwicklung</Link></li>
              <li><Link to="/#services" className="hover:text-foreground transition-colors">Agenten & Workflows</Link></li>
              <li><Link to="/workshops/workshops" className="hover:text-foreground transition-colors">Workshops & Training</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Unternehmen</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/ueber-uns" className="hover:text-foreground transition-colors">Über uns</Link></li>
              <li><Link to="/ueber-uns#team" className="hover:text-foreground transition-colors">Team</Link></li>
              <li><a href="mailto:andreas@dolittle-ai.de" className="hover:text-foreground transition-colors">Kontakt</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 Dolittle AI</p>
          <div className="flex justify-center space-x-6 mt-4">
            <Link to="/datenschutz" className="hover:text-foreground transition-colors">Datenschutz</Link>
            <Link to="/impressum" className="hover:text-foreground transition-colors">Impressum</Link>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
