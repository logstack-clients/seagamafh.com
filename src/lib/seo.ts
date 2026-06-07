import { siteConfig } from "@/config/site.config";

interface MetadataProps {
	path?: string;
	title?: string;
	description?: string;
	keywords?: string[];
	image?: string;
}

export function constructMetadata({
	                                  title,
	                                  path = '',
	                                  description = siteConfig.description,
	                                  keywords = siteConfig.keywords,
	                                  image = siteConfig.ogImage
                                  }: MetadataProps = {}) {
	
	const siteName = siteConfig.fullName;
	const pageTitle = title ? `${title} | ${siteName}` : `${siteName} | ${siteConfig.tagline}`;
	const canonicalUrl = `${siteConfig.url}${path}`;

	return {
		title: pageTitle,
		description,
		keywords,
		canonicalUrl,
		image,
		siteName,
		authors: siteConfig.authors,
		creator: siteConfig.creator,
		publisher: siteConfig.name,
		robots: siteConfig.robots,
		locale: siteConfig.locale,
		twitterHandle: '@seagamafh',
		favicons: siteConfig.favicons,
		manifest: siteConfig.favicons.manifest,
		analytics: siteConfig.analytics,
	};
}
