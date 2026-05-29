
import { FaLinkedin, FaEnvelope } from "react-icons/fa"
import { FaBluesky, FaGoogleScholar } from "react-icons/fa6";

const Social = () => {
  return (
    <>
      <a
        href="https://bsky.app/profile/francescorampazzo.com"
        rel="noopener noreferrer"
        target="_blank"
        className="mx-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 rounded p-1 transition-colors hover:text-yellow-500"
        aria-label="Visit Bluesky profile (opens in new window)"
      >
        <FaBluesky size={24} />
      </a>
      <a
        href="https://scholar.google.com/citations?user=_oD24CIAAAAJ"
        rel="noopener noreferrer"
        target="_blank"
        className="mx-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 rounded p-1 transition-colors hover:text-yellow-500"
        aria-label="Visit Google Scholar profile (opens in new window)"
      >
        <FaGoogleScholar size={24} />
      </a>
      <a
        href="https://linkedin.com/in/frampazzo"
        rel="noopener noreferrer"
        target="_blank"
        className="mx-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 rounded p-1 transition-colors hover:text-yellow-500"
        aria-label="Visit LinkedIn profile (opens in new window)"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="mailto:francesco.rampazzo@manchester.ac.uk"
        className="mx-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 rounded p-1 transition-colors hover:text-yellow-500"
        aria-label="Send email to Francesco Rampazzo"
      >
        <FaEnvelope size={24} />
      </a>
    </>
  )
}

export default Social
