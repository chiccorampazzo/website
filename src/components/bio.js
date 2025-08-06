import React from "react"
import { Link } from "gatsby"

const Bio = () => {
  return (
    <div className="about-me-content">
      <p>
        I am a Lecturer in Demography at the{" "}
        <a href="https://www.sociology.ox.ac.uk/people/francesco-rampazzo">
          Department of Sociology
        </a>
        , the{" "}
        <a href="https://www.demographicscience.ox.ac.uk">
          Leverhulme Centre for Demographic Science
        </a>
        , and <a href="http://www.nuffield.ox.ac.uk">Nuffield College</a> at the
        University of Oxford. I hold a PhD in Social Statistics and Demography
        from the{" "}
        <a href="https://www.southampton.ac.uk/demography/index.page">
          University of Southampton
        </a>
        , during my PhD I was a Doctoral Fellow at the{" "}
        <a href="https://www.demogr.mpg.de/en">
          Max Planck Institute for Demographic Research
        </a>
        . I collaborate with researchers at the Max Planck Institute for
        Demographic Research in Rostock and the Centre for Population Change in
        Southampton. I continue to be affiliated with the{" "}
        <a href="https://www.sbs.ox.ac.uk/research/centres-and-initiatives/oxford-future-marketing-initiative">
          Future of Marketing Initiative
        </a>{" "}
        at Saïd Business School.
      </p>

      <p>
        I am a demographer with a broad range of research interests, which
        include digital and computational demography with applications in
        fertility, migration, and survey research.
      </p>

      <p>
        <Link to="/assets/Francesco-Rampazzo-CV.pdf">Curriculum Vitae</Link>.
      </p>
    </div>
  )
}

export default Bio
