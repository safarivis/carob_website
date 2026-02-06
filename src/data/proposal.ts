export const proposal = {
  meta: {
    client: "George Haggar / Haggar Group",
    prepared: "2026-02-05",
    domain: "carob.lewkai.com",
  },

  investmentSummary: {
    headline: "A 100-Year Asset for Generational Wealth",
    keyPoints: [
      { metric: "$1.4M", label: "Total Investment", sublabel: "over 8 years" },
      { metric: "12%", label: "Target IRR", sublabel: "base case" },
      { metric: "100+", label: "Years Productive", sublabel: "per tree" },
      { metric: "$15M+", label: "Lifetime Value", sublabel: "50-year projection" },
    ],
    valueProposition: "Unlike annual crops requiring yearly replanting or orchards with 25-30 year lifespans, carob trees produce for over a century—creating a true generational asset that appreciates in value and yield over time.",
  },

  summary: {
    opportunity:
      "A structural supply gap in the global carob market—driven by 65% decline in Mediterranean cultivation—creates a compelling window for new production in climate-suitable regions with lower cost structures.",
    solution:
      "Haggar Group will establish commercial carob orchards in Sudan and/or Egypt, leveraging climate suitability, cost advantage, regional positioning, and ESG credentials.",
    ask: { amount: 1400000, currency: "USD" },
    returns: { irr: 12, payback: 12 },
    tagline: "Sustainable carob production for growing markets",
  },

  keyMetrics: {
    marketSize: { value: 500, unit: "M", year: 2024, label: "Market Size" },
    investment: { value: 1.4, unit: "M", label: "Investment Required" },
    irr: { value: 12, unit: "%", label: "Projected IRR" },
    co2: { value: "500-1,000", unit: "tons/yr", label: "CO2 Sequestered" },
  },

  market: {
    size: { value: 500, unit: "M", year: 2024 },
    cagr: 5.5,
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
      },
      {
        name: "Carob extract",
        size: 241,
        growth: 5.4,
        play: "Long-term",
      },
    ],
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
        name: "Mediterranean Decline",
        description:
          "65% reduction in cultivation area, aging orchards, high costs",
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
  },

  financials: {
    scales: {
      pilot: {
        hectares: 50,
        trees: 5000,
        investment: { min: 150000, max: 250000 },
        revenueAtMaturity: { min: 200000, max: 400000 },
        payback: "8-10 yrs",
      },
      medium: {
        hectares: 250,
        trees: 25000,
        investment: { min: 750000, max: 1250000 },
        revenueAtMaturity: { min: 1000000, max: 2000000 },
        payback: "10-12 yrs",
      },
      large: {
        hectares: 1000,
        trees: 100000,
        investment: { min: 3000000, max: 5000000 },
        revenueAtMaturity: { min: 4000000, max: 8000000 },
        payback: "12-15 yrs",
      },
    },
    scenarios: {
      conservative: {
        name: "Conservative",
        description: "Raw Pods Only",
        yield: 1000,
        price: 700,
        revenue: 700000,
        ebitda: 470000,
        irr: 8,
        payback: 14,
        breakeven: 13,
      },
      base: {
        name: "Base",
        description: "Primary Processing",
        yield: 1000,
        products: [
          { name: "Seeds", volume: 100, price: 1500, revenue: 150000 },
          { name: "Kibbled pulp", volume: 800, price: 900, revenue: 720000 },
          { name: "Animal feed", volume: 100, price: 300, revenue: 30000 },
        ],
        revenue: 900000,
        ebitda: 670000,
        irr: 12,
        payback: 12,
        breakeven: 12,
      },
      optimistic: {
        name: "Optimistic",
        description: "Value-Add Processing",
        yield: 900,
        products: [
          { name: "Carob powder", volume: 600, price: 2500, revenue: 1500000 },
          { name: "Seeds (for LBG)", volume: 100, price: 1500, revenue: 150000 },
          { name: "Carob syrup", volume: 50, price: 5000, revenue: 250000 },
          { name: "Animal feed", volume: 150, price: 300, revenue: 45000 },
        ],
        revenue: 1945000,
        ebitda: 1500000,
        irr: 18,
        payback: 9,
        breakeven: 10,
      },
    },
    projections: [
      { year: 1, capex: 700000, opex: 85000, revenue: 0, netCashFlow: -785000, cumulative: -785000 },
      { year: 2, capex: 250000, opex: 85000, revenue: 0, netCashFlow: -335000, cumulative: -1120000 },
      { year: 3, capex: 100000, opex: 85000, revenue: 0, netCashFlow: -185000, cumulative: -1305000 },
      { year: 4, capex: 50000, opex: 85000, revenue: 0, netCashFlow: -135000, cumulative: -1440000 },
      { year: 5, capex: 50000, opex: 85000, revenue: 0, netCashFlow: -135000, cumulative: -1575000 },
      { year: 6, capex: 0, opex: 130000, revenue: 100000, netCashFlow: -30000, cumulative: -1605000 },
      { year: 7, capex: 0, opex: 140000, revenue: 200000, netCashFlow: 60000, cumulative: -1545000 },
      { year: 8, capex: 250000, opex: 150000, revenue: 350000, netCashFlow: -50000, cumulative: -1595000 },
      { year: 9, capex: 0, opex: 180000, revenue: 500000, netCashFlow: 320000, cumulative: -1275000 },
      { year: 10, capex: 0, opex: 200000, revenue: 600000, netCashFlow: 400000, cumulative: -875000 },
      { year: 11, capex: 0, opex: 220000, revenue: 750000, netCashFlow: 530000, cumulative: -345000 },
      { year: 12, capex: 0, opex: 230000, revenue: 850000, netCashFlow: 620000, cumulative: 275000 },
      { year: 13, capex: 0, opex: 230000, revenue: 900000, netCashFlow: 670000, cumulative: 945000 },
      { year: 14, capex: 0, opex: 230000, revenue: 900000, netCashFlow: 670000, cumulative: 1615000 },
      { year: 15, capex: 0, opex: 230000, revenue: 900000, netCashFlow: 670000, cumulative: 2285000 },
    ],
    extendedProjections: [
      { year: 15, revenue: 900000, cumulative: 2285000, phase: "Commercial production" },
      { year: 20, revenue: 1100000, cumulative: 5785000, phase: "Building production" },
      { year: 25, revenue: 1300000, cumulative: 9785000, phase: "Strong production" },
      { year: 30, revenue: 1500000, cumulative: 14285000, phase: "Mature production" },
      { year: 40, revenue: 1800000, cumulative: 30785000, phase: "Peak production" },
      { year: 50, revenue: 1800000, cumulative: 48785000, phase: "Peak sustained" },
    ],
    useOfFunds: [
      { category: "Land & infrastructure", amount: 575000, percent: 41 },
      { category: "Trees & planting", amount: 250000, percent: 18 },
      { category: "Equipment", amount: 100000, percent: 7 },
      { category: "Working capital (5 years)", amount: 75000, percent: 5 },
      { category: "Contingency", amount: 150000, percent: 11 },
      { category: "Processing upgrade", amount: 250000, percent: 18 },
    ],
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
      { age: "6-7", yieldPerTree: "5-10 kg", notes: "First fruit" },
      { age: "8-10", yieldPerTree: "10-30 kg", notes: "Early production" },
      { age: "11-20", yieldPerTree: "30-50 kg", notes: "Building production" },
      { age: "21-40", yieldPerTree: "50-80 kg", notes: "Commercial production" },
      { age: "40+", yieldPerTree: "80-200 kg", notes: "Peak production" },
    ],
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
      { name: "Sudan (North)", climate: "Suitable", water: "Variable", infrastructure: "Limited", risk: "Higher", overall: "Medium" },
      { name: "Egypt", climate: "Suitable", water: "Good (Nile)", infrastructure: "Good", risk: "Lower", overall: "High" },
    ],
  },

  risks: [
    { name: "Long lead time", likelihood: "Certain", impact: "High", description: "6-10 years to commercial production", mitigation: "Patient capital structure; phased investment" },
    { name: "Regional instability", likelihood: "Variable", impact: "High", description: "Sudan/Egypt political factors", mitigation: "Multi-site strategy; Egypt priority" },
    { name: "Quality standards", likelihood: "High", impact: "High", description: "Meeting international food safety", mitigation: "Early certification; quality systems" },
    { name: "Price volatility", likelihood: "Medium", impact: "High", description: "Commodity price swings", mitigation: "Offtake agreements; product diversification" },
    { name: "Variety selection", likelihood: "Low", impact: "High", description: "Wrong varieties affect yields", mitigation: "Expert consultation; trial plots" },
  ],

  impact: {
    environmental: {
      co2Sequestered: { min: 500, max: 1000, unit: "tons/year" },
      landRestored: 250,
      waterEfficiency: "Produces crops with less water than any Mediterranean fruit",
      droughtTolerance: "Survives extended dry periods",
    },
    social: {
      directJobs: { min: 25, max: 45 },
      indirectJobs: "Transport, logistics, suppliers",
      workersTrainedTarget: 50,
      communityInvestmentTarget: 50000,
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
    { year: 1, milestone: "Site selected, nursery established" },
    { year: 2, milestone: "50 ha planted, organic certification initiated" },
    { year: 3, milestone: "Expansion to 100 ha, buyer relationships building" },
    { year: 5, milestone: "250 ha established, first certifications achieved" },
    { year: 7, milestone: "First commercial harvest, initial sales" },
    { year: 10, milestone: "Full production phase, processing operational" },
    { year: 12, milestone: "Break-even achieved" },
    { year: 15, milestone: "Mature operations, $800K+ annual revenue" },
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
    headline: "A Once-in-a-Generation Opportunity",
    summary: "The convergence of declining Mediterranean production, rising global demand, and climate suitability in North Africa creates a compelling window for new carob production. Haggar Group is uniquely positioned to capitalize on this opportunity with its regional presence, agricultural experience, and access to suitable land.",
    callToAction: "We invite you to explore this opportunity further and discuss how we can build a sustainable, profitable carob operation together.",
    nextSteps: [
      { step: 1, action: "Review this proposal", description: "Explore market analysis, technical details, and financial projections" },
      { step: 2, action: "Schedule discovery call", description: "Discuss your questions, goals, and potential sites" },
      { step: 3, action: "Site assessment", description: "Evaluate land options in Egypt and/or Sudan" },
      { step: 4, action: "Finalize investment structure", description: "Agree on terms, timeline, and milestones" },
    ],
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
  ],
};

export type Proposal = typeof proposal;
export type Scenario = typeof proposal.financials.scenarios.base;
