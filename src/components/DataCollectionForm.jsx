import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { submitToAirtable } from '../services/airtableService'

const DataCollectionForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    try {
      await submitToAirtable(data)
      setSubmitStatus('success')
      reset()
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const getStatusMessage = () => {
    if (submitStatus === 'success') {
      return {
        icon: <CheckCircle className="w-5 h-5 text-green-500" />,
        text: 'Data submitted successfully!',
        className: 'text-green-700 bg-green-50 border-green-200'
      }
    }
    if (submitStatus === 'error') {
      return {
        icon: <AlertCircle className="w-5 h-5 text-red-500" />,
        text: 'Failed to submit data. Please try again.',
        className: 'text-red-700 bg-red-50 border-red-200'
      }
    }
    return null
  }

  const statusMessage = getStatusMessage()

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      {statusMessage && (
        <div className={`mb-6 p-4 rounded-lg border flex items-center gap-3 ${statusMessage.className}`}>
          {statusMessage.icon}
          <span className="font-medium">{statusMessage.text}</span>
        </div>
      )}
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="form-label">
            Full Name *
          </label>
          <input
            id="name"
            type="text"
            className={`form-input ${errors.name ? 'border-red-500 focus:ring-red-500' : ''}`}
            placeholder="Enter your full name"
            {...register('name', {
              required: 'Name is required',
              minLength: {
                value: 2,
                message: 'Name must be at least 2 characters'
              }
            })}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="form-label">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            className={`form-input ${errors.email ? 'border-red-500 focus:ring-red-500' : ''}`}
            placeholder="Enter your email address"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Please enter a valid email address'
              }
            })}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Phone Number Field */}
        <div>
          <label htmlFor="phone" className="form-label">
            Phone Number *
          </label>
          <input
            id="phone"
            type="tel"
            className={`form-input ${errors.phone ? 'border-red-500 focus:ring-red-500' : ''}`}
            placeholder="Enter your phone number"
            {...register('phone', {
              required: 'Phone number is required',
              pattern: {
                value: /^[\+]?[1-9][\d]{0,15}$/,
                message: 'Please enter a valid phone number'
              }
            })}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Submitting...
            </>
          ) : (
            'Submit Data'
          )}
        </button>
      </form>
    </div>
  )
}

export default DataCollectionForm
