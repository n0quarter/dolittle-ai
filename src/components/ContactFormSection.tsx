import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import HubSpotForm from "./HubSpotForm";
import { toast } from "sonner";

export default function ContactFormSection() {
  const handleFormSubmit = () => {
    toast.success("Vielen Dank! Wir melden uns bald bei Ihnen.");
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Kontaktieren Sie uns
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lassen Sie uns besprechen, wie KI-Lösungen Ihr Unternehmen voranbringen können. 
            Vereinbaren Sie ein kostenloses Beratungsgespräch.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Kostenloses Beratungsgespräch</CardTitle>
            <CardDescription>
              Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden bei Ihnen.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Replace with your actual HubSpot Portal ID and Form ID */}
            <HubSpotForm 
              portalId="YOUR_PORTAL_ID" 
              formId="YOUR_FORM_ID"
              onFormSubmit={handleFormSubmit}
            />
            
            <div className="mt-6 text-sm text-muted-foreground">
              <p>
                Durch das Absenden stimmen Sie unserer{" "}
                <a 
                  href="/datenschutz" 
                  className="text-primary hover:underline"
                >
                  Datenschutzerklärung
                </a>{" "}
                zu. Ihre Daten werden DSGVO-konform verarbeitet.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}