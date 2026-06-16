import type { Metadata } from "next";
import { site } from "@/content/site";
import { company } from "@/content/company";

export function pageMetadata(opts: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = `${site.url}${opts.path ?? ""}`;
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: site.name,
      locale: "fr_BE",
      type: "website",
      images: opts.image ? [{ url: opts.image }] : undefined
    },
    twitter: { card: "summary_large_image", title: opts.title, description: opts.description }
  };
}

/** Schema.org GeneralContractor / LocalBusiness */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: site.legalName,
    alternateName: site.name,
    url: site.url,
    telephone: company.phone,
    email: company.email,
    foundingDate: String(company.foundedYear),
    vatID: company.vat,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      postalCode: company.address.zip,
      addressLocality: company.address.city,
      addressCountry: "BE"
    },
    areaServed: "Bruxelles, Belgique",
    sameAs: [site.social.instagram, site.social.facebook, site.social.linkedin]
  };
}
