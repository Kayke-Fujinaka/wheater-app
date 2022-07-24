/* eslint-disable react/require-default-props */
import Head from 'next/head'

interface SEOProps {
  title: string
  description?: string
  shouldExcludeTitleSuffix?: boolean
  shouldIndexPage?: boolean
  onKeyPress?: void
}

export function SEO({ title, description, shouldIndexPage = true }: SEOProps) {
  const pageTitle = `${title}`

  return (
    <Head>
      <title>{pageTitle}</title>

      {description && <meta name="description" content={description} />}

      {!shouldIndexPage && <meta name="robots" content="noindex, nofollow" />}

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
      <meta name="MobileOptimized" content="320" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="theme-color" content="#F3F6FA" />
      <meta name="msapplication-TileColor" content="#F3F6FA" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="google" content="notranslate" />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={process.env.NEXT_PUBLIC_SITE_URL} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={pageTitle} />
      <meta property="og:image:alt" content="Thumbnail" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <link rel="shortcut icon" href="favicon.png" type="image/png" />
    </Head>
  )
}
