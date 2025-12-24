import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { 
  Calendar, Clock, User, AlertTriangle, CheckCircle, 
  ChevronDown, ChevronUp, ArrowLeft, Footprints, ShieldCheck,
  Droplets, Users, Activity
} from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import LocalizedLink from './LocalizedLink';

const BlogAyakMantariEN = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqItems = [
    {
      question: "Is foot fungus contagious?",
      answer: "Yes. Foot fungus spreads easily through direct contact or contaminated surfaces, especially in moist environments."
    },
    {
      question: "Can foot fungus go away on its own?",
      answer: "Mild cases may improve, but most infections require proper foot care to fully resolve and prevent recurrence."
    },
    {
      question: "Is foot fungus the same as nail fungus?",
      answer: "No. Foot fungus affects the skin, while nail fungus infects the nails. However, untreated foot fungus can spread to the toenails."
    },
    {
      question: "How long does foot fungus treatment take?",
      answer: "Duration varies depending on severity. Early-stage infections respond faster, while advanced cases may take longer."
    },
    {
      question: "Can foot fungus be prevented?",
      answer: "Yes. Proper hygiene, dry feet, and preventive foot care products greatly reduce the risk."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>What Is Foot Fungus? Causes, Symptoms, Types, and Prevention | PediZone</title>
        <meta name="description" content="Foot fungus is a common fungal infection affecting the skin of the feet. Learn what foot fungus is, why it occurs, common symptoms, how it spreads, and effective prevention methods." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://denemepedi.netlify.app/en/blog/ayak-mantari-nedir" />
        <link rel="alternate" hrefLang="tr" href="https://denemepedi.netlify.app/tr/blog/ayak-mantari-nedir" />
        <link rel="alternate" hrefLang="en" href="https://denemepedi.netlify.app/en/blog/ayak-mantari-nedir" />
        <link rel="alternate" hrefLang="x-default" href="https://denemepedi.netlify.app/tr/blog/ayak-mantari-nedir" />
        
        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "What Is Foot Fungus? Causes, Symptoms, Types, and Prevention",
            "description": "Foot fungus is a common fungal infection affecting the skin of the feet. Learn about causes, symptoms, and prevention.",
            "author": {
              "@type": "Organization",
              "name": "PediZone"
            },
            "publisher": {
              "@type": "Organization",
              "name": "PediZone"
            },
            "datePublished": "2025-01-15",
            "dateModified": "2025-01-15"
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
            <span className="text-gray-900 font-medium">What Is Foot Fungus?</span>
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
                January 15, 2025
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                8 min read
              </span>
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                Podiatrist
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              What Is Foot Fungus?
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Foot fungus, medically known as <strong>tinea pedis</strong> and commonly referred to as athlete's foot, is a contagious fungal infection that affects the skin of the feet. It most often develops between the toes but can also spread to the soles and sides of the feet.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              The infection is caused by dermatophyte fungi that thrive in warm, moist environments. Without proper care, foot fungus can persist for long periods and may spread to toenails or other areas of the body.
            </p>

            {/* What Causes */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              What Causes Foot Fungus?
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Foot fungus develops when fungal organisms come into contact with damp or weakened skin. The most common causes include:
            </p>

            <div className="bg-red-50 rounded-2xl p-6 mb-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Excessive sweating of the feet</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Wearing tight, non-breathable footwear</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Walking barefoot in public areas such as pools, gyms, or locker rooms</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Inadequate foot hygiene</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Prolonged moisture between the toes</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Weakened immune system</span>
                </li>
              </ul>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              These factors create an ideal environment for fungi to grow and multiply.
            </p>

            {/* Who Is at Risk */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Who Is More Likely to Get Foot Fungus?
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Foot fungus can affect anyone, but it is more common in:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <Card className="border-blue-100">
                <CardContent className="p-4 flex items-center gap-3">
                  <Users className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-700">Athletes and physically active individuals</span>
                </CardContent>
              </Card>
              <Card className="border-blue-100">
                <CardContent className="p-4 flex items-center gap-3">
                  <Footprints className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-700">People who wear closed shoes for long hours</span>
                </CardContent>
              </Card>
              <Card className="border-blue-100">
                <CardContent className="p-4 flex items-center gap-3">
                  <Activity className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-700">Individuals with diabetes or circulation problems</span>
                </CardContent>
              </Card>
              <Card className="border-blue-100">
                <CardContent className="p-4 flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-700">Those with compromised immune systems</span>
                </CardContent>
              </Card>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Understanding risk factors is essential for prevention.
            </p>

            {/* Symptoms */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Symptoms of Foot Fungus
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Symptoms may vary depending on the severity of the infection, but common signs include:
            </p>

            <div className="bg-yellow-50 rounded-2xl p-6 mb-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Persistent itching or burning sensation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Redness and inflammation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Peeling, cracked, or flaky skin</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">White, softened skin between the toes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Unpleasant foot odor</span>
                </li>
              </ul>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              In advanced cases, painful cracks or secondary bacterial infections may occur.
            </p>

            {/* Types */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Types of Foot Fungus
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Foot fungus presents in different forms depending on the affected area and fungal type. Common types include:
            </p>

            <div className="space-y-4 mb-8">
              <Card className="border-gray-200">
                <CardContent className="p-5">
                  <h3 className="font-bold text-gray-900 mb-2">Interdigital Fungal Infection</h3>
                  <p className="text-gray-600">Occurs between the toes, the most common form</p>
                </CardContent>
              </Card>
              <Card className="border-gray-200">
                <CardContent className="p-5">
                  <h3 className="font-bold text-gray-900 mb-2">Moccasin-Type Fungal Infection</h3>
                  <p className="text-gray-600">Affects the soles and sides of the feet</p>
                </CardContent>
              </Card>
              <Card className="border-gray-200">
                <CardContent className="p-5">
                  <h3 className="font-bold text-gray-900 mb-2">Vesicular Fungal Infection</h3>
                  <p className="text-gray-600">Characterized by fluid-filled blisters</p>
                </CardContent>
              </Card>
            </div>

            {/* How It Spreads */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              How Does Foot Fungus Spread?
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Foot fungus spreads easily through direct or indirect contact. Common transmission routes include:
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8 ml-4">
              <li>Walking barefoot on contaminated surfaces</li>
              <li>Sharing towels, socks, or footwear</li>
              <li>Touching infected skin and then other body areas</li>
            </ul>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Because it is highly contagious, early care and hygiene are crucial.
            </p>

            {/* Prevention */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              How to Prevent Foot Fungus
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Preventive care is the most effective way to avoid infection or recurrence:
            </p>

            <div className="bg-green-50 rounded-2xl p-6 mb-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Wash feet daily and dry them thoroughly</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Keep the spaces between toes dry</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Wear breathable shoes and moisture-wicking socks</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Change socks regularly</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Avoid walking barefoot in public areas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Use antifungal foot care products when needed</span>
                </li>
              </ul>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Consistent foot care significantly reduces risk.
            </p>

            {/* Home Care */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Home Care and Professional Support
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Mild cases of foot fungus may improve with regular foot hygiene and topical care products. However, persistent or recurring infections often require professional evaluation.
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mb-8">
              <p className="text-red-800 font-semibold">
                ⚠️ Ignoring symptoms may allow the infection to spread to toenails, where treatment becomes more challenging.
              </p>
            </div>

            {/* When to Seek Help */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              When Should You Seek Professional Help?
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              You should consider professional foot care if:
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8 ml-4">
              <li>Symptoms persist despite regular care</li>
              <li>The infection spreads to the toenails</li>
              <li>Pain, swelling, or cracks worsen</li>
              <li>You have diabetes or circulation issues</li>
            </ul>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Early intervention prevents complications and supports long-term foot health.
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
              <LocalizedLink to="/blog/ayak-hijyeni-ipuclari" className="block bg-gray-50 hover:bg-gray-100 rounded-xl p-5 transition-colors">
                <p className="font-semibold text-gray-900 mb-1">Foot Hygiene Tips</p>
                <p className="text-sm text-gray-600">Daily care recommendations</p>
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

export default BlogAyakMantariEN;
