// Airtable configuration
const AIRTABLE_API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY
const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID
const AIRTABLE_TABLE_NAME = import.meta.env.VITE_AIRTABLE_TABLE_NAME || 'Contacts'

/**
 * Submit form data to Airtable
 * @param {Object} data - Form data containing name, email, and phone
 * @returns {Promise} - Promise that resolves when data is successfully submitted
 */
export const submitToAirtable = async (data) => {
  if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
    throw new Error('Airtable configuration is missing. Please check your environment variables.')
  }

  const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`
  
  const payload = {
    records: [
      {
        fields: {
          Name: data.name,
          Email: data.email,
          Phone: data.phone,
          'Date Submitted': new Date().toISOString()
        }
      }
    ]
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(`Airtable API Error: ${errorData.error?.message || response.statusText}`)
    }

    const result = await response.json()
    return result
  } catch (error) {
    console.error('Error submitting to Airtable:', error)
    throw error
  }
}

/**
 * Test the Airtable connection
 * @returns {Promise<boolean>} - Returns true if connection is successful
 */
export const testAirtableConnection = async () => {
  if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
    return false
  }

  const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}?maxRecords=1`
  
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${AIRTABLE_API_KEY}`
      }
    })
    
    return response.ok
  } catch (error) {
    console.error('Error testing Airtable connection:', error)
    return false
  }
}
