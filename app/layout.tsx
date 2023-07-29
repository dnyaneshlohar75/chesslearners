import './globals.css'
import AuthProvider from './components/authProvider/AuthProvider';
import Navbar from './components/Navbar';
import Head from 'next/head';

export const metadata = {
  title: "Home",
  description: "Get a featured chess coaching in nandurbar",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <Head>
        <title>Chess Learners Academy</title>
        <meta
          name="Get a featured chess coaching in nandurbar"
          content="Join the best chess coaching center in Nandurbar and improve your chess skills. Experienced coaches and a supportive learning environment."
        />
        <meta property="og:title" content="Nandurbar Chess Coaching Center" />
        <meta
          property="og:description"
          content="Join the best chess coaching center in Nandurbar and improve your chess skills. Experienced coaches and a supportive learning environment."
        />
        {/* Add more Open Graph tags if necessary */}
      </Head>
      <body>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
