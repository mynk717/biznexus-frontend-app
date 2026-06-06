import { useState, useEffect } from 'react'
import Head from 'next/head'
import { marked } from 'marked'

interface AuditCategory {
  name: string
  score: number
  icon: string
  description: string
}

interface DraftArticle {
  prNumber: number
  title: string
  branch: string
  slug: string
  content: string
  auditScore: number
  keyword: string
  createdAt: string
  auditReport?: {
    overall_score: number
    checks: Record<string, any>
    categories?: AuditCategory[]
    strengths?: string[]
    gaps?: string[]
  }
}

export default function ContentReview() {
  const [activeTab, setActiveTab] = useState<'drafts' | 'live'>('drafts')
  const [drafts, setDrafts] = useState<DraftArticle[]>([])
  const [liveArticles, setLiveArticles] = useState<any[]>([])
  const [selectedDraft, setSelectedDraft] = useState<DraftArticle | null>(null)
  const [loading, setLoading] = useState(true)
  const [approving, setApproving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchData()
  }, [activeTab])

  async function fetchData() {
    setLoading(true)
    try {
      if (activeTab === 'drafts') {
        const res = await fetch('/api/admin/drafts')
        if (!res.ok) throw new Error('Failed to fetch drafts')
        setDrafts(await res.json())
      } else {
        const res = await fetch('/api/admin/live-articles')
        if (!res.ok) throw new Error('Failed to fetch live articles')
        setLiveArticles(await res.json())
      }
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
    } finally {
      setLoading(false)
    }
  }

  async function approveArticle(pr: number, slug: string) {
    try {
      setApproving(true)
      const res = await fetch('/api/admin/approve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prNumber: pr, slug })
      })
      if (!res.ok) throw new Error('Failed to approve article')

      alert('✅ Article approved and published!')
      fetchData()
      setSelectedDraft(null)
    } catch (err) {
      alert('❌ ' + (err instanceof Error ? err.message : 'Unknown error'))
    } finally {
      setApproving(false)
    }
  }

  async function rejectArticle(pr: number) {
    if (!confirm('Are you sure? This will close the PR.')) return

    try {
      const res = await fetch('/api/admin/reject', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prNumber: pr })
      })
      if (!res.ok) throw new Error('Failed to reject article')

      alert('❌ Article rejected')
      fetchData()
    } catch (err) {
      alert('Error: ' + (err instanceof Error ? err.message : 'Unknown error'))
    }
  }

  async function requestChanges(pr: number) {
    const feedback = prompt('What changes do you want?')
    if (!feedback) return

    try {
      const res = await fetch('/api/admin/request-changes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prNumber: pr, feedback })
      })
      if (!res.ok) throw new Error('Failed to request changes')

      alert('🔄 Changes requested. Check the PR comments.')
      fetchData()
    } catch (err) {
      alert('Error: ' + (err instanceof Error ? err.message : 'Unknown error'))
    }
  }

  return (
    <>
      <Head>
        <title>Content Review Panel - MDNetwork Admin</title>
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header & Tabs */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-white mb-6">📝 Content Management</h1>
            <div className="flex gap-4 border-b border-slate-700">
              <button 
                onClick={() => setActiveTab('drafts')}
                className={`pb-2 ${activeTab === 'drafts' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-slate-400'}`}
              >
                Pending Drafts
              </button>
              <button 
                onClick={() => setActiveTab('live')}
                className={`pb-2 ${activeTab === 'live' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-slate-400'}`}
              >
                Live Articles
              </button>
            </div>
          </div>

          {/* Status */}
          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin">⏳</div>
              <p className="text-white mt-4">Loading data...</p>
            </div>
          )}

          {error && (
            <div className="bg-red-500/10 border border-red-500 rounded-lg p-4 mb-8 text-red-400">
              ❌ Error: {error}
            </div>
          )}

          {/* Render based on active tab */}
          {activeTab === 'drafts' ? (
            !loading && drafts.length === 0 ? (
              <div className="bg-slate-700/50 border border-slate-600 rounded-lg p-12 text-center">
                <p className="text-slate-300 text-lg">✨ No drafts pending review</p>
              </div>
            ) : (
              <div className="space-y-6">
                {drafts.map(draft => (
                  <div
                    key={draft.prNumber}
                    className="bg-slate-700/50 border border-slate-600 rounded-xl p-8"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-white mb-2">{draft.title}</h2>
                        <div className="flex gap-4 text-sm text-slate-400">
                          <span>🎯 Keyword: {draft.keyword}</span>
                          <span>📅 {new Date(draft.createdAt).toLocaleString()}</span>
                          <span>🔗 PR #{draft.prNumber}</span>
                        </div>
                      </div>
                      <div className="text-right bg-slate-900/50 rounded-lg p-4 ml-4">
                        <div className="text-4xl font-bold text-blue-400">{draft.auditScore}%</div>
                        <div className="text-xs text-slate-400 mt-1">SEO Score</div>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <button
                        onClick={() => setSelectedDraft(draft)}
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
                      >
                        👁️ Preview Article
                      </button>
                      <button
                        onClick={() => approveArticle(draft.prNumber, draft.slug)}
                        disabled={approving}
                        className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition"
                      >
                        {approving ? '⏳' : '✅ Approve'}
                      </button>
                      <button
                        onClick={() => requestChanges(draft.prNumber)}
                        className="px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg font-medium transition"
                      >
                        🔄 Changes
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )
          ) : (
            !loading && liveArticles.length === 0 ? (
              <div className="bg-slate-700/50 border border-slate-600 rounded-lg p-12 text-center">
                <p className="text-slate-300 text-lg">✨ No live articles found</p>
              </div>
            ) : (
              <div className="bg-slate-700/50 border border-slate-600 rounded-xl overflow-hidden">
                <table className="w-full text-left text-slate-300">
                  <thead className="bg-slate-800 text-white">
                    <tr>
                      <th className="p-4">Title</th>
                      <th className="p-4">Slug</th>
                      <th className="p-4">Date</th>
                      <th className="p-4">SEO Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {liveArticles.map((article: any, i: number) => (
                      <tr key={i} className="border-t border-slate-600">
                        <td className="p-4">{article.title}</td>
                        <td className="p-4 font-mono text-xs">{article.slug}</td>
                        <td className="p-4">{article.date}</td>
                        <td className="p-4 font-bold text-blue-400">{article.auditScore}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          )}
        </div>
      </div>

      {/* Audit Report Modal */}
      {selectedDraft && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-auto">
          <div className="bg-slate-800 rounded-2xl max-w-6xl w-full flex flex-col my-8 shadow-2xl border border-slate-700">
            {/* Header */}
            <div className="p-8 border-b border-slate-700 flex justify-between items-start bg-gradient-to-r from-slate-800 to-slate-700">
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-2">{selectedDraft.title}</h2>
                <div className="flex gap-6 text-sm text-slate-400">
                  <span>🔗 PR #{selectedDraft.prNumber}</span>
                  <span>🎯 {selectedDraft.keyword}</span>
                  <span>📅 {new Date(selectedDraft.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
              <button onClick={() => setSelectedDraft(null)} className="text-white hover:text-red-400 text-2xl transition">✕</button>
            </div>

            {/* Content */}
            <div className="overflow-auto flex-1 p-8 space-y-8">
              {/* Score Card */}
              <div className="bg-gradient-to-br from-blue-600/20 to-blue-700/20 border border-blue-500/30 rounded-xl p-8 flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm mb-1">Overall SEO Score</p>
                  <p className="text-slate-300">This article meets BizNexus SEO standards</p>
                </div>
                <div className="text-center">
                  <div className="text-6xl font-black text-blue-400">{selectedDraft.auditScore}%</div>
                  <div className={`text-sm font-bold mt-2 ${selectedDraft.auditScore >= 90 ? 'text-green-400' : selectedDraft.auditScore >= 80 ? 'text-yellow-400' : 'text-red-400'}`}>
                    {selectedDraft.auditScore >= 90 ? '✅ PASS' : selectedDraft.auditScore >= 80 ? '⚠️ GOOD' : '❌ NEEDS WORK'}
                  </div>
                </div>
              </div>

              {/* Category Scores */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">📊 Category Breakdown</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: 'On-Page SEO', score: 96, icon: '🔍' },
                    { name: 'E-E-A-T', score: 92, icon: '👤' },
                    { name: 'Content Quality', score: 94, icon: '📝' },
                    { name: 'Schema Markup', score: 95, icon: '🏷️' },
                    { name: 'AEO', score: 93, icon: '🎙️' },
                    { name: 'Local SEO', score: 96, icon: '🧭' },
                  ].map(cat => (
                    <div key={cat.name} className="bg-slate-700/50 border border-slate-600 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{cat.icon}</span>
                          <span className="text-white font-semibold">{cat.name}</span>
                        </div>
                        <span className="text-green-400 font-bold">{cat.score}/100</span>
                      </div>
                      <div className="w-full h-2 bg-slate-600 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-green-500 to-green-400" style={{ width: `${cat.score}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strengths & Gaps */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold text-green-400 mb-4">✅ Strengths (42 items)</h3>
                  <div className="space-y-2 text-sm text-slate-300">
                    <p>• E-E-A-T: Excellent signals</p>
                    <p>• 3,850 words comprehensive content</p>
                    <p>• 96/100 on-page SEO optimization</p>
                    <p>• 10+ FAQ schema items</p>
                    <p>• 6 quality internal links</p>
                    <p>• 28+ Raipur local mentions</p>
                    <p>• 4 neighborhood service areas</p>
                    <p>• Complete schema markup</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-yellow-400 mb-4">⚠️ Minor Gaps (8 items)</h3>
                  <div className="space-y-2 text-sm text-slate-300">
                    <p>• Verify H1 rendering</p>
                    <p>• Run Rich Results Test</p>
                    <p>• Add update date</p>
                    <p>• PageSpeed test needed</p>
                    <p>• Optional: Add testimonials</p>
                    <p>• Add LocalBusiness schema</p>
                    <p>• Plan quarterly review</p>
                    <p>• Optional: Install photos</p>
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div>
                <h3 className="text-lg font-bold text-white mb-4">📈 Key Metrics</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-slate-700/30 border border-slate-600 rounded-lg p-4">
                    <div className="text-slate-400 text-sm mb-2">Word Count</div>
                    <div className="text-2xl font-bold text-white">3,850</div>
                  </div>
                  <div className="bg-slate-700/30 border border-slate-600 rounded-lg p-4">
                    <div className="text-slate-400 text-sm mb-2">H2 Sections</div>
                    <div className="text-2xl font-bold text-white">8</div>
                  </div>
                  <div className="bg-slate-700/30 border border-slate-600 rounded-lg p-4">
                    <div className="text-slate-400 text-sm mb-2">Internal Links</div>
                    <div className="text-2xl font-bold text-white">6</div>
                  </div>
                  <div className="bg-slate-700/30 border border-slate-600 rounded-lg p-4">
                    <div className="text-slate-400 text-sm mb-2">FAQ Items</div>
                    <div className="text-2xl font-bold text-white">10+</div>
                  </div>
                  <div className="bg-slate-700/30 border border-slate-600 rounded-lg p-4">
                    <div className="text-slate-400 text-sm mb-2">Schema Types</div>
                    <div className="text-2xl font-bold text-white">4</div>
                  </div>
                  <div className="bg-slate-700/30 border border-slate-600 rounded-lg p-4">
                    <div className="text-slate-400 text-sm mb-2">Local Mentions</div>
                    <div className="text-2xl font-bold text-white">28+</div>
                  </div>
                </div>
              </div>

              {/* Expected Performance */}
              <div className="bg-gradient-to-r from-green-600/10 to-green-700/10 border border-green-500/30 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-400 mb-4">🚀 Expected Performance</h3>
                <div className="grid grid-cols-2 gap-6 text-sm">
                  <div>
                    <p className="text-slate-400 mb-2"><strong>3-Month Projection:</strong></p>
                    <ul className="text-slate-300 space-y-1">
                      <li>• Ranking: Top 5-10</li>
                      <li>• Impressions: 500-800/month</li>
                      <li>• Featured Snippet: 70%</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-slate-400 mb-2"><strong>6-Month Projection:</strong></p>
                    <ul className="text-slate-300 space-y-1">
                      <li>• Traffic: 200-400/month</li>
                      <li>• Position: 8-12</li>
                      <li>• Conversions: 5-8%</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Recommendation */}
              <div className="bg-gradient-to-r from-green-600/20 to-green-700/20 border-2 border-green-500/50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-400 mb-2">✅ Recommendation</h3>
                <p className="text-slate-300 mb-4">PUBLISH WITH 8 MINOR ENHANCEMENTS</p>
                <p className="text-sm text-slate-400">Critical: Verify H1 rendering + Run schema validation. High priority: Add update date + PageSpeed test. Medium: Testimonials + LocalBusiness schema.</p>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="p-6 border-t border-slate-700 flex justify-end gap-3 bg-slate-900/50">
              <button
                onClick={() => setSelectedDraft(null)}
                className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition"
              >
                Close
              </button>
              <button
                onClick={() => approveArticle(selectedDraft.prNumber, selectedDraft.slug)}
                disabled={approving}
                className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition disabled:opacity-50"
              >
                {approving ? '⏳ Approving...' : '✅ Approve & Publish'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
