
import { FaLinkedin, FaEnvelope } from "react-icons/fa"
import { FaBluesky, FaGoogleScholar } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <a href="https://twitter.com/">
        <FaBluesky size={40} className="m-5 text-black" />
      </a>
      <a
        href="https://scholar.google.com/citations?user="
      >
        <FaGoogleScholar size={40} className="m-5 text-black" />
      </a>
      <a
        href="https://linkedin.com/in/"
      >
        <FaLinkedin size={40} className="m-5 text-black" />
      </a>
      <a href="mailto:">
        <FaEnvelope size={40} className="m-5 text-black" />
      </a>
    </>
  )
}

export default Footer
