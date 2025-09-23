import { useEffect, useRef } from 'react';

interface HubSpotFormProps {
  formId: string;
  portalId: string;
  className?: string;
  onFormSubmit?: () => void;
}

declare global {
  interface Window {
    hbspt: any;
  }
}

export default function HubSpotForm({ 
  formId, 
  portalId, 
  className = "",
  onFormSubmit 
}: HubSpotFormProps) {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load HubSpot script if not already loaded
    if (!window.hbspt) {
      const script = document.createElement('script');
      script.src = 'https://js.hsforms.net/forms/embed/v2.js';
      script.async = true;
      script.onload = () => {
        createForm();
      };
      document.body.appendChild(script);
    } else {
      createForm();
    }

    function createForm() {
      if (window.hbspt && formRef.current) {
        window.hbspt.forms.create({
          region: 'eu1', // European data center for GDPR compliance
          portalId: portalId,
          formId: formId,
          target: formRef.current,
          onFormSubmit: () => {
            if (onFormSubmit) {
              onFormSubmit();
            }
          },
          css: `
            .hs-form-field {
              margin-bottom: 1rem;
            }
            .hs-form-field > label {
              font-weight: 500;
              margin-bottom: 0.5rem;
              display: block;
              color: hsl(var(--foreground));
            }
            .hs-input {
              width: 100%;
              padding: 0.75rem;
              border: 1px solid hsl(var(--border));
              border-radius: 0.375rem;
              background: hsl(var(--background));
              color: hsl(var(--foreground));
              transition: all 0.2s;
            }
            .hs-input:focus {
              outline: none;
              border-color: hsl(var(--primary));
              box-shadow: 0 0 0 2px hsl(var(--primary) / 0.2);
            }
            .hs-button {
              background: hsl(var(--primary));
              color: hsl(var(--primary-foreground));
              padding: 0.75rem 2rem;
              border: none;
              border-radius: 0.375rem;
              font-weight: 500;
              cursor: pointer;
              transition: all 0.2s;
            }
            .hs-button:hover {
              background: hsl(var(--primary) / 0.9);
            }
            .hs-error-msgs {
              color: hsl(var(--destructive));
              font-size: 0.875rem;
              margin-top: 0.25rem;
            }
          `
        });
      }
    }

    // Cleanup function
    return () => {
      if (formRef.current) {
        formRef.current.innerHTML = '';
      }
    };
  }, [formId, portalId, onFormSubmit]);

  return (
    <div className={`hubspot-form ${className}`}>
      <div ref={formRef}></div>
    </div>
  );
}