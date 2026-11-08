import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { useEffect, useState } from "react";
import { Route, Router as WouterRouter, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home, { AdminDashboardPage, CourseDetailPage, SitePage } from "./pages/Home";

function useHashLocation(): [string, (to: string) => void] {
  const readHash = () => window.location.hash.replace(/^#/, "") || "/";
  const [location, setLocation] = useState(readHash);

  useEffect(() => {
    const onHashChange = () => setLocation(readHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return [location, (to: string) => { window.location.hash = to.startsWith("#") ? to : `#${to}`; }];
}

function Router() {
  return (
    <WouterRouter hook={useHashLocation}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/course/:slug" component={CourseDetailPage} />
        <Route path="/admin" component={AdminDashboardPage} />
        <Route path="/:page" component={SitePage} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
