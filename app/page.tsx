import Avatar from "./components/avatar"

import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center">
        <Avatar />
      <div className="flex items-center text-center">
        <h1 className="text-gray-900 font-semibold max-w-sm lg:max-w-lg text-4xl mt-4 justify-center">
          Francesco Rampazzo
        </h1>
      </div>
      <h2 className="text-gray-600 my-6 font-medium text-xl uppercase tracking-widest">
        Demographer
      </h2>
      <div className="mx-6 mt-4">
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
      
            <p className="text-center font-semibold">
              <Link href="/assets/Francesco-Rampazzo-CV.pdf">Curriculum Vitae</Link>
            </p>
          </div>
    </div>
  )
}