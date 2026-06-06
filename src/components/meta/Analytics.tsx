import { siteConfig } from "@/config/site.config";

/**
 * Renders analytics scripts based on siteConfig.
 * Supports Google Analytics 4, Cloudflare Web Analytics, and GoatCounter.
 * * Usage: Import and add to your RootLayout in src/app/layout.tsx
 */
export default function Analytics() {
	const { googleAnalyticsId, cloudflareToken } = siteConfig.analytics;
	
	return (
		<>
			{/* --- Google Analytics 4 --- */}
			{googleAnalyticsId && (
				<>
					<script src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`} />
					<script id="google-analytics"
						dangerouslySetInnerHTML={{
							__html: `
								window.dataLayer = window.dataLayer || [];
								function gtag(){dataLayer.push(arguments);}
								gtag('js', new Date());
								gtag('config', '${googleAnalyticsId}');
							`,
						}}
					/>
				</>
			)}
			
			{/* --- Cloudflare Web Analytics --- */}
			{cloudflareToken && (
				<script src="https://static.cloudflareinsights.com/beacon.min.js" async defer data-cf-beacon={JSON.stringify({token: cloudflareToken, })} crossOrigin="anonymous" />
			)}
		</>
	);
}
