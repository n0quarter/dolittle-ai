import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { X, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CookiePreferences {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  performance: boolean;
  advertisement: boolean;
}

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    functional: false,
    analytics: false,
    performance: false,
    advertisement: false,
  });

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookie-consent');
    if (!hasConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      functional: true,
      analytics: true,
      performance: true,
      advertisement: true,
    };
    setPreferences(allAccepted);
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      functional: false,
      analytics: false,
      performance: false,
      advertisement: false,
    };
    setPreferences(onlyNecessary);
    localStorage.setItem('cookie-consent', JSON.stringify(onlyNecessary));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    setIsVisible(false);
    setShowPreferences(false);
  };

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(category)) {
        newSet.delete(category);
      } else {
        newSet.add(category);
      }
      return newSet;
    });
  };

  const updatePreference = (category: keyof CookiePreferences, value: boolean) => {
    if (category === 'necessary') return; // Can't disable necessary cookies
    setPreferences(prev => ({ ...prev, [category]: value }));
  };

  const categories = [
    {
      id: 'necessary',
      title: 'Notwendig',
      description: 'Notwendige Cookies sind für die grundlegenden Funktionen dieser Website erforderlich und können nicht deaktiviert werden.',
      alwaysActive: true,
    },
    {
      id: 'functional',
      title: 'Funktional',
      description: 'Funktionale Cookies helfen dabei, bestimmte Funktionen auszuführen, wie das Teilen von Website-Inhalten auf Social-Media-Plattformen.',
      alwaysActive: false,
    },
    {
      id: 'analytics',
      title: 'Analytisch',
      description: 'Analytische Cookies werden verwendet, um zu verstehen, wie Besucher mit der Website interagieren.',
      alwaysActive: false,
    },
    {
      id: 'performance',
      title: 'Leistung',
      description: 'Leistungs-Cookies werden verwendet, um die Leistungsindizes der Website zu verstehen und zu analysieren.',
      alwaysActive: false,
    },
    {
      id: 'advertisement',
      title: 'Werbung',
      description: 'Werbe-Cookies werden verwendet, um Besuchern individualisierte Werbung basierend auf zuvor besuchten Seiten anzubieten.',
      alwaysActive: false,
    },
  ];

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/50 z-40 transition-opacity",
          showPreferences ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setShowPreferences(false)}
      />

      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border shadow-lg">
        <div className="container mx-auto p-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Informationen zum Einsatz von Cookies auf unserer Website
            </h3>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>
                Wir setzen Cookies ein, um den störungsfreien Betrieb unserer Seite zu gewährleisten (notwendige Cookies). 
                Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 S. 1 lit. f DSGVO in Verbindung mit § 25 Abs. 2 TTDSG. 
                Diese Cookies sind unverzichtbar und können nicht deaktiviert werden.
              </p>
              <p>
                Zusätzlich nutzen wir – nur mit Ihrer ausdrücklichen Zustimmung – Cookies und vergleichbare Technologien 
                zur Reichweiten- und Nutzungsanalyse (Analyse-Cookies). Rechtsgrundlage ist Ihre Einwilligung nach 
                Art. 6 Abs. 1 S. 1 lit. a DSGVO i. V. m. § 25 Abs. 1 TTDSG. Klicken Sie auf „Erlauben", um diese Cookies zu aktivieren; 
                wählen Sie „Ablehnen", um ausschließlich die notwendigen Cookies zu verwenden.{' '}
                <a href="/datenschutz" className="text-primary underline hover:no-underline">
                  Datenschutz
                </a>
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" onClick={handleRejectAll}>
                Ablehnen
              </Button>
              <Button variant="outline" onClick={() => setShowPreferences(true)}>
                Präferenzen anpassen
              </Button>
              <Button onClick={handleAcceptAll}>
                Erlauben
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Preferences Modal */}
      {showPreferences && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl max-h-[80vh] overflow-hidden bg-background">
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-xl font-semibold">Präferenzen für die Zustimmung anpassen</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowPreferences(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="p-6 space-y-6 overflow-y-auto max-h-[60vh]">
              <div className="text-sm text-muted-foreground space-y-2">
                <p>
                  Wir verwenden Cookies, damit Sie effizient navigieren und bestimmte Funktionen ausführen können. 
                  Nachstehend finden Sie ausführliche Informationen über alle Cookies unter jeder Einwilligungskategorie.
                </p>
                <p>
                  Die Cookies, die als „notwendig" eingestuft sind, werden in Ihrem Browser gespeichert, 
                  da sie für die grundlegenden Funktionen der Website unerlässlich sind.
                </p>
              </div>

              <div className="space-y-4">
                {categories.map((category) => (
                  <div key={category.id} className="border rounded-lg">
                    <div className="p-4">
                      <div 
                        className="flex items-center justify-between cursor-pointer"
                        onClick={() => toggleCategory(category.id)}
                      >
                        <div className="flex items-center space-x-3">
                          <ChevronRight 
                            className={cn(
                              "h-4 w-4 transition-transform",
                              expandedCategories.has(category.id) && "rotate-90"
                            )}
                          />
                          <span className="font-medium">{category.title}</span>
                          {category.alwaysActive && (
                            <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                              Immer aktiv
                            </span>
                          )}
                        </div>
                        {!category.alwaysActive && (
                          <label className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              checked={preferences[category.id as keyof CookiePreferences]}
                              onChange={(e) => updatePreference(category.id as keyof CookiePreferences, e.target.checked)}
                              className="rounded border-gray-300"
                            />
                          </label>
                        )}
                      </div>
                      
                      {expandedCategories.has(category.id) && (
                        <div className="mt-3 pt-3 border-t">
                          <p className="text-sm text-muted-foreground">
                            {category.description}
                          </p>
                          <div className="mt-2 p-2 bg-muted rounded text-xs text-muted-foreground">
                            Keine Cookies anzuzeigen.
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t p-6">
              <div className="flex flex-wrap gap-3 justify-end">
                <Button variant="outline" onClick={handleRejectAll}>
                  Ablehnen
                </Button>
                <Button variant="outline" onClick={handleSavePreferences}>
                  Meine Präferenzen speichern
                </Button>
                <Button onClick={handleAcceptAll}>
                  Erlauben
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default CookieBanner;