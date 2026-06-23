import rawConfig from "../../site-config.json";

export type NavLink = {
  label: string;
  href: string;
};

export type Listing = {
  image: string;
  price: string;
  address: string;
  neighbourhood: string;
  beds: number;
  baths: number;
  sqft: string;
  status: string;
  label: string;
};

export type SiteConfig = typeof rawConfig;

export const config: SiteConfig = rawConfig;
