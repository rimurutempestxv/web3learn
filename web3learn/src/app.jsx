import React, { useState } from 'react';
import { ChevronRight, Code2 } from 'lucide-react';

export default function Web3DevGuide() {
  const [expandedId, setExpandedId] = useState(null);

  const skills = [
    {
      id: 1,
      title: 'Smart Contract Development',
      description: 'Build the backbone of Web3',
      shortDesc: 'Write secure code that powers DeFi protocols and blockchain apps',
      earnings: '$100K - $300K+',
      difficulty: 'Hard',
      timeframe: '6-12 months',
      tools: [
        { name: 'Solidity', desc: 'Ethereum, Polygon, Arbitrum — most demand' },
        { name: 'Rust', desc: 'Solana — high performance' },
        { name: 'Move', desc: 'Aptos, Sui — modern & safe' },
        { name: 'Vyper', desc: 'Ethereum alternative — security focused' }
      ],
      pay: [
        'Audits: $5K-$50K+ per engagement',
        'Full-time: $100K-$300K+',
        'Grants & bounties: $1K-$100K+',
        'Freelance: $5K-$50K per project'
      ],
      gigs: [
        'Join Web3 startups or DAOs',
        'Freelance on Upwork, specialized boards',
        'Audit smart contracts',
        'Contribute to open-source (grant programs)',
        'Start your own DeFi protocol'
      ],
      need: [
        'Strong programming fundamentals',
        'Comfortable with debugging',
        'Desire to learn cryptography',
        'Attention to security details'
      ],
      watch: [
        'Code security is critical — bugs = real money lost',
        'Constantly evolving threat landscape',
        'High responsibility for users'
      ]
    },
    {
      id: 2,
      title: 'Frontend + Web3',
      description: 'Connect users to blockchains',
      shortDesc: 'Build dApps that people actually want to use',
      earnings: '$80K - $250K+',
      difficulty: 'Medium',
      timeframe: '3-6 months',
      tools: [
        { name: 'React.js', desc: 'Industry standard UI framework' },
        { name: 'Next.js', desc: 'Full-stack, better for shipping' },
        { name: 'TypeScript', desc: 'Better than vanilla JS for this' },
        { name: 'Wagmi', desc: 'React hooks for wallet stuff' },
        { name: 'Viem / Ethers.js', desc: 'Talk to blockchains' },
        { name: 'RainbowKit', desc: 'Wallet connection UI (plug & play)' }
      ],
      pay: [
        'Contract work: $3K-$20K per project',
        'Full-time: $80K-$250K+',
        'Freelance: $50-$200+/hour',
        'Build & monetize your own apps'
      ],
      gigs: [
        'Build DeFi interfaces & dashboards',
        'Create NFT tools & marketplaces',
        'Develop token portfolio trackers',
        'Contribute to open-source libraries',
        'Full-time at protocols as core dev'
      ],
      need: [
        'Solid React skills (or willing to learn fast)',
        'Comfortable with JavaScript/TypeScript',
        'Basic blockchain understanding',
        'Good eye for UX matters here'
      ],
      watch: [
        'Libraries change fast — keep up',
        'You handle user keys & transactions',
        'Bad UX = user loses money'
      ]
    },
    {
      id: 3,
      title: 'Blockchain Data Analytics',
      description: 'See what the data is telling you',
      shortDesc: 'Turn on-chain data into insights people care about',
      earnings: '$80K - $200K+',
      difficulty: 'Easy-Medium',
      timeframe: '2-4 months',
      tools: [
        { name: 'SQL', desc: 'Essential — query blockchain data' },
        { name: 'Dune Analytics', desc: 'Build dashboards, bounty programs' },
        { name: 'Python', desc: 'Data processing & automation' },
        { name: 'The Graph', desc: 'Query with GraphQL' },
        { name: 'Flipside Crypto', desc: 'Alternative platform + bounties' }
      ],
      pay: [
        'Bounties: $500-$10K per dashboard',
        'Full-time: $80K-$200K+',
        'Research reports: $2K-$20K+',
        'Freelance: $100-$500+/day'
      ],
      gigs: [
        'Create dashboards for protocols',
        'Win bounties on Dune & Flipside',
        'Become an on-chain researcher',
        'Publish insights & build personal brand',
        'Advise projects on metrics'
      ],
      need: [
        'SQL fundamentals (this is it)',
        'Statistical thinking',
        'Curiosity about how chains work',
        'Python is nice but optional'
      ],
      watch: [
        'Data quality varies — validate everything',
        'Bounty programs are competitive',
        'Protocols change their events'
      ]
    }
  ];

  const advanced = [
    { title: 'Security Auditor', money: '$20K-$200K+ per audit' },
    { title: 'Compiler Engineer', money: '$150K-$300K+' },
    { title: 'Systems Architect', money: '$200K-$400K+' },
    { title: 'Protocol Researcher', money: '$100K-$300K+' },
    { title: 'DevOps / Infrastructure', money: '$100K-$250K+' }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <div className="border-b border-gray-800 sticky top-0 z-50 bg-black/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-black tracking-tighter">WEB3.LEARN</div>
          <div className="text-sm text-gray-400">Career paths in blockchain</div>
        </div>
      </div>

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-16">
          <h1 className="text-7xl font-black tracking-tight mb-6 leading-tight">
            Make money building<br />in Web3
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Three proven paths to earn real income. Pick one. Go deep. Ship projects. Get paid.
          </p>
        </div>

        {/* Main Skills Grid */}
        <div className="space-y-4 mb-20">
          {skills.map((skill) => (
            <div key={skill.id} className="group">
              <button
                onClick={() => setExpandedId(expandedId === skill.id ? null : skill.id)}
                className="w-full text-left"
              >
                <div className="border border-gray-800 hover:border-gray-700 bg-gradient-to-r from-gray-900/50 to-transparent hover:bg-gradient-to-r hover:from-gray-800/50 hover:to-transparent p-8 rounded-lg transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded bg-gray-800 group-hover:bg-gray-700 transition flex items-center justify-center">
                          <Code2 size={16} />
                        </div>
                        <h2 className="text-2xl font-bold">{skill.title}</h2>
                      </div>
                      <p className="text-gray-400 mb-4">{skill.shortDesc}</p>
                      <div className="flex gap-6 text-sm">
                        <div>
                          <span className="text-gray-500">Earnings</span>
                          <div className="font-bold text-green-400">{skill.earnings}</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Difficulty</span>
                          <div className="font-bold">{skill.difficulty}</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Timeline</span>
                          <div className="font-bold">{skill.timeframe}</div>
                        </div>
                      </div>
                    </div>
                    <div className={`text-gray-600 transition-transform duration-300 ${expandedId === skill.id ? 'rotate-90' : ''}`}>
                      <ChevronRight size={24} />
                    </div>
                  </div>
                </div>
              </button>

              {/* Expanded Content */}
              {expandedId === skill.id && (
                <div className="bg-gray-900/50 border border-gray-800 border-t-0 rounded-b-lg p-8 space-y-8 animate-in fade-in duration-300">
                  
                  {/* Tools */}
                  <div>
                    <h3 className="font-bold text-lg mb-4 uppercase tracking-wide text-gray-400">Tools & Tech Stack</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {skill.tools.map((tool, i) => (
                        <div key={i} className="border border-gray-800 rounded p-4 hover:border-gray-700 transition">
                          <div className="font-bold mb-1">{tool.name}</div>
                          <div className="text-sm text-gray-500">{tool.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pay */}
                  <div>
                    <h3 className="font-bold text-lg mb-4 uppercase tracking-wide text-gray-400">How You Get Paid</h3>
                    <div className="space-y-2">
                      {skill.pay.map((p, i) => (
                        <div key={i} className="flex gap-3 text-gray-300">
                          <span className="text-green-400 font-bold">$</span>
                          {p}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Gigs */}
                  <div>
                    <h3 className="font-bold text-lg mb-4 uppercase tracking-wide text-gray-400">Where to Find Work</h3>
                    <div className="space-y-2">
                      {skill.gigs.map((gig, i) => (
                        <div key={i} className="flex gap-3 text-gray-300">
                          <span className="text-blue-400">→</span>
                          {gig}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Prerequisites */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-bold text-lg mb-4 uppercase tracking-wide text-gray-400">You'll Need</h3>
                      <div className="space-y-2">
                        {skill.need.map((n, i) => (
                          <div key={i} className="flex gap-3 text-gray-300">
                            <span className="text-amber-400">•</span>
                            {n}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold text-lg mb-4 uppercase tracking-wide text-gray-400 text-red-400">Watch Out</h3>
                      <div className="space-y-2">
                        {skill.watch.map((w, i) => (
                          <div key={i} className="flex gap-3 text-gray-300">
                            <span className="text-red-400">⚠</span>
                            {w}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Comparison */}
        <div className="border border-gray-800 rounded-lg p-8 mb-20 bg-gray-900/30">
          <h2 className="text-3xl font-bold mb-8">Quick Breakdown</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-sm text-gray-500 mb-2">EASIEST TO START</div>
              <div className="text-lg font-bold mb-4">Analytics</div>
              <p className="text-gray-400 text-sm">If you know SQL, you can start earning in weeks. Lowest barrier to entry.</p>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-2">HIGHEST CEILING</div>
              <div className="text-lg font-bold mb-4">Smart Contracts</div>
              <p className="text-gray-400 text-sm">Most specialized skill = highest salaries. But steeper learning curve.</p>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-2">MOST FLEXIBLE</div>
              <div className="text-lg font-bold mb-4">Frontend</div>
              <p className="text-gray-400 text-sm">Portfolio matters most. Easy to build projects and show your work.</p>
            </div>
          </div>
        </div>

        {/* Advanced */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Level Up: Advanced Paths</h2>
          <p className="text-gray-400 mb-8">Once you've mastered the basics, these specializations pay even more:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {advanced.map((role, i) => (
              <div key={i} className="border border-gray-800 hover:border-gray-700 rounded p-6 transition">
                <div className="font-bold text-lg mb-2">{role.title}</div>
                <div className="text-green-400 font-mono text-sm">{role.money}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="border border-gray-800 rounded-lg p-12 bg-gradient-to-br from-blue-950/20 to-purple-950/20 mb-20">
          <h2 className="text-3xl font-bold mb-6">How to Actually Get Started</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="text-2xl font-bold text-gray-600 min-w-8">1</div>
              <div>
                <div className="font-bold mb-1">Pick ONE path</div>
                <div className="text-gray-400">Don't spread yourself thin. Choose smart contracts, frontend, or analytics. Go all-in for 3-6 months.</div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl font-bold text-gray-600 min-w-8">2</div>
              <div>
                <div className="font-bold mb-1">Build something real</div>
                <div className="text-gray-400">Don't just watch tutorials. Ship projects. Put them on GitHub. Show people what you can do.</div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl font-bold text-gray-600 min-w-8">3</div>
              <div>
                <div className="font-bold mb-1">Get your first gig</div>
                <div className="text-gray-400">Freelance, bounty, job, DAO contributor—doesn't matter. You need that first paid experience.</div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl font-bold text-gray-600 min-w-8">4</div>
              <div>
                <div className="font-bold mb-1">Build your reputation</div>
                <div className="text-gray-400">One gig leads to the next. Ship quality work. Get paid more. Climb the ladder.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          <div className="border border-gray-800 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-4">Learning Platforms</h3>
            <div className="space-y-3 text-gray-400 text-sm">
              <div><span className="text-gray-600">→</span> Cryptozombies.io (Solidity tutorial)</div>
              <div><span className="text-gray-600">→</span> Hardhat (smart contract dev)</div>
              <div><span className="text-gray-600">→</span> The Odin Project (React)</div>
              <div><span className="text-gray-600">→</span> Dune Analytics (start building)</div>
              <div><span className="text-gray-600">→</span> Mode SQL Tutorial (queries)</div>
            </div>
          </div>

          <div className="border border-gray-800 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-4">Job Boards & Bounties</h3>
            <div className="space-y-3 text-gray-400 text-sm">
              <div><span className="text-gray-600">→</span> Cryptocurrency.jobs</div>
              <div><span className="text-gray-600">→</span> We3.careers</div>
              <div><span className="text-gray-600">→</span> Angel.co (Web3 filter)</div>
              <div><span className="text-gray-600">→</span> Dune / Flipside (bounties)</div>
              <div><span className="text-gray-600">→</span> Upwork (freelance)</div>
            </div>
          </div>
        </div>

        {/* Footer Message */}
        <div className="text-center py-12 border-t border-gray-800">
          <p className="text-gray-500">
            Web3 moves fast. Pick a path, commit to learning, and start shipping. The market rewards people who can actually build.
          </p>
             <p className="text-gray-500">
            By Rimuru Tempest.
          </p>
        </div>
      </div>
    </div>
  );
}