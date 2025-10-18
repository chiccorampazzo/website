import Avatar from "./components/avatar"
import Link from "next/link"
import type { Metadata } from "next"
import PersonSchema from "./components/schema/person-schema"
import WebsiteSchema from "./components/schema/website-schema"

export const metadata: Metadata = {
  title: "Francesco Rampazzo",
  description:
    "Francesco Rampazzo is a CD Fellow in Marketing and Consumer Demography at Saïd Business School and Leverhulme Centre for Demographic Science at University of Oxford.",
}

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center">
      <PersonSchema />
      <WebsiteSchema />
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
          I am a Britalian demographer and a Lecturer in Social Statistics and
          Demography at the University of Manchester, with a PhD in Social
          Statistics and Demography from the University of Southampton. My
          research combines sociology, demography, and computational social
          science to explore how online data can shed light on population
          dynamics, particularly in the areas of fertility, migration, and
          survey research.
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
          <a href="https://www.bbc.co.uk/programmes/w3ct73rf">BBC</a>,{" "}
          <a href="https://www.thetimes.com/life-style/health-fitness/article/menstrual-cycle-app-track-women-mr7nqnsbn">
            The Times
          </a>
          ,{" "}
          <a href="https://tg24.sky.it/cronaca/2024/11/29/dati-app-mestruazioni">
            Sky News
          </a>
          , and the{" "}
          <a href="https://www.dailymail.co.uk/news/article-10186111/Number-EU-migrants-Britain-20-higher-official-data-claims-Oxford-study.html">
            Daily Mail
          </a>
          .
        </p>

        <p className="text-center font-semibold">
          <Link href="/assets/Francesco-Rampazzo-CV.pdf">Curriculum Vitae</Link>
        </p>
      </div>
    </div>
  )
}
