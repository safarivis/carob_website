import { SectionHeader } from "@/components/SectionHeader";
import { MetricCard } from "@/components/MetricCard";
import { RiskMatrix } from "@/components/RiskMatrix";
import { proposal } from "@/data/proposal";

export default function ImpactPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <SectionHeader
        badge="Impact & ESG"
        title="A Climate Solution That Pays"
        subtitle={proposal.impact.story}
      />

      {/* ESG Overview */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-6 border border-primary-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl mb-2">🌍</div>
              <h4 className="font-semibold text-gray-900 mb-1">Environmental</h4>
              <p className="text-sm text-gray-600">
                Climate-resilient, carbon sequestering, land restoration
              </p>
              <span className="inline-block mt-2 px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
                Strong Positive
              </span>
            </div>
            <div>
              <div className="text-3xl mb-2">👥</div>
              <h4 className="font-semibold text-gray-900 mb-1">Social</h4>
              <p className="text-sm text-gray-600">
                Job creation, rural development, skills building
              </p>
              <span className="inline-block mt-2 px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
                Positive
              </span>
            </div>
            <div>
              <div className="text-3xl mb-2">⚖️</div>
              <h4 className="font-semibold text-gray-900 mb-1">Governance</h4>
              <p className="text-sm text-gray-600">
                Transparent structure, international standards
              </p>
              <span className="inline-block mt-2 px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                Neutral to Positive
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Impact Metrics */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Environmental Impact</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            label="CO2 Sequestered"
            value={`${proposal.impact.environmental.co2Sequestered.min}-${proposal.impact.environmental.co2Sequestered.max}`}
            unit=" tons/yr"
            description="At maturity (250 ha)"
          />
          <MetricCard
            label="Land Restored"
            value={proposal.impact.environmental.landRestored}
            unit=" ha"
            description="Marginal/degraded soils"
          />
          <MetricCard
            label="Water Efficiency"
            value="Best"
            unit="-in-class"
            description="Less water than any Mediterranean fruit"
          />
          <MetricCard
            label="Tree Lifespan"
            value="100"
            unit="+ years"
            description="Permanent carbon storage"
          />
        </div>
      </section>

      {/* Social Impact */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Social Impact</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            label="Direct Jobs"
            value={`${proposal.impact.social.directJobs.min}-${proposal.impact.social.directJobs.max}`}
            description="Full-time + seasonal"
          />
          <MetricCard
            label="Workers Trained"
            value={proposal.impact.social.workersTrainedTarget}
            unit="+"
            description="Target by Year 10"
          />
          <MetricCard
            label="Community Investment"
            value={`$${proposal.impact.social.communityInvestmentTarget / 1000}`}
            unit="K/yr"
            description="Local spending target"
          />
          <MetricCard
            label="Indirect Jobs"
            value="Many"
            description="Transport, logistics, suppliers"
          />
        </div>
      </section>

      {/* SDG Alignment */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">UN Sustainable Development Goals</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {proposal.impact.sdgs.map((sdg) => (
            <div
              key={sdg.number}
              className="bg-white rounded-xl border border-gray-100 p-4 hover:border-primary-200 transition-colors"
            >
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-100 text-primary-700 font-bold text-sm">
                  {sdg.number}
                </span>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm">{sdg.name}</h4>
                  <p className="text-xs text-gray-500 mt-1">{sdg.contribution}</p>
                  <span
                    className={`inline-block mt-2 px-2 py-0.5 text-xs font-medium rounded ${
                      sdg.alignment === "High"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {sdg.alignment} Alignment
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Certification Strategy</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {proposal.impact.certifications.map((cert) => (
            <div
              key={cert.name}
              className="bg-white rounded-xl border border-gray-100 p-5"
            >
              <h4 className="font-semibold text-gray-900 mb-1">{cert.name}</h4>
              <p className="text-sm text-gray-600 mb-3">{cert.purpose}</p>
              <span className="text-xs font-medium text-primary-700">{cert.timeline}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Risk Assessment */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Risk Assessment</h3>
        <RiskMatrix />
      </section>

      {/* 100-Year Asset - Generational Wealth */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Generational Wealth Creation</h3>
        <div className="bg-gradient-to-br from-secondary-600 to-secondary-800 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-semibold rounded-full mb-4">
                100-YEAR ASSET
              </span>
              <h4 className="text-2xl font-bold mb-4">
                An Asset That Grows With Your Family
              </h4>
              <p className="text-secondary-100 mb-6">
                Unlike most agricultural investments that depreciate and require replacement, carob orchards are true generational assets. A tree planted today will still be producing for your grandchildren and beyond.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm">✓</span>
                  <span>No replanting costs for 100+ years</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm">✓</span>
                  <span>Yield increases every decade until peak</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm">✓</span>
                  <span>Permanent carbon sequestration credit</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm">✓</span>
                  <span>Land value appreciation built-in</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur">
              <h5 className="font-semibold text-lg mb-4">50-Year Value Projection (250 ha)</h5>
              <div className="space-y-4">
                {proposal.financials.extendedProjections.slice(0, 5).map((proj) => (
                  <div key={proj.year} className="flex items-center justify-between">
                    <span className="text-secondary-200">Year {proj.year}</span>
                    <div className="flex-1 mx-4 h-2 bg-white/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-secondary-300 rounded-full"
                        style={{ width: `${(proj.cumulative / 50000000) * 100}%` }}
                      />
                    </div>
                    <span className="font-bold">${(proj.cumulative / 1000000).toFixed(1)}M</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-white/20">
                <div className="flex justify-between items-center">
                  <span className="text-secondary-200">Lifetime Value (50 yrs)</span>
                  <span className="text-3xl font-bold">${(proposal.financials.extendedProjections[5].cumulative / 1000000).toFixed(0)}M+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Investor Appeal */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Impact Investor Appeal</h3>
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <div className="prose prose-sm max-w-none">
            <p className="text-gray-700 mb-4">
              <strong>Problem:</strong> Climate change is reducing agricultural productivity; rural unemployment
              is high; demand for sustainable ingredients is growing.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Solution:</strong> Carob cultivation combines climate-resilient production on marginal land,
              job creation in underserved rural areas, sustainable supply chain for growing markets, and long-term
              asset appreciation.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
              {[
                { label: "Measurable Impact", status: true },
                { label: "Additionality", status: true },
                { label: "Scalable", status: true },
                { label: "Financially Sustainable", status: true },
                { label: "Clear Theory of Change", status: true },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-sm text-gray-600">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
