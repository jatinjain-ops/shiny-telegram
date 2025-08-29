import React from 'react'
import DataCollectionForm from './components/DataCollectionForm'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Data Collection Form
          </h1>
          <p className="text-gray-600">
            Please fill out the form below to submit your information
          </p>
        </div>
        <DataCollectionForm />
      </div>
    </div>
  )
}

export default App
