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
  return (
    <div className="flex flex-col items-center">
      <PersonSchema />
      <WebsiteSchema />
      <Avatar />
      <h1 className="text-gray-900 font-semibold text-2xl sm:text-3xl text-center mt-2">
        Francesco Rampazzo
      </h1>
      <p className="text-gray-500 mt-2 mb-8 text-sm sm:text-base uppercase tracking-widest text-center">
        Demographer
      </p>
      <div className="px-4 sm:px-6">
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
          on population dynamics, particularly in the areas of fertility,
          migration, and survey research.
        </p>

        <p>
          I am also a Guest Researcher at the Max Planck Institute for
          Demographic Research and an Associate Member of the Centre for
          Population Change at the University of Southampton, the Department of
          Sociology at the University of Oxford, and Nuffield College, Oxford.
          My work includes collaborations with Cosmic Latte, Getty Images,
          MammaPack, and Nielsen BookData, applying demographic methods to
          large-scale digital and commercial datasets.
        </p>

        <p>
          My work has been published in journals such as <i>Demography</i>,{" "}
          <i>International Migration Review</i>, <i>EPJ Data Science</i>, and{" "}
          <i>Political Science Research and Methods</i>. It has also been
          featured in the{" "}
          <a 
            href="https://www.bbc.co.uk/programmes/w3ct73rf"
            rel="noopener noreferrer"
            target="_blank"
          >
            BBC
          </a>
          ,{" "}
          <a 
            href="https://www.thetimes.com/life-style/health-fitness/article/menstrual-cycle-app-track-women-mr7nqnsbn"
            rel="noopener noreferrer"
            target="_blank"
          >
            The Times
          </a>
          ,{" "}
          <a 
            href="https://tg24.sky.it/cronaca/2024/11/29/dati-app-mestruazioni"
            rel="noopener noreferrer"
            target="_blank"
          >
            Sky News
          </a>
          , and the{" "}
          <a 
            href="https://www.dailymail.co.uk/news/article-10186111/Number-EU-migrants-Britain-20-higher-official-data-claims-Oxford-study.html"
            rel="noopener noreferrer"
            target="_blank"
          >
            Daily Mail
          </a>
          .
        </p>

        <div className="text-center mt-10">
          <Link 
            href="/assets/Francesco-Rampazzo-CV.pdf"
            className="group inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 rounded-full text-gray-700 font-medium no-underline hover:border-yellow-500 hover:text-yellow-600 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          >
            <svg 
              className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Curriculum Vitae
          </Link>
        </div>
      </div>
    </div>
  )
}
