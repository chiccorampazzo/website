import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-yellow-600 to-yellow-300 mb-12 w-full top-0 z-50">
      <div className="p-1.5 max-w-4xl m-auto">
        <div className="relative flex items-center justify-between h-16">
          <Link 
            href="/" 
            className="flex justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-800 rounded transition-all"
          >
            <div className="flex shrink-0 items-center text-white font-extralight text-base md:text-xl uppercase">
              Francesco &nbsp; <span className="font-semibold">Rampazzo</span>
            </div>
          </Link>

          <div className="inset-y-0 right-0 flex items-center">
            <Link
              href="/blog"
              className="p-4 my-2 text-white font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-800 rounded hover:bg-white hover:bg-opacity-20 transition-colors"
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
