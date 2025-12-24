import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { 
  Calendar, Clock, User, AlertTriangle, CheckCircle, 
  ChevronDown, ChevronUp, ArrowLeft, ArrowRight
} from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import LocalizedLink from './LocalizedLink';

const BlogFootOdorEN = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqItems = [
    {
      question: "Is foot odor caused by sweating alone?",
      answer: "No. Sweat itself is odorless. Odor develops when bacteria break down sweat."
    },
    {
      question: "Can foot fungus make foot odor worse?",
      answer: "Yes. Fungal infections damage the skin and promote bacterial growth, increasing odor."
    },
    {
      question: "Does foot odor mean poor hygiene?",
      answer: "Not always. Many factors, including footwear and sweating patterns, contribute to odor."
    },
    {
      question: "Can foot odor be prevented?",
      answer: "Yes. Proper foot care, breathable footwear, and moisture control help prevent odor."
    },
    {
      question: "Is foot odor contagious?",
      answer: "Foot odor itself is not contagious, but underlying fungal infections can spread."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>What Causes Foot Odor? Common Reasons, Risk Factors, and Prevention | PediZone</title>
        <meta name="description" content="Foot odor is usually caused by sweat and bacteria, but underlying conditions can make it worse. Learn what causes foot odor, common risk factors, and how to prevent it." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://denemepedi.netlify.app/en/blog/what-causes-foot-odor" />
        <link rel="alternate" hrefLang="tr" href="https://denemepedi.netlify.app/tr/blog/ayak-kokusu-nedenleri" />
        <link rel="alternate" hrefLang="en" href="https://denemepedi.netlify.app/en/blog/what-causes-foot-odor" />
        <link rel="alternate" hrefLang="x-default" href="https://denemepedi.netlify.app/tr/blog/ayak-kokusu-nedenleri" />
        
        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "What Causes Foot Odor? Common Reasons, Risk Factors, and Prevention",
            "description": "Foot odor is usually caused by sweat and bacteria, but underlying conditions can make it worse. Learn what causes foot odor, common risk factors, and how to prevent it.",
            "author": {
              "@type": "Organization",
              "name": "PediZone"
            },
            "publisher": {
              "@type": "Organization",
              "name": "PediZone"
            },
            "datePublished": "2025-01-22",
            "dateModified": "2025-01-22"
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
            <span className="text-gray-900 font-medium">What Causes Foot Odor</span>
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
                January 22, 2025
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
              What Causes Foot Odor?
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            {/* What Is Foot Odor */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              What Is Foot Odor?
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Foot odor, medically known as <strong>bromodosis</strong>, occurs when sweat interacts with bacteria on the skin. While sweating itself is odorless, bacteria break down sweat into acids that create an unpleasant smell.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Foot odor is not always a hygiene issue. In many cases, environmental factors and underlying foot conditions play a role.
            </p>

            {/* Main Causes */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Main Causes of Foot Odor
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Several factors can contribute to foot odor. The most common causes include:
            </p>

            <div className="bg-red-50 rounded-2xl p-6 mb-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Excessive sweating (hyperhidrosis)</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Bacterial overgrowth on the skin</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Wearing non-breathable footwear</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Synthetic socks that trap moisture</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Prolonged shoe use without airing</span>
                </li>
              </ul>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Moist environments create ideal conditions for bacteria to multiply.
            </p>

            {/* How Sweat and Bacteria Interact */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              How Sweat and Bacteria Interact
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Feet contain more sweat glands than many other parts of the body. When sweat remains trapped inside shoes, bacteria feed on skin cells and sweat proteins.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              This process produces organic acids, which are responsible for the characteristic smell associated with foot odor.
            </p>

            {/* Can Foot Fungus Cause Foot Odor */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Can Foot Fungus Cause Foot Odor?
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>Yes.</strong> Foot fungus is a common underlying factor that can worsen foot odor.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Fungal infections damage the skin barrier, allowing bacteria to thrive more easily. When foot fungus and bacteria coexist, odor often becomes stronger and more persistent.
            </p>

            {/* Internal Link to Pillar Content */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl mb-8">
              <p className="text-blue-900 mb-3">
                Learn more about fungal infections in our guide:
              </p>
              <LocalizedLink 
                to="/blog/what-is-foot-fungus" 
                className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-800"
              >
                What Is Foot Fungus? <ArrowRight className="w-4 h-4" />
              </LocalizedLink>
            </div>

            {/* Risk Factors */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Risk Factors That Increase Foot Odor
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Some individuals are more prone to foot odor due to lifestyle or health-related factors:
            </p>

            <div className="bg-yellow-50 rounded-2xl p-6 mb-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Excessive sweating</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Tight or closed shoes worn daily</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Poor airflow to the feet</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Reusing shoes without drying</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Hormonal changes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Stress or anxiety</span>
                </li>
              </ul>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              These factors increase moisture retention and bacterial growth.
            </p>

            {/* When Foot Odor Becomes Persistent */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              When Foot Odor Becomes Persistent
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Occasional foot odor is common. However, persistent odor may indicate an underlying issue such as:
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
              <li>Chronic foot fungus</li>
              <li>Skin imbalance</li>
              <li>Excessive sweating disorders</li>
            </ul>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              In these cases, basic hygiene alone may not be sufficient.
            </p>

            {/* Prevention and Daily Foot Care */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Prevention and Daily Foot Care
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Consistent foot care can significantly reduce odor:
            </p>

            <div className="bg-green-50 rounded-2xl p-6 mb-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Wash feet daily and dry thoroughly</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Change socks regularly</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Choose breathable footwear</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Allow shoes to fully dry between uses</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Maintain regular foot care routines</span>
                </li>
              </ul>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Early attention helps prevent odor from becoming chronic.
            </p>

            {/* Home Care vs Professional Support */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Home Care vs. Professional Support
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Mild foot odor may improve with consistent hygiene and moisture control. However, long-lasting or severe odor may require professional evaluation, especially if accompanied by itching, peeling, or nail changes.
            </p>

            {/* When to Seek Help */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              When Should You Seek Professional Help?
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Consider professional support if:
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8 ml-4">
              <li>Foot odor persists despite proper care</li>
              <li>Skin irritation or peeling develops</li>
              <li>Nail changes are present</li>
              <li>Discomfort or infection signs appear</li>
            </ul>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Professional assessment helps identify underlying causes.
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
              <LocalizedLink to="/blog/types-of-nail-fungus" className="block bg-orange-50 hover:bg-orange-100 rounded-xl p-5 transition-colors">
                <p className="font-semibold text-orange-700 mb-1">Types of Nail Fungus</p>
                <p className="text-sm text-orange-600">Symptoms, causes, and early signs</p>
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

export default BlogFootOdorEN;
// Updated: Wed Dec 24 15:29:48 UTC 2025
