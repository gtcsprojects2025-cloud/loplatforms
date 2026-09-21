// app/blog/[slug]/posts/CustomWebApplicationTiming.tsx

import {
  CheckCircle,
  AlertTriangle,
  XCircle,
  Users,
  TrendingDown,
  Layers,
  Workflow,
  Coins,
  Ruler,
  Shield,
  Lightbulb,
  Search,
} from 'lucide-react';
import Link from 'next/link';

const symptoms = [
  {
    number: '01',
    icon: Users,
    title: 'Headcount creeps around a tool, not a process',
    body: 'You start hiring or reassigning people whose real job is babysitting integrations: copying data between systems, catching sync errors, and manually applying business rules the software cannot express.',
  },
  {
    number: '02',
    icon: TrendingDown,
    title: 'Silent revenue leakage',
    body: 'Nobody logs the sale you lost because the CRM could not segment customers the way your sales team actually sells. It just looks like "conversion is a bit soft this quarter."',
  },
  {
    number: '03',
    icon: Layers,
    title: 'Compounding technical debt in your stack of plug-ins',
    body: 'Each new integration between your five SaaS tools is fragile. One vendor changes its API, and three things break downstream. You are now doing systems integration work without actually owning the system.',
  },
];

const goodReasons = [
  {
    icon: Workflow,
    title: 'Your workflow is the product',
    body: 'If the way you operate — not just what you sell — is your competitive advantage, a generic tool will always sand down the edges that make you different.',
  },
  {
    icon: Coins,
    title: 'You are paying a "translation tax"',
    body: 'If staff spend real, countable hours each week moving data between disconnected tools, that labour cost can often exceed what custom development would have cost when amortized over a few years.',
  },
  {
    icon: Ruler,
    title: 'You have hit a scale wall',
    body: 'Off-the-shelf tools are usually priced and designed for a specific band of company size. Growing past that band exposes rigid limits: user caps, workflow limits, throttled APIs, and restrictions that no plan upgrade can fix.',
  },
  {
    icon: Shield,
    title: 'Data ownership and integration have become liabilities',
    body: "If your customer or operational data is fragmented across five vendors' databases, you don't just have an inefficiency problem. You have a risk and compliance problem.",
  },
  {
    icon: Lightbulb,
    title: "You need to build something that doesn't exist yet",
    body: 'Sometimes there is genuinely no market solution because your business model, geography, or regulatory environment is unusual enough that nobody has built for it.',
  },
];

const stats = [
  { value: '~5%', label: 'Higher customer retention' },
  { value: '25–95%', label: 'Profitability gains' },
  { value: '120–300%', label: 'Typical ROI over 2–3 years' },
];

const costs = [
  { tier: 'Small business', range: '$50K – $150K' },
  { tier: 'Mid-market', range: '$150K – $500K' },
  { tier: 'Enterprise', range: '$500K+' },
];

export default function CustomWebApplicationTiming() {
  return (
    <article className="max-w-3xl mx-auto space-y-14">

      {/* ============ OPENING ============ */}
      <div className="space-y-6">
        <p className="text-lg text-gray-700 leading-relaxed">
          All founders eventually sit down, place their laptops aside, look at a
          spreadsheet filled with quotes from agencies, and ask the same
          question:
        </p>

        <p className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug border-l-4 border-red-600 pl-6 py-2">
          Do we really need to build this ourselves?
        </p>

        <p className="text-lg text-gray-700 leading-relaxed">
          It&apos;s actually a good question.
        </p>

        <p className="text-gray-600 leading-relaxed">
          And most of the articles written to answer it give you the same tired
          checklist. They tell you what custom software is good for without ever
          grappling with why so many businesses get the decision wrong, what it
          actually costs them when they wait too long, or what happens when they
          move too soon.
        </p>

        <p className="text-lg font-medium text-gray-900">
          Let&apos;s go deeper.
        </p>
      </div>

      {/* ============ CASE STUDY ============ */}
      <section className="bg-gray-50 border border-gray-100 rounded-3xl p-8 md:p-10 space-y-6">
        <p className="text-xs font-semibold text-red-600 uppercase tracking-wider">
          A Story Worth Reading
        </p>

        <p className="text-gray-700 leading-relaxed">
          A logistics company called <strong className="text-gray-900">Meridian Freight</strong>{' '}
          spent over three years running its entire dispatch operation through a
          patchwork of Google Sheets, a $40-a-month SaaS tracker, and a WhatsApp
          group.
        </p>

        <p className="text-gray-700 leading-relaxed">
          It worked when they had 12 trucks.
        </p>

        <p className="text-gray-700 leading-relaxed">
          By the time they reached 40 trucks, dispatchers were spending two
          hours a day reconciling numbers between systems. At 90 trucks, the
          company had hired a full-time employee whose only job was fixing
          spreadsheet errors that were causing missed deliveries.
        </p>

        <p className="text-gray-700 leading-relaxed">
          By the time they finally commissioned a custom dispatch and routing
          platform, they had already lost an estimated{' '}
          <strong className="text-red-600">$600,000</strong> in inefficiency
          over eighteen months.
        </p>

        <div className="border-t border-gray-200 pt-6">
          <p className="text-gray-600 leading-relaxed italic">
            That money never showed up as a single dramatic loss. It was a slow
            bleed that nobody flagged as urgent enough to fix.
          </p>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-2xl p-5">
          <p className="text-gray-800 leading-relaxed">
            Meridian didn&apos;t wait too long because they were cheap.
          </p>
          <p className="text-gray-700 leading-relaxed mt-2">
            They waited because{' '}
            <strong>nobody could tell them when the tipping point had arrived</strong>.
            There was no dashboard. No alarm bell. The pain arrived in small,
            absorbable doses until it wasn&apos;t small anymore.
          </p>
        </div>
      </section>

      {/* ============ THE GAP ============ */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">
          The Gap
        </h2>

        <p className="text-gray-600 leading-relaxed text-lg">
          Most content about building custom software frames this as a binary
          decision made at a single point in time: you either need custom
          software or you don&apos;t.
        </p>

        <p className="text-gray-700 leading-relaxed">
          That framing is wrong, and it&apos;s why so many businesses get burned.
        </p>

        <div className="bg-red-50 border border-red-100 rounded-2xl p-6 text-center">
          <p className="text-sm font-semibold text-red-900 uppercase tracking-wider mb-2">
            The real decision isn&apos;t binary
          </p>
          <p className="text-2xl font-bold text-gray-900">
            It&apos;s a trajectory problem.
          </p>
        </div>

        <p className="text-gray-600 leading-relaxed">
          Off-the-shelf tools and no-code stacks aren&apos;t bad. They&apos;re
          often exactly right at the start.
        </p>

        <p className="text-gray-600 leading-relaxed">
          The mistake businesses make is{' '}
          <strong className="text-gray-900">
            failing to track the rate at which their workarounds are degrading
          </strong>
          .
        </p>

        <p className="text-gray-600 leading-relaxed">
          Three symptoms tend to show up in sequence, long before anyone calls
          it a software problem.
        </p>
      </section>

      {/* ============ THREE SYMPTOMS ============ */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">
          Three Symptoms to Watch For
        </h2>

        <div className="space-y-5">
          {symptoms.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.number}
                className="relative bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-4 right-6 text-[4rem] font-bold leading-none text-gray-50 select-none"
                >
                  {s.number}
                </span>

                <div className="relative z-10 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-snug pr-12">
                      {s.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {s.body}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6">
          <p className="text-gray-800 leading-relaxed">
            If you already recognize one of these symptoms as a{' '}
            <strong>pattern</strong> rather than a one-off problem, you may
            already be past the point where adding another tool is the right
            answer.
          </p>
        </div>
      </section>

      {/* ============ WHEN CUSTOM MAKES SENSE ============ */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">
          When Custom Actually Makes Sense
        </h2>

        <div className="space-y-4">
          {goodReasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <div
                key={i}
                className="flex gap-4 p-5 rounded-2xl border border-gray-100 bg-white hover:border-green-200 hover:bg-green-50/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon className="w-5 h-5 text-green-700" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {reason.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ============ WHEN IT'S NOT WORTH IT ============ */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">
          When It&apos;s Genuinely Not Worth It
        </h2>

        <div className="bg-red-50 border border-red-100 rounded-3xl p-8 space-y-5">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center flex-shrink-0">
              <XCircle className="w-5 h-5 text-red-600" />
            </div>
            <p className="text-gray-800 leading-relaxed pt-2">
              <strong>Most early-stage businesses should not build custom software.</strong>
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed pl-15">
            If you&apos;re still validating whether people want what you sell,
            spending six figures on a platform is solving a problem you may not
            have yet.
          </p>

          <p className="text-gray-700 leading-relaxed pl-15">
            Off-the-shelf and low-code tools exist precisely so founders can
            test ideas cheaply before committing capital to permanence.
          </p>

          <p className="text-gray-700 leading-relaxed pl-15 italic">
            The instinct to &ldquo;just build it properly&rdquo; too early is
            its own well-documented failure mode.
          </p>
        </div>
      </section>

      {/* ============ THE DATA ============ */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-gray-900">
          The Data Backs Up Both Sides
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-gray-900 to-black text-white rounded-2xl p-6 text-center"
            >
              <p className="text-3xl md:text-4xl font-bold text-red-400 mb-2">
                {s.value}
              </p>
              <p className="text-sm text-gray-300 leading-relaxed">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <p className="text-gray-600 leading-relaxed">
          Businesses running custom software report meaningfully higher customer
          retention, with some reports citing around a{' '}
          <strong className="text-gray-900">5% increase</strong>, alongside
          profitability gains ranging from{' '}
          <strong className="text-gray-900">25% to 95%</strong> compared with
          relying purely on generic tools.
        </p>

        <p className="text-gray-600 leading-relaxed">
          For small and mid-market companies in the U.S., typical returns on
          investment in custom software are reported to fall between{' '}
          <strong className="text-gray-900">120% and 300%</strong> over two to
          three years, once both cost savings and revenue gains are accounted
          for.
        </p>

        <div className="border-t border-gray-100 pt-6">
          <p className="text-gray-600 leading-relaxed mb-6">
            But the upside comes with real numbers on the cost side too.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {costs.map((c, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-2xl p-5 text-center"
              >
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  {c.tier}
                </p>
                <p className="text-lg font-bold text-gray-900">
                  {c.range}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ THE TENSION ============ */}
      <section className="space-y-6">
        <div className="bg-gray-900 text-white rounded-3xl p-8 md:p-10 space-y-5">
          <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 text-amber-400" />
          </div>

          <p className="text-gray-300 leading-relaxed text-lg">
            That&apos;s exactly why the timing question matters so much.
          </p>

          <div className="grid md:grid-cols-2 gap-5 pt-3">
            <div className="border-l-2 border-red-500 pl-4">
              <p className="font-semibold text-white mb-2">
                Build too early
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                You&apos;re overspending on certainty you don&apos;t have yet.
              </p>
            </div>
            <div className="border-l-2 border-red-500 pl-4">
              <p className="font-semibold text-white mb-2">
                Build too late
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                You&apos;re bleeding money the way Meridian Freight did — just
                quietly enough that nobody sounds the alarm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHAT TO DO ============ */}
      <section className="space-y-6">
        <p className="text-gray-600 leading-relaxed">
          If you&apos;re the person staring at that spreadsheet of agency quotes
          right now, take a breath.
        </p>

        <p className="text-gray-600 leading-relaxed">
          This is a genuinely hard call, and the fact that you&apos;re hesitating
          is a good sign, not a bad one. It means you&apos;re not being sold on
          hype. You&apos;re trying to make a decision that actually fits your
          business.
        </p>

        <p className="text-gray-700 leading-relaxed">
          The honest answer isn&apos;t &ldquo;yes, build it&rdquo; or
          &ldquo;no, don&apos;t.&rdquo;
        </p>

        <div className="bg-gradient-to-br from-red-50 to-rose-50 border border-red-100 rounded-3xl p-8 space-y-6">
          <p className="text-sm font-semibold text-red-600 uppercase tracking-wider">
            It&apos;s this
          </p>

          <div className="space-y-4">
            {[
              'Go look for the three symptoms above in your own operation this week.',
              'Calculate the hours your team spends stitching tools together.',
              'Ask your sales lead, off the record, where the workarounds are causing the most pain.',
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-red-600 text-white flex items-center justify-center text-sm font-semibold flex-shrink-0">
                  {i + 1}
                </div>
                <p className="text-gray-700 leading-relaxed pt-1.5">
                  {step}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-red-200">
            <p className="text-gray-800 leading-relaxed mb-3">
              <strong>If the answer is vague</strong>, you have time.
            </p>
            <p className="text-gray-800 leading-relaxed">
              <strong>If the answer comes quickly and with specific examples</strong>,
              you may already be past the point where waiting is the safer
              choice.
            </p>
          </div>
        </div>
      </section>

    </article>
  );
}