// Utility to resolve a local image from src/images based on product identifiers
// Uses Vite import.meta.glob to collect all images at build time
const imageModules = import.meta.glob('../images/*.{png,jpg,jpeg,svg,webp}', {
	eager: true,
	as: 'url'
}) as Record<string, string>;

function normalize(value: string): string {
	return value
		.toLowerCase()
		.replace(/&/g, 'and')
		.replace(/[_-]\d+$/g, '') // strip trailing numeric suffixes like _01 or -02
		.replace(/\d+$/g, '') // strip any trailing digits
		.replace(/\bgift\s*card\b/g, '')
		.replace(/\bgiftcard\b/g, '')
		.replace(/\bgift\b/g, '')
		.replace(/\bcard\b/g, '')
		.replace(/\bdigital\b/g, '')
		.replace(/\bvoucher\b/g, '')
		.replace(/\bpremium\b/g, '')
		.replace(/\btool\b/g, '')
		.replace(/\bapp\b/g, '')
		.replace(/\bindia\b/g, '')
		.replace(/\binr\b/g, '')
		.replace(/[^a-z0-9]+/g, '') // remove non-alphanumerics
		.trim();
}

// Build a map from normalized base filename (without extension) -> url
const filenameToUrl = (() => {
	const map = new Map<string, string>();
	for (const [path, url] of Object.entries(imageModules)) {
		const base = path.split('/').pop() || '';
		const nameOnly = base.replace(/\.(png|jpe?g|svg|webp)$/i, '');
		const key = normalize(nameOnly);
		if (key && !map.has(key)) {
			map.set(key, url);
		}
	}
	return map;
})();

// Targeted overrides for specific product slugs -> preferred image basenames
const slugPreferredBasenames: Record<string, string[]> = {
	'the-body-shop-gift-card': ['bodysoap01', 'bodySoap', 'bodyshop'],
	'croma-gift-card': ['croma01', 'croma', 'giftcard01'],
	'expense-cashflow-tracker': ['cashflow', 'calculator01'],
	'ledger-transaction-categorization': ['transaction01', 'transaction'],
	'vendor-payment-reminder': ['bills'],
	// Zynpay products
	'zynpay-expense-cashflow-manager': ['cashflow'],
	'zynpay-emi-analyzer-dashboard': ['calculator'],
	'zynpay-vendorpay-reminder-system': ['vendor'],
	'zynpay-gst-invoice-payment-reconciliation': ['gst01', 'gst'],
	'zynpay-ledger-transaction-categorization': ['managementsoftware', 'management'],
	'zynpay-smart-invoice-builder': ['smartbuilt', 'smart'],
	'zynpay-auto-reminder-crm': ['crm'],
	'zynpay-subscription-manager': ['mobilemannager', 'mobile', 'manager'],
	'zynpay-daily-sales-tracker': ['salestracer', 'sales', 'tracer'],
	'zynpay-auto-salary-calculator': ['calculator'],
	'zynpay-digital-agreement-generator': ['digitaltools', 'digital', 'tools'],
	'zynpay-inventory-manager-lite': ['managementsoftware', 'management'],
	'zynpay-whatsapp-invoice-sender': ['whatsapp'],
	'zynpay-emi-collection-tracker': ['EmiTracker', 'emitracker', 'emi'],
	'zynpay-bank-statement-analyzer': ['digitaltools', 'digital', 'tools']
};

function resolveOverrideBySlug(slug?: string): string | undefined {
	if (!slug) return undefined;
	const candidates = slugPreferredBasenames[slug];
	if (!candidates) return undefined;
	for (const base of candidates) {
		const key = normalize(base);
		const direct = filenameToUrl.get(key);
		if (direct) return direct;
		// try partial scan of actual module paths
		for (const [path, url] of Object.entries(imageModules)) {
			const lc = path.toLowerCase();
			if (lc.includes(base.toLowerCase())) {
				return url as string;
			}
		}
	}
	return undefined;
}

export function resolveProductImage(
	name?: string,
	brand?: string,
	slug?: string
): string | undefined {
	// First, apply precise slug-based overrides for specified products only
	const override = resolveOverrideBySlug(slug);
	if (override) return override;

	const candidates: string[] = [];
	if (name) {
		candidates.push(name);
		// also try first part before parentheses or dashes
		const simpleName = name.split('(')[0].split('-')[0];
		if (simpleName && simpleName !== name) candidates.push(simpleName);
	}
	if (brand) candidates.push(brand);
	if (slug) {
		candidates.push(slug);
		// common slug simplification
		candidates.push(slug.split('-')[0]);
	}

	for (const c of candidates) {
		const key = normalize(c);
		if (!key) continue;
		// exact match
		const direct = filenameToUrl.get(key);
		if (direct) return direct;
		// fuzzy: filename starts with candidate key
		for (const [fnameKey, url] of filenameToUrl.entries()) {
			if (fnameKey.startsWith(key) || key.startsWith(fnameKey)) {
				return url;
			}
		}
	}
	return undefined;
}

export function getAllImageKeys(): string[] {
	return Array.from(filenameToUrl.keys());
}



