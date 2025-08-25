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
import { cn } from "@/lib/utils";

const Header = () => {
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

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Über uns</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/ueber-uns"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Dolittle AI
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Ihr Partner für DSGVO-konforme KI-Lösungen
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/ueber-uns#services" title="Services">
                      KI-Strategieberatung und Framework Entwicklung
                    </ListItem>
                    <ListItem href="/ueber-uns#team" title="Team">
                      Lernen Sie unser Expertenteam kennen
                    </ListItem>
                    <ListItem href="/ueber-uns#projekte" title="Projekte">
                      Unsere erfolgreich umgesetzten KI-Projekte
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Workshops & Training</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem href="/workshops/ki-mitarbeiterschulung" title="KI-Mitarbeiterschulung">
                      Schulungen für Teams ohne technischen Hintergrund
                    </ListItem>
                    <ListItem href="/workshops/workshops" title="Workshops">
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
        </div>
      </div>
    </header>
  );
};

const ListItem = ({ className, title, children, ...props }: {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
};

export default Header;
