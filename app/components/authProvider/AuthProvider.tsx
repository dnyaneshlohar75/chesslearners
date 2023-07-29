"use client"
import { SessionProvider } from 'next-auth/react'
const AuthProvider = ({children}: {children: React.ReactNode}) => {

  return (
      <>
      <SessionProvider>
        {/* Rendering Children Components */}
        <section>
          {children}
      </section>
    </SessionProvider>
      </>
  )
}

export default AuthProvider;