import '@/app/globals.css';

export const metadata = {
  title: 'Login api',
  description: 'Login portfolio api',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-[var(--color-fondo)] text-[var(--color-texto)]'>
        {children}
      </body>
    </html>
  )
}
