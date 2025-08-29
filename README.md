# Data Collection Form with Airtable Integration

A modern, responsive web application that collects user data (name, email, phone number) and stores it directly to Airtable. Built with React, Vite, and Tailwind CSS.

## Features

- ✨ **Modern UI/UX**: Clean, responsive design with beautiful animations
- 📝 **Form Validation**: Real-time validation with helpful error messages
- 🔒 **Secure Data Storage**: Direct integration with Airtable for reliable data storage
- 📱 **Mobile Responsive**: Works perfectly on all device sizes
- ⚡ **Fast Performance**: Built with Vite for optimal development experience
- 🎨 **Beautiful Styling**: Tailwind CSS for consistent, modern design

## Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Form Handling**: React Hook Form
- **Icons**: Lucide React
- **Data Storage**: Airtable API

## Prerequisites

Before running this application, you'll need:

1. **Node.js** (version 16 or higher)
2. **npm** or **yarn**
3. **Airtable Account** with API access

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/jatinjain-ops/shiny-telegram.git
cd shiny-telegram
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Airtable

#### Step 1: Create an Airtable Base
1. Go to [Airtable](https://airtable.com) and create a new base
2. Create a table named `Contacts` (or any name you prefer)
3. Add the following fields to your table:
   - `Name` (Single line text)
   - `Email` (Email)
   - `Phone` (Phone number)
   - `Date Submitted` (Date)

#### Step 2: Get Your API Credentials
1. Go to your [Airtable account page](https://airtable.com/account)
2. Generate an API key
3. Find your Base ID in the API documentation section

#### Step 3: Set Environment Variables
1. Copy the `env.example` file to `.env.local`:
   ```bash
   cp env.example .env.local
   ```

2. Edit `.env.local` and add your Airtable credentials:
   ```env
   VITE_AIRTABLE_API_KEY=your_airtable_api_key_here
   VITE_AIRTABLE_BASE_ID=your_airtable_base_id_here
   VITE_AIRTABLE_TABLE_NAME=Contacts
   ```

### 4. Run the Application

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Project Structure

```
shiny-telegram/
├── src/
│   ├── components/
│   │   └── DataCollectionForm.jsx    # Main form component
│   ├── services/
│   │   └── airtableService.js        # Airtable API integration
│   ├── App.jsx                       # Main app component
│   ├── main.jsx                      # React entry point
│   └── index.css                     # Global styles
├── package.json                      # Dependencies and scripts
├── vite.config.js                    # Vite configuration
├── tailwind.config.js                # Tailwind CSS configuration
├── postcss.config.js                 # PostCSS configuration
├── index.html                        # HTML template
├── env.example                       # Environment variables template
└── README.md                         # This file
```

## Form Fields

The application collects the following information:

1. **Full Name** (required)
   - Minimum 2 characters
   - Real-time validation

2. **Email Address** (required)
   - Valid email format validation
   - Real-time validation

3. **Phone Number** (required)
   - International phone number support
   - Real-time validation

## Airtable Integration

The application automatically stores submitted data to your Airtable base with the following fields:

- **Name**: User's full name
- **Email**: User's email address
- **Phone**: User's phone number
- **Date Submitted**: Timestamp of form submission

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Customization

#### Styling
The application uses Tailwind CSS for styling. You can customize the design by modifying:
- `src/index.css` - Global styles and custom components
- `tailwind.config.js` - Tailwind configuration

#### Form Fields
To add or modify form fields:
1. Update the form component in `src/components/DataCollectionForm.jsx`
2. Modify the Airtable service in `src/services/airtableService.js`
3. Update your Airtable table structure accordingly

## Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add your environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Netlify
1. Connect your GitHub repository to Netlify
2. Add your environment variables in Netlify dashboard
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Other Platforms
The application can be deployed to any static hosting platform that supports environment variables.

## Security Considerations

- API keys are stored as environment variables and are not exposed in the client-side code
- Form validation is implemented on both client and server side
- HTTPS is recommended for production deployments

## Troubleshooting

### Common Issues

1. **"Airtable configuration is missing" error**
   - Ensure all environment variables are set correctly
   - Check that your `.env.local` file exists and is properly formatted

2. **"Failed to submit data" error**
   - Verify your Airtable API key is correct
   - Check that your Base ID and table name are correct
   - Ensure your Airtable table has the required fields

3. **Form validation errors**
   - Check that all required fields are filled
   - Ensure email format is valid
   - Verify phone number format

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you encounter any issues or have questions, please:
1. Check the troubleshooting section above
2. Review the Airtable API documentation
3. Open an issue on GitHub

---

Built with ❤️ using React, Vite, and Airtable
