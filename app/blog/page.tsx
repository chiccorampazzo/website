import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import matter from 'gray-matter'
import type { Metadata } from 'next'
import BlogCollectionSchema from '../components/schema/blog-collection-schema'

export const metadata: Metadata = {
  title: 'Blog | Francesco Rampazzo',
  description: 'Blog posts by Francesco Rampazzo, Lecturer in Demography at University of Oxford',
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
    <main>
      <BlogCollectionSchema url={blogUrl} />
      <h1 className="text-5xl mb-4 font-bold">Blog</h1>
        {posts.map(post => (
          <div key={post.slug}>
            <Link 
              href={post.year && post.month ? 
                `/posts/${post.year}/${post.month}/${post.slug.replace(/^\d{4}-\d{2}-\d{2}-/, '')}` : 
                `/posts/${post.slug}`
              } 
              className="flex justify-between my-5 text-gray-800">
                <div className="text-xl font-semibold hover:underline">
                    {post.title.replace(/-/g, ' ').charAt(0).toUpperCase() + post.title.replace(/-/g, ' ').slice(1) || `Untitled`}
                </div>
                <div className="text-lg font-thin">{post.date}</div>
            </Link>
          </div>
        ))}
    </main>
  )
}