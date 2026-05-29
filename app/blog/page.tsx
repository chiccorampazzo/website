import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import matter from 'gray-matter'
import type { Metadata } from 'next'
import BlogCollectionSchema from '../components/schema/blog-collection-schema'

export const metadata: Metadata = {
  title: 'Blog | Francesco Rampazzo',
  description: 'Blog posts by Francesco Rampazzo, Lecturer in Social Statistics and Demography at University of Manchester',
}

export default function BlogIndexPage() {
  const blogUrl = '/blog'
  const postsDir = path.join(process.cwd(), '_posts')
  const files = fs.readdirSync(postsDir).filter(file => file.endsWith('.md'))
    // Extract slug, date, and title from frontmatter (if present)
    const posts = files
      .map(file => {
        const slug = file.replace(/\.md$/, '')
        // Try to extract date for display
        const match = file.match(/^(\d{4}-\d{2}-\d{2})-(.+)\.md$/)
        const date = match ? match[1] : ''
        // Read file and extract frontmatter title
        const filePath = path.join(postsDir, file)
        let title = ''
        try {
          const fileContent = fs.readFileSync(filePath, 'utf8')
          const { data } = matter(fileContent)
          title = data.title || ''
        } catch (_) {
          // ignore errors
        }
        if (!title) {
          // fallback to filename title
          title = match ? match[2].replace(/-/g, ' ') : slug
        }
        // Extract year and month from the date for URL construction
        const dateParts = date ? date.split('-') : []
        const year = dateParts[0] || ''
        const month = dateParts[1] || ''
        
        return {
          slug,
          date,
          year,
          month,
          title,
          filename: file,
        }
      })
      .filter(Boolean)
      .sort((a, b) => (a.date < b.date ? 1 : -1))

  return (
    <>
      <BlogCollectionSchema url={blogUrl} />
      <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 font-bold">Blog</h1>
      <ul className="list-none ml-0">
        {posts.map(post => (
          <li key={post.slug}>
            <Link 
              href={post.year && post.month ? 
                `/posts/${post.year}/${post.month}/${post.slug.replace(/^\d{4}-\d{2}-\d{2}-/, '')}` : 
                `/posts/${post.slug}`
              } 
              className="flex flex-col sm:flex-row sm:justify-between my-5 py-2 px-3 -mx-3 rounded-lg no-underline text-gray-900 hover:bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600 transition-colors gap-2 sm:gap-0"
            >
              <span className="text-base sm:text-lg lg:text-xl font-semibold truncate">
                {post.title.replace(/-/g, ' ').charAt(0).toUpperCase() + post.title.replace(/-/g, ' ').slice(1) || `Untitled`}
              </span>
              <time dateTime={post.date} className="text-sm sm:text-base font-thin text-gray-600 shrink-0">
                {post.date}
              </time>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
