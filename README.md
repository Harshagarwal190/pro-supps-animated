<img width="1842" height="905" alt="image" src="https://github.com/user-attachments/assets/3e48dafc-7e57-45f5-b249-b5790354cabe" />

```markdown
# ProSupps - Premium Fitness Supplements Store

A modern, full-stack e-commerce platform for fitness supplements built with React, TypeScript, and Supabase.



## 🌟 Features

- **User Authentication** - Secure signup/login with email and password
- **Product Catalog** - Browse premium fitness supplements with detailed information
- **Shopping Cart** - Real-time cart updates with item count badge
- **Order Management** - Simple checkout process with order confirmation
- **Responsive Design** - Fully responsive across all devices
- **Dark/Light Mode** - Theme switching support
- **Real-time Updates** - Cart automatically syncs across sessions

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **Backend**: Supabase (Database, Authentication, Real-time)
- **Routing**: React Router v6
- **Icons**: Lucide React
- **State Management**: React Hooks

## 📋 Prerequisites

- Node.js 18+ or Bun
- npm, yarn, or bun package manager

## 🚀 Installation

1. **Clone the repository**
```bash
git clone 
cd prosupps
```

2. **Install dependencies**
```bash
npm install
# or
bun install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
VITE_SUPABASE_PROJECT_ID=your_project_id
```

4. **Run the development server**
```bash
npm run dev
# or
bun dev
```

The app will be available at `http://localhost:8080`

## 📁 Project Structure

```
prosupps/
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── ui/            # Shadcn UI components
│   │   ├── Navbar.tsx     # Navigation bar with cart
│   │   ├── Footer.tsx     # Footer component
│   │   └── ...            # Other components
│   ├── pages/             # Page components
│   │   ├── Index.tsx      # Home page
│   │   ├── Products.tsx   # Products listing
│   │   ├── Cart.tsx       # Shopping cart
│   │   ├── Auth.tsx       # Login/Signup page
│   │   └── ...
│   ├── integrations/      # Supabase integration
│   │   └── supabase/
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   └── main.tsx           # App entry point
├── public/                # Static assets
└── supabase/             # Database migrations & functions
```

## 🗄️ Database Schema

### Tables

**users**
- id (uuid, primary key)
- email (text)
- full_name (text)
- avatar_url (text)
- created_at (timestamp)

**products**
- id (uuid, primary key)
- name (text)
- description (text)
- price (numeric)
- category (text)
- image_url (text)
- stock (integer)

**cart**
- id (uuid, primary key)
- user_id (uuid, foreign key)
- product_id (text)
- quantity (integer)
- created_at (timestamp)

**user_roles**
- id (uuid, primary key)
- user_id (uuid, foreign key)
- role (enum: user, admin)

## 🎯 Usage

### For Users

1. **Sign Up**: Create an account on the `/auth` page
2. **Browse Products**: Navigate to `/products` to see all available supplements
3. **Add to Cart**: Click "Add to Cart" on any product
4. **View Cart**: Click the cart icon in the navbar to see your items
5. **Checkout**: Click "Proceed to Checkout" to place your order

### For Developers

**Adding New Products**
- Requires admin role in the database
- Products are stored in the `products` table
- Images should be placed in `public/images/`

**Customizing Styles**
- Edit `src/index.css` for global styles
- Modify `tailwind.config.ts` for theme customization
- Update component styles in respective component files

## 🔐 Authentication

The app uses Supabase Authentication with:
- Email/Password authentication
- Row Level Security (RLS) for data protection
- Auto-confirm email signups enabled for development

## 🚢 Deployment

### Deploy to Production

1. **Build the project**
```bash
npm run build
# or
bun run build
```

2. **Preview the build**
```bash
npm run preview
# or
bun run preview
```

3. **Deploy to your hosting platform**
- The built files will be in the `dist/` directory
- Configure environment variables on your hosting platform
- Recommended platforms: Vercel, Netlify, or any static hosting service

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

