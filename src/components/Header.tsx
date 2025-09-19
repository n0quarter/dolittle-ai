import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { GraduationCap, Users, Menu, X, Phone, Stethoscope, Truck } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2">
            <div className="w-10 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">
                <span className="font-extrabold">D</span><span className="font-normal italic">AI</span>
              </span>
            </div>
            <span className="text-xl font-bold">
              <span className="text-foreground">Dolittle</span> <span className="text-primary">AI</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/ueber-uns">
                  Über uns
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>KI Telefonassistent</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem href="https://docdolittle.io/" title="KI Telefonassistent | Ärzte" icon={<Stethoscope className="h-4 w-4" />}>
                      Intelligente Telefonassistenz für Arztpraxen
                    </ListItem>
                    <ListItem href="/conversational-ai/fuhrpark" title="KI Telefonassistent | Fuhrpark" icon={<Truck className="h-4 w-4" />}>
                      Automatisierte Kommunikation im Fuhrparkmanagement
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Workshops & Training</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem href="/workshops/ki-mitarbeiterschulung" title="KI-Mitarbeiterschulung" icon={<GraduationCap className="h-4 w-4" />}>
                      Schulungen für Teams ohne technischen Hintergrund
                    </ListItem>
                    <ListItem href="/workshops/workshops" title="Workshops" icon={<Users className="h-4 w-4" />}>
                      Interaktive Workshops zur KI-Implementation
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/use-cases">
                  Use Cases
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                <a 
                  href="/ueber-uns" 
                  className="text-lg font-medium hover:text-primary transition-colors p-2 rounded-md hover:bg-accent"
                  onClick={() => setIsOpen(false)}
                >
                  Über uns
                </a>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-primary p-2">KI Telefonassistent</h3>
                  <div className="pl-4 space-y-2">
                    <a 
                      href="https://docdolittle.io/" 
                      className="flex items-center space-x-2 p-2 rounded-md hover:bg-accent hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Stethoscope className="h-4 w-4" />
                      <div>
                        <div className="font-medium">KI Telefonassistent | Ärzte</div>
                        <div className="text-sm text-muted-foreground">Intelligente Telefonassistenz für Arztpraxen</div>
                      </div>
                    </a>
                    <a 
                      href="/conversational-ai/fuhrpark" 
                      className="flex items-center space-x-2 p-2 rounded-md hover:bg-accent hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <Truck className="h-4 w-4" />
                      <div>
                        <div className="font-medium">KI Telefonassistent | Fuhrpark</div>
                        <div className="text-sm text-muted-foreground">Automatisierte Kommunikation im Fuhrparkmanagement</div>
                      </div>
                    </a>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-primary p-2">Workshops & Training</h3>
                  <div className="pl-4 space-y-2">
                    <a 
                      href="/workshops/ki-mitarbeiterschulung" 
                      className="flex items-center space-x-2 p-2 rounded-md hover:bg-accent hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <GraduationCap className="h-4 w-4" />
                      <div>
                        <div className="font-medium">KI-Mitarbeiterschulung</div>
                        <div className="text-sm text-muted-foreground">Schulungen für Teams ohne technischen Hintergrund</div>
                      </div>
                    </a>
                    <a 
                      href="/workshops/workshops" 
                      className="flex items-center space-x-2 p-2 rounded-md hover:bg-accent hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <Users className="h-4 w-4" />
                      <div>
                        <div className="font-medium">Workshops</div>
                        <div className="text-sm text-muted-foreground">Interaktive Workshops zur KI-Implementation</div>
                      </div>
                    </a>
                  </div>
                </div>
                
                <a 
                  href="/use-cases" 
                  className="text-lg font-medium hover:text-primary transition-colors p-2 rounded-md hover:bg-accent"
                  onClick={() => setIsOpen(false)}
                >
                  Use Cases
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

const ListItem = ({ className, title, children, icon, href, ...props }: {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
  icon?: React.ReactNode;
}) => {
  const isExternal = href.startsWith('http');
  
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          {...props}
        >
          <div className="flex items-center gap-2">
            {icon}
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
};

export default Header;
