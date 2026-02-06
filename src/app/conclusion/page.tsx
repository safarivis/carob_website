import { SectionHeader } from "@/components/SectionHeader";
import { proposal } from "@/data/proposal";
import Link from "next/link";

export default function ConclusionPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <SectionHeader
        badge="Conclusion"
        title={proposal.conclusion.headline}
        subtitle={proposal.conclusion.summary}
      />

      {/* Call to Action Banner */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-primary-700 to-primary-900 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Build a 100-Year Asset?
          </h2>
          <p className="text-primary-200 max-w-2xl mx-auto mb-6">
            {proposal.conclusion.callToAction}
          </p>
          <a
            href={`mailto:${proposal.contact.preparedBy.email}?subject=Carob Investment Inquiry - ${proposal.contact.client.company}`}
            className="inline-flex items-center px-6 py-3 bg-secondary-500 hover:bg-secondary-600 text-white font-semibold rounded-lg transition-colors"
          >
            Schedule a Call
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Next Steps */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Next Steps</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {proposal.conclusion.nextSteps.map((step) => (
            <div
              key={step.step}
              className="bg-white rounded-xl border border-gray-100 p-6 hover:border-primary-200 transition-colors"
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 text-primary-700 font-bold text-lg mb-4">
                {step.step}
              </span>
              <h4 className="font-semibold text-gray-900 mb-2">{step.action}</h4>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Investment Summary Table */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Investment Summary</h3>
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-gray-500">Total Investment</td>
                <td className="px-6 py-4 text-sm font-semibold text-gray-900 text-right">${proposal.summary.ask.amount.toLocaleString()} USD</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-gray-500">Target IRR (Base Case)</td>
                <td className="px-6 py-4 text-sm font-semibold text-gray-900 text-right">{proposal.summary.returns.irr}%</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-gray-500">Payback Period</td>
                <td className="px-6 py-4 text-sm font-semibold text-gray-900 text-right">{proposal.summary.returns.payback} years</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-gray-500">Asset Lifespan</td>
                <td className="px-6 py-4 text-sm font-semibold text-primary-700 text-right">100+ years</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-gray-500">50-Year Cumulative Value</td>
                <td className="px-6 py-4 text-sm font-semibold text-primary-700 text-right">${(proposal.financials.extendedProjections[5].cumulative / 1000000).toFixed(0)}M+</td>
              </tr>
              <tr className="bg-primary-50">
                <td className="px-6 py-4 text-sm font-medium text-primary-700">Return Multiple (50 yrs)</td>
                <td className="px-6 py-4 text-lg font-bold text-primary-700 text-right">{Math.round(proposal.financials.extendedProjections[5].cumulative / proposal.summary.ask.amount)}x</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Document Downloads */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Documents & Downloads</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {proposal.documents.map((doc) => {
            const isDownloadable = doc.downloadable && doc.filename;
            const href = isDownloadable
              ? doc.filename
              : `mailto:${proposal.contact.preparedBy.email}?subject=Document Request: ${doc.name}&body=Hi Louis,%0D%0A%0D%0AI would like to request access to the ${doc.name} for the Carob Investment Proposal.%0D%0A%0D%0AThank you.`;

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
                    <span className="inline-flex items-center text-xs text-primary-600 mt-2 font-medium">
                      {isDownloadable ? (
                        <>
                          Download {doc.type}
                          <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                        </>
                      ) : (
                        <>
                          Request Access
                          <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </>
                      )}
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
        <div className="mt-6 p-4 bg-primary-50 rounded-xl border border-primary-100">
          <p className="text-sm text-primary-800">
            <strong>Tip:</strong> The Executive Summary opens in a new tab - use your browser&apos;s Print function (Ctrl/Cmd+P) and select &quot;Save as PDF&quot; to download. The Financial Model downloads directly as an Excel file.
          </p>
        </div>
      </section>

      {/* References */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">References & Sources</h3>
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

      {/* Contact Information */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h4 className="font-semibold text-gray-900 mb-4">Prepared For</h4>
            <div className="space-y-2">
              <p className="text-lg font-semibold text-primary-700">{proposal.contact.client.name}</p>
              <p className="text-gray-600">{proposal.contact.client.company}</p>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h4 className="font-semibold text-gray-900 mb-4">Prepared By</h4>
            <div className="space-y-2">
              <p className="text-lg font-semibold text-primary-700">{proposal.contact.preparedBy.name}</p>
              <p className="text-gray-600">{proposal.contact.preparedBy.company}</p>
              <a
                href={`mailto:${proposal.contact.preparedBy.email}`}
                className="text-primary-600 hover:text-primary-700 transition-colors"
              >
                {proposal.contact.preparedBy.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section>
        <div className="bg-gray-50 rounded-xl p-8 text-center">
          <p className="text-gray-600 mb-4">
            Proposal prepared on {new Date(proposal.meta.prepared).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric"
            })}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="px-6 py-2 bg-white border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              Back to Overview
            </Link>
            <a
              href={`mailto:${proposal.contact.preparedBy.email}?subject=Carob Investment Inquiry - ${proposal.contact.client.company}`}
              className="px-6 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
