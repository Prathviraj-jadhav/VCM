"use client";

import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from "react";

type PageName = "home" | "about" | "services" | "ugc" | "case-studies" | "blog" | "careers" | "contact" | "privacy" | "terms" | "service-detail" | "blog-detail" | "sitemap" | "error" | "thank-you" | "case-study-detail";

interface PageState {
  currentPage: PageName;
  pageParams: Record<string, string>;
  navigate: (page: PageName, params?: Record<string, string>) => void;
  goHome: () => void;
}

const PageContext = createContext<PageState>({
  currentPage: "home",
  pageParams: {},
  navigate: () => {},
  goHome: () => {},
});

export function PageProvider({ children }: { children: ReactNode }) {
  const [currentPage, setCurrentPage] = useState<PageName>("home");
  const [pageParams, setPageParams] = useState<Record<string, string>>({});

  const navigate = useCallback((page: PageName, params: Record<string, string> = {}) => {
    setCurrentPage(page);
    setPageParams(params);
    window.scrollTo({ top: 0, behavior: "instant" });
    window.location.hash = page === "home" ? "" : page;
  }, []);

  const goHome = useCallback(() => {
    navigate("home");
  }, [navigate]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash && hash !== "home") {
        setCurrentPage(hash as PageName);
      } else {
        setCurrentPage("home");
      }
    };
    window.addEventListener("hashchange", handleHashChange);

    const handleCustomNav = (e: Event) => {
      const detail = (e as CustomEvent).detail as string;
      if (detail === "home") {
        navigate("home");
      } else if (detail) {
        navigate(detail as PageName);
      }
    };
    window.addEventListener("navigate", handleCustomNav);

    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("navigate", handleCustomNav);
    };
  }, [navigate]);

  return (
    <PageContext.Provider value={{ currentPage, pageParams, navigate, goHome }}>
      {children}
    </PageContext.Provider>
  );
}

export function usePage() {
  return useContext(PageContext);
}
