import Link from "next/link"
import type { Metadata } from "next"
import PersonSchema from "./components/schema/person-schema"
import WebsiteSchema from "./components/schema/website-schema"
import Avatar from "./components/avatar"

export const metadata: Metadata = {
  title: "Francesco Rampazzo",
  description:
    "Francesco Rampazzo is a Lecturer in Social Statistics and Demography at the University of Manchester, specializing in computational demography and digital data.",
}

export default function Home() {
  const researchTopics = [
    "Computational Demography",
    "Digital Data",
    "Fertility",
    "Migration",
    "Survey Research",
  ]

  const mediaFeatures = [
    { name: "BBC", href: "https://www.bbc.co.uk/programmes/w3ct73rf" },
    { name: "The Times", href: "https://www.thetimes.com/life-style/health-fitness/article/menstrual-cycle-app-track-women-mr7nqnsbn" },
    { name: "Sky News", href: "https://tg24.sky.it/cronaca/2024/11/29/dati-app-mestruazioni" },
    { name: "Daily Mail", href: "https://www.dailymail.co.uk/news/article-10186111/Number-EU-migrants-Britain-20-higher-official-data-claims-Oxford-study.html" },
  ]

  const affiliations = [
    "Max Planck Institute for Demographic Research",
    "Centre for Population Change, University of Southampton",
    "Department of Sociology, University of Oxford",
    "Nuffield College, Oxford",
  ]

  return (
    <div className="flex flex-col items-center">
      <PersonSchema />
      <WebsiteSchema />
      <Avatar />
      <h1 className="text-gray-900 font-semibold text-2xl sm:text-3xl text-center mt-4">
        Francesco Rampazzo
      </h1>
      <p className="text-gray-500 mt-2 text-sm sm:text-base uppercase tracking-widest text-center">
        Demographer
      </p>

      {/* Research Topics */}
      <div className="flex flex-wrap justify-center gap-2 mt-6 px-4">
        {researchTopics.map((topic) => (
          <span
            key={topic}
            className="px-3 py-1 text-xs sm:text-sm bg-yellow-50 text-yellow-800 rounded-full border border-yellow-200"
          >
            {topic}
          </span>
        ))}
      </div>

      <div className="px-4 sm:px-6 mt-10 max-w-2xl">
        {/* About */}
        <section className="mb-10">
          <p>
            I am a Britalian demographer and a Lecturer in Social Statistics and
            Demography at the{" "}
            <a 
              href="https://research.manchester.ac.uk/en/persons/francesco-rampazzo/"
              rel="noopener noreferrer"
              target="_blank"
            >
              University of Manchester
            </a>
            , with a PhD in Social Statistics and Demography from the University
            of Southampton. My research combines sociology, demography, and
            computational social science to explore how online data can shed light
            on population dynamics.
          </p>
        </section>

        {/* Affiliations */}
        <section className="mb-10">
          <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-3 font-medium">Affiliations</h2>
          <ul className="space-y-1.5 text-gray-700 text-sm sm:text-base list-none ml-0">
            {affiliations.map((affiliation) => (
              <li key={affiliation} className="flex items-start gap-2">
                <span className="text-yellow-500 mt-1">—</span>
                <span>{affiliation}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Publications */}
        <section className="mb-10">
          <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-3 font-medium">Publications</h2>
          <p className="text-sm sm:text-base">
            My work has been published in{" "}
            <i>Demography</i>, <i>International Migration Review</i>,{" "}
            <i>EPJ Data Science</i>, and <i>Political Science Research and Methods</i>.
          </p>
        </section>

        {/* Media Features */}
        <section className="mb-10">
          <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4 font-medium">Featured In</h2>
          <div className="flex flex-wrap gap-3">
            {mediaFeatures.map((media) => (
              <a
                key={media.name}
                href={media.href}
                rel="noopener noreferrer"
                target="_blank"
                className="px-4 py-2 text-sm font-medium bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors no-underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              >
                {media.name}
              </a>
            ))}
          </div>
        </section>

        {/* CV Link */}
        <div className="text-center pt-4 pb-8 border-t border-gray-100">
          <Link 
            href="/assets/Francesco-Rampazzo-CV.pdf"
            className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium no-underline transition-colors"
          >
            <span>Download CV</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
