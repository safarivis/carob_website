import XLSX from 'xlsx';
import { writeFileSync } from 'fs';

// Financial projections data
const projections = [
  { Year: 1, CAPEX: 700000, OPEX: 85000, Revenue: 0, 'Net Cash Flow': -785000, Cumulative: -785000 },
  { Year: 2, CAPEX: 250000, OPEX: 85000, Revenue: 0, 'Net Cash Flow': -335000, Cumulative: -1120000 },
  { Year: 3, CAPEX: 100000, OPEX: 85000, Revenue: 0, 'Net Cash Flow': -185000, Cumulative: -1305000 },
  { Year: 4, CAPEX: 50000, OPEX: 85000, Revenue: 0, 'Net Cash Flow': -135000, Cumulative: -1440000 },
  { Year: 5, CAPEX: 50000, OPEX: 85000, Revenue: 0, 'Net Cash Flow': -135000, Cumulative: -1575000 },
  { Year: 6, CAPEX: 0, OPEX: 130000, Revenue: 100000, 'Net Cash Flow': -30000, Cumulative: -1605000 },
  { Year: 7, CAPEX: 0, OPEX: 140000, Revenue: 200000, 'Net Cash Flow': 60000, Cumulative: -1545000 },
  { Year: 8, CAPEX: 250000, OPEX: 150000, Revenue: 350000, 'Net Cash Flow': -50000, Cumulative: -1595000 },
  { Year: 9, CAPEX: 0, OPEX: 180000, Revenue: 500000, 'Net Cash Flow': 320000, Cumulative: -1275000 },
  { Year: 10, CAPEX: 0, OPEX: 200000, Revenue: 600000, 'Net Cash Flow': 400000, Cumulative: -875000 },
  { Year: 11, CAPEX: 0, OPEX: 220000, Revenue: 750000, 'Net Cash Flow': 530000, Cumulative: -345000 },
  { Year: 12, CAPEX: 0, OPEX: 230000, Revenue: 850000, 'Net Cash Flow': 620000, Cumulative: 275000 },
  { Year: 13, CAPEX: 0, OPEX: 230000, Revenue: 900000, 'Net Cash Flow': 670000, Cumulative: 945000 },
  { Year: 14, CAPEX: 0, OPEX: 230000, Revenue: 900000, 'Net Cash Flow': 670000, Cumulative: 1615000 },
  { Year: 15, CAPEX: 0, OPEX: 230000, Revenue: 900000, 'Net Cash Flow': 670000, Cumulative: 2285000 },
  { Year: 20, CAPEX: 0, OPEX: 250000, Revenue: 1100000, 'Net Cash Flow': 850000, Cumulative: 5785000 },
  { Year: 25, CAPEX: 0, OPEX: 260000, Revenue: 1300000, 'Net Cash Flow': 1040000, Cumulative: 9785000 },
  { Year: 30, CAPEX: 0, OPEX: 270000, Revenue: 1500000, 'Net Cash Flow': 1230000, Cumulative: 14285000 },
  { Year: 40, CAPEX: 0, OPEX: 280000, Revenue: 1800000, 'Net Cash Flow': 1520000, Cumulative: 30785000 },
  { Year: 50, CAPEX: 0, OPEX: 290000, Revenue: 1800000, 'Net Cash Flow': 1510000, Cumulative: 48785000 },
];

// Scenarios
const scenarios = [
  { Scenario: 'Conservative', Description: 'Raw Pods Only', 'Annual Revenue': 700000, EBITDA: 470000, IRR: '8%', 'Payback (yrs)': 14 },
  { Scenario: 'Base', Description: 'Primary Processing', 'Annual Revenue': 900000, EBITDA: 670000, IRR: '12%', 'Payback (yrs)': 12 },
  { Scenario: 'Optimistic', Description: 'Value-Add Processing', 'Annual Revenue': 1945000, EBITDA: 1500000, IRR: '18%', 'Payback (yrs)': 9 },
];

// Use of Funds
const useOfFunds = [
  { Category: 'Land & infrastructure', Amount: 575000, Percent: '41%' },
  { Category: 'Trees & planting', Amount: 250000, Percent: '18%' },
  { Category: 'Equipment', Amount: 100000, Percent: '7%' },
  { Category: 'Working capital (5 years)', Amount: 75000, Percent: '5%' },
  { Category: 'Contingency', Amount: 150000, Percent: '11%' },
  { Category: 'Processing upgrade (Yr 8)', Amount: 250000, Percent: '18%' },
  { Category: 'TOTAL', Amount: 1400000, Percent: '100%' },
];

// Investment Summary
const summary = [
  { Metric: 'Total Investment', Value: '$1,400,000' },
  { Metric: 'Scale', Value: '250 hectares (25,000 trees)' },
  { Metric: 'Target IRR (Base)', Value: '12%' },
  { Metric: 'Payback Period', Value: '12 years' },
  { Metric: 'Break-even Year', Value: 'Year 12' },
  { Metric: 'Annual Revenue (Mature)', Value: '$900,000' },
  { Metric: 'Asset Lifespan', Value: '100+ years' },
  { Metric: '50-Year Cumulative Value', Value: '$48,785,000' },
  { Metric: 'Return Multiple (50 yrs)', Value: '35x' },
];

// Crop Comparison
const cropComparison = [
  { Crop: 'Carob', 'Productive Life': '100+ years', 'Cumulative Yield (100 yrs)': '6,000-10,000 kg/tree', 'Replant Cost': 'Once', 'Water Needs': 'Low' },
  { Crop: 'Olive', 'Productive Life': '50-100 years', 'Cumulative Yield (100 yrs)': '3,000-6,000 kg/tree', 'Replant Cost': '1-2x', 'Water Needs': 'Low-Med' },
  { Crop: 'Almond', 'Productive Life': '25-30 years', 'Cumulative Yield (100 yrs)': '1,500-2,000 kg/tree*', 'Replant Cost': '3-4x', 'Water Needs': 'High' },
  { Crop: 'Apple', 'Productive Life': '30-40 years', 'Cumulative Yield (100 yrs)': '2,000-3,000 kg/tree*', 'Replant Cost': '2-3x', 'Water Needs': 'High' },
];

// Create workbook
const wb = XLSX.utils.book_new();

// Add sheets
XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(summary), 'Summary');
XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(projections), '15-50 Year Projections');
XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(scenarios), 'Scenarios');
XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(useOfFunds), 'Use of Funds');
XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(cropComparison), 'Crop Comparison');

// Write file
XLSX.writeFile(wb, 'public/docs/carob-financial-model.xlsx');
console.log('Excel file created: public/docs/carob-financial-model.xlsx');
