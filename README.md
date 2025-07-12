# Ashi's Sweet 16 Birthday Invitation 🎉

A beautiful, interactive birthday invitation website with real-time backend integration for managing RSVPs, birthday wishes, and guest interactions.

## ✨ Features

- **Real-time Guest Management**: Live RSVP system with email validation
- **Birthday Wishes Wall**: Interactive wall for birthday messages
- **Live Guest Interactions**: Real-time guest wall with emoji reactions
- **Song Requests**: Let guests request their favorite songs
- **Admin Panel**: Hidden admin access for data export and statistics
- **Mobile Responsive**: Beautiful design that works on all devices
- **Real-time Updates**: Live updates using Supabase real-time subscriptions
- **Secure Backend**: Built with Supabase for scalability and security

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone <repository-url>
cd Birthday-invitation
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Supabase Backend

#### Create a Supabase Project
1. Go to [supabase.com](https://supabase.com) and create a new project
2. Note down your project URL and anon key

#### Set Up Database
1. In your Supabase dashboard, go to the SQL Editor
2. Copy and paste the contents of `database-setup.sql`
3. Run the script to create all necessary tables and policies

#### Configure Environment Variables
1. Copy `env.example` to `.env.local`
2. Add your Supabase credentials:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Start Development Server
```bash
npm run dev
```

## 🗄️ Database Schema

The application uses four main tables:

### `guests`
- `id`: Primary key
- `name`: Guest name
- `email`: Unique email address
- `guests_count`: Number of guests (including the person)
- `message`: Optional birthday message
- `created_at`: Timestamp
- `updated_at`: Last update timestamp

### `birthday_wishes`
- `id`: Primary key
- `name`: Person's name
- `email`: Optional email
- `message`: Birthday wish message
- `created_at`: Timestamp

### `song_requests`
- `id`: Primary key
- `name`: Person's name
- `song_title`: Song title
- `artist`: Optional artist name
- `created_at`: Timestamp

### `guest_interactions`
- `id`: Primary key
- `name`: Guest name
- `emoji`: Emoji reaction
- `timestamp`: Unix timestamp
- `created_at`: Timestamp

## 🔧 API Endpoints

The application uses a service layer (`src/services/api.ts`) that provides:

### Guest Management
- `submitRSVP()`: Submit new RSVP
- `getGuests()`: Get all guests
- `getGuestCount()`: Get total guest count
- `checkEmailExists()`: Validate unique emails

### Birthday Wishes
- `submitWish()`: Submit birthday wish
- `getWishes()`: Get all wishes

### Song Requests
- `submitSongRequest()`: Submit song request
- `getSongRequests()`: Get all song requests

### Guest Interactions
- `submitInteraction()`: Submit guest interaction
- `getRecentInteractions()`: Get recent interactions
- `subscribeToInteractions()`: Real-time subscription

### Admin Functions
- `exportAllData()`: Export all data as JSON
- `getStats()`: Get statistics

## 🎛️ Admin Panel

The admin panel is hidden by default and can be accessed by:
1. Triple-clicking on the page title area (top-left corner)
2. Viewing real-time statistics
3. Exporting all data as a JSON file

## 🛡️ Security Features

- **Row Level Security (RLS)**: Database-level security policies
- **Email Validation**: Prevents duplicate RSVPs
- **Input Validation**: Client and server-side validation
- **Rate Limiting**: Built-in protection against spam
- **Secure API Keys**: Environment variable protection

## 📱 Mobile Optimization

- Responsive design for all screen sizes
- Touch-friendly interactions
- Optimized loading times
- Progressive Web App features

## 🎨 Customization

### Colors and Themes
The application uses Tailwind CSS with a purple/pink theme. You can customize:
- Color scheme in `tailwind.config.js`
- Component styling in individual component files
- Background patterns and animations

### Content
- Update personal information in component files
- Modify birthday date and location
- Add custom photos and music
- Personalize messages and copy

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push

### Netlify
1. Connect your repository to Netlify
2. Add environment variables
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Other Platforms
The app can be deployed to any static hosting service that supports:
- Environment variables
- Single Page Application routing
- HTTPS

## 🔧 Development

### Available Scripts
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint

### Project Structure
```
src/
├── components/          # React components
├── lib/                # Supabase configuration
├── services/           # API service layer
├── App.tsx            # Main app component
└── main.tsx           # App entry point
```

## 🐛 Troubleshooting

### Common Issues

1. **Environment Variables Not Working**
   - Ensure `.env.local` is in the root directory
   - Restart the development server
   - Check variable names start with `VITE_`

2. **Database Connection Errors**
   - Verify Supabase URL and key
   - Check if tables exist in Supabase
   - Ensure RLS policies are set up correctly

3. **Real-time Not Working**
   - Check if real-time is enabled in Supabase
   - Verify table subscriptions in database setup

4. **Build Errors**
   - Clear `node_modules` and reinstall
   - Check TypeScript errors
   - Verify all imports are correct

## 📞 Support

For issues or questions:
1. Check the troubleshooting section
2. Review Supabase documentation
3. Check browser console for errors
4. Verify environment variables

## 🎉 Features in Action

- **Real-time RSVP**: Guests can RSVP and see their name appear instantly
- **Live Guest Wall**: Real-time updates when new guests join
- **Birthday Wishes**: Beautiful wall of birthday messages
- **Song Requests**: Let guests contribute to the party playlist
- **Admin Access**: Hidden panel for data management
- **Mobile Friendly**: Perfect experience on all devices

## 🔮 Future Enhancements

- Photo sharing functionality
- Live chat during the party
- Music playlist integration
- Guest photo gallery
- Automated email notifications
- Social media integration

---

Made with ❤️ for Ashi's Sweet 16 celebration!
