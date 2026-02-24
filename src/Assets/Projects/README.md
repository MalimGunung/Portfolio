# LOLA Web Platform v2

**LOLA** is a comprehensive digital platform that connects parents with childcare and kindergarten service providers in Malaysia. The platform serves as a marketplace and management system for childcare centers, kindergartens, and parents seeking quality early childhood education services.

## 🌟 About LOLA

LOLA (Learning Opportunities for Little Angels) is a platform service provider that facilitates connections between parents seeking childcare services and independent childcare/kindergarten providers (merchants/partners). The platform offers a complete ecosystem for managing childcare operations, from enrollment and payments to communication and business analytics.

### Key Value Propositions
- **For Parents**: Easy discovery and booking of nearby childcare and kindergarten services
- **For Schools**: Complete digital management system with enrollment, billing, and parent communication tools
- **For Business**: Comprehensive business acceleration program with SOPs, shared services, and expansion guidelines

## 🚀 Features

### Public Platform
- **School Discovery**: Location-based search for childcare and kindergarten centers
- **Advanced Search**: Filter by location, programs, age groups, and facilities
- **School Profiles**: Detailed information about programs, pricing, and facilities
- **Online Booking**: Direct enrollment and application system

### Parent Dashboard
- **Payment Management**: View and pay invoices, track payment history
- **Child Profiles**: Manage multiple children's information and enrollments
- **Communication**: Direct messaging with schools and teachers
- **Activity Tracking**: Monitor child's progress and activities

### School Dashboard
- **Student Management**: Enrollment, attendance tracking, and student profiles
- **Program Management**: Create and manage different age-group programs and classes
- **Payment System**: Invoice generation, payment tracking, and financial reporting
- **Business Analytics**: Comprehensive dashboard with enrollment and revenue insights
- **Communication Tools**: Parent messaging and notification system
- **Profile Management**: School information, facilities, and program details

### LOLA Business Accelerator
- **LOLA Core**: Digital management system for day-to-day operations
- **LOLA Blueprint**: Standard Operating Procedures (SOPs) for childcare centers
- **LOLA Hub**: Shared services for accounting, tax, HR, and legal support
- **LOLA Pathway**: Expansion guidelines with personalized coaching
- **LOLA Boost**: Marketing and growth acceleration tools
- **LOLA Academy**: Training and certification programs

## 🛠 Technology Stack

### Frontend
- **Framework**: Next.js 14.2.15 (React 18)
- **Styling**: Bootstrap 5, SCSS, Argon Dashboard theme
- **UI Components**: React Bootstrap, Radix UI, Lucide React icons
- **Maps**: Google Maps API, React Leaflet
- **Charts**: Chart.js, Recharts
- **Forms**: React Hook Form, React Select, React Datepicker
- **Authentication**: JWT tokens, Google OAuth, Facebook Login

### Backend Integration
- **API Client**: OpenAPI TypeScript Codegen
- **HTTP Client**: Fetch API with custom wrapper
- **State Management**: React hooks, Local storage
- **File Storage**: AWS S3 integration
- **Payment**: Integrated payment gateway

### Development Tools
- **Language**: JavaScript/JSX
- **Linting**: ESLint with Next.js config
- **Styling**: Sass/SCSS preprocessor
- **Build**: Next.js build system
- **Deployment**: AWS CodeBuild, Heroku-ready

## 📁 Project Structure

```
lola-web-v2/
├── api/                    # API client and generated types
│   ├── generated/          # Auto-generated API client from OpenAPI
│   ├── apiClient.jsx       # API client configuration
│   └── index.jsx          # API utilities
├── components/            # Reusable React components
│   ├── layouts/           # Layout components (School, Parent)
│   ├── dashboard/         # Dashboard-specific components
│   ├── homepage/          # Landing page components
│   ├── navbar/           # Navigation components
│   ├── shared/           # Shared utility components
│   └── [feature]/        # Feature-specific components
├── hooks/                # Custom React hooks
│   ├── useAuth.jsx       # Authentication hook
│   └── useData.jsx       # Data fetching hook
├── pages/                # Next.js pages (file-based routing)
│   ├── dashboard/        # Protected dashboard pages
│   │   ├── parent/       # Parent-specific pages
│   │   └── school/       # School-specific pages
│   ├── auth/            # Authentication pages
│   ├── legal/           # Legal documents
│   └── index.jsx        # Homepage
├── public/              # Static assets
│   ├── img/            # Images and icons
│   ├── css/            # Additional stylesheets
│   └── js/             # Additional JavaScript files
├── styles/             # SCSS stylesheets
└── package.json        # Dependencies and scripts
```

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd lola-web-v2
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env.local
   ```
   
   Configure the following environment variables:
   ```env
   NEXT_PUBLIC_ENV=development
   NEXT_PUBLIC_AWS_S3_BASE_URL=your-s3-url
   NEXT_PUBLIC_GOOGLE_MAP_API_KEY=your-google-maps-key
   NEXT_PUBLIC_GOOGLE_CLIENT_ID=your-google-oauth-client-id
   NEXT_PUBLIC_FACEBOOK_APP_ID=your-facebook-app-id
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### API Integration

The project uses auto-generated API clients from OpenAPI specifications:

```bash
# Generate API client from development environment
npm run gen:openapi

# Generate API client from local backend
npm run gen:openapi:local
```

## 🏗 Build and Deployment

### Development
```bash
npm run dev          # Start development server
npm run lint         # Run ESLint
```

### Production
```bash
npm run build        # Build for production
npm run start        # Start production server
```

### Deployment Environments
- **Development**: `https://api-dev.lola.my`
- **Staging**: `https://api-stg.lola.my`
- **Production**: `https://api.lola.my`

The project includes AWS CodeBuild configuration (`buildspec-codebuild.yml`) and Heroku deployment setup (`Procfile`).

## 🔐 Authentication & Authorization

The platform supports multiple authentication methods:
- **Email/Password**: Traditional login system
- **Google OAuth**: Social login integration
- **Facebook Login**: Social login integration
- **JWT Tokens**: Secure session management

### User Roles
- **Parents**: Access to child management, payments, and school communication
- **Schools**: Access to student management, billing, and business analytics
- **Admins**: Platform administration and management

## 💳 Payment Integration

- **Invoice Generation**: Automated billing system
- **Payment Gateway**: Secure online payments
- **Transaction Reporting**: Comprehensive financial tracking
- **Platform Fees**: Configurable fee structure (RM1.50 per transaction)
- **Receipt Management**: Automated receipt generation and delivery

## 🗺 Maps & Location Services

- **Google Maps Integration**: School location display and search
- **Leaflet Maps**: Alternative mapping solution
- **Location-based Search**: Find nearby schools by address
- **Geolocation**: Automatic location detection

## 📱 Mobile Responsiveness

The platform is fully responsive and optimized for:
- **Desktop**: Full-featured dashboard experience
- **Tablet**: Optimized layout for medium screens
- **Mobile**: Touch-friendly interface with mobile-specific features

## 🔧 Development Guidelines

### Code Style
- Follow ESLint configuration
- Use functional components with hooks
- Implement responsive design principles
- Follow Next.js best practices

### Component Structure
- Keep components small and focused
- Use custom hooks for shared logic
- Implement proper error handling
- Follow accessibility guidelines

### API Integration
- Use the generated API client
- Implement proper error handling
- Use loading states for better UX
- Cache data when appropriate

## 📄 Legal & Compliance

The platform includes comprehensive legal documentation:
- **Privacy Notice**: Data protection and privacy policies
- **Terms & Conditions**: User agreement for parents
- **Merchant Terms**: Agreement for childcare providers
- **PDPA Compliance**: Malaysian Personal Data Protection Act compliance

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support and inquiries:
- **Website**: [https://lola.my](https://lola.my)
- **WhatsApp**: +60199009506
- **Email**: Contact through the platform

## 📜 License

This project is proprietary software owned by LOLA. All rights reserved.

---

**Built with ❤️ by the LOLA Team**
