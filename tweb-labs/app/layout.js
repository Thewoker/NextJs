import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TWeb Labs Company',
  description: 'We are a digital marketing agency that offers comprehensive solutions to boost your business on the internet. We specialize in the design and development of websites and e-learning platforms, focused on user experience and conversion. We advise you on the definition of your digital strategy, the optimization of your website, the management of your social networks, the creation of online advertising campaigns and the analysis of results. Our goal is to help you achieve your goals and grow your business. Contact us and find out how we can transform your digital presence. 🚀',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}</body>
    </html>
  )
}
