const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              <span className="text-xl font-bold">Dolittle AI Consulting</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Ihr Partner für DSGVO-konforme KI-Lösungen für Ihr Unternehmen. 
              Von der Strategieentwicklung bis zur Implementierung.
            </p>
            <div className="text-gray-300">
              <p>E-Mail: info@dolittle-ai.de</p>
              <p>Telefon: +49 (0) 123 456 789</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Leistungen</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-white transition-colors">KI-Strategieberatung</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Framework Entwicklung</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Agenten & Workflows</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Workshops & Training</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Unternehmen</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#team" className="hover:text-white transition-colors">Über uns</a></li>
              <li><a href="#team" className="hover:text-white transition-colors">Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Karriere</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kontakt</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Dolittle AI Consulting. Alle Rechte vorbehalten.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-white transition-colors">Impressum</a>
            <a href="#" className="hover:text-white transition-colors">AGB</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;