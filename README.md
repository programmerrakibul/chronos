# ⏰ CHRONOS

A modern, full-stack blog platform built with Next.js 16, featuring user
authentication, blog management, and a beautiful responsive UI.

## ✨ Features

- 🔐 **User Authentication** - Firebase-based authentication with email/password
  and social login
- 📝 **Blog Management** - Create, read, update, and delete blog posts
- 🏷️ **Category System** - Organize blogs by categories
- 🔍 **Search Functionality** - Search blogs by title or author
- 🛡️ **Protected Routes** - Secure pages for authenticated users only
- 📱 **Responsive Design** - Mobile-first design with Tailwind CSS and DaisyUI
- 📧 **Newsletter Section** - Engage with your community
- 👥 **Author Profiles** - Showcase blog authors
- ⚡ **Real-time Updates** - React Query for efficient data fetching and caching

## 🛠️ Tech Stack

### Frontend

- **Next.js 16** - React framework with App Router
- **React 19** - Latest React features
- **Tailwind CSS 4** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind
- **React Hook Form** - Form validation and management
- **TanStack Query** - Data fetching and state management
- **React Icons** - Icon library
- **Sonner** - Toast notifications
- **SweetAlert2** - Beautiful alerts

### Backend

- **Next.js API Routes** - Serverless API endpoints
- **MongoDB** - NoSQL database
- **Firebase Authentication** - User authentication service

### Additional Tools

- **Axios** - HTTP client
- **date-fns** - Date utility library
- **React Spinners** - Loading indicators

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- MongoDB database (local or Atlas)
- Firebase project with Authentication enabled

### Installation

1️⃣ Clone the repository:

```bash
git clone https://github.com/programmerrakibul/chronos.git
cd chronos
```

2️⃣ Install dependencies:

```bash
npm install
```

3️⃣ Create a `.env.local` file in the root directory:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_apiKey=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_authDomain=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_projectId=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_storageBucket=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_messagingSenderId=your_firebase_messaging_sender_id
NEXT_PUBLIC_FIREBASE_appId=your_firebase_app_id

# MongoDB Configuration
MONGODB_URI=your_mongodb_connection_string

# Image Upload (ImgBB)
NEXT_PUBLIC_IMAGE_KEY=your_imgbb_api_key

# Site Configuration
SITE_DOMAIN=http://localhost:3000
```

4️⃣ Run the development server:

```bash
npm run dev
```

5️⃣ Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
chronos/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (auth)/            # Authentication routes (login, register)
│   │   ├── api/               # API routes
│   │   ├── blogs/             # Blog listing and detail pages
│   │   ├── post-blog/         # Create blog page
│   │   ├── manage-blogs/      # Manage user's blogs
│   │   ├── about-us/          # About page
│   │   ├── contact-us/        # Contact page
│   │   └── layout.jsx         # Root layout
│   ├── components/            # React components
│   │   ├── shared/            # Shared components (Navbar, Footer)
│   │   └── ...                # Feature-specific components
│   ├── contexts/              # React contexts
│   ├── firebase/              # Firebase configuration
│   ├── hooks/                 # Custom React hooks
│   ├── lib/                   # Utility libraries (MongoDB)
│   └── utilities/             # Helper functions
├── public/                    # Static assets
└── package.json
```

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Key Features Explained

### 🔐 Authentication

Users can register and login using email/password or social authentication
providers through Firebase. Protected routes ensure only authenticated users can
access certain pages.

### 📝 Blog Management

Authenticated users can:

- ✍️ Create new blog posts with images
- 👀 View all their published blogs
- ✏️ Update existing blog posts
- 🗑️ Delete their blog posts

### 🔍 Search & Filter

- 🔎 Search blogs by title or author name
- 🏷️ Filter blogs by category
- 👤 View blogs by specific authors

## 🌐 API Endpoints

- `GET /api/blogs` - Fetch all blogs (supports query params: email, search,
  category)
- `POST /api/blogs` - Create a new blog post
- `GET /api/blogs/[id]` - Fetch a specific blog
- `PUT /api/blogs/[id]` - Update a blog post
- `DELETE /api/blogs/[id]` - Delete a blog post
- `GET /api/blogs/categories` - Fetch all categories

## 🔑 Environment Variables

| Variable                 | Description                     |
| ------------------------ | ------------------------------- |
| `NEXT_PUBLIC_FIREBASE_*` | Firebase configuration keys     |
| `MONGODB_URI`            | MongoDB connection string       |
| `NEXT_PUBLIC_IMAGE_KEY`  | ImgBB API key for image uploads |
| `SITE_DOMAIN`            | Your site's domain URL          |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
