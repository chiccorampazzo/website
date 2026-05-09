import Social from "./social"

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex justify-center flex-nowrap items-center gap-4">
          <Social />
        </div>
      </div>
    </footer>
  )
}

export default Footer
