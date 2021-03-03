import React, { useState } from "react"

import { FaChevronDown } from "react-icons/fa"

import Layout from "../components/layout"
import data from "../data/publications.json"

const Publications = () => {
  const Tab = ({ title, papers }) => {
    const [open, setOpen] = useState(false)
    const size = papers.length - 1

    return (
      <div className="py-2">
        <button
          className={
            "flex justify-between align-middle p-4 text-left bg-gradient-to-r from-yellow-600 to-yellow-300 text-white w-full " +
            (open ? "rounded-t-2xl" : "rounded-2xl")
          }
          onClick={() => setOpen(!open)}
        >
          <span className="text-2xl md:text-3xl font-bold uppercase tracking-wider">
            {title}
          </span>

          <FaChevronDown
            size={35}
            className={
              "my-auto transition duration-700 transform " +
              (open ? "rotate-180" : "rotate-0")
            }
          />
        </button>
        <div
          className={
            "px-1 pb-1 rounded-b-xl transition-colors ease-in-out duration-1000 transform " +
            (open
              ? "bg-gradient-to-r from-yellow-600 to-yellow-300"
              : "bg-white")
          }
        >
          <div
            className={
              "p-3 bg-white rounded-b-xl transition-max ease-in-out duration-700 transform " +
              (open ? "max-h-2000 h-full" : "max-h-0 overflow-hidden")
            }
          >
            {papers.map((node, index) => (
              <Paper node={node} key={index} last={size === index} />
            ))}
          </div>
        </div>
      </div>
    )
  }

  const Paper = ({ node, last }) => (
    <div
      className={
        "py-6 " + (!last ? "border-dotted border-b-4 border-blue-300" : "mb-2")
      }
    >
      <div
        className="mb-1"
        dangerouslySetInnerHTML={{ __html: node.authors }}
      ></div>
      <div className="mb-1">
        <span className="font-bold italic ">
          &ldquo;
          {node.url ? (
            <a href={node.url} className="underline text-black">
              {node.title}
            </a>
          ) : (
            node.title
          )}
          &rdquo;
        </span>{" "}
        ({node.date})
      </div>
      {node.journal && <div>{node.journal}</div>}
      {node.status && (
        <div className="py-0.5 px-1 rounded-lg bg-blue-300 w-max text-white font-semibold">
          {node.status}
        </div>
      )}
    </div>
  )

  return (
    <Layout title="Publications">
      <div className="mt-12">
        {data.items.map((item, index) => (
          <Tab title={item.title} papers={item.papers} key={index} />
        ))}
      </div>
      <h2 className="mt-6">Last Update: {data.last_update}</h2>
    </Layout>
  )
}

export default Publications
