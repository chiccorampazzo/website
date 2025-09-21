import fs from 'fs'
import path from 'path'
import Link from 'next/link'

export default function BlogIndexPage() {
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
          const { data } = require('gray-matter')(fileContent)
          title = data.title || ''
        } catch (e) {
          // ignore
        }
        if (!title) {
          // fallback to filename title
          title = match ? match[2].replace(/-/g, ' ') : slug
        }
        return {
          slug,
          date,
          title,
          filename: file,
        }
      })
      .filter(Boolean)
      .sort((a, b) => (a.date < b.date ? 1 : -1))

  return (
    <main>
      <h1 className="text-5xl mb-4 font-bold">Blog</h1>
        {posts.map(post => (
          <div key={post.slug}>
            <Link href={`/posts/${post.slug}`} className="flex justify-between my-5 text-gray-800">
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