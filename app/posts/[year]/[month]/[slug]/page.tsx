import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { notFound } from 'next/navigation'
import { marked } from 'marked'

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), '_posts')
  const files = fs.readdirSync(postsDir)
  
  return files.map(file => {
    // Extract year, month, and slug from filename (e.g., 2013-02-27-si-parte-con-alicia.md)
    const match = file.match(/^(\d{4})-(\d{2})-(\d{2})-(.+)\.md$/)
    if (!match) return null
    
    const [_, year, month, _day, slug] = match
    // Only include the params that are in the URL structure
    return { year, month, slug }
  }).filter(Boolean)
}

export default async function BlogPostPage({ params }) {
  const { year, month, slug } = params
  const post = await getPost(year, month, slug)
  
  if (!post) return notFound()

  // Display date in desired format
  return (
    <div>
      <h1 className="text-5xl mb-4 font-bold">{post.title}</h1>
      <h2 className="text-xl mb-6 font-semibold text-gray-700">{`${post.date}`}</h2>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  )
}

async function getPost(year: string, month: string, slug: string) {
  // Find matching file with the format YYYY-MM-DD-slug.md
  const postsDir = path.join(process.cwd(), '_posts')
  const files = fs.readdirSync(postsDir)
  
  // Look for any file that starts with year-month and contains the slug
  const matchingFile = files.find(file => {
    const pattern = new RegExp(`^${year}-${month}-\\d{2}-${slug}\\.md$`)
    return pattern.test(file)
  })
  
  if (!matchingFile) return null
  
  // Extract day from the filename
  const dayMatch = matchingFile.match(/^[\d-]+-(\d{2})-/)
  const day = dayMatch ? dayMatch[1] : ''
  
  const filePath = path.join(postsDir, matchingFile)
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContent)
  
  // Format the date as desired
  const formattedDate = `${day}/${month}/${year}`
  
  return {
    title: data.title || slug,
    content: marked(content),
    date: formattedDate
  }
}