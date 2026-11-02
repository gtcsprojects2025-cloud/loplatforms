// app/web-application-development-company-in-nigeria/PillarClient.tsx
'use client';

import Link from 'next/link';
import {
  CheckCircle,
  ArrowRight,
  Layers,
  Server,
  ShieldCheck,
  Clock,
  Users,
  LayoutDashboard,
  Wrench,
  Code2,
  HelpCircle,
  TrendingUp,
} from 'lucide-react';

import TableOfContents from './TableOfContents';
import Section from './Section';
import PillarSchema from './PillarSchema';

export default function PillarClient() {
  return (
    <div className="bg-white min-h-screen pt-20">
      <PillarSchema />

      {/* Hero */}
      <section className="relative bg-gray-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/75 to-black/90" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-32">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-400">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li>/</li>
              <li className="text-white">Web Application Development</li>
            </ol>
          </nav>

          <p className="inline-block px-4 py-1.5 rounded-full bg-red-600/20 border border-red-500/30 text-red-300 text-xs font-medium tracking-widest uppercase mb-6">
            Pillar Guide
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-6 max-w-4xl">
            Web Application Development Company in Nigeria
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed mb-10">
            Web applications built around your business, your users, and the realities of operating in Nigeria. A good web application should do more than look professional on a phone — it should make your business easier to run.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-semibold transition-all duration-300"
            >
              Start a Project <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#when-you-need-one"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold transition-all duration-300"
            >
              Read the Guide
            </a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="prose prose-lg max-w-3xl text-gray-600 leading-relaxed space-y-6">
          <p>
            Whether you need a customer portal, business dashboard, e-commerce platform, booking system, SaaS product, internal workflow application, marketplace, or another custom digital system, the work starts with understanding what the application needs to accomplish — not simply deciding which technology to use.
          </p>

          <p>
            This matters even more when building for Nigerian users. Your customers may access your application from mobile devices and variable network conditions. Your business may depend on local payment services, WhatsApp, SMS, accounting software, logistics providers, or other third-party systems. Your application may also handle customer information that needs to be managed responsibly.
          </p>

          <p className="text-gray-900 font-medium">
            So web application development is not simply about writing code. It is about building a system that works in the environment where your business actually operates.
          </p>
        </div>
      </section>

      {/* Main body: TOC + content */}
      <div className="max-w-6xl mx-auto px-6 pb-24 grid lg:grid-cols-12 gap-12">
        <aside className="lg:col-span-3">
          <TableOfContents />
        </aside>

        <main className="lg:col-span-9 space-y-24">
          {/* ============ Section 1: When Does a Business Need One ============ */}
          <Section
            id="when-you-need-one"
            eyebrow="Section 01"
            title="When Does a Business Need a Web Application?"
            intro="You may not need a web application because you want to add another piece of technology to your business. You may need one because your current way of working has stopped being practical."
          >
            <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8">
              <ul className="space-y-3">
                {[
                  'Your staff repeatedly enter the same information into different systems.',
                  'Customers have to call or message your team for information they should access themselves.',
                  'Important business processes are managed through spreadsheets.',
                  'Different departments work with disconnected tools.',
                  'Payments, orders, or applications require manual reconciliation.',
                  'Managers lack a reliable view of what is happening across the business.',
                  'Your customers need accounts, dashboards, or personalised information.',
                  'You need approvals, notifications, or automated workflows.',
                  'Your existing software forces your business to work around it.',
                  'You have an idea for a digital product that could become a SaaS platform or marketplace.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-50 border border-red-100 rounded-3xl p-8">
              <p className="text-gray-700 leading-relaxed mb-3">
                A web application can bring these processes into one system. Instead of moving information between spreadsheets, emails, WhatsApp messages, and separate applications, the right system can give users a structured way to perform their tasks and give the business a central source of information.
              </p>
              <p className="text-gray-900 font-medium">
                The important question is not simply &ldquo;Do we need a website?&rdquo; It is: <strong>&ldquo;What does our business need users and staff to be able to do?&rdquo;</strong>
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="/blog/how-to-turn-an-idea-into-a-web-application-lagos-entrepreneurs"
                className="group flex items-center justify-between p-5 rounded-2xl border border-gray-200 hover:border-red-200 hover:bg-red-50/40 transition"
              >
                <span className="text-sm font-medium text-gray-800 group-hover:text-red-700">
                  Turning an idea into a web application
                </span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-red-600 group-hover:translate-x-1 transition" />
              </Link>
              <Link
                href="/blog/how-long-does-it-take-to-develop-a-web-application"
                className="group flex items-center justify-between p-5 rounded-2xl border border-gray-200 hover:border-red-200 hover:bg-red-50/40 transition"
              >
                <span className="text-sm font-medium text-gray-800 group-hover:text-red-700">
                  How long development takes
                </span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-red-600 group-hover:translate-x-1 transition" />
              </Link>
            </div>
          </Section>

          {/* ============ Section 2: Website vs Web Application ============ */}
          <Section
            id="website-vs-web-app"
            eyebrow="Section 02"
            title="Website vs Web Application: What's the Difference?"
            intro="A website and a web application can look similar in a browser, but they serve very different purposes."
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-3xl p-8">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  A conventional website
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Primarily designed to provide information.
                </p>
                <ul className="space-y-2">
                  {[
                    'Company information',
                    'Services',
                    'Product information',
                    'Blog articles',
                    'Contact details',
                    'Locations',
                    'Portfolios',
                    'Landing pages',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-50 border border-red-100 rounded-3xl p-8">
                <p className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-3">
                  A web application
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Built around interaction, data, and business logic.
                </p>
                <ul className="space-y-2">
                  {[
                    'Create an account',
                    'Log in',
                    'Submit information',
                    'Make payments',
                    'Manage records',
                    'Track orders',
                    'Access personalised dashboards',
                    'Complete workflows',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gray-900 text-white rounded-3xl p-8 md:p-10">
              <p className="text-xl md:text-2xl font-medium leading-relaxed">
                A website tells people about your business. A web application lets people <span className="text-red-400">do something</span> with your business.
              </p>
            </div>

            <p className="text-gray-600 leading-relaxed">
              If customers need to log in, employees need different permissions, transactions need to be processed, records need to be created and updated, or business workflows need to be automated, you are likely dealing with a web application rather than a simple website. And the complexity can grow quickly: a customer portal with authentication and a few workflows is very different from a multi-vendor marketplace handling payments, inventory, delivery, notifications, reporting, and several categories of users.
            </p>

            <div className="bg-amber-50 border border-amber-100 rounded-3xl p-6">
              <p className="text-gray-700 text-sm">
                For a full comparison, read{' '}
                <Link href="/blog/what-is-a-web-application-different-from-a-website" className="text-red-600 hover:underline font-semibold">
                  what a web application is and how it differs from a website
                </Link>
                {' '}and{' '}
                <Link href="/blog/web-applications-vs-wordpress-lagos-nigeria" className="text-red-600 hover:underline font-semibold">
                  web applications vs WordPress
                </Link>
                .
              </p>
            </div>
          </Section>

          {/* ============ Section 3: What We Build ============ */}
          <Section
            id="what-we-build"
            eyebrow="Section 03"
            title="What We Can Build"
            intro="Web applications can support almost any process that can be represented digitally. The right approach depends on your users, workflows, data, and business requirements."
          >
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Users,
                  title: 'Customer & Client Portals',
                  desc: 'Give customers a secure place to interact with your business without having to contact your staff for every request.',
                  items: ['Manage profiles', 'Submit requests', 'View account info', 'Make payments', 'Track progress', 'Download documents'],
                },
                {
                  icon: LayoutDashboard,
                  title: 'Business Dashboards',
                  desc: 'Turn operational information into something managers and teams can actually use.',
                  items: ['Sales info', 'Customer records', 'Inventory', 'Financial data', 'Operational metrics', 'Reports'],
                },
                {
                  icon: Wrench,
                  title: 'Internal Business Applications',
                  desc: 'If your business relies heavily on manual processes, a custom application can bring them into one system.',
                  items: ['Approvals', 'Employee portals', 'Inventory', 'Document management', 'Workflow automation', 'Internal CRM'],
                },
                {
                  icon: Layers,
                  title: 'SaaS Platforms',
                  desc: 'If you have an idea for software multiple customers could subscribe to, we can turn the concept into a product.',
                  items: ['User accounts', 'Subscriptions', 'Permissions', 'Billing', 'Analytics', 'Infrastructure'],
                },
                {
                  icon: TrendingUp,
                  title: 'E-commerce Applications',
                  desc: 'Modern e-commerce involves more than displaying products and accepting payments.',
                  items: ['Customers', 'Products', 'Inventory', 'Orders', 'Delivery', 'Refunds'],
                },
                {
                  icon: Clock,
                  title: 'Booking & Reservation Systems',
                  desc: 'For businesses that need customers to schedule services, appointments, or resources online.',
                  items: ['Availability', 'User accounts', 'Booking flows', 'Payments', 'Notifications', 'Admin'],
                },
                {
                  icon: Layers,
                  title: 'Marketplaces',
                  desc: 'A marketplace may need different systems for buyers, sellers, admins, and sometimes logistics partners.',
                  items: ['Accounts', 'Listings', 'Search', 'Transactions', 'Commissions', 'Reviews'],
                },
                {
                  icon: Code2,
                  title: 'Industry-Specific Platforms',
                  desc: "Sometimes your process doesn't fit a category. That's where custom development becomes useful.",
                  items: ['Designed around your workflow', 'No forced process changes', 'Built for how your team really works'],
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm mb-4">
                      {item.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.items.map((it, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 bg-gray-50 border border-gray-100 rounded-lg text-xs text-gray-600"
                        >
                          {it}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </Section>

          {/* ============ Section 4: Nigerian Market ============ */}
          <Section
            id="nigerian-market"
            eyebrow="Section 04"
            title="Building Web Applications for the Nigerian Market"
            intro="A web application can function correctly from a developer's perspective and still provide a poor experience for its users. This is particularly important in Nigeria."
          >
            <p className="text-gray-600 leading-relaxed">
              GSMA research shows that although mobile network coverage has expanded substantially, a large proportion of Nigerians remain offline, while affordability, smartphone ownership, and other barriers continue to affect mobile internet adoption. That means <strong>&ldquo;mobile-friendly&rdquo; is only the starting point.</strong>
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'The Devices People Use',
                  content:
                    'An application designed and tested only on powerful modern devices may behave very differently on lower-specification smartphones.',
                },
                {
                  title: 'Connectivity',
                  content:
                    'Users may experience slower or inconsistent connections. Performance can determine whether someone completes a form or abandons the application.',
                },
                {
                  title: 'Data Consumption',
                  content:
                    'Large images, unnecessary JavaScript, and inefficient API requests can make an application unnecessarily expensive or frustrating to use.',
                },
                {
                  title: 'Failure States',
                  content:
                    'What happens if the connection disappears mid-form? What if a payment request takes longer than expected? What if the user refreshes?',
                },
                {
                  title: 'Mobile-First Workflows',
                  content:
                    'The most important actions should remain easy to perform on smaller screens — thinking about the actual task, not just shrinking a desktop interface.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-2xl bg-red-100 flex items-center justify-center mb-4">
                    <CheckCircle className="w-5 h-5 text-red-600" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          {/* ============ Section 5: Performance ============ */}
          <Section
            id="performance"
            eyebrow="Section 05"
            title="Performance Is Part of the Product"
            intro="A web application isn't fast because someone has added the word 'fast' to the requirements document. Performance is the result of decisions made throughout the application."
          >
            <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8">
              <p className="font-medium text-gray-900 mb-4">Depending on the project, that can involve:</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'Efficient front-end code',
                  'Optimised images and assets',
                  'Caching',
                  'Efficient database queries',
                  'API optimisation',
                  'Sensible loading strategies',
                  'Minimising unnecessary network requests',
                  'Appropriate infrastructure',
                  'Performance monitoring',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2"></span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              The goal is not to apply every optimisation technique to every project, but to understand <strong>how your users access the application and where performance actually matters</strong>. For a Nigerian business, that may mean paying particular attention to mobile devices, bandwidth, and unreliable connections.
            </p>
          </Section>
        </main>
      </div>
    </div>
  );
}