import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { notFound } from 'next/navigation'
import { marked } from 'marked'

function extractDateFromSlug(slug: string): string | null {
  // Match YYYY-MM-DD at the start of the slug
  const match = slug.match(/^(\d{4}-\d{2}-\d{2})/)
  return match ? match[1] : null
}

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), '_posts')
  const files = fs.readdirSync(postsDir)
  return files.map(file => ({
    slug: file.replace(/\.md$/, ''),
  }))
}

export default async function BlogPostPage({ params }) {
  const post = await getPost(params.slug)
  const date = extractDateFromSlug(params.slug)
  if (!post) return notFound()

  return (
    <div>
      <h1 className="text-5xl mb-4 font-bold">{post.title}</h1>
      <h2 className="text-xl mb-6 font-semibold text-gray-700">{date}</h2>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  )
}

async function getPost(slug: string) {
  const filePath = path.join(process.cwd(), '_posts', `${slug}.md`)
  if (!fs.existsSync(filePath)) return null
  const file = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(file)
  return {
    title: data.title || slug,
    content: marked(content),
  }
}