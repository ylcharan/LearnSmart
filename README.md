# LearnSmart

## 🚀 About LearnSmart

LearnSmart is an innovative AI-powered learning platform that revolutionizes education through personalized voice companions. Create custom AI assistants tailored to your learning needs and engage in interactive voice conversations that make learning more engaging, accessible, and effective.

### ✨ Key Features

- **Personalized AI Companions**: Create voice agents with custom names, subjects, and personalities
- **Interactive Voice Learning**: Engage in natural conversations with your AI learning partners
- **Subject Customization**: Choose from various subjects and topics for specialized learning
- **Session Tracking**: Monitor your learning progress and recently completed sessions
- **Voice Integration**: Powered by VAPI for high-quality voice interactions

## 🎯 Problem Solved

Traditional learning methods often feel impersonal, passive, and one-size-fits-all. Many students struggle with:

- **Lack of personalization**: Generic content that doesn't adapt to individual learning styles
- **Passive learning**: Reading and watching without active engagement
- **Motivation issues**: Difficulty staying engaged with conventional study methods
- **Accessibility barriers**: Limited options for interactive, voice-based learning

LearnSmart addresses these challenges by providing:

- **Personalized learning experiences** tailored to individual preferences
- **Active voice-based interactions** that simulate real conversations
- **Customizable AI companions** that adapt to different subjects and learning goals
- **Engaging conversational learning** that maintains student interest and motivation

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, Radix UI components
- **Authentication**: Clerk
- **Database**: Supabase
- **Voice AI**: VAPI
- **Error Tracking**: Sentry
- **Deployment**: Vercel-ready

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account
- Clerk account
- VAPI account

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ylcharan/LearnSmart.git
   cd LearnSmart
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**

   Create a `.env.local` file in the root directory and add your environment variables:

   ```env
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key

   # Supabase
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

   # VAPI
   VAPI_API_KEY=your_vapi_api_key

   # Sentry (Optional)
   SENTRY_AUTH_TOKEN=your_sentry_auth_token
   NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn
   ```

4. **Database Setup**
   - Create a new Supabase project
   - Run the database migrations (if provided)
   - Update your Supabase credentials in the environment file

5. **Run the development server**

   ```bash
   npm run dev
   ```

6. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
LearnSmart/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── companions/        # Companion-related pages
│   ├── sign-in/          # Authentication pages
│   └── subscription/     # Subscription management
├── components/            # Reusable React components
│   ├── ui/               # UI components (Radix UI)
│   └── ...               # Feature components
├── lib/                  # Utility libraries
│   ├── actions/          # Server actions
│   └── ...               # Other utilities
├── types/                # TypeScript type definitions
├── constants/            # App constants and data
└── public/               # Static assets
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, please star the repo.

---

Made with ❤️ for better learning experiences
