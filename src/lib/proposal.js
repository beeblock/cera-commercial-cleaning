export const industryNames = {
  corporate: "Corporate Offices",
  education: "Educational Institutions",
  healthcare: "Healthcare Facilities",
  hospitality: "Hospitality & Restaurants",
  fitness: "Gyms and Fitness Centers",
  government: "Government Buildings",
  supermarkets: "Supermarkets",
  worship: "Churches & Houses of Worship",
  warehouse: "Warehouse and Industrial",
  other: "Other",
};

export const frequencyNames = {
  daily: "Daily Service (7 Days/Week)",
  "5x": "5x Per Week (Standard Business)",
  "3x": "3x Per Week",
  weekly: "Weekly Maintenance",
  biweekly: "Bi-weekly Scheduled Service",
  "deep-clean": "One-time Deep Clean & Sanitize",
};

export const proposalFields = {
  company_name: { label: "Company / Business Name", max: 160, required: true },
  full_name: { label: "Your Name", max: 100, required: true },
  position: { label: "Title / Position", max: 100, required: true },
  email: { label: "Email Address", max: 254, required: true },
  phone: { label: "Phone Number", max: 40, required: true },
  industry: { label: "Industry", max: 40, required: true },
  address: { label: "Facility Address", max: 300, required: true },
  sqft: { label: "Approximate Square Footage", max: 40 },
  floors: { label: "Number of Floors", max: 20 },
  frequency: { label: "Cleaning Frequency", max: 40, required: true },
  start_date: { label: "Preferred Start Date", max: 10 },
  details: { label: "Additional Details", max: 5000 },
};
