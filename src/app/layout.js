"use client"; // This is a client component 👈🏽

import { Inter } from 'next/font/google'
import './globals.css'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { QuizProvider } from './QuizContext';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <QuizProvider>
        <AppRouterCacheProvider>
          <body className={inter.className}>{children}</body>
        </AppRouterCacheProvider>
      </QuizProvider>
    </html>
  )
}
