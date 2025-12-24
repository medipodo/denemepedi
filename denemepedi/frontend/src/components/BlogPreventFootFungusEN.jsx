import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { 
  Calendar, Clock, User, AlertTriangle, CheckCircle, 
  ChevronDown, ChevronUp, ArrowLeft, ArrowRight
} from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import LocalizedLink from './LocalizedLink';

const BlogPreventFootFungusEN = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqItems = [
    {
      question: "Can foot fungus be completely prevented?",
      answer: "While no method is 100% guaranteed, consistent hygiene and footwear choices significantly reduce risk."
    },
    {
      question: "Does foot fungus come back easily?",
      answer: "Recurrence is possible if preventive habits are discontinued."
    },
    {
      question: "Can foot odor lead to foot fungus?",
      answer: "Yes. Moist environments linked to odor encourage fungal growth."
    },
    {
      question: "Is walking barefoot risky?",
      answer: "In communal or damp areas, yes. Protective footwear reduces exposure."
    },
    {
      question: "Does nail fungus increase the risk of foot fungus?",
      answer: "Yes. Fungal infections can spread between skin and nails."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>How to Prevent Foot Fungus: Daily Habits, Hygiene, and Professional Care | PediZone</title>
        <meta name="description" content="Foot fungus is common but preventable. Learn how daily hygiene habits, proper footwear, and early care can help prevent foot fungus and reduce the risk of recurrence." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://denemepedi.netlify.app/en/blog/how-to-prevent-foot-fungus" />
        <link rel="alternate" hrefLang="tr" href="https://denemepedi.netlify.app/tr/blog/ayak-mantari-nasil-onlenir" />
        <link rel="alternate" hrefLang="en" href="https://denemepedi.netlify.app/en/blog/how-to-prevent-foot-fungus" />
        <link rel="alternate" hrefLang="x-default" href="https://denemepedi.netlify.app/tr/blog/ayak-mantari-nasil-onlenir" />
        
        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "How to Prevent Foot Fungus: Daily Habits, Hygiene, and Professional Care",
            "description": "Foot fungus is common but preventable. Learn how daily hygiene habits, proper footwear, and early care can help prevent foot fungus and reduce the risk of recurrence.",
            "author": {
              "@type": "Organization",
              "name": "PediZone"
            },
            "publisher": {
              "@type": "Organization",
              "name": "PediZone"
            },
            "datePublished": "2025-01-24",
            "dateModified": "2025-01-24"
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
            <span className="text-gray-900 font-medium">How to Prevent Foot Fungus</span>
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
                January 24, 2025
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                9 min read
              </span>
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                Podiatrist
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              How to Prevent Foot Fungus
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            {/* Introduction */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Introduction
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Foot fungus is a widespread condition that thrives in warm, moist environments. While it can be persistent once established, foot fungus is largely preventable with the right daily habits and hygiene practices.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Understanding how fungal infections develop helps reduce both first-time infections and recurrence.
            </p>

            {/* Internal Link to Pillar */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl mb-8">
              <p className="text-blue-900 mb-3">
                Related reading:
              </p>
              <LocalizedLink 
                to="/blog/what-is-foot-fungus" 
                className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-800"
              >
                What Is Foot Fungus? <ArrowRight className="w-4 h-4" />
              </LocalizedLink>
            </div>

            {/* Why Foot Fungus Develops */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Why Foot Fungus Develops
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Fungi naturally exist on the skin but become problematic under certain conditions. Foot fungus develops when moisture, heat, and skin contact create an ideal environment for fungal growth.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Common contributing factors include:
            </p>

            <div className="bg-red-50 rounded-2xl p-6 mb-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Excessive sweating</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Wearing non-breathable footwear</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Walking barefoot in communal areas</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Poor foot hygiene</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Untreated foot odor or nail fungus</span>
                </li>
              </ul>
            </div>

            {/* Daily Habits */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Daily Habits That Help Prevent Foot Fungus
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Simple daily routines play a critical role in prevention.
            </p>

            {/* Keep Feet Clean */}
            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
              Keep Feet Clean and Dry
            </h3>

            <div className="bg-green-50 rounded-2xl p-6 mb-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Wash feet daily with mild soap</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Dry thoroughly, especially between toes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Avoid leaving feet damp after bathing or exercise</span>
                </li>
              </ul>
            </div>

            {/* Change Socks */}
            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
              Change Socks Regularly
            </h3>

            <div className="bg-green-50 rounded-2xl p-6 mb-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Use moisture-wicking socks</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Change socks at least once daily</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Replace socks immediately after sweating</span>
                </li>
              </ul>
            </div>

            {/* Breathable Footwear */}
            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
              Choose Breathable Footwear
            </h3>

            <div className="bg-green-50 rounded-2xl p-6 mb-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Wear shoes made from breathable materials</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Avoid wearing the same shoes on consecutive days</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Allow shoes to fully dry between uses</span>
                </li>
              </ul>
            </div>

            {/* Hygiene Practices */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Hygiene Practices That Reduce Risk
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Good hygiene extends beyond washing.
            </p>

            {/* Nail and Skin Care */}
            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
              Nail and Skin Care
            </h3>

            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
              <li>Keep toenails trimmed and clean</li>
              <li>Avoid aggressive nail trimming</li>
              <li>Do not share nail tools</li>
            </ul>

            {/* Public Areas */}
            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
              Public Areas Awareness
            </h3>

            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8 ml-4">
              <li>Wear flip-flops in public showers and pools</li>
              <li>Avoid barefoot contact in locker rooms</li>
              <li>Clean feet promptly after exposure</li>
            </ul>

            {/* Foot Odor Connection */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              The Connection Between Foot Odor and Fungus
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Foot odor and fungal infections are closely related. Excess moisture and bacteria increase the likelihood of fungal growth.
            </p>

            {/* Internal Link to Foot Odor */}
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl mb-6">
              <p className="text-orange-900 mb-3">
                Learn more:
              </p>
              <LocalizedLink 
                to="/blog/what-causes-foot-odor" 
                className="inline-flex items-center gap-2 text-orange-700 font-semibold hover:text-orange-800"
              >
                What Causes Foot Odor? <ArrowRight className="w-4 h-4" />
              </LocalizedLink>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Managing odor early reduces fungal risk.
            </p>

            {/* Preventing Recurrence */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Preventing Recurrence
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Once foot fungus occurs, recurrence is possible without proper care.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Preventive strategies include:
            </p>

            <div className="bg-yellow-50 rounded-2xl p-6 mb-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Continuing hygiene routines even after symptoms improve</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Disinfecting shoes and socks regularly</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Monitoring skin changes early</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Addressing nail fungus promptly</span>
                </li>
              </ul>
            </div>

            {/* Internal Link to Nail Fungus */}
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-xl mb-8">
              <p className="text-purple-900 mb-3">
                Related topic:
              </p>
              <LocalizedLink 
                to="/blog/types-of-nail-fungus" 
                className="inline-flex items-center gap-2 text-purple-700 font-semibold hover:text-purple-800"
              >
                Types of Nail Fungus <ArrowRight className="w-4 h-4" />
              </LocalizedLink>
            </div>

            {/* Home Care vs Professional */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Home Care vs. Professional Support
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Mild cases may improve with consistent home care, but persistent or recurring infections often require professional evaluation. Professional guidance helps identify contributing factors and ensures safe long-term management.
            </p>

            {/* When to Seek Help */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              When to Seek Professional Help
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Consider professional support if:
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
              <li>Symptoms persist despite hygiene measures</li>
              <li>Multiple areas of the foot are affected</li>
              <li>Nail changes appear</li>
              <li>You have diabetes or circulation concerns</li>
            </ul>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Early assessment improves outcomes and prevents complications.
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
            
            <div className="grid md:grid-cols-3 gap-4">
              <LocalizedLink to="/blog/what-is-foot-fungus" className="block bg-blue-50 hover:bg-blue-100 rounded-xl p-5 transition-colors">
                <p className="font-semibold text-blue-900 mb-1">What Is Foot Fungus?</p>
                <p className="text-sm text-blue-700">Causes, symptoms, and types</p>
              </LocalizedLink>
              <LocalizedLink to="/blog/what-causes-foot-odor" className="block bg-orange-50 hover:bg-orange-100 rounded-xl p-5 transition-colors">
                <p className="font-semibold text-orange-700 mb-1">What Causes Foot Odor?</p>
                <p className="text-sm text-orange-600">Risk factors and prevention</p>
              </LocalizedLink>
              <LocalizedLink to="/blog/types-of-nail-fungus" className="block bg-purple-50 hover:bg-purple-100 rounded-xl p-5 transition-colors">
                <p className="font-semibold text-purple-700 mb-1">Types of Nail Fungus</p>
                <p className="text-sm text-purple-600">Symptoms and early signs</p>
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

export default BlogPreventFootFungusEN;
