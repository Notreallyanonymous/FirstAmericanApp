import React from 'react'

function Footer() {
  return (
    <footer className='absolute inset-x-0 bottom-0 h-16 text-black dark:text-white'>
            <p>&copy; {new Date().getFullYear()} First American App</p>
            <p>&copy; {new Date().getFullYear()} Questions / Issues at julio.quintanilla@telusinternational.com</p>
    </footer>
  )
}

export default Footer
