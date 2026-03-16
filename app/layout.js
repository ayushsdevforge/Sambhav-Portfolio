import { Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { ToastContainer } from 'react-toastify';
import Chatbot from './components/Chatbot';

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata = {
  metadataBase: new URL('https://sambhavmehra.me'),
  title: {
    default: 'Sambhav Mehra | Cybersecurity Enthusiast',
    template: '%s | Sambhav Mehra Portfolio'
  },
  description: 'Cybersecurity enthusiast and full-stack developer specializing in ethical hacking, vulnerability assessment, and secure web applications. Protecting critical infrastructure from evolving threats.',
  applicationName: 'Sambhav Mehra Portfolio',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Cybersecurity',
    'Ethical Hacking',
    'Web Security',
    'Penetration Testing',
    'SIEM',
    'IDS',
    'Network Security',
    'Python',
    'JavaScript',
    'Sambhav Mehra',
    'Cybersecurity Bhopal',
    'Security Researcher',
    'OWASP',
    'CEH'
  ],
  authors: [{ name: 'Sambhav Mehra', url: 'https://sambhavmehra.me' }],
  creator: 'Sambhav Mehra',
  publisher: 'Sambhav Mehra',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sambhavmehra.me',
    title: 'Sambhav Mehra - Cybersecurity Enthusiast | Ethical Hacker',
    description: 'Cybersecurity enthusiast and full-stack developer specializing in ethical hacking, vulnerability assessment, and secure web applications.',
    siteName: 'Sambhav Mehra Portfolio',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Sambhav Mehra - Cybersecurity Enthusiast | Ethical Hacker',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sambhav Mehra - Cybersecurity Enthusiast | Ethical Hacker',
    description: 'Cybersecurity enthusiast and full-stack developer specializing in ethical hacking, vulnerability assessment, and secure web applications.',
    creator: '@sambhavmehra',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://sambhavmehra.me',
  },
  category: 'technology',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0a0a0a',
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Sambhav Mehra | Cybersecurity Enthusiast",
    "alternateName": "Sambhav Mehra | Ethical Hacker",
    "url": "https://sambhavmehra.me",
    "description": "Cybersecurity enthusiast and full-stack developer specializing in ethical hacking, vulnerability assessment, and secure web applications.",
    "author": {
      "@type": "Person",
      "name": "Sambhav Mehra | Cybersecurity Enthusiast",
      "url": "https://sambhavmehra.me"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Stack+Sans+Notch:wght@200..700&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistMono.variable} antialiased bg-background text-foreground transition-colors duration-300`}
      >

        <Navigation />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Chatbot />


        {/* Google Analytics - Add your GA4 ID */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </body>
    </html>
  );
}
