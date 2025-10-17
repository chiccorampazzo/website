
import { FaLinkedin, FaEnvelope } from "react-icons/fa"
import { FaBluesky, FaGoogleScholar } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <a href="https://bsky.app/profile/francescorampazzo.com">
        <FaBluesky size={40} className="m-5 text-black" />
      </a>
      <a
        href="https://scholar.google.com/citations?user=_oD24CIAAAAJ"
      >
        <FaGoogleScholar size={40} className="m-5 text-black" />
      </a>
      <a
        href="https://linkedin.com/in/frampazzo"
      >
        <FaLinkedin size={40} className="m-5 text-black" />
      </a>
      <a href="mailto:francesco.rampazzo@manchester.ac.uk">
        <FaEnvelope size={40} className="m-5 text-black" />
      </a>
    </>
  )
}

export default Footer
