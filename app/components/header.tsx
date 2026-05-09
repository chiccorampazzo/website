import Link from 'next/link'
import Avatar from './avatar'

const Header = () => {
  return (
    <header className="bg-yellow-500 w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-700 rounded transition-all"
          >
            <div className="text-white font-light text-lg sm:text-2xl tracking-tight">
              <span className="font-normal">FRANCESCO</span> <span className="font-bold">RAMPAZZO</span>
            </div>
          </Link>

          <Avatar />
        </div>
      </div>
    </header>
  )
}

export default Header
