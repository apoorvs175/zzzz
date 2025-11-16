export type ProductDenomination = {
  id: string;
  label: string;
  price: number;
  currency: string;
  savings: number;
  bestValue?: boolean;
  description?: string;
};

export type Product = {
  slug: string;
  name: string;
  brand: string;
  image?: string;
  region: string;
  currency: string;
  category: string;
  rating: number;
  reviews: number;
  savingsLabel: string;
  shortDescription: string;
  description: string[];
  highlights: string[];
  denominations: ProductDenomination[];
  terms: string[];
  guides: string[];
  badges?: string[];
};

export const giftProducts: Product[] = [
  {
    slug: 'zynpay-expense-cashflow-manager',
    name: 'Expense & Cashflow Manager',
    brand: 'Zynpay',
    region: 'India',
    currency: 'INR',
    category: 'Finance Tool',
    rating: 4.95,
    reviews: 8500,
    savingsLabel: 'Save up to 15%',
    shortDescription: 'Track daily income & expenses with automated cashflow dashboard and category-wise analytics.',
    description: [
      'Zynpay Expense & Cashflow Manager helps you track all your financial transactions in one place. Get real-time insights into your income, expenses, and cashflow patterns.',
      'Automated categorization, monthly profit/loss reports, and multi-user access make financial management effortless for individuals and businesses.'
    ],
    highlights: [
      'Track daily income & expenses',
      'Automated cashflow dashboard',
      'Category-wise expense analytics',
      'Monthly profit/loss report',
      'Excel/PDF export',
      'Multi-user access',
      'Filter by date, category, customer, or vendor'
    ],
    denominations: [
      { id: 'expense-100', label: '₹100', price: 100, currency: 'INR', savings: 5 },
      { id: 'expense-500', label: '₹500', price: 500, currency: 'INR', savings: 10, bestValue: true },
      { id: 'expense-1200', label: '₹1,200', price: 1200, currency: 'INR', savings: 15 }
    ],
    terms: [
      'Lifetime access with one-time purchase.',
      'Regular updates and feature additions included.',
      'Data encrypted and secure.',
      'Available on web and mobile platforms.',
      '30-day money-back guarantee.'
    ],
    guides: [
      'Sign up for your Zynpay account.',
      'Set up your expense categories and income sources.',
      'Start tracking transactions manually or import from bank statements.',
      'View your cashflow dashboard and generate reports.'
    ],
    badges: ['Popular', 'Finance tool']
  },
  {
    slug: 'zynpay-emi-analyzer-dashboard',
    name: 'EMI Analyzer Dashboard',
    brand: 'Zynpay',
    region: 'India',
    currency: 'INR',
    category: 'Finance Tool',
    rating: 4.92,
    reviews: 7200,
    savingsLabel: 'Save up to 12%',
    shortDescription: 'Calculate EMI, interest & principal with bank-wise comparison and amortization tables.',
    description: [
      'Zynpay EMI Analyzer Dashboard provides comprehensive loan analysis tools to help you make informed borrowing decisions.',
      'Compare interest rates across banks, generate detailed amortization schedules, and calculate prepayment savings instantly.'
    ],
    highlights: [
      'EMI, interest & principal calculation',
      'Bank-wise interest rate comparison',
      'Amortization table generation',
      'Prepayment savings calculator',
      'Loan summary dashboard',
      'EMI PDF export',
      'Mobile-friendly calculator'
    ],
    denominations: [
      { id: 'emi-200', label: '₹200', price: 200, currency: 'INR', savings: 8 },
      { id: 'emi-600', label: '₹600', price: 600, currency: 'INR', savings: 10, bestValue: true },
      { id: 'emi-1400', label: '₹1,400', price: 1400, currency: 'INR', savings: 12 }
    ],
    terms: [
      'One-time purchase with lifetime access.',
      'All calculations are accurate and regularly updated.',
      'Supports all types of loans (home, personal, car, business).',
      'Free updates and new features included.',
      '30-day money-back guarantee.'
    ],
    guides: [
      'Enter loan amount, interest rate, and tenure.',
      'Select bank or enter custom interest rate.',
      'View EMI breakdown and amortization schedule.',
      'Compare multiple loan options and export reports.'
    ],
    badges: ['Loan calculator', 'Best value']
  },
  {
    slug: 'zynpay-vendorpay-reminder-system',
    name: 'VendorPay Reminder System',
    brand: 'Zynpay',
    region: 'India',
    currency: 'INR',
    category: 'Business Tool',
    rating: 4.88,
    reviews: 5600,
    savingsLabel: 'Save up to 10%',
    shortDescription: 'Automated WhatsApp & Email reminders for vendor dues with payment status tracking.',
    description: [
      'Zynpay VendorPay Reminder System helps you never miss a vendor payment deadline. Automate reminders and track all vendor dues efficiently.',
      'Schedule reminders, track payment status, and maintain healthy vendor relationships with our comprehensive payment management system.'
    ],
    highlights: [
      'Add vendor dues with due dates',
      'Automated WhatsApp & Email reminders',
      'Payment status tracking',
      'Vendor summary dashboard',
      'Reminder scheduling',
      'Export pending dues list',
      'Multi-vendor management'
    ],
    denominations: [
      { id: 'vendor-150', label: '₹150', price: 150, currency: 'INR', savings: 5 },
      { id: 'vendor-700', label: '₹700', price: 700, currency: 'INR', savings: 8, bestValue: true },
      { id: 'vendor-1500', label: '₹1,500', price: 1500, currency: 'INR', savings: 10 }
    ],
    terms: [
      'Lifetime access with one-time purchase.',
      'Unlimited vendors and reminders.',
      'WhatsApp and Email integration included.',
      'Regular updates and new features.',
      '30-day money-back guarantee.'
    ],
    guides: [
      'Add vendor details and payment due dates.',
      'Set up automated reminder schedules.',
      'Track payment status and history.',
      'Export reports and manage vendor relationships.'
    ],
    badges: ['Business tool', 'Automated']
  },
  {
    slug: 'zynpay-gst-invoice-payment-reconciliation',
    name: 'GST Invoice & Payment Reconciliation Tool',
    brand: 'Zynpay',
    region: 'India',
    currency: 'INR',
    category: 'Business Tool',
    rating: 4.94,
    reviews: 6800,
    savingsLabel: 'Save up to 18%',
    shortDescription: 'Import invoices, auto-match payments, and generate GST-compliant reports with reconciliation dashboard.',
    description: [
      'Zynpay GST Invoice & Payment Reconciliation Tool simplifies GST compliance by automating invoice management and payment matching.',
      'Import invoices from multiple formats, automatically match payments, and generate GSTR-1/3B-ready reports for seamless tax filing.'
    ],
    highlights: [
      'Import invoices (CSV/Excel/PDF)',
      'Auto-match payments with invoices',
      'GST In/Out summary',
      'Highlight pending or mismatched invoices',
      'Reconciliation dashboard',
      'Export GSTR-1/3B-ready reports',
      'Duplicate detection'
    ],
    denominations: [
      { id: 'gst-300', label: '₹300', price: 300, currency: 'INR', savings: 12 },
      { id: 'gst-900', label: '₹900', price: 900, currency: 'INR', savings: 15, bestValue: true },
      { id: 'gst-2000', label: '₹2,000', price: 2000, currency: 'INR', savings: 18 }
    ],
    terms: [
      'GST-compliant invoice templates included.',
      'Integration with GST portal available.',
      'Data security and compliance guaranteed.',
      'Regular updates for GST rule changes.',
      '30-day money-back guarantee.'
    ],
    guides: [
      'Import invoices from CSV, Excel, or PDF formats.',
      'Link invoices with payment transactions.',
      'Review reconciliation dashboard for mismatches.',
      'Export GSTR-1/3B-ready reports for filing.'
    ],
    badges: ['GST compliant', 'Tax tool']
  },
  {
    slug: 'zynpay-ledger-transaction-categorization',
    name: 'Ledger & Transaction Categorization App',
    brand: 'Zynpay',
    region: 'India',
    currency: 'INR',
    category: 'Finance Tool',
    rating: 4.91,
    reviews: 6200,
    savingsLabel: 'Save up to 14%',
    shortDescription: 'Import bank statements with AI-based auto-categorization and Tally-compatible exports.',
    description: [
      'Zynpay Ledger & Transaction Categorization App helps you organize all your financial transactions with intelligent categorization.',
      'Import bank statements, automatically categorize transactions, create ledgers for customers/vendors, and export to Tally-compatible formats.'
    ],
    highlights: [
      'Import bank statements (PDF/CSV)',
      'AI-based auto-categorization',
      'Create ledgers for customers/vendors',
      'Detect unknown transactions',
      'Monthly and yearly summary',
      'Export Tally-compatible Excel',
      'Reconciliation of credits/debits'
    ],
    denominations: [
      { id: 'ledger-250', label: '₹250', price: 250, currency: 'INR', savings: 8 },
      { id: 'ledger-800', label: '₹800', price: 800, currency: 'INR', savings: 11, bestValue: true },
      { id: 'ledger-1600', label: '₹1,600', price: 1600, currency: 'INR', savings: 14 }
    ],
    terms: [
      'Unlimited transactions on all plans.',
      'AI-powered categorization with machine learning.',
      'Tally-compatible export formats included.',
      'Regular backups and data security.',
      '30-day money-back guarantee.'
    ],
    guides: [
      'Import bank statements in PDF or CSV format.',
      'Review AI-categorized transactions and adjust as needed.',
      'Create ledgers for customers and vendors.',
      'Export to Tally-compatible Excel format.'
    ],
    badges: ['Ledger tool', 'AI-powered']
  },
  {
    slug: 'zynpay-smart-invoice-builder',
    name: 'Smart Invoice Builder',
    brand: 'Zynpay',
    region: 'India',
    currency: 'INR',
    category: 'Business Tool',
    rating: 4.93,
    reviews: 7400,
    savingsLabel: 'Save up to 16%',
    shortDescription: 'Create branded invoices instantly with auto GST calculation and WhatsApp/Email sharing.',
    description: [
      'Zynpay Smart Invoice Builder enables you to create professional, branded invoices in seconds with automatic GST and tax calculations.',
      'Save customer details, build an item library, and share invoices instantly via WhatsApp or Email for faster payments.'
    ],
    highlights: [
      'Create branded invoices instantly',
      'Auto GST & tax calculation',
      'WhatsApp/Email invoice sharing',
      'Save customer details',
      'Download in PDF/Excel',
      'Item library for quick billing',
      'Invoice history tracking'
    ],
    denominations: [
      { id: 'invoice-400', label: '₹400', price: 400, currency: 'INR', savings: 10 },
      { id: 'invoice-1000', label: '₹1,000', price: 1000, currency: 'INR', savings: 13, bestValue: true },
      { id: 'invoice-1900', label: '₹1,900', price: 1900, currency: 'INR', savings: 16 }
    ],
    terms: [
      'Unlimited invoices on all plans.',
      'GST-compliant invoice templates included.',
      'WhatsApp and Email integration included.',
      'Custom branding options available.',
      '30-day money-back guarantee.'
    ],
    guides: [
      'Set up your business details and branding.',
      'Add customer information and item library.',
      'Create invoices with automatic GST calculation.',
      'Share invoices via WhatsApp or Email instantly.'
    ],
    badges: ['Invoice builder', 'GST compliant']
  },
  {
    slug: 'zynpay-auto-reminder-crm',
    name: 'Auto Reminder CRM',
    brand: 'Zynpay',
    region: 'India',
    currency: 'INR',
    category: 'Business Tool',
    rating: 4.89,
    reviews: 5100,
    savingsLabel: 'Save up to 11%',
    shortDescription: 'Customer & lead management with automatic follow-up reminders and renewal notifications.',
    description: [
      'Zynpay Auto Reminder CRM helps you manage customers and leads efficiently with automated follow-up reminders.',
      'Track lead status, set renewal reminders, and maintain customer relationships with automated WhatsApp and Email notifications.'
    ],
    highlights: [
      'Customer & lead management',
      'Automatic follow-up reminders',
      'Renewal reminders for services',
      'WhatsApp/Email notification system',
      'Lead status tracking',
      'Add notes & history',
      'Dashboard for active/pending leads'
    ],
    denominations: [
      { id: 'crm-200', label: '₹200', price: 200, currency: 'INR', savings: 6 },
      { id: 'crm-750', label: '₹750', price: 750, currency: 'INR', savings: 9, bestValue: true },
      { id: 'crm-1500', label: '₹1,500', price: 1500, currency: 'INR', savings: 11 }
    ],
    terms: [
      'Unlimited customers and leads.',
      'WhatsApp and Email integration included.',
      'Automated reminder scheduling.',
      'Regular updates and new features.',
      '30-day money-back guarantee.'
    ],
    guides: [
      'Add customers and leads to your CRM.',
      'Set up automated follow-up reminders.',
      'Track lead status and customer history.',
      'Receive renewal reminders and notifications.'
    ],
    badges: ['CRM', 'Automated']
  },
  {
    slug: 'zynpay-subscription-manager',
    name: 'Subscription Manager',
    brand: 'Zynpay',
    region: 'India',
    currency: 'INR',
    category: 'Business Tool',
    rating: 4.87,
    reviews: 4800,
    savingsLabel: 'Save up to 9%',
    shortDescription: 'Manage customer subscriptions with auto-expiry alerts and renewal reminders.',
    description: [
      'Zynpay Subscription Manager helps you manage all customer subscriptions in one place with automated expiry alerts and renewal reminders.',
      'Track subscription status, customize plans, and ensure timely renewals with bulk customer import capabilities.'
    ],
    highlights: [
      'Manage subscriptions for all customers',
      'Auto-expiry alerts',
      'Renewal reminders',
      'Subscription dashboard',
      'Plan customization',
      'Payment due tracking',
      'Bulk import of customer list'
    ],
    denominations: [
      { id: 'subscription-100', label: '₹100', price: 100, currency: 'INR', savings: 5 },
      { id: 'subscription-600', label: '₹600', price: 600, currency: 'INR', savings: 7, bestValue: true },
      { id: 'subscription-1300', label: '₹1,300', price: 1300, currency: 'INR', savings: 9 }
    ],
    terms: [
      'Unlimited subscriptions and customers.',
      'Automated expiry and renewal alerts.',
      'Bulk import from Excel/CSV supported.',
      'Customizable subscription plans.',
      '30-day money-back guarantee.'
    ],
    guides: [
      'Add customer subscriptions manually or import in bulk.',
      'Set up subscription plans and pricing.',
      'Configure auto-expiry alerts and renewal reminders.',
      'Track payment dues and subscription status.'
    ],
    badges: ['Subscription', 'Automated']
  },
  {
    slug: 'zynpay-daily-sales-tracker',
    name: 'Daily Sales Tracker',
    brand: 'Zynpay',
    region: 'India',
    currency: 'INR',
    category: 'Business Tool',
    rating: 4.86,
    reviews: 4500,
    savingsLabel: 'Save up to 8%',
    shortDescription: 'Track daily sales with category-wise analytics, monthly charts, and staff-wise reporting.',
    description: [
      'Zynpay Daily Sales Tracker provides comprehensive sales tracking with category-wise analytics and graphical dashboards.',
      'Compare monthly sales, track staff performance, and export detailed sales reports for better business insights.'
    ],
    highlights: [
      'Add daily sales entries',
      'Category-wise sales tracking',
      'Monthly sales chart',
      'Compare previous months',
      'Export sales reports',
      'Staff-wise sales tracking (optional)',
      'Graphical dashboard'
    ],
    denominations: [
      { id: 'sales-100', label: '₹100', price: 100, currency: 'INR', savings: 4 },
      { id: 'sales-500', label: '₹500', price: 500, currency: 'INR', savings: 6, bestValue: true },
      { id: 'sales-1100', label: '₹1,100', price: 1100, currency: 'INR', savings: 8 }
    ],
    terms: [
      'Unlimited sales entries.',
      'Graphical dashboards and analytics included.',
      'Export to Excel/PDF formats.',
      'Staff-wise tracking available.',
      '30-day money-back guarantee.'
    ],
    guides: [
      'Add daily sales entries with categories.',
      'View monthly sales charts and comparisons.',
      'Track staff-wise sales performance (optional).',
      'Export sales reports for analysis.'
    ],
    badges: ['Sales tracker', 'Analytics']
  },
  {
    slug: 'zynpay-auto-salary-calculator',
    name: 'Auto Salary Calculator',
    brand: 'Zynpay',
    region: 'India',
    currency: 'INR',
    category: 'Business Tool',
    rating: 4.90,
    reviews: 5900,
    savingsLabel: 'Save up to 13%',
    shortDescription: 'Calculate salary based on attendance with PF/ESI auto-deduction and PDF salary slip generation.',
    description: [
      'Zynpay Auto Salary Calculator automates salary calculation based on attendance, overtime, and allowances.',
      'Auto-deduct PF/ESI, generate professional PDF salary slips, and maintain complete staff salary history.'
    ],
    highlights: [
      'Calculate salary based on attendance',
      'Overtime & allowance support',
      'Auto-deduct PF/ESI',
      'Salary slip generator (PDF)',
      'Upload attendance in Excel/CSV',
      'Staff salary history',
      'Multi-employee support'
    ],
    denominations: [
      { id: 'salary-350', label: '₹350', price: 350, currency: 'INR', savings: 9 },
      { id: 'salary-950', label: '₹950', price: 950, currency: 'INR', savings: 11, bestValue: true },
      { id: 'salary-1950', label: '₹1,950', price: 1950, currency: 'INR', savings: 13 }
    ],
    terms: [
      'Unlimited employees on all plans.',
      'PF/ESI calculation as per latest rules.',
      'PDF salary slip generation included.',
      'Attendance import from Excel/CSV supported.',
      '30-day money-back guarantee.'
    ],
    guides: [
      'Add employee details and salary structure.',
      'Upload attendance data from Excel/CSV.',
      'Calculate salary with automatic PF/ESI deduction.',
      'Generate and download PDF salary slips.'
    ],
    badges: ['Salary calculator', 'HR tool']
  },
  {
    slug: 'zynpay-digital-agreement-generator',
    name: 'Digital Agreement Generator',
    brand: 'Zynpay',
    region: 'India',
    currency: 'INR',
    category: 'Business Tool',
    rating: 4.88,
    reviews: 4200,
    savingsLabel: 'Save up to 7%',
    shortDescription: '100+ ready-made legal templates with auto-fill and e-signature compatibility.',
    description: [
      'Zynpay Digital Agreement Generator provides 100+ ready-made legal templates for various business needs.',
      'Auto-fill personal/business details, customize terms & conditions, and export in multiple formats with e-signature compatibility.'
    ],
    highlights: [
      '100+ ready-made legal templates',
      'Auto-fill personal/business details',
      'Customizable terms & conditions',
      'Multi-format export (PDF/DOCX)',
      'Save & reuse agreements',
      'E-signature compatible',
      'Secure document history'
    ],
    denominations: [
      { id: 'agreement-200', label: '₹200', price: 200, currency: 'INR', savings: 4 },
      { id: 'agreement-700', label: '₹700', price: 700, currency: 'INR', savings: 6, bestValue: true },
      { id: 'agreement-1400', label: '₹1,400', price: 1400, currency: 'INR', savings: 7 }
    ],
    terms: [
      '100+ legal templates included.',
      'E-signature integration available.',
      'Export in PDF and DOCX formats.',
      'Secure document storage and history.',
      '30-day money-back guarantee.'
    ],
    guides: [
      'Browse and select from 100+ legal templates.',
      'Auto-fill your business and personal details.',
      'Customize terms and conditions as needed.',
      'Export in PDF/DOCX and share for e-signature.'
    ],
    badges: ['Legal tool', 'Templates']
  },
  {
    slug: 'zynpay-inventory-manager-lite',
    name: 'Inventory Manager Lite',
    brand: 'Zynpay',
    region: 'India',
    currency: 'INR',
    category: 'Business Tool',
    rating: 4.85,
    reviews: 3900,
    savingsLabel: 'Save up to 6%',
    shortDescription: 'Track stock in/out with low-stock alerts, POS-style search, and inventory dashboard.',
    description: [
      'Zynpay Inventory Manager Lite helps you manage inventory efficiently with stock tracking and low-stock alerts.',
      'Import/export inventory lists, track daily stock movements, and use POS-style product search for quick access.'
    ],
    highlights: [
      'Add & edit products',
      'Track stock in/out',
      'Low-stock alerts',
      'Import/export inventory list',
      'Daily stock summary',
      'Simple POS-style product search',
      'Graphical inventory dashboard'
    ],
    denominations: [
      { id: 'inventory-100', label: '₹100', price: 100, currency: 'INR', savings: 3 },
      { id: 'inventory-600', label: '₹600', price: 600, currency: 'INR', savings: 5, bestValue: true },
      { id: 'inventory-1200', label: '₹1,200', price: 1200, currency: 'INR', savings: 6 }
    ],
    terms: [
      'Unlimited products and stock entries.',
      'Low-stock alert notifications included.',
      'Import/export from Excel/CSV supported.',
      'POS-style search functionality.',
      '30-day money-back guarantee.'
    ],
    guides: [
      'Add products and set initial stock levels.',
      'Track stock in/out movements daily.',
      'Receive low-stock alerts automatically.',
      'Export inventory reports and summaries.'
    ],
    badges: ['Inventory', 'POS']
  },
  {
    slug: 'zynpay-whatsapp-invoice-sender',
    name: 'WhatsApp Invoice Sender',
    brand: 'Zynpay',
    region: 'India',
    currency: 'INR',
    category: 'Business Tool',
    rating: 4.92,
    reviews: 6600,
    savingsLabel: 'Save up to 17%',
    shortDescription: 'Generate invoice & send on WhatsApp instantly with auto-fill customer details and PDF attachment.',
    description: [
      'Zynpay WhatsApp Invoice Sender enables instant invoice generation and WhatsApp delivery for faster payments.',
      'Auto-fill customer details, attach PDF invoices, track payment status, and customize templates for professional communication.'
    ],
    highlights: [
      'Generate invoice & send on WhatsApp instantly',
      'Auto-fill customer details',
      'Attach PDF invoice',
      'Payment status tracking',
      'One-click WhatsApp share',
      'Template customization',
      'Invoice activity log'
    ],
    denominations: [
      { id: 'whatsapp-400', label: '₹400', price: 400, currency: 'INR', savings: 12 },
      { id: 'whatsapp-1100', label: '₹1,100', price: 1100, currency: 'INR', savings: 15, bestValue: true },
      { id: 'whatsapp-2000', label: '₹2,000', price: 2000, currency: 'INR', savings: 17 }
    ],
    terms: [
      'Unlimited invoices and WhatsApp sends.',
      'WhatsApp integration included.',
      'PDF invoice generation included.',
      'Payment status tracking available.',
      '30-day money-back guarantee.'
    ],
    guides: [
      'Set up your business details and invoice template.',
      'Add customer information for auto-fill.',
      'Generate invoice and send via WhatsApp instantly.',
      'Track payment status and invoice activity.'
    ],
    badges: ['WhatsApp', 'Invoice']
  },
  {
    slug: 'zynpay-emi-collection-tracker',
    name: 'EMI Collection Tracker',
    brand: 'Zynpay',
    region: 'India',
    currency: 'INR',
    category: 'Finance Tool',
    rating: 4.89,
    reviews: 5400,
    savingsLabel: 'Save up to 11%',
    shortDescription: 'Track customer loans & EMI schedules with automated reminders and WhatsApp/SMS notifications.',
    description: [
      'Zynpay EMI Collection Tracker helps you manage customer loans and EMI collections efficiently.',
      'Add customer loans, set up EMI schedules, send automated reminders via WhatsApp/SMS, and track paid/pending EMIs.'
    ],
    highlights: [
      'Add customer loans & EMI schedules',
      'Automated EMI reminder system',
      'Track paid & pending EMIs',
      'WhatsApp/SMS reminders',
      'EMI dashboard',
      'Bulk customer upload',
      'Export EMI collection sheet'
    ],
    denominations: [
      { id: 'emi-tracker-250', label: '₹250', price: 250, currency: 'INR', savings: 7 },
      { id: 'emi-tracker-800', label: '₹800', price: 800, currency: 'INR', savings: 9, bestValue: true },
      { id: 'emi-tracker-1600', label: '₹1,600', price: 1600, currency: 'INR', savings: 11 }
    ],
    terms: [
      'Unlimited customers and loans.',
      'WhatsApp and SMS integration included.',
      'Automated reminder scheduling.',
      'Bulk customer import from Excel/CSV.',
      '30-day money-back guarantee.'
    ],
    guides: [
      'Add customer loans and EMI schedules.',
      'Set up automated reminder system.',
      'Track paid and pending EMIs on dashboard.',
      'Export EMI collection sheets for reporting.'
    ],
    badges: ['EMI tracker', 'Automated']
  },
  {
    slug: 'zynpay-bank-statement-analyzer',
    name: 'Bank Statement Analyzer',
    brand: 'Zynpay',
    region: 'India',
    currency: 'INR',
    category: 'Finance Tool',
    rating: 4.91,
    reviews: 6100,
    savingsLabel: 'Save up to 15%',
    shortDescription: 'Upload PDF/Excel bank statements with AI-based classification and Tally-compatible output.',
    description: [
      'Zynpay Bank Statement Analyzer automatically reads and classifies transactions from bank statements.',
      'Upload PDF or Excel statements, get AI-based transaction classification, highlight unusual entries, and export clean reports in Tally-compatible format.'
    ],
    highlights: [
      'Upload PDF or Excel bank statements',
      'Auto-read transactions',
      'AI-based classification',
      'Highlight unusual/spam entries',
      'Monthly summary dashboard',
      'Export clean Excel report',
      'Tally-compatible output'
    ],
    denominations: [
      { id: 'bank-300', label: '₹300', price: 300, currency: 'INR', savings: 10 },
      { id: 'bank-900', label: '₹900', price: 900, currency: 'INR', savings: 13, bestValue: true },
      { id: 'bank-1900', label: '₹1,900', price: 1900, currency: 'INR', savings: 15 }
    ],
    terms: [
      'Unlimited statement uploads.',
      'AI-powered transaction classification.',
      'Tally-compatible export formats included.',
      'Supports all major bank formats.',
      '30-day money-back guarantee.'
    ],
    guides: [
      'Upload bank statements in PDF or Excel format.',
      'Review AI-classified transactions.',
      'Check highlighted unusual or spam entries.',
      'Export clean Excel reports in Tally-compatible format.'
    ],
    badges: ['Bank analyzer', 'AI-powered']
  }
];
