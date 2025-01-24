import React from 'react'
import Footer from '../components/Footer'

const page = ({ product }) => {
  return (
    <div className="bg-gray-50 py-10">
    <div className="max-w-7xl mx-auto px-4">
     
     <Footer/>

      {/* Steps Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Step 1 */}
        <div className="bg-purple-300 shadow-md rounded-md p-6 text-center">
         
          <h2 className="text-xl font-bold">ALWAYS AUTHENTICATED</h2>
          <p className="text-gray-600 mt-2">
            We handpick every piece, checking authenticity and quality to
            make sure it’s the real deal.
          </p>
          <p className="mt-4 font-semibold text-gray-800">STEP ONE</p>
        </div>

        {/* Step 2 */}
        <div className="bg-blue-300 shadow-md rounded-md p-6 text-center">
          
          <h2 className="text-xl font-bold">WASHED AND STEAMED</h2>
          <p className="text-gray-600 mt-2">
            Items are washed to remove any marks or stains and then steamed,
            ready to be processed by our in-house team.
          </p>
          <p className="mt-4 font-semibold text-gray-800">STEP TWO</p>
        </div>

        {/* Step 3 */}
        <div className="bg-green-300 shadow-md rounded-md p-6 text-center">
         
          <h2 className="text-xl font-bold">SECURELY STORED</h2>
          <p className="text-gray-600 mt-2">
            Our products are carefully hung and stored in a climate-controlled
            room, ensuring they maintain quality.
          </p>
          <p className="mt-4 font-semibold text-gray-800">STEP THREE</p>
        </div>
      </div>
    </div>
  </div>

  )
}

export default page
