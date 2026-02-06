import { SectionHeader } from "@/components/SectionHeader";
import { proposal } from "@/data/proposal";
import Link from "next/link";

export default function ConclusionPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <SectionHeader
        badge="Summary"
        title="$3M Commercial Carob Operation"
        subtitle="200 ha operation with integrated processing - key findings and recommended next steps"
      />

      {/* Pre-Investment Validation */}
      <section className="mb-12">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Recommended: Pre-Investment Validation (3-6 months)</h3>
          <p className="text-sm text-blue-700 mb-4">
            Before committing $3M capital, validate key assumptions through partnerships and site visits. This reduces risk at less than 2% of total capex.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {proposal.validationPhase?.options.map((option) => (
              <div key={option.name} className="bg-white rounded-lg p-4 border border-blue-100">
                <h4 className="font-semibold text-gray-900 text-sm mb-1">{option.name}</h4>
                <p className="text-xs text-gray-600 mb-2">{option.description}</p>
                <div className="flex justify-between text-xs">
                  <span className="text-blue-600 font-medium">{option.cost}</span>
                  <span className="text-gray-500">{option.timeline}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-blue-800 font-medium mt-4">
            Total validation budget: {proposal.validationPhase?.totalBudget}
          </p>
        </div>
      </section>

      {/* Pros and Cons */}
      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-green-800 mb-4">Potential Strengths</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">+</span>
                <span className="text-green-900">100+ year productive lifespan creates generational asset</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">+</span>
                <span className="text-green-900">Low input costs once established (drought-tolerant, minimal maintenance)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">+</span>
                <span className="text-green-900">Supply gap due to Mediterranean decline (65% reduction)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">+</span>
                <span className="text-green-900">Growing demand from health food and plant-based markets</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">+</span>
                <span className="text-green-900">Strong ESG credentials (carbon sequestration, job creation)</span>
              </li>
            </ul>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-red-800 mb-4">Key Concerns</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold">-</span>
                <span className="text-red-900">19-year payback period locks capital for extended time</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold">-</span>
                <span className="text-red-900">Sudan political instability poses significant risk</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold">-</span>
                <span className="text-red-900">No proven track record for carob in target region</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold">-</span>
                <span className="text-red-900">Price volatility ($1.41-$47.74/kg range in 2023)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold">-</span>
                <span className="text-red-900">No clear exit strategy or secondary market for assets</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Investment Parameters */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Investment Parameters</h3>
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-gray-500">Total Investment</td>
                <td className="px-6 py-4 text-sm font-semibold text-gray-900 text-right">${proposal.summary.ask.amount.toLocaleString()} USD</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-gray-500">IRR (Base Case)</td>
                <td className="px-6 py-4 text-sm text-gray-900 text-right">
                  <span className="font-semibold">{proposal.summary.returns.irr}%</span>
                  <span className="text-gray-500 text-xs ml-2">(Stress test: 1-5%)</span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-gray-500">Payback Period</td>
                <td className="px-6 py-4 text-sm text-gray-900 text-right">
                  <span className="font-semibold">{proposal.summary.returns.payback} years</span>
                  <span className="text-gray-500 text-xs ml-2">(Stress test: 22-30 yrs)</span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-gray-500">Break-Even Price</td>
                <td className="px-6 py-4 text-sm text-gray-900 text-right">
                  <span className="font-semibold">${proposal.riskAnalysis.breakEvenAnalysis.minimumPrice}/kg</span>
                  <span className="text-gray-500 text-xs ml-2">(minimum to recover capital)</span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-gray-500">Break-Even Yield</td>
                <td className="px-6 py-4 text-sm text-gray-900 text-right">
                  <span className="font-semibold">{proposal.riskAnalysis.breakEvenAnalysis.minimumYield}%</span>
                  <span className="text-gray-500 text-xs ml-2">(of projected output)</span>
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-700">Risk-Adjusted Assessment</td>
                <td className="px-6 py-4 text-sm font-semibold text-gray-900 text-right">Moderate-High Risk</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Recommended Due Diligence */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Recommended Due Diligence</h3>
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {proposal.riskAnalysis.questionsToAnswer.slice(0, 6).map((question, i) => (
              <li key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300" />
                <span className="text-sm text-gray-700">{question}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/risks"
            className="inline-flex items-center text-sm text-primary-600 hover:text-primary-700 mt-4 font-medium"
          >
            View full risk analysis
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Alternative Approaches */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Alternative Approaches to Consider</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {proposal.riskAnalysis.alternativeConsiderations.map((alt) => (
            <div key={alt.option} className="bg-white rounded-xl border border-gray-100 p-5">
              <h4 className="font-semibold text-gray-900 mb-3">{alt.option}</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-medium">+</span>
                  <span className="text-gray-600">{alt.pros}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600 font-medium">-</span>
                  <span className="text-gray-600">{alt.cons}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Documents & Downloads */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Supporting Documents</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {proposal.documents.map((doc) => {
            const isDownloadable = doc.downloadable && doc.filename;
            const href = isDownloadable
              ? doc.filename
              : `mailto:${proposal.contact.preparedBy.email}?subject=Document Request: ${doc.name}&body=Hi Louis,%0D%0A%0D%0AI would like to request access to the ${doc.name} for the Carob Investment Analysis.%0D%0A%0D%0AThank you.`;

            return (
              <a
                key={doc.name}
                href={href}
                target={isDownloadable ? "_blank" : undefined}
                download={isDownloadable && doc.type === "Excel" ? true : undefined}
                className="bg-white rounded-xl border border-gray-100 p-5 hover:border-primary-200 hover:shadow-md transition-all group"
              >
                <div className="flex items-start gap-4">
                  <span className={`flex items-center justify-center w-12 h-12 rounded-lg ${
                    doc.type === "PDF" ? "bg-red-100 text-red-600" :
                    doc.type === "Excel" ? "bg-green-100 text-green-600" :
                    "bg-blue-100 text-blue-600"
                  }`}>
                    {doc.type === "PDF" ? (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                      </svg>
                    ) : doc.type === "Excel" ? (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2H3V4zm0 4h14v8a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm5 2a1 1 0 00-1 1v2a1 1 0 001 1h4a1 1 0 001-1v-2a1 1 0 00-1-1H8z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-gray-900 group-hover:text-primary-700 transition-colors">
                        {doc.name}
                      </h4>
                      {isDownloadable && (
                        <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded">
                          Ready
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{doc.description}</p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* References */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Sources & References</h3>
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <ul className="space-y-3">
            {proposal.references.map((ref, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-primary-500 mt-1">•</span>
                <div>
                  <span className="text-gray-900">{ref.title}</span>
                  <span className="text-gray-500 text-sm"> — {ref.source}, {ref.year}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Prepared By */}
      <section>
        <div className="bg-gray-50 rounded-xl p-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <p className="text-sm text-gray-500 mb-1">Analysis prepared by</p>
              <p className="font-semibold text-gray-900">{proposal.contact.preparedBy.name}</p>
              <p className="text-sm text-gray-600">{proposal.contact.preparedBy.company}</p>
              <a
                href={`mailto:${proposal.contact.preparedBy.email}`}
                className="text-sm text-primary-600 hover:text-primary-700"
              >
                {proposal.contact.preparedBy.email}
              </a>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500 mb-1">Prepared for</p>
              <p className="font-semibold text-gray-900">{proposal.contact.client.name}</p>
              <p className="text-sm text-gray-600">{proposal.contact.client.company}</p>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200 flex flex-wrap justify-center gap-4">
            <Link
              href="/financials"
              className="px-5 py-2.5 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
            >
              Run Scenarios
            </Link>
            <Link
              href="/risks"
              className="px-5 py-2.5 bg-white border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              Review Risks
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
