import rawConfig from "../../site-config.json";

export interface SiteConfig {
  siteName: string;
  siteDescription: string;
  primaryColor: string;
  logoUrl: string;
  favicon: string;
  navigation: { label: string; href: string }[];
  pages: Record<string, { title: string; content: string }>;
  _plugins: { head: string; body: string; enabled: string[] };
}

export const config: SiteConfig = rawConfig as SiteConfig;
