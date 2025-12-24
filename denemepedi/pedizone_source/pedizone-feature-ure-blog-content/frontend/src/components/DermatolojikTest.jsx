import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const DermatolojikTest = () => {
  const navigate = useNavigate()

  return (
    <>
      <Header showBackButton={true} />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Page Header */}
        <div className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white py-16">
          <div className="pedizone-container">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Dermatolojik Test Raporu
              </h1>
              <p className="text-xl text-red-100 mb-2">
                SKINLAB P.S.A. - Yama Testi Yöntemi
              </p>
              <p className="text-lg text-red-200">
                Rapor No: 14/10/25/D/11 • Tarih: 25.11.2025
              </p>
            </div>
          </div>
        </div>

        {/* Test Report Images */}
        <div className="pedizone-container py-12">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Page 1 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-gray-100">
              <img 
                src="/derma-1.jpg" 
                alt="Dermatolojik Test Raporu - Sayfa 1"
                className="w-full h-auto"
              />
            </div>

            {/* Page 2 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-gray-100">
              <img 
                src="/derma-2.jpg" 
                alt="Dermatolojik Test Raporu - Sayfa 2"
                className="w-full h-auto"
              />
            </div>

            {/* Page 3 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-gray-100">
              <img 
                src="/derma-3.jpg" 
                alt="Dermatolojik Test Raporu - Sayfa 3"
                className="w-full h-auto"
              />
            </div>

            {/* Page 4 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-gray-100">
              <img 
                src="/derma-4.jpg" 
                alt="Dermatolojik Test Raporu - Sayfa 4"
                className="w-full h-auto"
              />
            </div>

            {/* Page 5 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-gray-100">
              <img 
                src="/derma-5.jpg" 
                alt="Dermatolojik Test Raporu - Sayfa 5"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Back Button */}
          <div className="text-center mt-12">
            <button
              onClick={() => navigate('/sertifikalar')}
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors shadow-lg hover:shadow-xl"
            >
              <ArrowLeft className="w-5 h-5" />
              Sertifikalara Dön
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default DermatolojikTest
