# StartupVault - Crowdfunding Platform

A modern, clean, and functional crowdfunding website for investing in early-stage startups. Built with React, Tailwind CSS, and Stripe integration.

## 🚀 Features

### For Investors
- **Wallet Integration**: Connect MetaMask and other Web3 wallets
- **Secure Authentication**: Email/password and wallet-based login
- **Investment Dashboard**: Track portfolio performance and returns
- **Startup Discovery**: Browse and invest in verified startups
- **Real-time Analytics**: Monitor investment performance
- **Stripe Integration**: Secure payment processing

### For Startups
- **Startup Registration**: Multi-step application process
- **Document Upload**: Business plans and pitch decks
- **Funding Campaigns**: Set goals and track progress
- **Investor Network**: Access to accredited investors
- **Due Diligence Support**: Professional verification process

### Technical Features
- **Modern UI/UX**: Clean, responsive design with animations
- **React Router**: Client-side routing
- **Framer Motion**: Smooth animations and transitions
- **Tailwind CSS**: Utility-first styling
- **Web3 Integration**: MetaMask wallet support
- **Form Validation**: Comprehensive input validation
- **Mobile Responsive**: Works on all devices

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd crowdfunding-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Navigation with wallet connection
│   ├── Hero.js            # Landing page hero section
│   ├── Login.js           # User authentication
│   ├── Register.js        # Investor registration
│   ├── StartupRegister.js # Startup registration
│   ├── Dashboard.js       # User dashboard
│   └── Footer.js          # Site footer
├── App.js                 # Main application component
├── index.js              # React entry point
└── index.css             # Global styles and Tailwind
```

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (`#3b82f6` to `#8b5cf6`)
- **Secondary**: Gray scale for text and backgrounds
- **Success**: Green for positive metrics
- **Warning**: Yellow for ratings
- **Error**: Red for validation errors

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800

### Components
- **Buttons**: Primary and secondary variants with hover effects
- **Cards**: Rounded corners with subtle shadows
- **Forms**: Clean inputs with validation states
- **Navigation**: Sticky header with mobile menu

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS with custom configuration in `tailwind.config.js`:
- Custom color palette
- Custom animations
- Responsive breakpoints
- Component utilities

### Web3 Integration
To enable wallet connections:
1. Install MetaMask browser extension
2. Connect wallet through the navbar
3. Approve connection in MetaMask

### Stripe Integration
For payment processing:
1. Add your Stripe publishable key
2. Configure webhook endpoints
3. Test with Stripe test cards

## 📱 Pages & Routes

- **`/`** - Landing page with hero section
- **`/login`** - User authentication
- **`/register`** - Investor registration
- **`/startup-register`** - Startup registration
- **`/dashboard`** - User dashboard

## 🎯 Key Components

### Hero Section
- Animated gradient background
- Call-to-action buttons
- Startup showcase card
- Statistics display
- Feature highlights

### Login/Register
- Multi-step registration process
- Wallet connection integration
- Form validation
- Social login options
- Password strength indicators

### Dashboard
- Portfolio overview
- Investment tracking
- Startup discovery
- Analytics and charts
- Recent activity feed

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `build`

### Environment Variables
Create a `.env` file:
```
REACT_APP_STRIPE_PUBLISHABLE_KEY=your_stripe_key
REACT_APP_API_URL=your_api_url
```

## 🔒 Security Features

- **HTTPS**: Secure connections
- **Input Validation**: Client and server-side validation
- **Wallet Security**: MetaMask integration
- **Payment Security**: Stripe PCI compliance
- **Data Protection**: GDPR compliance

## 📊 Performance

- **Lazy Loading**: Component-based code splitting
- **Optimized Images**: WebP format support
- **Minified CSS**: Production builds
- **CDN Ready**: Static asset optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Email: hello@startupvault.com
- Documentation: [docs.startupvault.com](https://docs.startupvault.com)
- Issues: GitHub Issues

## 🔮 Future Enhancements

- **Real-time Chat**: Investor-founder communication
- **Advanced Analytics**: Detailed portfolio insights
- **Mobile App**: React Native version
- **AI Integration**: Smart investment recommendations
- **Blockchain**: Tokenized equity support
- **Multi-language**: Internationalization support

---

Built with ❤️ using React, Tailwind CSS, and modern web technologies. 