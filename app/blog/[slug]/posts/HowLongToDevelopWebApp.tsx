// app/blog/[slug]/posts/HowLongToDevelopWebApp.tsx

import { CheckCircle, Lightbulb, Clock, Users, TestTube, Server, Layers, MessageSquare } from 'lucide-react';
import Link from 'next/link';

const timelineEstimates = [
  {
    label: 'Simple web application',
    duration: '4 to 8 weeks',
    description:
      'A focused customer portal with registration, login, and a few basic features.',
    tone: 'green',
  },
  {
    label: 'Medium-sized application',
    duration: '2 to 4 months',
    description:
      'More features, multiple user types, integrations, and admin dashboards.',
    tone: 'amber',
  },
  {
    label: 'Complex application',
    duration: '4 to 9 months or longer',
    description:
      'Financial transactions, advanced dashboards, third-party integrations, or high security requirements.',
    tone: 'red',
  },
];

const factors = [
  {
    icon: Layers,
    title: 'The Type of Application Matters',
    content:
      'A simple customer portal with registration, login, and a few basic features may take only a few weeks. A Lagos restaurant developing an online ordering platform may need menus, customer accounts, order management, payment processing, and notifications. A logistics company may require delivery management, dispatch riders, location tracking, and admin dashboards. A fintech platform could be even more complex because it may involve payments, transaction records, identity verification, security measures, and regulatory considerations.',
    points: [
      'The more complicated the business process behind the application, the more time development is likely to require.',
    ],
  },
  {
    icon: CheckCircle,
    title: 'The Number of Features',
    content:
      'It is easy to underestimate how much time individual features can add to a project. A client might say "I just want a simple platform," but the requirements could include user registration, profiles, payment integration, messaging, notifications, search, filtering, reports, admin controls, and multiple types of users.',
    points: [
      'Each feature has to be designed, developed, and tested.',
      'Adding a payment option is not simply placing a "Pay Now" button on a page.',
      'Developers need a detailed list of requirements before providing a reliable estimate.',
    ],
  },
  {
    icon: Lightbulb,
    title: 'UI and UX Design',
    content:
      'Development does not necessarily begin with writing code. Before the application is built, the team needs to determine how it will look and how users will navigate it. This can involve creating wireframes, user journeys, and interface designs.',
    points: [
      'For a Nigerian business, a mobile-first approach is particularly important.',
      'Many customers will access an application primarily through their smartphones.',
      'Depending on the size of the project, the design stage can take anywhere from a few days to several weeks.',
      'A well-planned design process can save time later because developers have a clearer blueprint.',
    ],
  },
  {
    icon: Server,
    title: 'The Development Stage',
    content:
      'Once the requirements and designs are ready, the actual development begins. This usually involves both the frontend and the backend.',
    points: [
      'The frontend is what users see and interact with.',
      'The backend handles databases, accounts, transactions, and underlying logic.',
      'Developers may also need to build an admin dashboard for managing users, products, orders, and payments.',
      'A single developer on the entire project may require more time than a team working in parallel.',
    ],
  },
  {
    icon: Layers,
    title: 'Third-Party Integrations Can Add Time',
    content:
      'Many modern web applications depend on other services to perform certain functions. For businesses in Lagos and across Nigeria, payment integration is a common example.',
    points: [
      'An application may need to connect with Paystack or Flutterwave so customers can pay online.',
      'There may also be integrations for SMS, email, maps, analytics, CRM, or other business tools.',
      'Each integration has to be configured and tested properly.',
      'Several third-party services can significantly affect the development timeline.',
    ],
  },
  {
    icon: TestTube,
    title: 'Testing Cannot Be Skipped',
    content:
      'One of the biggest mistakes a business can make is assuming that development is finished as soon as the application looks complete. It still needs to be tested.',
    points: [
      'Check whether users can register and log in successfully.',
      'Check whether forms work and payments are processed correctly.',
      'Check whether information is saved properly and works across browsers and devices.',
      'Security and performance should also be considered.',
      'Testing and fixing identified issues can take anywhere from one to several weeks.',
    ],
  },
  {
    icon: MessageSquare,
    title: 'Client Feedback Can Affect the Timeline',
    content:
      'Development is a collaborative process, so the client\'s involvement can affect how quickly a project moves. Developers may need the client to provide content, branding materials, business information, product details, account access, or feedback on designs.',
    points: [
      'If these things are delayed, development can also be delayed.',
      'There is a difference between a small revision and an entirely new feature halfway through.',
      'Changing the colour of a button is very different from adding a completely new customer dashboard.',
      'Having a clear project scope from the beginning is important.',
    ],
  },
  {
    icon: Server,
    title: 'Deployment Is Not the Same as Development',
    content:
      'Even after the application has been built and tested, there is still the process of getting it ready for users.',
    points: [
      'Setting up hosting and connecting the domain.',
      'Configuring databases and implementing security certificates.',
      'Deploying the application and setting up backups and monitoring.',
      'Once live, there may also be bugs that only become noticeable with real users.',
      'Businesses should think beyond the launch date and consider ongoing maintenance and support.',
    ],
  },
];

const toneClasses: Record<string, { bg: string; border: string; text: string }> = {
  green: {
    bg: 'bg-green-50',
    border: 'border-green-100',
    text: 'text-green-700',
  },
  amber: {
    bg: 'bg-amber-50',
    border: 'border-amber-100',
    text: 'text-amber-700',
  },
  red: {
    bg: 'bg-red-50',
    border: 'border-red-100',
    text: 'text-red-700',
  },
};

export default function HowLongToDevelopWebApp() {
  return (
    <article className="max-w-4xl mx-auto space-y-20">
      {/* Hero Section */}
      <header className="space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 text-sm font-medium border border-red-100">
          Web Development
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            How Long Does It Take to Develop a Web Application?
          </h1>

          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
            <p>
              If you are a business owner in Lagos thinking about building a web application, one of the first questions you will probably ask a developer is, <strong>"How long will it take?"</strong>
            </p>

            <p>
              It is a fair question. You may already have a business idea, customers waiting to use the platform, or a deadline you want to meet. You may even have seen developers advertising that they can build an application in a matter of days.
            </p>

            <p>
              The reality, however, is that there is no single timeline for developing a web application.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-xl my-6">
              <p className="text-gray-700 text-sm">
                If you are still defining what you need, start with our guide on{' '}
                <Link href="/blog/how-to-turn-an-idea-into-a-web-application-lagos-entrepreneurs" className="text-red-600 hover:underline font-semibold">
                  how to turn an idea into a web application
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Quick Estimates */}
      <section className="space-y-8">
        <div className="md:flex items-start gap-5">
          <div
            aria-hidden="true"
            className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0"
          >
            <Clock className="w-7 h-7 text-blue-600" />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              A Quick Reality Check
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              The timeline depends largely on what you want to build. These broad ranges give you a starting point — not a promise.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {timelineEstimates.map((item, i) => {
            const tone = toneClasses[item.tone];
            return (
              <div
                key={i}
                className={`${tone.bg} ${tone.border} border rounded-3xl p-6 shadow-sm`}
              >
                <p className={`text-xs font-semibold uppercase tracking-wide mb-3 ${tone.text}`}>
                  {item.label}
                </p>
                <p className="text-2xl font-bold text-gray-900 mb-3">
                  {item.duration}
                </p>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8">
          <p className="text-gray-700 leading-relaxed">
            These are broad estimates rather than promises. The actual timeline will depend on the application's features, design requirements, integrations, development team, testing requirements, and how quickly decisions and feedback are provided.
          </p>
        </div>
      </section>

      {/* What Is a Web Application */}
      <section className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Is a Web Application?
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Before discussing timelines, it helps to understand what a web application actually is. A website mainly provides information to visitors. A web application, on the other hand, allows users to interact with the platform and perform specific activities.
          </p>
        </div>

        <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8">
          <p className="font-medium text-gray-900 mb-4">Examples:</p>
          <ul className="space-y-3">
            {[
              'An online booking platform where customers can create accounts and schedule appointments.',
              'A school portal where students can check results.',
              'An e-commerce platform where customers can make purchases.',
              'A business dashboard where staff can manage customers and transactions.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-600">
                <span className="w-2 h-2 rounded-full bg-red-500 mt-2"></span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-gray-600 text-sm mt-4">
            These applications require considerably more planning and development than a basic business website. For a full comparison, read{' '}
            <Link href="/blog/what-is-a-web-application-different-from-a-website" className="text-red-600 hover:underline">
              what a web application is and how it differs from a website
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Factors */}
      <section className="space-y-12">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Eight Factors That Affect Development Time
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Every project is different, but these are the factors that consistently move the timeline.
          </p>
        </div>

        <div className="space-y-12">
          {factors.map((factor, i) => {
            const Icon = factor.icon;
            return (
              <div
                key={i}
                className="md:flex gap-6 p-8 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div
                  aria-hidden="true"
                  className="w-10 h-10 bg-red-100 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <Icon className="w-5 h-5 text-red-600" />
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {i + 1}. {factor.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-lg">
                    {factor.content}
                  </p>

                  {factor.points && (
                    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                      <ul className="space-y-3">
                        {factor.points.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-600">
                            <span className="w-2 h-2 rounded-full bg-red-500 mt-2"></span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-amber-50 border border-amber-100 rounded-3xl p-8">
          <p className="text-gray-700">
            If your application handles payments, you may also want to read how we think about{' '}
            <Link href="/blog/web-application-development-company-in-nigeria" className="text-red-600 hover:underline font-semibold">
              payment integration and real-world failure states
            </Link>{' '}
            in Nigerian web applications.
          </p>
        </div>
      </section>

      {/* What Lagos Businesses Should Focus On */}
      <section className="space-y-8">
        <div className="md:flex items-start gap-5">
          <div
            aria-hidden="true"
            className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0"
          >
            <Users className="w-7 h-7 text-blue-600" />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Lagos Businesses Should Focus On
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              For businesses in Lagos, speed is understandably important. The market is competitive, and business owners often want to launch an idea before someone else does.
            </p>
          </div>
        </div>

        <div className="bg-red-50 border border-red-100 rounded-3xl p-8">
          <p className="text-gray-700 leading-relaxed mb-4">
            However, the fastest developer is not necessarily the best developer. An application that is launched quickly but constantly crashes, processes payments incorrectly, exposes customer information, or provides a frustrating user experience can ultimately cost the business more.
          </p>
          <p className="text-gray-700 leading-relaxed">
            It is better to establish a realistic timeline and build the application properly.
          </p>
        </div>

        <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8">
          <p className="font-medium text-gray-900 mb-4">
            Before development begins, a business should have a clear understanding of:
          </p>
          <ul className="space-y-3">
            {[
              'What the application is supposed to accomplish.',
              'Who will use it.',
              'Which features are essential.',
              'What integrations are required.',
              'What the expected budget and timeline are.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-600">
                <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Conclusion */}
      <section className="bg-gradient-to-br from-red-50 to-rose-50 border border-red-100 rounded-[2rem] p-10 md:p-14">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Final Thoughts
          </h2>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              So, how long does it take to develop a web application? The honest answer is: <strong>it depends on what you are building.</strong>
            </p>

            <p>
              A relatively simple application might be ready in a few weeks, while a sophisticated platform could take several months.
            </p>

            <p>
              The important thing is not to focus solely on getting the application launched as quickly as possible. The goal should be to build something that is reliable, secure, easy to use, and capable of supporting the business as it grows.
            </p>

            <p>
              For a Lagos business, a realistic development timeline is an investment rather than a delay.
            </p>

            <p className="font-semibold text-gray-900">
              Fast is good, but fast and broken is expensive.
            </p>

            <p className="text-gray-600 text-sm">
              If you want to understand what shapes the scope in the first place, read{' '}
              <Link href="/blog/web-applications-vs-wordpress-lagos-nigeria" className="text-red-600 hover:underline">
                web applications vs WordPress
              </Link>{' '}
              or{' '}
              <Link href="/blog/web-application-development-company-in-nigeria" className="text-red-600 hover:underline">
                what to expect from a Nigerian development company
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 rounded-[2rem] p-10 md:p-14 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Get a Realistic Timeline for Your Project
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            Tell us what you are building, who will use it, and what integrations you need. We will help you scope a timeline that reflects reality, not marketing.
          </p>

          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-all duration-300">
            Start the Conversation
          </Link>
        </div>
      </section>

      {/* Related Articles */}
      <section className="border-t border-gray-200 pt-12">
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
          You Might Also Like
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/blog/how-to-turn-an-idea-into-a-web-application-lagos-entrepreneurs" className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition">
            <div className="h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                alt="Turn an idea into a web application"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-6">
              <h4 className="font-bold text-gray-900 group-hover:text-red-600 transition">
                How to Turn an Idea Into a Web Application
              </h4>
              <p className="text-gray-500 text-sm mt-2">A practical roadmap for founders and small business owners in Lagos—from validating an idea to launching.</p>
            </div>
          </Link>
          <Link href="/blog/web-application-development-company-in-nigeria" className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition">
            <div className="h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                alt="Web application development company in Nigeria"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-6">
              <h4 className="font-bold text-gray-900 group-hover:text-red-600 transition">
                Web Application Development Company in Nigeria
              </h4>
              <p className="text-gray-500 text-sm mt-2">Web applications built around your business, your users, and the realities of operating in Nigeria.</p>
            </div>
          </Link>
        </div>
      </section>
    </article>
  );
}