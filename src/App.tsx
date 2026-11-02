import { parseLanguage } from "@/lib/language";
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Router, Route, Switch } from "wouter";
import ErrorBoundary from "@/components/ErrorBoundary";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Home from "@/pages/Home";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import CookieSettings from "@/pages/CookieSettings";
import Guide from "@/pages/Guide";
import Blog from "@/pages/Blog";
import FamilyZoo from "@/pages/FamilyZoo";

// Switch to normal browser routing for SEO
function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/privacy">{() => <PrivacyPolicy />}</Route>
        <Route path="/terms">{() => <TermsOfService />}</Route>
        <Route path="/cookie-settings">{() => <CookieSettings />}</Route>
        <Route path="/guide">{() => <Guide />}</Route>
        <Route path="/family-zoo">{() => <FamilyZoo />}</Route>
        <Route path="/blog">{() => <Blog />}</Route>
        <Route path="/:lang/privacy">{(params) => <PrivacyPolicy initialLang={parseLanguage(params.lang)} />}</Route>
        <Route path="/:lang/terms">{(params) => <TermsOfService initialLang={parseLanguage(params.lang)} />}</Route>
        <Route path="/:lang/cookie-settings">{(params) => <CookieSettings initialLang={parseLanguage(params.lang)} />}</Route>
        <Route path="/:lang/guide">{(params) => <Guide initialLang={parseLanguage(params.lang)} />}</Route>
        <Route path="/:lang/family-zoo">{(params) => <FamilyZoo initialLang={parseLanguage(params.lang)} />}</Route>
        <Route path="/:lang/blog">{(params) => <Blog initialLang={parseLanguage(params.lang)} />}</Route>
        <Route path="/:lang/:section?">{(params) => <Home initialLang={parseLanguage(params.lang)} targetSection={params.section} />}</Route>
        <Route path="/:section?">{(params) => <Home targetSection={params.section} />}</Route>
      </Switch>
    </Router>
  );
}

// Note on theming:
// - Choose defaultTheme based on your design (light or dark background)
// - Update the color palette in index.css to match
// - If you want switchable themes, add `switchable` prop and use `useTheme` hook

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <ThemeProvider defaultTheme="dark" switchable={true}>
          <TooltipProvider>
            <Toaster />
            <AppRouter />
          </TooltipProvider>
        </ThemeProvider>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;

