import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE = 'https://bishwambharbharatmetals.com';
const BRAND = 'Bishwambhar Bharat Metals';
const DEFAULT_DESC = 'Premium stainless steel kitchenware manufacturer in Bihar, India. SS 202 & SS 304 plates, bowls, glasses for homes, hotels, and distributors.';
const DEFAULT_IMG = `${SITE}/images/IMAGE_1___Hero_background.webp`;

export default function SEO({ title, description, path, image, article }) {
  const pageTitle = title ? `${title} — ${BRAND}` : `${BRAND} — Stainless Steel Manufacturer, Bihar India`;
  const pageDesc = description || DEFAULT_DESC;
  const pageUrl = `${SITE}${path || ''}`;
  const pageImg = image ? `${SITE}${image}` : DEFAULT_IMG;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDesc} />
      <link rel="canonical" href={pageUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDesc} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={pageImg} />
      <meta property="og:site_name" content={BRAND} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@bbharatmetals" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDesc} />
      <meta name="twitter:image" content={pageImg} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content={BRAND} />
      <meta name="geo.region" content="IN-BR" />
      <meta name="geo.placename" content="Buxar, Bihar" />
    </Helmet>
  );
}
