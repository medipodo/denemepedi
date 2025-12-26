import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Calendar, Clock, User, AlertTriangle, CheckCircle, 
  ChevronDown, ChevronUp, ArrowLeft, ArrowRight
} from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import LocalizedLink from './LocalizedLink';

const BlogTirnakMantariEN = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqItems = [
    {
      question: "Is nail fungus contagious?",
      answer: "Yes. Nail fungus can spread through direct contact or shared personal items such as nail clippers and footwear."
    },
    {
      question: "Can nail fungus be caused by foot fungus?",
      answer: "Yes. Untreated foot fungus is one of the most common sources of nail fungal infections."
    },
    {
      question: "How long does nail fungus take to improve?",
      answer: "Improvement varies depending on severity. Nail growth is slow, so visible improvement may take several months."
    },
    {
      question: "Can nail fungus be prevented?",
      answer: "Yes. Keeping nails clean and dry, avoiding shared tools, and managing foot fungus early reduces risk."
    },
    {
      question: "Does nail fungus affect toenails more than fingernails?",
      answer: "Yes. Toenails are more commonly affected due to moisture and reduced airflow."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Types of Nail Fungus (Onychomycosis): Symptoms, Causes, and Early Signs | PediZone</title>
        <meta name="description" content="Nail fungus, also known as onychomycosis, has different types affecting the nails. Learn the most common types of nail fungus, early symptoms, causes, and why early care matters." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://denemepedi.netlify.app/en/blog/types-of-nail-fungus" />
        <link rel="alternate" hrefLang="tr" href="https://denemepedi.netlify.app/tr/blog/tirnak-mantari-cesitleri" />
        <link rel="alternate" hrefLang="en" href="https://denemepedi.netlify.app/en/blog/types-of-nail-fungus" />
        <link rel="alternate" hrefLang="x-default" href="https://denemepedi.netlify.app/tr/blog/tirnak-mantari-cesitleri" />
        
        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Types of Nail Fungus (Onychomycosis): Symptoms, Causes, and Early Signs",
            "description": "Nail fungus, also known as onychomycosis, has different types affecting the nails. Learn the most common types, early symptoms, and causes.",
            "author": {
              "@type": "Organization",
              "name": "PediZone"
            },
            "publisher": {
              "@type": "Organization",
              "name": "PediZone"
            },
            "datePublished": "2025-01-20",
            "dateModified": "2025-01-20"
          })}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          })}
        </script>
      </Helmet>

      {/* Breadcrumb */}
      <section className="pt-24 pb-4 bg-gray-50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <LocalizedLink to="/" className="hover:text-red-600">Home</LocalizedLink>
            <span>/</span>
            <LocalizedLink to="/blog" className="hover:text-red-600">Blog</LocalizedLink>
            <span>/</span>
            <span className="text-gray-900 font-medium">Types of Nail Fungus</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="py-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                January 20, 2025
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                10 min read
              </span>
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                Podiatrist
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Types of Nail Fungus (Onychomycosis)
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            {/* What Is Nail Fungus */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              What Is Nail Fungus?
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nail fungus, medically referred to as <strong>onychomycosis</strong>, is a fungal infection that affects the toenails or fingernails. It develops when fungi invade the nail bed or nail plate, leading to changes in color, thickness, and structure.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Unlike foot fungus, nail fungus progresses slowly and is often more difficult to manage if left untreated.
            </p>

            {/* Internal Link to Pillar Content */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl mb-8">
              <p className="text-blue-900 mb-3">
                Foot fungus can spread to the nails if not properly addressed. Learn more in our guide:
              </p>
              <LocalizedLink 
                to="/blog/what-is-foot-fungus" 
                className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-800"
              >
                What Is Foot Fungus? <ArrowRight className="w-4 h-4" />
              </LocalizedLink>
            </div>

            {/* Common Causes */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Common Causes of Nail Fungus
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nail fungus usually develops under conditions that allow fungi to thrive. Common causes include:
            </p>

            <div className="bg-red-50 rounded-2xl p-6 mb-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Untreated foot fungus</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Prolonged moisture exposure</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Wearing tight or non-breathable footwear</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Nail trauma or micro-injuries</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Poor nail hygiene</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Weakened immune system</span>
                </li>
              </ul>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Toenails are affected more often than fingernails due to reduced blood circulation and prolonged shoe use.
            </p>

            {/* Types of Nail Fungus */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Types of Nail Fungus
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              There are several types of nail fungus, classified based on where and how the infection develops.
            </p>

            <div className="space-y-6 mb-8">
              <Card className="border-gray-200 border-l-4 border-l-red-500">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Distal Subungual Onychomycosis</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      The most common type
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      Begins at the tip or sides of the nail
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      Causes yellowish or white discoloration
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      Nail gradually thickens and becomes brittle
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-gray-200 border-l-4 border-l-orange-500">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">White Superficial Onychomycosis</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      Appears as white patches on the nail surface
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      Nail becomes soft and crumbly
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      Easier to detect at early stages
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-gray-200 border-l-4 border-l-yellow-500">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Proximal Subungual Onychomycosis</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 mt-1">•</span>
                      Starts near the cuticle
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 mt-1">•</span>
                      Often linked to immune system issues
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 mt-1">•</span>
                      Less common but may progress rapidly
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-gray-200 border-l-4 border-l-purple-500">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Total Dystrophic Onychomycosis</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      Advanced stage of nail fungus
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      Nail becomes severely thickened and deformed
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      Nail plate may partially or fully detach
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Symptoms */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Symptoms of Nail Fungus
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Early symptoms are often mild and may be overlooked. Common signs include:
            </p>

            <div className="bg-yellow-50 rounded-2xl p-6 mb-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Nail discoloration (white, yellow, or brown)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Thickened nail structure</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Brittle or crumbly edges</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Nail lifting from the nail bed</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Mild discomfort or pressure</span>
                </li>
              </ul>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed font-semibold mb-8">
              Early detection is crucial to prevent long-term nail damage.
            </p>

            {/* Why Early Care */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Why Early Care Is Important
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nail fungus rarely resolves on its own. Without proper care, the infection can:
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8 ml-4">
              <li>Spread to other nails</li>
              <li>Cause permanent nail damage</li>
              <li>Increase the risk of secondary infections</li>
              <li>Lead to discomfort during walking</li>
            </ul>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Addressing nail fungus at an early stage improves outcomes and limits progression.
            </p>

            {/* Home Care */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Home Care and Professional Support
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Mild nail fungus may benefit from consistent nail hygiene and topical care products. However, persistent or widespread infections often require professional evaluation.
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mb-8">
              <p className="text-red-800 font-semibold">
                ⚠️ Ignoring nail changes may allow the infection to worsen over time.
              </p>
            </div>

            {/* When to Seek Help */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              When Should You Seek Professional Help?
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Consider professional support if:
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8 ml-4">
              <li>Nail discoloration or thickening worsens</li>
              <li>Multiple nails are affected</li>
              <li>Pain or inflammation develops</li>
              <li>You have diabetes or circulation problems</li>
            </ul>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Professional guidance helps ensure safe and effective care.
            </p>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              ❓ FAQ – Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <Card key={index} className="border-gray-200">
                  <CardContent className="p-0">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex items-center justify-between p-5 text-left"
                    >
                      <span className="font-bold text-gray-900">{item.question}</span>
                      {openFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-5 pb-5">
                        <p className="text-gray-700">{item.answer}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Related Articles
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <LocalizedLink to="/blog/what-is-foot-fungus" className="block bg-blue-50 hover:bg-blue-100 rounded-xl p-5 transition-colors">
                <p className="font-semibold text-blue-900 mb-1">What Is Foot Fungus?</p>
                <p className="text-sm text-blue-700">Causes, symptoms, types, and prevention</p>
              </LocalizedLink>
              <LocalizedLink to="/urun/foot-nail-care-serum" className="block bg-red-50 hover:bg-red-100 rounded-xl p-5 transition-colors">
                <p className="font-semibold text-red-700 mb-1">Foot & Nail Care Serum</p>
                <p className="text-sm text-red-600">Antifungal support formula</p>
              </LocalizedLink>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Blog */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <LocalizedLink to="/blog">
              <Button variant="outline" className="border-gray-300">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Blog
              </Button>
            </LocalizedLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogTirnakMantariEN;
