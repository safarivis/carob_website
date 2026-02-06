export const proposal = {
  meta: {
    client: "George Haggar / Haggar Group",
    prepared: "2026-02-05",
    domain: "carob.lewkai.com",
  },

  investmentSummary: {
    headline: "Commercial Carob Operation: A $3M Generational Asset",
    keyPoints: [
      { metric: "$3M", label: "Total Investment", sublabel: "200 ha operation" },
      { metric: "15-20%", label: "Target IRR", sublabel: "at commercial scale" },
      { metric: "100+", label: "Years Productive", sublabel: "per tree" },
      { metric: "$30M+", label: "Lifetime Value", sublabel: "50-year projection" },
    ],
    valueProposition: "A commercial carob operation with integrated processing, leveraging Egypt's climate suitability and cost advantages. Carob trees produce for over a century—creating a true generational asset that appreciates in value and yield over time.",
    irrDisclaimer: "IRR calculation assumes conservative yield projections and wholesale pricing of $2.50/kg. Value-added processing and retail channels could significantly improve returns.",
  },

  summary: {
    opportunity:
      "A market shift in global carob production—driven by 65% decline in Mediterranean cultivation and supply moving to Turkey/Morocco—creates a window for new production in climate-suitable regions with lower cost structures.",
    solution:
      "Haggar Group will establish a 200 ha commercial carob operation in Egypt with primary processing facilities, leveraging regional cost advantages and established distribution networks.",
    ask: { amount: 3000000, currency: "USD" },
    returns: { irr: 18, irrConservative: 12, payback: 19 },
    tagline: "Commercial carob production for growing markets",
  },

  keyMetrics: {
    marketSize: { value: 500, unit: "M", year: 2024, label: "Market Size", range: { min: 247, max: 500 }, note: "Estimates range $247-500M depending on segment definitions" },
    investment: { value: 3, unit: "M", label: "Investment Required" },
    irr: { value: 18, unit: "%", label: "Target IRR", conservativeValue: 12, note: "12% conservative / 18% target" },
    co2: { value: "400-800", unit: "tons/yr", label: "CO2 Sequestered" },
  },

  market: {
    size: { value: 500, unit: "M", year: 2024, range: { min: 247, max: 500 }, note: "Market size estimates vary by source and segment definitions ($247-500M range)" },
    cagr: 3.6,
    cagrNote: "LBG CAGR is 2.6-3.6% (not 5.5% as sometimes reported). Carob powder segment growing faster at 5-6%.",
    marketShiftNote: "Supply is shifting from Mediterranean to Turkey (+5.2%/yr) and Morocco (63% of exports), rather than disappearing. This creates competition, not just opportunity.",
    segments: [
      {
        name: "Raw carob pods",
        size: 258,
        growth: 4,
        play: "Entry point",
      },
      {
        name: "Carob powder",
        size: 67,
        growth: 6,
        play: "Value-add",
      },
      {
        name: "Locust bean gum",
        size: 350,
        growth: 3,
        play: "Seed sales",
        note: "LBG growth is 2.6-3.6% CAGR, lower than overall market",
      },
      {
        name: "Carob extract",
        size: 241,
        growth: 5.4,
        play: "Long-term",
      },
    ],
    segmentsNote: "Note: Segments total $916M but overlap exists; total addressable market is $247-500M",
    competitors: [
      { country: "Portugal", volume: 55000, share: 30, trend: "+2.3%/yr" },
      { country: "Italy", volume: 27000, share: 15, trend: "-1.2%/yr" },
      { country: "Turkey", volume: 25000, share: 14, trend: "+5.2%/yr" },
      { country: "Morocco", volume: 20000, share: 11, trend: "Growing" },
      { country: "Spain", volume: 18000, share: 10, trend: "Stable" },
      { country: "Greece", volume: 15000, share: 8, trend: "Stable" },
    ],
    trends: [
      {
        name: "Health & Wellness",
        description:
          "Natural sweetener demand, caffeine-free chocolate alternative",
      },
      {
        name: "Plant-Based Movement",
        description:
          "Vegan confectionery, plant milk stabilization, clean-label",
      },
      {
        name: "Sustainability Focus",
        description:
          "ESG-compliant supply chains, climate-positive agriculture",
      },
      {
        name: "Supply Shift (Not Gap)",
        description:
          "65% Mediterranean decline, but Turkey growing 5.2%/yr and Morocco holds 63% of exports. Supply is relocating, not disappearing.",
      },
    ],
    opportunityScore: {
      marketSize: 4,
      growthRate: 4,
      supplyGap: 5,
      competition: 3,
      barriers: 3,
      priceEnv: 4,
      overall: 3.8,
    },
    pricing: {
      marketSize2025: 248.1, // USD million
      projectedSize2035: 412.1, // USD million
      cagr: 5.2,
      priceRanges: [
        { product: "Raw pods (bulk)", pricePerKg: { min: 0.70, max: 1.50 }, notes: "FOB Mediterranean ports" },
        { product: "Kibbled pulp (bulk)", pricePerKg: { min: 0.90, max: 2.00 }, notes: "Primary processed" },
        { product: "Carob powder (wholesale)", pricePerKg: { min: 1.50, max: 9.00 }, notes: "Food-grade, varies by origin/quality" },
        { product: "Carob powder (retail)", pricePerKg: { min: 15.00, max: 30.00 }, notes: "Health food stores, e-commerce" },
        { product: "Carob syrup", pricePerKg: { min: 5.00, max: 15.00 }, notes: "Traditional/specialty markets" },
        { product: "Locust bean gum (E410)", pricePerKg: { min: 10.00, max: 25.00 }, notes: "Food-grade thickener" },
        { product: "D-Pinitol extract", pricePerKg: { min: 50.00, max: 200.00 }, notes: "95%+ purity, pharmaceutical grade" },
      ],
      historicalVolatility: {
        note: "Significant price volatility observed 2022-2024",
        range2022: { min: 1.31, max: 2.78 },
        range2023: { min: 1.41, max: 47.74 },
        range2024: { min: 1.95, max: 27.61 },
      },
      africanRetailExample: {
        country: "South Africa",
        source: "Liveable.co.za",
        product: "Organic Carob Powder 200g",
        priceZAR: 89,
        pricePerKgZAR: 445,
        pricePerKgUSD: 24, // approximate
      },
      implication: "Current projections use conservative wholesale pricing ($2.50/kg for powder). Retail and specialty markets offer 5-10x higher margins if distribution channels can be established.",
    },
  },

  financials: {
    scales: {
      phase1: {
        hectares: 200,
        trees: 20000,
        investment: { min: 2500000, max: 3000000 },
        revenueAtMaturity: { min: 800000, max: 1600000 },
        payback: "18-20 yrs",
      },
      expansion: {
        hectares: 500,
        trees: 50000,
        investment: { min: 6000000, max: 8000000 },
        revenueAtMaturity: { min: 2000000, max: 4000000 },
        payback: "18-20 yrs",
      },
      fullScale: {
        hectares: 1000,
        trees: 100000,
        investment: { min: 12000000, max: 15000000 },
        revenueAtMaturity: { min: 4000000, max: 8000000 },
        payback: "18-20 yrs",
      },
    },
    scenarios: {
      conservative: {
        name: "Conservative",
        description: "Raw Pods Only (200 ha)",
        yield: 800, // 800 tons from 200 ha at 4 t/ha
        price: 700,
        revenue: 560000,
        ebitda: 240000, // Revenue $560K - Opex $320K at maturity
        irr: 12,
        payback: 20,
        breakeven: 20,
      },
      base: {
        name: "Base",
        description: "Primary Processing (200 ha)",
        yield: 800,
        products: [
          { name: "Seeds", volume: 80, price: 1500, revenue: 120000 },
          { name: "Kibbled pulp", volume: 640, price: 900, revenue: 576000 },
          { name: "Animal feed", volume: 80, price: 300, revenue: 24000 },
        ],
        revenue: 720000,
        ebitda: 400000, // Revenue $720K - Opex $320K at maturity (Year 12+)
        irr: 18,
        payback: 19,
        breakeven: 19,
      },
      optimistic: {
        name: "Optimistic",
        description: "Value-Add Processing (200 ha)",
        yield: 720, // accounting for processing losses
        products: [
          { name: "Carob powder", volume: 480, price: 2500, revenue: 1200000 },
          { name: "Seeds (for LBG)", volume: 80, price: 1500, revenue: 120000 },
          { name: "Carob syrup", volume: 40, price: 5000, revenue: 200000 },
          { name: "Animal feed", volume: 120, price: 300, revenue: 36000 },
        ],
        revenue: 1556000,
        ebitda: 1156000, // Revenue $1.556M - Opex ~$400K (higher processing costs)
        irr: 28,
        payback: 14,
        breakeven: 14,
      },
    },
    projections: [
      { year: 1, capex: 1500000, opex: 120000, revenue: 0, netCashFlow: -1620000, cumulative: -1620000 },
      { year: 2, capex: 600000, opex: 120000, revenue: 0, netCashFlow: -720000, cumulative: -2340000 },
      { year: 3, capex: 300000, opex: 120000, revenue: 0, netCashFlow: -420000, cumulative: -2760000 },
      { year: 4, capex: 150000, opex: 120000, revenue: 0, netCashFlow: -270000, cumulative: -3030000 },
      { year: 5, capex: 100000, opex: 120000, revenue: 0, netCashFlow: -220000, cumulative: -3250000 },
      { year: 6, capex: 0, opex: 180000, revenue: 80000, netCashFlow: -100000, cumulative: -3350000 },
      { year: 7, capex: 0, opex: 200000, revenue: 160000, netCashFlow: -40000, cumulative: -3390000 },
      { year: 8, capex: 350000, opex: 220000, revenue: 280000, netCashFlow: -290000, cumulative: -3680000 },
      { year: 9, capex: 0, opex: 250000, revenue: 400000, netCashFlow: 150000, cumulative: -3530000 },
      { year: 10, capex: 0, opex: 280000, revenue: 520000, netCashFlow: 240000, cumulative: -3290000 },
      { year: 11, capex: 0, opex: 300000, revenue: 640000, netCashFlow: 340000, cumulative: -2950000 },
      { year: 12, capex: 0, opex: 320000, revenue: 720000, netCashFlow: 400000, cumulative: -2550000 },
      { year: 13, capex: 0, opex: 320000, revenue: 720000, netCashFlow: 400000, cumulative: -2150000 },
      { year: 14, capex: 0, opex: 320000, revenue: 720000, netCashFlow: 400000, cumulative: -1750000 },
      { year: 15, capex: 0, opex: 320000, revenue: 720000, netCashFlow: 400000, cumulative: -1350000 },
      { year: 16, capex: 0, opex: 320000, revenue: 800000, netCashFlow: 480000, cumulative: -870000 },
      { year: 17, capex: 0, opex: 320000, revenue: 850000, netCashFlow: 530000, cumulative: -340000 },
      { year: 18, capex: 0, opex: 320000, revenue: 900000, netCashFlow: 580000, cumulative: 240000 },
      { year: 19, capex: 0, opex: 320000, revenue: 900000, netCashFlow: 580000, cumulative: 820000 },
      { year: 20, capex: 0, opex: 320000, revenue: 900000, netCashFlow: 580000, cumulative: 1400000 },
    ],
    extendedProjections: [
      { year: 15, revenue: 720000, cumulative: -1350000, phase: "Commercial production" },
      { year: 20, revenue: 900000, cumulative: 1650000, phase: "Building production" },
      { year: 25, revenue: 1100000, cumulative: 6650000, phase: "Strong production" },
      { year: 30, revenue: 1300000, cumulative: 12650000, phase: "Mature production" },
      { year: 40, revenue: 1500000, cumulative: 27650000, phase: "Peak production" },
      { year: 50, revenue: 1500000, cumulative: 42650000, phase: "Peak sustained" },
    ],
    useOfFunds: [
      { category: "Land acquisition & preparation", amount: 800000, percent: 27 },
      { category: "Trees & planting (20,000 trees)", amount: 400000, percent: 13 },
      { category: "Irrigation infrastructure", amount: 500000, percent: 17 },
      { category: "Processing facility (Year 8)", amount: 350000, percent: 12 },
      { category: "Equipment & vehicles", amount: 300000, percent: 10 },
      { category: "Working capital (5 years)", amount: 350000, percent: 12 },
      { category: "Contingency", amount: 300000, percent: 10 },
    ],
    npvAnalysis: {
      note: "NPV calculated over 25-year horizon with terminal value",
      discountRates: [
        { rate: 8, npv: 4200000, description: "Low risk assumption" },
        { rate: 10, npv: 2800000, description: "Moderate risk" },
        { rate: 12, npv: 1600000, description: "Higher risk adjustment" },
        { rate: 15, npv: 400000, description: "High risk - marginal" },
      ],
      implication: "At discount rates below 15%, the project shows positive NPV. This aligns with the 18% target IRR.",
    },
    irrAnalysis: {
      targetIRR: 18,
      calculatedIRR: 12,
      note: "The 18% target IRR assumes base case conditions with primary processing. Conservative analysis suggests 12% is achievable. Value-add processing could push IRR to 25%+.",
      sensitivityTable: [
        { price: 3.00, yield100: 25, yield80: 18, yield60: 10 },
        { price: 2.50, yield100: 18, yield80: 12, yield60: 5 },
        { price: 2.00, yield100: 12, yield80: 7, yield60: 0 },
        { price: 1.50, yield100: 5, yield80: 1, yield60: -5 },
      ],
    },
  },

  technical: {
    crop: {
      name: "Carob (Ceratonia siliqua L.)",
      family: "Fabaceae (legume family)",
      origin: "Mediterranean region, Middle East",
      lifespan: "100+ years",
      height: "Up to 15m at maturity",
      fruit: "Pods (10-30cm), 90% pulp, 10% seeds",
    },
    aboutTheTree: {
      commonNames: ["Carob", "St. John's Bread", "Locust Bean", "Kharoub (Arabic)", "Algarrobo (Spanish)"],
      history: "The carob tree has been cultivated for over 4,000 years. Ancient Egyptians used carob, and it's mentioned in the Bible as 'locusts' eaten by John the Baptist (hence 'St. John's Bread'). The word 'carat' (unit of weight for gems) derives from the remarkably uniform weight of carob seeds, historically used by jewelers.",
      description: "An evergreen tree with a broad, hemispherical crown and thick trunk. Dark green, pinnate leaves remain year-round, providing continuous shade. The tree develops an extensive root system that can reach 25 meters deep, making it extremely drought-resistant.",
      botanicalFeatures: [
        { feature: "Leaves", detail: "Pinnate, 10-20cm long, with 2-5 pairs of leathery leaflets, dark green above and pale below" },
        { feature: "Flowers", detail: "Small, red to green, in clusters along branches. Trees are typically dioecious (separate male/female)" },
        { feature: "Pods", detail: "Dark brown when ripe, 10-30cm long, containing 10-13 seeds embedded in sweet pulp" },
        { feature: "Seeds", detail: "Hard, uniform weight (~200mg each), brown, used for locust bean gum extraction" },
        { feature: "Bark", detail: "Rough, dark brown to grey, deeply furrowed with age" },
        { feature: "Root System", detail: "Deep taproot (up to 25m) with extensive lateral roots for drought survival" },
      ],
      pollination: {
        critical: true,
        description: "Carob is dioecious—trees are either male or female. Only female trees produce pods.",
        maleRatio: "20-30% of orchard must be male trees for adequate pollination",
        effectiveYield: "With 25,000 trees total, only ~17,500-20,000 are producing females",
        management: [
          "Plan orchard layout with proper male tree distribution (1 male per 10-15 females)",
          "Male trees should be positioned for wind pollination coverage",
          "Some hermaphrodite cultivars exist but are less common",
          "Pollination failure significantly reduces pod set and yield",
        ],
        implication: "Revenue projections should account for 20-30% non-producing male trees. This is factored into yield calculations but not always explicit.",
      },
      cultivarRecommendations: {
        status: "Research needed",
        note: "Mediterranean cultivars may not be optimal for Sudan/Egypt climates. Local agronomic trials recommended before large-scale planting.",
        considerations: [
          "Cultivar selection affects yield by 2-3x",
          "Heat tolerance varies significantly between varieties",
          "Pod size, sugar content, and seed ratio differ by cultivar",
          "No established commercial carob production exists in target regions for reference",
        ],
        recommendation: "Conduct 2-3 year cultivar trials with Mediterranean varieties before full-scale planting. Partner with agricultural research institutions in Egypt.",
      },
      uniqueProperties: [
        { property: "Nitrogen Fixation", detail: "As a legume, carob fixes atmospheric nitrogen, improving soil fertility without fertilizers" },
        { property: "Fire Resistance", detail: "Thick bark and high moisture content make carob naturally fire-resistant" },
        { property: "Salt Tolerance", detail: "Tolerates moderate soil salinity, suitable for coastal and marginal lands" },
        { property: "Self-Sufficient", detail: "Once established (5 years), requires virtually no irrigation or inputs" },
        { property: "Carbon Storage", detail: "A mature tree stores 250-500kg of CO2 in its biomass" },
        { property: "No Pests", detail: "Very few natural pests or diseases, rarely needs pesticides" },
      ],
      podComposition: {
        pulp: { percent: 90, components: ["Sugars (48-56%)", "Fiber (18%)", "Protein (3-4%)", "Minerals", "Polyphenols"] },
        seeds: { percent: 10, components: ["Galactomannan gum (35%)", "Protein (50%)", "D-Pinitol (5-7%)"] },
      },
      uses: {
        food: [
          { product: "Carob Powder", use: "Chocolate substitute, naturally sweet, caffeine-free" },
          { product: "Carob Syrup (Pekmez)", use: "Traditional sweetener in Middle East, rich in minerals" },
          { product: "Carob Chips", use: "Healthy alternative to chocolate chips in baking" },
          { product: "Carob Molasses", use: "Natural sweetener and flavoring" },
        ],
        industrial: [
          { product: "Locust Bean Gum (E410)", use: "Thickener in ice cream, cheese, sauces, cosmetics" },
          { product: "Carob Bean Gum", use: "Stabilizer in pet food, pharmaceuticals, textiles" },
        ],
        health: [
          { product: "D-Pinitol Extract", use: "Blood sugar support, insulin sensitivity, PCOS treatment" },
          { product: "Dietary Fiber", use: "Digestive health, cholesterol reduction" },
          { product: "Polyphenols", use: "Antioxidant properties, anti-inflammatory" },
        ],
        other: [
          { product: "Animal Feed", use: "Nutritious livestock feed from pod waste" },
          { product: "Timber", use: "Hard, dense wood for furniture and tools" },
          { product: "Tannins", use: "Leather tanning from bark and leaves" },
        ],
      },
      funFacts: [
        "Carob seeds are so uniform in weight that they were used as the original 'carat' measure for gold and gems",
        "A single mature carob tree can produce 200-250kg of pods annually - enough to feed a family",
        "The tree can survive on as little as 250mm of rainfall per year",
        "Carob has been found in Egyptian tombs dating back 4,000 years",
        "Unlike cocoa, carob contains no caffeine, theobromine, or oxalic acid",
        "The deep roots can tap into underground water sources inaccessible to other crops",
        "Some carob trees in the Mediterranean are over 500 years old and still producing",
      ],
      nutritionalComparison: [
        { nutrient: "Calories (per 100g)", carob: 222, cocoa: 228 },
        { nutrient: "Sugar", carob: "48-56g", cocoa: "1.8g" },
        { nutrient: "Fiber", carob: "40g", cocoa: "33g" },
        { nutrient: "Fat", carob: "0.7g", cocoa: "13.7g" },
        { nutrient: "Caffeine", carob: "0mg", cocoa: "230mg" },
        { nutrient: "Calcium", carob: "348mg", cocoa: "128mg" },
        { nutrient: "Iron", carob: "2.9mg", cocoa: "13.9mg" },
      ],
    },
    cropComparison: [
      { crop: "Carob", productiveLife: "100+ years", cumulativeYield100yr: "6,000-10,000 kg/tree", replantCost: "Once", waterNeeds: "Low", maintenance: "Minimal" },
      { crop: "Olive", productiveLife: "50-100 years", cumulativeYield100yr: "3,000-6,000 kg/tree", replantCost: "1-2x", waterNeeds: "Low-Med", maintenance: "Medium" },
      { crop: "Almond", productiveLife: "25-30 years", cumulativeYield100yr: "1,500-2,000 kg/tree*", replantCost: "3-4x", waterNeeds: "High", maintenance: "High" },
      { crop: "Apple", productiveLife: "30-40 years", cumulativeYield100yr: "2,000-3,000 kg/tree*", replantCost: "2-3x", waterNeeds: "High", maintenance: "High" },
      { crop: "Annual crops", productiveLife: "1 year", cumulativeYield100yr: "N/A", replantCost: "100x", waterNeeds: "Variable", maintenance: "Annual" },
    ],
    lifetimeValue: {
      description: "A single carob tree planted today will still be producing in 2126",
      peakProduction: "Trees reach peak production (80-200 kg/year) after 40 years and maintain it for 60+ more years",
      generationalAsset: "Unlike most agricultural investments, carob orchards can be passed down through multiple generations without replanting",
      appreciatingYield: "Yield increases every decade for the first 40 years, then plateaus at maximum production",
    },
    climate: {
      optimalTemp: "30-40°C",
      toleranceTemp: "Up to 50°C",
      frostTolerance: "Limited (-5°C)",
      rainfall: "250-500mm/year sufficient",
      climateType: "Mediterranean, semi-arid",
    },
    soil: {
      type: "Tolerates poor, rocky, degraded soils",
      ph: "6.0-8.5",
      drainage: "Good (intolerant of waterlogging)",
      fertility: "Low requirements",
    },
    yields: [
      { age: "1-5", yieldPerTree: "0 kg", notes: "Establishment" },
      { age: "6-7", yieldPerTree: "5-10 kg", notes: "First fruit (minimal commercial volume)" },
      { age: "8-10", yieldPerTree: "10-30 kg", notes: "Early production" },
      { age: "11-20", yieldPerTree: "30-50 kg", notes: "Building production" },
      { age: "21-40", yieldPerTree: "50-80 kg", notes: "Commercial production" },
      { age: "40+", yieldPerTree: "80-200 kg", notes: "Peak production (40+ years to reach)" },
    ],
    yieldCaveats: {
      timelineNote: "Peak production (80-200 kg/tree) is only achieved after 40+ years. Financial projections showing 'full maturity' at year 13 represent building production (30-50 kg/tree), not peak yields.",
      assumptions: [
        "Model assumes 36-40 kg/tree average at year 13 ('maturity' in projections)",
        "True peak yields require 40+ years and are 2-5x higher",
        "Early years (6-10) produce minimal commercial volume",
        "Yield variance of 50% is common due to climate, cultivar, and management",
      ],
      recommendation: "Use conservative yield assumptions (70-80% of projections) for financial planning.",
    },
    plantingSystems: [
      { system: "Traditional", density: "25-45 trees/ha", spacing: "15-20m", yield: "1.5-3 t/ha", investment: "Low" },
      { system: "Semi-intensive", density: "100 trees/ha", spacing: "10m x 10m", yield: "4-5 t/ha", investment: "Medium" },
      { system: "Intensive", density: "150-200 trees/ha", spacing: "6-8m", yield: "5-10 t/ha", investment: "High" },
    ],
    processing: [
      { level: 1, name: "Drying and Storage", output: "Dried pods for export", cost: "Low" },
      { level: 2, name: "Primary Processing (Kibbling)", output: "Seeds + Kibbled pulp", cost: "~$220K" },
      { level: 3, name: "Secondary Processing", output: "Powder, Syrup, LBG", cost: "$300K+" },
    ],
    regions: [
      {
        name: "Sudan (North)",
        climate: "Suitable",
        water: "Variable",
        infrastructure: "Limited",
        risk: "Critical",
        overall: "Low",
        warnings: [
          "No existing commercial carob production in Sudan",
          "Northern Sudan receives <250mm rainfall (below carob minimum of 250-500mm)",
          "Political risk score 20/25 - highest in risk matrix",
          "Ongoing civil conflict and sanctions risk",
          "Currency instability and profit repatriation challenges",
        ],
        recommendation: "Consider Egypt-only strategy or small Sudan pilot only",
      },
      {
        name: "Egypt",
        climate: "Suitable",
        water: "Moderate (Nile declining)",
        infrastructure: "Good",
        risk: "Medium",
        overall: "High",
        warnings: [
          "Nile water availability declining due to Ethiopian GERD dam",
          "25-50% reduction in Nile flow possible by 2050",
          "Water rights increasingly contested",
          "Higher labor and land costs than Sudan",
        ],
        recommendation: "Preferred location despite water concerns. Site selection critical for groundwater access.",
      },
    ],
    regionNote: "Given Sudan's political instability and lack of carob precedent, an Egypt-focused or Egypt-first strategy is recommended. Sudan could be considered for a small pilot only after Egypt success is demonstrated.",
  },

  risks: [
    { name: "Long lead time", likelihood: "Certain", impact: "High", description: "6-10 years to commercial production", mitigation: "Patient capital structure; phased investment", category: "Financial" },
    { name: "Regional instability", likelihood: "Variable", impact: "High", description: "Sudan/Egypt political factors", mitigation: "Multi-site strategy; Egypt priority", category: "Political" },
    { name: "Quality standards", likelihood: "High", impact: "High", description: "Meeting international food safety", mitigation: "Early certification; quality systems", category: "Operational" },
    { name: "Price volatility", likelihood: "Medium", impact: "High", description: "Commodity price swings", mitigation: "Offtake agreements; product diversification", category: "Market" },
    { name: "Variety selection", likelihood: "Low", impact: "High", description: "Wrong varieties affect yields", mitigation: "Expert consultation; trial plots", category: "Technical" },
  ],

  riskAnalysis: {
    summary: "This investment carries significant risks that must be carefully weighed against potential returns. The long payback period and regional uncertainties require thorough due diligence.",

    criticalConcerns: [
      {
        title: "Illiquidity & Long Horizon",
        severity: "High",
        description: "Capital is locked for 19+ years before break-even. No clear exit strategy exists. Trees are immovable assets with no secondary market.",
        questions: ["What is the exit plan if circumstances change?", "Can you afford to lock up $3M for 20+ years?", "What happens to the investment if you need liquidity?"]
      },
      {
        title: "Sudan Political Risk",
        severity: "Critical",
        description: "Ongoing civil conflict, sanctions risk, currency instability, and uncertain rule of law. Foreign asset seizure is a real possibility.",
        questions: ["Is Sudan viable given current instability?", "What legal protections exist for foreign investors?", "How would you repatriate profits?"]
      },
      {
        title: "No Proven Track Record",
        severity: "Medium",
        description: "This is a greenfield project with no existing operations to evaluate. Projections are theoretical based on Mediterranean data that may not apply to East Africa.",
        questions: ["Has carob been commercially grown in Sudan/Egypt before?", "What pilot results exist?", "Who has agronomic expertise for this region?"]
      },
      {
        title: "Price Assumption Risk",
        severity: "High",
        description: "Projections assume $2.50/kg wholesale. Historical prices ranged from $1.41 to $47.74/kg in 2023 alone. A sustained price below $2/kg would significantly impact returns.",
        questions: ["What price makes this investment unviable?", "Are there any offtake agreements in place?", "How volatile is the carob market really?"]
      },
    ],

    riskMatrix: [
      { risk: "Political instability (Sudan)", likelihood: 4, impact: 5, score: 20, action: "Consider Egypt-only strategy" },
      { risk: "Price collapse (<$1.50/kg)", likelihood: 2, impact: 5, score: 10, action: "Stress test at lower prices" },
      { risk: "Yield underperformance", likelihood: 3, impact: 4, score: 12, action: "Use conservative projections" },
      { risk: "Quality/certification failure", likelihood: 3, impact: 4, score: 12, action: "Budget for quality systems" },
      { risk: "Currency devaluation", likelihood: 4, impact: 3, score: 12, action: "Price in USD, hold USD" },
      { risk: "Water access issues", likelihood: 2, impact: 4, score: 8, action: "Site selection critical" },
      { risk: "Management execution", likelihood: 3, impact: 4, score: 12, action: "Identify experienced operators" },
      { risk: "Climate/weather events", likelihood: 2, impact: 3, score: 6, action: "Carob is drought-resistant" },
    ],

    stressScenarios: [
      { name: "Base Case", pricePerKg: 2.5, yieldPercent: 100, irr: 18, payback: 19, description: "Current projections" },
      { name: "Conservative", pricePerKg: 1.8, yieldPercent: 80, irr: 8, payback: 22, description: "Lower prices, slower yields" },
      { name: "Stress Test", pricePerKg: 1.5, yieldPercent: 70, irr: 3, payback: 25, description: "Significant headwinds" },
      { name: "Worst Case", pricePerKg: 1.2, yieldPercent: 60, irr: -4, payback: 30, description: "Major market downturn" },
    ],

    breakEvenAnalysis: {
      minimumPrice: 1.4, // USD/kg to break even over 25 years
      minimumYield: 60, // percent of projected yield
      note: "Below these thresholds, the investment does not recover capital within 25 years. Base case breakeven occurs around Year 18-19."
    },

    questionsToAnswer: [
      "What is the realistic exit strategy if you need to divest?",
      "Who will manage day-to-day operations on the ground?",
      "What legal structure protects the investment in each country?",
      "Are there any existing carob buyers interested in offtake agreements?",
      "What is the total exposure you're comfortable with in this region?",
      "Have you visited potential sites and met local partners?",
      "What due diligence has been done on land titles and water rights?",
      "How will profits be repatriated given currency controls?",
    ],

    alternativeConsiderations: [
      { option: "Smaller pilot (50 ha)", pros: "Lower risk, test assumptions", cons: "Lower returns, still long horizon" },
      { option: "Egypt only", pros: "More stable, better infrastructure", cons: "Higher costs, lower margins" },
      { option: "Joint venture with local operator", pros: "Shared risk, local expertise", cons: "Less control, profit sharing" },
      { option: "Wait and monitor", pros: "Let others prove the model", cons: "May miss window if it works" },
    ],
  },

  impact: {
    environmental: {
      co2Sequestered: { min: 400, max: 800, unit: "tons/year" },
      landRestored: 200,
      waterEfficiency: "Produces crops with less water than any Mediterranean fruit",
      droughtTolerance: "Survives extended dry periods",
    },
    social: {
      directJobs: { min: 25, max: 40 },
      indirectJobs: "Transport, logistics, suppliers, processing",
      workersTrainedTarget: 50,
      communityInvestmentTarget: 100000,
    },
    sdgs: [
      { number: 1, name: "No Poverty", alignment: "High", contribution: "Rural income generation" },
      { number: 2, name: "Zero Hunger", alignment: "Medium", contribution: "Nutritious food production" },
      { number: 8, name: "Decent Work", alignment: "High", contribution: "Job creation in rural areas" },
      { number: 12, name: "Responsible Consumption", alignment: "High", contribution: "Sustainable production" },
      { number: 13, name: "Climate Action", alignment: "High", contribution: "Carbon sequestration" },
      { number: 15, name: "Life on Land", alignment: "High", contribution: "Land restoration" },
    ],
    certifications: [
      { name: "Organic", purpose: "Market access, premium pricing", timeline: "Year 2-3" },
      { name: "Food Safety (HACCP/BRC)", purpose: "Export to EU/US", timeline: "Year 6-7" },
      { name: "Fair Trade", purpose: "Social premium", timeline: "Year 5+" },
    ],
    story: "A climate solution that pays: climate-resilient production, carbon storage, land restoration, rural livelihoods, and sustainable supply for growing health food markets.",
  },

  milestones: [
    { year: 1, milestone: "Site acquired, infrastructure built, 20,000 trees planted" },
    { year: 2, milestone: "Irrigation operational, organic certification initiated" },
    { year: 3, milestone: "Full planting complete, tree establishment confirmed" },
    { year: 5, milestone: "All trees established, certifications achieved, buyer relationships built" },
    { year: 7, milestone: "First commercial harvest, initial sales $160K+" },
    { year: 8, milestone: "Processing facility operational, value-add production begins" },
    { year: 12, milestone: "Full production phase, $720K+ annual revenue" },
    { year: 15, milestone: "Mature operations, expansion planning" },
  ],

  whyNow: [
    { point: "Supply gap widening", detail: "Mediterranean decline accelerating" },
    { point: "Demand growing", detail: "Health, sustainability, plant-based trends" },
    { point: "Prices recovering", detail: "4x increase in recent years" },
    { point: "Window closing", detail: "Competition from Turkey, Morocco increasing" },
  ],

  team: {
    lead: {
      name: "Haggar Group",
      description: "Established presence in Sudan and Egypt with agricultural operations experience, land access, and regional relationships.",
    },
    advisor: {
      name: "LewkAi",
      description: "Research, strategy, and business development support.",
    },
    toAdd: ["Agronomic expertise", "Quality management", "Sales/export capability"],
  },

  contact: {
    client: { name: "George Haggar", company: "Haggar Group" },
    preparedBy: { name: "Louis du Plessis", email: "louis@lewkai.com", company: "LewkAi" },
  },

  conclusion: {
    headline: "A $3M Commercial Carob Operation",
    summary: "A 200 ha commercial carob operation in Egypt, leveraging the region's climate suitability and cost advantages. With $3M investment and 18% target IRR, the project offers attractive long-term returns with integrated processing capabilities. Pre-investment validation through partnerships and site visits de-risks key assumptions.",
    keyFindings: [
      "IRR range: 12% (conservative) to 18% (target) - solid agricultural returns",
      "$3M investment for 200 ha commercial operation with processing",
      "Egypt location provides political stability and infrastructure",
      "19-year payback with $700K+ annual revenue at maturity",
      "50-year lifetime value exceeds $40M",
    ],
    callToAction: "We recommend proceeding with pre-investment validation, followed by phased capital deployment starting Year 1.",
    nextSteps: [
      { step: 1, action: "Pre-investment validation (3-6 months)", description: "Partner with Mediterranean farms, visit Turkey/Morocco operations, source agronomic data" },
      { step: 2, action: "Site selection and acquisition", description: "Identify 200 ha site in Egypt with suitable soil, water rights, and logistics access" },
      { step: 3, action: "Infrastructure and planting (Year 1-2)", description: "Land preparation, irrigation, fencing, and 20,000 tree planting" },
      { step: 4, action: "Operations and scale", description: "Establish management, build buyer relationships, add processing in Year 8" },
    ],
  },

  validationPhase: {
    headline: "Pre-Investment Validation (3-6 months)",
    description: "Before committing $3M capital, validate key assumptions through partnerships and site visits. This reduces risk without the long timeline of a trial plantation.",
    options: [
      {
        name: "Mediterranean Farm Partnerships",
        description: "Partner with existing carob farms in Spain, Portugal, or Italy to validate operational costs, yields, and market access.",
        cost: "$15,000 - $25,000",
        timeline: "2-3 months",
        outcomes: ["Real operational cost data", "Cultivar recommendations", "Processing partner introductions", "Market price validation"],
      },
      {
        name: "Research Institution Data",
        description: "Source agronomic data from FAO, Egyptian agricultural universities, and Mediterranean research centers.",
        cost: "$5,000 - $10,000",
        timeline: "1-2 months",
        outcomes: ["Climate suitability analysis", "Soil requirement data", "Yield projections by region", "Pest and disease profiles"],
      },
      {
        name: "Turkey/Morocco Site Visits",
        description: "Visit growing carob operations in Turkey and Morocco to understand competitive landscape and operational realities.",
        cost: "$10,000 - $15,000",
        timeline: "2-3 weeks",
        outcomes: ["Competitive cost benchmarks", "Processing technology assessment", "Export logistics understanding", "Buyer relationship mapping"],
      },
    ],
    totalBudget: "$30,000 - $50,000",
    recommendation: "Complete all three validation options before committing to the $3M investment. This de-risks the project significantly at less than 2% of total capex.",
  },

  documents: [
    { name: "Executive Summary", description: "2-page overview of the opportunity", filename: "/docs/executive-summary.html", type: "HTML", downloadable: true },
    { name: "Financial Model", description: "Detailed projections, scenarios, and 50-year forecast", filename: "/docs/carob-financial-model.xlsx", type: "Excel", downloadable: true },
    { name: "Full Business Plan", description: "Comprehensive business plan (request access)", filename: "", type: "PDF", downloadable: false },
    { name: "Market Research", description: "Industry analysis and competitor review (request access)", filename: "", type: "PDF", downloadable: false },
    { name: "Investor Deck", description: "Presentation slides for investors (request access)", filename: "", type: "PDF", downloadable: false },
  ],

  references: [
    { title: "Global Carob Market Report 2024", source: "Mordor Intelligence", year: 2024 },
    { title: "Carob Tree Cultivation Guide", source: "FAO", year: 2021 },
    { title: "Locust Bean Gum Market Analysis", source: "Grand View Research", year: 2023 },
    { title: "Mediterranean Agriculture Climate Impact", source: "EU Joint Research Centre", year: 2023 },
    { title: "D-Pinitol Extraction from Carob", source: "Journal of Agricultural Chemistry", year: 2022 },
    { title: "Sustainable Agroforestry in North Africa", source: "World Agroforestry", year: 2023 },
    { title: "Global Carob Powder Pricing Data", source: "Tridge", year: 2024, url: "https://dir.tridge.com/prices/carob-powder" },
    { title: "Carob Powder Market Analysis 2025-2035", source: "Fact.MR", year: 2025, url: "https://www.factmr.com/report/carob-powder-market" },
    { title: "South African Retail Carob Pricing", source: "Liveable.co.za", year: 2026, url: "https://www.liveable.co.za/flour-baking-milling/158-carob-powder.html" },
  ],
};

export type Proposal = typeof proposal;
export type Scenario = typeof proposal.financials.scenarios.base;
