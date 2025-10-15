import React, { useState } from 'react';
import { ChevronDown, Code2, Zap, BarChart3, Briefcase, BookOpen, Target, Users, TrendingUp } from 'lucide-react';

export default function Web3DevGuide() {
  const [expanded, setExpanded] = useState(null);

  const skills = [
    {
      id: 'smart-contracts',
      title: 'Smart Contract Development',
      icon: Code2,
      color: 'from-blue-500 to-blue-600',
      description: 'Write secure code that powers blockchain applications',
      difficulty: 'Advanced',
      timeToLearn: '6-12 months',
      tools: [
        { name: 'Solidity', chain: 'Ethereum, Polygon, Arbitrum', desc: 'Most widely used, extensive tooling' },
        { name: 'Vyper', chain: 'Ethereum', desc: 'Pythonic alternative, focus on security' },
        { name: 'Move', chain: 'Aptos, Sui', desc: 'Modern language with unique safety features' },
        { name: 'Rust', chain: 'Solana', desc: 'Systems language, steep learning curve but powerful' }
      ],
      earnings: [
        'Contract audits: $5K-$50K+ per audit',
        'Development jobs: $100K-$300K+ annually',
        'Bounties & grants: $1K-$100K+',
        'Freelance projects: $5K-$50K per project'
      ],
      opportunities: [
        'Join Web3 startups or DAOs as a developer',
        'Freelance on Upwork, Fiverr, or specialized Web3 job boards',
        'Contribute to open-source protocols (grants available)',
        'Compete in security auditing competitions (Sherlock, CodeHawks)',
        'Launch your own DeFi protocol or tool'
      ],
      prerequisites: [
        'Strong programming fundamentals',
        'Understanding of programming paradigms',
        'Comfort with debugging and testing',
        'Knowledge of cryptography basics helpful'
      ],
      risks: [
        'Smart contracts handle real money—bugs can be catastrophic',
        'Requires continuous learning as security threats evolve',
        'High responsibility for users\' funds'
      ]
    },
    {
      id: 'frontend',
      title: 'Frontend + Web3 Integration',
      icon: Zap,
      color: 'from-purple-500 to-purple-600',
      description: 'Build beautiful interfaces that connect to blockchains',
      difficulty: 'Intermediate',
      timeToLearn: '3-6 months',
      tools: [
        { name: 'JavaScript/TypeScript', chain: 'Core', desc: 'Essential for Web3 frontend development' },
        { name: 'React.js', chain: 'UI Framework', desc: 'Industry standard for building SPAs' },
        { name: 'Next.js', chain: 'React Framework', desc: 'Full-stack capabilities, SSR, better SEO' },
        { name: 'Ethers.js', chain: 'Web3 Library', desc: 'Connect to Ethereum-compatible chains' },
        { name: 'Wagmi', chain: 'React Hooks', desc: 'React hooks for Web3, simplifies wallet integration' },
        { name: 'Viem', chain: 'Web3 Library', desc: 'Modern, modular alternative to Ethers.js' },
        { name: 'RainbowKit', chain: 'Wallet UI', desc: 'Beautiful, accessible wallet connection component' }
      ],
      earnings: [
        'Contract work: $3K-$20K per project',
        'Full-time roles: $80K-$250K+ annually',
        'Freelancing: $50-$200+ per hour',
        'Building & monetizing dApps: Variable'
      ],
      opportunities: [
        'Build interactive dApps for DeFi protocols',
        'Create NFT marketplaces and minting interfaces',
        'Develop wallet dashboards and portfolio trackers',
        'Join projects as a core contributor',
        'Contribute to open-source Web3 libraries'
      ],
      prerequisites: [
        'Proficiency in JavaScript/TypeScript',
        'React experience (or willingness to learn)',
        'Basic understanding of blockchain concepts',
        'UX/design sensibility a plus'
      ],
      risks: [
        'Rapid evolution of libraries and standards',
        'Responsible for handling private keys and transactions',
        'User experience directly impacts security'
      ]
    },
    {
      id: 'analytics',
      title: 'Blockchain Data Analytics',
      icon: BarChart3,
      color: 'from-emerald-500 to-emerald-600',
      description: 'Visualize and interpret on-chain data insights',
      difficulty: 'Intermediate',
      timeToLearn: '2-4 months',
      tools: [
        { name: 'SQL', chain: 'Query Language', desc: 'Essential for querying blockchain data' },
        { name: 'Python', chain: 'Data Processing', desc: 'Data analysis, visualization, automation' },
        { name: 'The Graph', chain: 'Indexing', desc: 'Query blockchain data with GraphQL' },
        { name: 'Dune Analytics', chain: 'Dashboard Platform', desc: 'Create SQL-based dashboards, large community' },
        { name: 'Flipside Crypto', chain: 'Dashboard Platform', desc: 'Competing platform with bounty programs' },
        { name: 'Tableau/Looker', chain: 'Visualization', desc: 'Professional data visualization tools' }
      ],
      earnings: [
        'Bounties: $500-$10K per dashboard',
        'Full-time analyst: $80K-$200K+ annually',
        'Freelance analysis: $100-$500+ per day',
        'Research reports: $2K-$20K+ per report'
      ],
      opportunities: [
        'Create dashboards for DeFi protocols, NFT projects, Layer 2s',
        'Participate in data bounty programs (Dune, Flipside)',
        'Become an on-chain researcher for protocols',
        'Publish insights and build personal brand',
        'Advise projects on metrics and KPIs'
      ],
      prerequisites: [
        'SQL knowledge (fundamental)',
        'Statistical thinking',
        'Python basics (helpful but not required)',
        'Curiosity about blockchain mechanics'
      ],
      risks: [
        'Data quality and reliability can be questionable',
        'Competitive bounty programs',
        'Requires staying current with protocol updates'
      ]
    }
  ];

  const advancedRoles = [
    { title: 'Security Auditor', desc: 'Audit smart contracts for vulnerabilities', earnings: '$20K-$200K+ per audit' },
    { title: 'Compiler Engineer', desc: 'Build/optimize blockchain compilers', earnings: '$150K-$300K+' },
    { title: 'Systems Architect', desc: 'Design blockchain infrastructure', earnings: '$200K-$400K+' },
    { title: 'Protocol Researcher', desc: 'Research new protocols and mechanisms', earnings: '$100K-$300K+' },
    { title: 'DevOps/Infrastructure', desc: 'Manage blockchain nodes and infrastructure', earnings: '$100K-$250K+' }
  ];

  const pathComparison = [
    { aspect: 'Entry Barrier', smart: 'High', frontend: 'Medium', analytics: 'Low' },
    { aspect: 'Income Potential', smart: 'Very High', frontend: 'High', analytics: 'Medium-High' },
    { aspect: 'Learning Curve', smart: 'Steep', frontend: 'Moderate', analytics: 'Gentle' },
    { aspect: 'Job Demand', smart: 'Very High', frontend: 'High', analytics: 'Growing' },
    { aspect: 'Remote Opportunities', smart: 'Excellent', frontend: 'Excellent', analytics: 'Excellent' }
  ];

  const SkillCard = ({ skill }) => {
    const isExpanded = expanded === skill.id;
    const IconComponent = skill.icon;

    return (
      <div className="mb-6 rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow bg-white">
        <div 
          onClick={() => setExpanded(isExpanded ? null : skill.id)}
          className={`bg-gradient-to-r ${skill.color} p-6 cursor-pointer text-white`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <IconComponent size={32} />
              <div>
                <h3 className="text-2xl font-bold">{skill.title}</h3>
                <p className="text-blue-100">{skill.description}</p>
              </div>
            </div>
            <ChevronDown size={24} className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
          </div>
        </div>

        {isExpanded && (
          <div className="p-8 bg-gray-50 space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-600">Difficulty</p>
                <p className="font-bold text-gray-900">{skill.difficulty}</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-600">Time to Learn</p>
                <p className="font-bold text-gray-900">{skill.timeToLearn}</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4 flex items-center gap-2"><BookOpen size={20} /> Tools & Technologies</h4>
              <div className="space-y-3">
                {skill.tools.map((tool, i) => (
                  <div key={i} className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                    <div className="font-semibold text-gray-900">{tool.name}</div>
                    <div className="text-sm text-gray-600">{tool.chain}</div>
                    <div className="text-sm text-gray-700 mt-1">{tool.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4 flex items-center gap-2"><TrendingUp size={20} /> Earning Potential</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {skill.earnings.map((e, i) => (
                  <div key={i} className="bg-green-50 p-3 rounded-lg border border-green-200 text-sm">
                    {e}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4 flex items-center gap-2"><Target size={20} /> Opportunities</h4>
              <ul className="space-y-2">
                {skill.opportunities.map((opp, i) => (
                  <li key={i} className="flex gap-3 text-gray-700">
                    <span className="text-blue-600 font-bold">•</span>
                    {opp}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Prerequisites</h4>
              <ul className="space-y-2">
                {skill.prerequisites.map((pre, i) => (
                  <li key={i} className="flex gap-3 text-gray-700">
                    <span className="text-green-600 font-bold">✓</span>
                    {pre}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4 text-red-600">Important Considerations</h4>
              <ul className="space-y-2">
                {skill.risks.map((risk, i) => (
                  <li key={i} className="flex gap-3 text-gray-700">
                    <span className="text-red-600 font-bold">⚠</span>
                    {risk}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Web3 Developer Career Guide</h1>
          <p className="text-xl text-blue-100">Explore the most in-demand technical skills in blockchain</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Skills Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Core Technical Paths</h2>
          {skills.map(skill => <SkillCard key={skill.id} skill={skill} />)}
        </div>

        {/* Comparison Table */}
        <div className="mb-16 bg-white rounded-xl overflow-hidden shadow-xl">
          <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-6 text-white">
            <h2 className="text-2xl font-bold flex items-center gap-2"><Users size={28} /> Quick Comparison</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 text-left font-bold text-gray-900">Aspect</th>
                  <th className="p-4 text-center font-bold text-blue-600">Smart Contracts</th>
                  <th className="p-4 text-center font-bold text-purple-600">Frontend</th>
                  <th className="p-4 text-center font-bold text-emerald-600">Analytics</th>
                </tr>
              </thead>
              <tbody>
                {pathComparison.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-4 font-semibold text-gray-900">{row.aspect}</td>
                    <td className="p-4 text-center text-gray-700">{row.smart}</td>
                    <td className="p-4 text-center text-gray-700">{row.frontend}</td>
                    <td className="p-4 text-center text-gray-700">{row.analytics}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Advanced Roles */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Advanced Specializations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advancedRoles.map((role, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-purple-600">
                <h3 className="font-bold text-lg text-gray-900 mb-2">{role.title}</h3>
                <p className="text-gray-600 mb-4">{role.desc}</p>
                <p className="text-green-600 font-semibold">{role.earnings}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Plan */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">🚀 Getting Started Action Plan</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="bg-white text-blue-600 rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <p className="font-bold mb-1">Choose Your Path</p>
                <p className="text-blue-100">Pick one specialization and commit to it for 3-6 months</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-white text-purple-600 rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <p className="font-bold mb-1">Build Projects</p>
                <p className="text-blue-100">Create real, shipping projects and showcase them publicly</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-white text-blue-600 rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <p className="font-bold mb-1">Network & Apply</p>
                <p className="text-blue-100">Join DAOs, apply for jobs, contribute to open-source, compete in bounties</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-white text-purple-600 rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">4</div>
              <div>
                <p className="font-bold mb-1">Iterate & Grow</p>
                <p className="text-blue-100">Learn from feedback, build your reputation, move to higher-impact roles</p>
              </div>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📚 Learning Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold text-gray-900 mb-2">Smart Contracts</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Cryptozombies.io - Interactive Solidity tutorial</li>
                <li>• OpenZeppelin Docs - Industry-standard patterns</li>
                <li>• Hardhat - Smart contract framework</li>
              </ul>
            </div>
            <div className="border-l-4 border-purple-600 pl-4">
              <h3 className="font-bold text-gray-900 mb-2">Frontend</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• The Odin Project - React fundamentals</li>
                <li>• Wagmi documentation - Web3 React hooks</li>
                <li>• Web3 UI libraries - RainbowKit, ConnectKit</li>
              </ul>
            </div>
            <div className="border-l-4 border-emerald-600 pl-4">
              <h3 className="font-bold text-gray-900 mb-2">Analytics</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Dune Analytics - Start building dashboards</li>
                <li>• Mode SQL Tutorial - Query blockchain data</li>
                <li>• The Graph documentation - GraphQL queries</li>
              </ul>
            </div>
            <div className="border-l-4 border-orange-600 pl-4">
              <h3 className="font-bold text-gray-900 mb-2">Job Boards</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Cryptocurrency.jobs</li>
                <li>• We3.careers</li>
                <li>• Angel.co (Web3 filter)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-slate-900 border-t border-slate-700 mt-16 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>Web3 is evolving rapidly. Keep learning, stay curious, and build amazing things.</p>
        </div>
      </div>
    </div>
  );
}
