// app/blog/[slug]/posts/OttawaPublishersReject.tsx

import { CheckCircle, Lightbulb, BookOpen, FileText } from 'lucide-react';
import Link from 'next/link';

const reasons = [
  {
    title: 'The Manuscript Does Not Fit the Publisher\'s Catalogue',
    content:
      'One of the most common reasons a manuscript gets rejected is simply that it is not a good fit. Publishers are not looking for every type of book. Each publishing house develops a catalogue with a particular identity.',
    detail:
      'An excellent manuscript can still be rejected. For example, a commercial romance novel submitted to a publisher whose catalogue focuses primarily on academic books may be beautifully written, but the publisher may have no editorial, marketing, or distribution structure for that type of work.',
    points: [
      'Research a publisher before sending your work.',
      'Look at recently published titles to see what they actually publish.',
      'Check that your proposal corresponds to their mandate and publishing programme.',
    ],
  },
  {
    title: 'The Manuscript Is Not Ready',
    content:
      'Another major reason for rejection is that the manuscript simply needs more work. Writing a book is different from completing a book.',
    detail:
      'A manuscript can have an interesting premise and strong characters while still suffering from structural problems, weak pacing, repetition, grammatical errors, inconsistent character development, or an unsatisfying conclusion.',
    points: [
      'Publishers do not expect perfection, but there is a difference between polishing and extensive rewriting.',
      'If accepting your book would require completely restructuring it, the project may be seen as not viable.',
      'Being passionate about a story is not the same as being ready to publish it.',
    ],
  },
  {
    title: 'The Concept Is Not Distinctive Enough',
    content:
      'Publishing is highly competitive, and publishers receive manuscripts built around familiar ideas every year.',
    detail:
      'There is nothing inherently wrong with writing about love, family, grief, ambition, identity, relationships, crime, or personal transformation. The challenge is approaching a familiar subject from a distinctive perspective.',
    points: [
      'What makes this book different?',
      'Why does this story need to exist?',
      'What does it offer readers that similar books do not?',
      'Why should the publisher invest resources in this particular manuscript?',
    ],
  },
  {
    title: 'The Intended Audience Is Unclear',
    content:
      'Publishers are also businesses. Even literary publishers need to understand who is likely to read and buy a book.',
    detail:
      'An author may believe that their book is "for everyone," but that usually does not give a publisher enough information. Is it written for teenagers? Young adults? Parents? Academics? Canadian history enthusiasts?',
    points: [
      'Identifying an audience does not mean reducing a book to a marketing product.',
      'It demonstrates that the author understands the relationship between the manuscript and its readership.',
      'If publishers cannot identify the likely audience, they may struggle to see how the book will find its readers.',
    ],
  },
  {
    title: 'The Publisher Already Has a Similar Book',
    content:
      'Sometimes the problem has nothing to do with the manuscript. A publisher may already have a similar book in its catalogue or may have recently acquired one.',
    detail:
      'Publishing two books that compete for the same audience can create unnecessary commercial problems. Even if the second manuscript is excellent, the publisher may decline it because the first book already occupies that space.',
    points: [
      'Timing matters in publishing.',
      'This is one of the frustrating realities authors cannot always control.',
    ],
  },
  {
    title: 'Commercial Considerations',
    content:
      'Publishing a book requires money. There are costs associated with editing, proofreading, cover design, typesetting, printing, distribution, marketing, publicity, and sometimes illustration, permissions, or specialist review.',
    detail:
      'Publishers therefore have to consider whether a book has realistic sales potential. This does not mean that every book must be a bestseller, but there still has to be some justification for the investment.',
    points: [
      'Is there a recognisable readership?',
      'Are bookstores and other retailers likely to stock the book?',
      'Does the subject have sufficient interest?',
      'Can the expected sales support the costs of publication?',
    ],
  },
  {
    title: 'The Submission Guidelines Were Not Followed',
    content:
      'This may sound simple, but it can make a major difference. Publishers establish submission guidelines for a reason.',
    detail:
      'Some request a complete manuscript, while others ask for a proposal, synopsis, sample chapters, introduction, table of contents, or query letter. The format may also matter.',
    points: [
      'Ignoring requirements can make a manuscript appear careless before an editor even evaluates the writing.',
      'An author who cannot follow basic submission instructions may unintentionally give an editor the impression that they will also be difficult to work with.',
    ],
  },
  {
    title: 'The Manuscript Is Too Long or Too Short',
    content:
      'Length can also affect a publisher\'s decision. Different genres have different expectations regarding word count.',
    detail:
      'An academic book, children\'s picture book, literary novel, memoir, and poetry collection do not have the same ideal length. A manuscript that is dramatically outside the expected range may create additional production and commercial challenges.',
    points: [
      'Understand the conventions of your particular category.',
      'Check the publisher\'s stated word count ranges before submitting.',
    ],
  },
  {
    title: 'The Publisher Has Limited Capacity',
    content:
      'Sometimes, publishers reject manuscripts simply because they cannot take on more books.',
    detail:
      'Publishers have finite editorial teams, budgets, production schedules, and marketing resources. Even when an editor genuinely likes a manuscript, there may be no room for it on the publishing list. This is especially relevant to smaller independent presses.',
    points: [
      'Decisions can be influenced by capacity, editorial focus, timing, and the number of strong submissions.',
      'A rejection can sometimes mean "not now" rather than "not good enough."',
    ],
  },
  {
    title: 'The Publisher Is Not the Right One',
    content:
      'Perhaps the most important lesson for authors is that rejection is not necessarily failure.',
    detail:
      'Ottawa has publishers with different mandates and audiences. A manuscript rejected by one publisher may be exactly what another publisher is looking for. Each publishing house has its own editorial identity and priorities.',
    points: [
      'Avoid sending the same manuscript randomly to every publisher you can find.',
      'Identify publishers whose catalogues demonstrate a genuine interest in your genre, subject, language, and target readership.',
    ],
  },
];

export default function OttawaPublishersReject() {
  return (
    <article className="max-w-4xl mx-auto space-y-20">
      {/* Hero Section */}
      <header className="space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 text-sm font-medium border border-red-100">
          Publishing
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Why Do Ottawa Publishers Reject Manuscripts?
          </h1>

          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
            <p>
              For many aspiring authors, submitting a manuscript to a publisher is one of the most exciting and nerve-wracking stages of the writing journey. After months or even years of writing, rewriting, editing, and polishing a manuscript, the hope is simple: an editor will read the work, see its potential, and offer a publishing contract.
            </p>

            <p>
              Unfortunately, rejection is a normal part of the publishing industry. This is particularly true in a publishing centre such as Ottawa, where authors have access to university presses, independent publishers, literary presses, and publishers serving specialised audiences.
            </p>

            <p>
              A rejection, however, does not automatically mean that a manuscript is poorly written or that the author lacks talent. In many cases, publishers reject manuscripts because the work does not fit their current publishing programme, audience, commercial strategy, or available capacity.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-xl my-6">
              <p className="text-gray-700 text-sm">
                Understanding these differences is one of the first steps an author should take before submitting a manuscript.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Rejection Is Not Failure */}
      <section className="space-y-8">
        <div className="md:flex items-start gap-5">
          <div
            aria-hidden="true"
            className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0"
          >
            <BookOpen className="w-7 h-7 text-blue-600" />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Rejection Is Part of the Process
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              The Ottawa publishing scene includes publishers with very different mandates. For example, the University of Ottawa Press publishes academic books in the humanities and social sciences, alongside a smaller literary programme. It specifically notes that proposals outside its mandate or publishing programme do not proceed to the next stage.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8">
          <p className="text-gray-700 leading-relaxed">
            Understanding these differences is one of the first steps an author should take before submitting a manuscript.
          </p>
        </div>
      </section>

      {/* Ten Reasons */}
      <section className="space-y-12">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ten Common Reasons Manuscripts Get Rejected
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            The answer is rarely as simple as "the manuscript is bad." Here are the reasons that come up again and again.
          </p>
        </div>

        <div className="space-y-12">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-5 mb-6">
                <div
                  aria-hidden="true"
                  className="w-10 h-10 bg-red-100 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <FileText className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  {i + 1}. {reason.title}
                </h3>
              </div>

              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed text-lg">
                  {reason.content}
                </p>

                <p className="text-gray-600 leading-relaxed">
                  {reason.detail}
                </p>

                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                  <p className="font-medium text-gray-900 mb-4">What authors should take away:</p>
                  <ul className="space-y-3">
                    {reason.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-600">
                        <span className="w-2 h-2 rounded-full bg-red-500 mt-2"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Turning Rejection Into Strategy */}
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
              Turning Rejection Into Strategy
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Receiving a rejection letter can be discouraging, particularly when an author has invested significant emotional energy into a manuscript. However, rejection can also provide useful information.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              If publishers reject for similar reasons
            </h3>
            <ul className="space-y-3">
              {[
                'The concept may be unclear.',
                'The manuscript may need another round of editing.',
                'You may be approaching publishers whose catalogues do not match the work.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600">
                  <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              If they say it is strong but "not the right fit"
            </h3>
            <ul className="space-y-3">
              {[
                'The issue may be about positioning.',
                'Timing may not be in your favour.',
                'Editorial preference may simply differ.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-100 rounded-3xl p-8">
          <p className="text-gray-700">
            The best response to rejection is not to immediately give up. It is to evaluate the manuscript objectively, research better fitting publishers, revise where necessary, and continue submitting strategically.
          </p>
        </div>
      </section>

      {/* Conclusion */}
      <section className="bg-gradient-to-br from-red-50 to-rose-50 border border-red-100 rounded-[2rem] p-10 md:p-14">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            So, Why Do Ottawa Publishers Reject Manuscripts?
          </h2>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              A publisher may reject a manuscript because it does not fit the catalogue, the writing needs more development, the concept is not sufficiently distinctive, the intended audience is unclear, a similar book has already been acquired, the commercial prospects are uncertain, the submission guidelines were ignored, the manuscript is unsuitable in length, or the publisher simply does not have the capacity to take on another project.
            </p>

            <p>
              Publishing is a combination of <strong>craft, editorial fit, market positioning, timing, and opportunity</strong>.
            </p>

            <p>
              For aspiring authors, understanding this can completely change how rejection is viewed. Instead of seeing a rejection letter as a final verdict on their ability as a writer, they can see it as one outcome within a highly selective publishing process. The goal is not to make every publisher say yes. The goal is to find the publisher whose list, audience, editorial vision, and publishing strategy align with the book you have written.
            </p>

            <p>
              And sometimes, getting rejected by the wrong publisher is simply one step closer to finding the right one.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 rounded-[2rem] p-10 md:p-14 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Working on a Manuscript?
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            We help authors understand the publishing landscape and position their work for the right audience.
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
        </div>
      </section>
    </article>
  );
}