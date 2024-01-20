import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://jadoo-virid.vercel.app/'),
  title: 'Jadoo',
  description: 'Explore enchanting destinations and embark on extraordinary adventures with Jadoo Tours, your gateway to magical experiences around the globe. Immerse yourself in the spellbinding allure of our meticulously crafted itineraries that promise to captivate your senses and create memories that last a lifetime.',
  keywords: "Jadoo Tours, Magical Journeys, Enchanting Destinations,Extraordinary Adventures,Meticulously Crafted Itineraries,Captivating Experiences,Global Exploration,Immerse and Discover,Unforgettable Memories,Tailored Travel,Cultural Wonders,Adventure Travel, Personalized Itineraries,Knowledgeable Guides,Seamless Customer Experience,Diverse Landscapes,Themed Tours,Wanderlust,Cultural Immersion,Cherished Memories",
  twitter: {
    card: 'app',
    title: 'Jadoo - Unveiling Magical Journeys',
    description: 'Immerse yourself in magical experiences with Jadoo Tours. Explore enchanting destinations and embark on extraordinary adventures. #JadooTours #MagicalJourneys',
    siteId: '1467726470533754880',
    creator: '@davouma',
    creatorId: '1467726470533754880',
    images: {
      url: 'https://unsplash.com/photos/aerial-view-of-two-blue-boats-LNdpi8Yzi34',
      alt: 'arielview beach',
    },
    app: {
      name: 'twitter_app',
      id: {
        iphone: 'twitter_app://iphone',
        ipad: 'twitter_app://ipad',
        googleplay: 'twitter_app://googleplay',
      },
      url: {
        iphone: 'https://iphone_url',
        ipad: 'https://ipad_url',
      },
    },
  },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="/Rome.png" />
        <meta property="og:image:type" content="website" />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="2400" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
