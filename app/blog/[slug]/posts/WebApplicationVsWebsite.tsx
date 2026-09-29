// app/blog/[slug]/posts/WebApplicationVsWebsite.tsx

import { CheckCircle, Lightbulb, Globe, Layers } from 'lucide-react';
import Link from 'next/link';

const websiteExamples = [
  'Company websites',
  'Blogs',
  'News websites',
  'Portfolio websites',
  'School websites',
  'Church websites',
  'Restaurant websites',
  'Personal websites',
];

const webAppExamples = [
  'Online banking platforms',
  'Email services',
  'Online shopping platforms',
  'Customer relationship management systems',
  'Project management tools',
  'Online learning platforms',
  'Booking systems',
  'Payroll systems',
  'Social media platforms',
];

const websiteFeatures = [
  'Company information',
  'Services',
  'Product information',
  'Blog articles',
  'Contact details',
  'Locations',
  'Portfolios',
  'Landing pages',
];

const webAppFeatures = [
  'Customer accounts',
  'Online payments',
  'Booking systems',
  'Order tracking',
  'Personal dashboards',
  'Appointment scheduling',
  'Automated notifications',
  'User profiles',
  'Data management',
];

export default function WebApplicationVsWebsite() {
  return (
    <article className="max-w-4xl mx-auto space-y-20">
      {/* Hero Section */}
      <header className="space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 text-sm font-medium border border-red-100">
          Web Development
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            What Is a Web Application and How Is It Different from a Website?
          </h1>

          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
            <p>
              Websites and web applications may look similar because you access both through a web browser, but their purposes can be quite different.
            </p>

            <p>
              A website mainly helps people find information about you or your business. A web application helps people do something.
            </p>

            <p>
              If you are planning an online platform for your business, understanding this difference can help you communicate your needs clearly to a web developer and avoid paying for features you do not actually need.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-xl my-6">
              <p className="text-gray-700 text-sm">
                If you are weighing platforms, you may also want to compare{' '}
                <Link href="/blog/web-applications-vs-wordpress-lagos-nigeria" className="text-red-600 hover:underline font-semibold">
                  web applications against WordPress
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* What Is a Website */}
      <section className="space-y-8">
        <div className="md:flex items-start gap-5">
          <div
            aria-hidden="true"
            className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0"
          >
            <Globe className="w-7 h-7 text-blue-600" />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Is a Website?
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              A website is a collection of web pages that you access through a browser such as Google Chrome, Safari, or Firefox. Its main purpose is usually to provide information to visitors.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Lagos examples
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              A restaurant in Lekki might have a website that tells visitors about its menu, location, opening hours, contact details, and delivery options. A law firm in Ikeja might have a website explaining its services, introducing its lawyers, and providing a way for potential clients to get in touch.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Common website types
            </h3>
            <ul className="space-y-2">
              {websiteExamples.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                  <span className="w-2 h-2 rounded-full bg-red-500 mt-2"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-100 rounded-3xl p-8">
          <p className="text-gray-700 leading-relaxed">
            You can visit these websites, read the information, and move from one page to another without necessarily having an account or performing complex tasks.
          </p>
        </div>
      </section>

      {/* What Is a Web Application */}
      <section className="space-y-8">
        <div className="md:flex items-start gap-5">
          <div
            aria-hidden="true"
            className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0"
          >
            <Layers className="w-7 h-7 text-blue-600" />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Is a Web Application?
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              A web application, or web app, is a website that allows you to perform specific tasks or interact with data through your browser. Instead of simply reading information, you are actively using the platform.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              A familiar example
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              When you log into an online banking platform, you can check your balance, transfer money, pay bills, and view your transaction history. The platform processes your input and performs actions based on your requests. That makes it a web application.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm mt-4">
              You do not necessarily need to download software from an app store to use it. As long as you have a compatible device, browser, and internet connection, you can access many web applications online.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Common web app examples
            </h3>
            <ul className="space-y-2">
              {webAppExamples.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                  <span className="w-2 h-2 rounded-full bg-red-500 mt-2"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* The Difference */}
      <section className="space-y-8">
        <div className="md:flex items-start gap-5">
          <div
            aria-hidden="true"
            className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0"
          >
            <Lightbulb className="w-7 h-7 text-blue-600" />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              So, What Is the Difference?
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              The easiest way to understand the difference is to think about what you are doing on the platform.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              A website mainly gives you information.
            </h3>
            <p className="text-gray-600 leading-relaxed">
              You read about the business, learn about its services, and move from one page to another.
            </p>
          </div>

          <div className="bg-red-50 border border-red-100 rounded-3xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              A web application allows you to interact with the system and perform tasks.
            </h3>
            <p className="text-gray-600 leading-relaxed">
              You create an account, submit information, make a payment, or track an order.
            </p>
          </div>
        </div>
      </section>

      {/* Restaurant Example */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Think About a Nigerian Restaurant
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
            <div className="inline-block px-3 py-1 bg-gray-100 rounded-lg text-xs font-medium text-gray-600 mb-4">
              Website
            </div>
            <p className="text-gray-600 leading-relaxed">
              If the restaurant has a website where you can see its menu, address, pictures, and opening hours, that is primarily a website.
            </p>
          </div>

          <div className="bg-red-50 border border-red-100 rounded-3xl p-8">
            <div className="inline-block px-3 py-1 bg-white rounded-lg text-xs font-medium text-red-600 mb-4">
              Web Application
            </div>
            <p className="text-gray-600 leading-relaxed">
              But if you can create an account, select meals, add them to a cart, make a payment, track your order, and receive updates, you are interacting with a web application.
            </p>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-100 rounded-3xl p-8">
          <p className="text-gray-700 leading-relaxed">
            The same business can actually have both. Its website can introduce the business, while its web application handles online ordering.
          </p>
        </div>
      </section>

      {/* Lagos Fashion Business */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-gray-900">
          A Relatable Lagos Example
        </h2>

        <div className="space-y-6">
          <div className="p-8 rounded-3xl border border-gray-100 bg-white shadow-sm">
            <div className="inline-block px-3 py-1 bg-gray-100 rounded-lg text-xs font-medium text-gray-600 mb-4">
              Stage 1 — Website
            </div>
            <p className="text-gray-600 leading-relaxed">
              Imagine you run a fashion business in Lagos. You create a website showing your clothes, prices, business location, and contact information. Customers can browse your products and send you a WhatsApp message to place an order. That is mainly a website.
            </p>
          </div>

          <div className="p-8 rounded-3xl border border-red-100 bg-red-50 shadow-sm">
            <div className="inline-block px-3 py-1 bg-white rounded-lg text-xs font-medium text-red-600 mb-4">
              Stage 2 — Web Application
            </div>
            <p className="text-gray-600 leading-relaxed">
              Now imagine that you build a platform where customers can create accounts, choose their sizes, add clothes to a shopping cart, pay online, track their orders, and receive notifications. That has moved beyond being a simple website. You now have a web application.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8">
          <p className="text-gray-700 leading-relaxed">
            This distinction becomes particularly important as your business grows. What works when you are receiving five orders through WhatsApp may become difficult to manage when you are handling hundreds of orders every month.
          </p>
          <p className="text-gray-600 text-sm mt-3">
            For a deeper look at how platforms evolve, see our guide on{' '}
            <Link href="/blog/how-to-turn-an-idea-into-a-web-application-lagos-entrepreneurs" className="text-red-600 hover:underline">
              turning an idea into a web application
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Online Banking */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Another Example: Online Banking
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              The bank's website
            </h3>
            <p className="text-gray-600 leading-relaxed">
              The bank may have a website where you can read about its different account types, locate branches, and learn about its services.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              The banking platform
            </h3>
            <p className="text-gray-600 leading-relaxed">
              But when you log into the banking platform to transfer ₦50,000, check your account balance, or pay your electricity bill, you are using a web application. The system has to process your request, communicate with its database, and return information specifically related to your account.
            </p>
          </div>
        </div>

        <div className="bg-red-50 border border-red-100 rounded-3xl p-8">
          <p className="text-gray-700 leading-relaxed">
            That is much more than simply displaying a webpage.
          </p>
        </div>
      </section>

      {/* Can a Website Become a Web App */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Can a Website Become a Web Application?
        </h2>

        <p className="text-lg text-gray-600 leading-relaxed">
          Yes. In fact, many modern websites combine both. A business may start with a simple website that provides information. As the business grows, it may add features such as:
        </p>

        <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8">
          <div className="flex flex-wrap gap-2">
            {webAppFeatures.map((feature, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm text-gray-600"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Which One Does Your Business Need */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Which One Does Your Business Need?
        </h2>

        <p className="text-lg text-gray-600 leading-relaxed">
          It depends on what you want your online platform to achieve.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              A website may be enough if:
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Your main goal is to tell people about your business. For example, if you are a consultant in Lagos and simply want potential clients to learn about your services, read your articles, and contact you, a well-designed website could do the job.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              You may need a web application if:
            </h3>
            <p className="text-gray-600 leading-relaxed">
              You want customers to log in, make bookings, place orders, make payments, manage their accounts, or interact with your system.
            </p>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-100 rounded-3xl p-8">
          <p className="text-gray-700 leading-relaxed">
            Before spending money on development, it is worth being clear about the problem you are trying to solve. You do not need to build a complicated web application simply because it sounds more advanced. Sometimes, a straightforward website with the right features is enough.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Website vs Web Application
        </h2>

        <div className="overflow-x-auto rounded-3xl border border-gray-100">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th className="px-6 py-4 font-semibold">Website</th>
                <th className="px-6 py-4 font-semibold">Web Application</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {[
                ['Primarily provides information', 'Primarily enables users to perform tasks'],
                ['Usually has simpler interactions', 'Usually has more interactive features'],
                ['May not require an account', 'Often requires users to log in'],
                ['Focuses on presenting content', 'Focuses on functionality and user interaction'],
                ['Example: Company information page', 'Example: Online customer dashboard'],
              ].map((row, i) => (
                <tr key={i} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 text-gray-600">{row[0]}</td>
                  <td className="px-6 py-4 text-gray-600">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Conclusion */}
      <section className="bg-gradient-to-br from-red-50 to-rose-50 border border-red-100 rounded-[2rem] p-10 md:p-14">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Conclusion
          </h2>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Websites and web applications may look similar because you access both through a web browser, but their purposes can be quite different.
            </p>

            <p>
              A website mainly helps people find information about you or your business. A web application helps people do something.
            </p>

            <p>
              Whether you are running a restaurant in Yaba, a fashion brand in Lekki, a consulting business in Ikeja, or an online store serving customers across Lagos, start with the needs of your users. The technology should serve the business, not the other way around.
            </p>

            <p className="text-gray-600 text-sm">
              If you decide you need a web application, our guide on{' '}
              <Link href="/blog/web-application-development-company-in-nigeria" className="text-red-600 hover:underline">
                web application development in Nigeria
              </Link>{' '}
              covers what to expect from a project.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 rounded-[2rem] p-10 md:p-14 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Need a Web Application for Your Business?
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            Whether you need an online booking system, customer portal, e-commerce platform, or customised web application, we can help bring your idea to life.
          </p>

          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-all duration-300">
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Related Articles */}
      <section className="border-t border-gray-200 pt-12">
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
          You Might Also Like
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/blog/web-applications-vs-wordpress-lagos-nigeria" className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition">
            <div className="h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop"
                alt="Web applications vs WordPress"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-6">
              <h4 className="font-bold text-gray-900 group-hover:text-red-600 transition">
                Web Applications vs WordPress
              </h4>
              <p className="text-gray-500 text-sm mt-2">Should you build with WordPress or invest in a custom web application? A decision guide for Lagos businesses.</p>
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