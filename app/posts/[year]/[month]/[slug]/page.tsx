import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { marked } from 'marked'
import type { Metadata } from 'next'
import BlogPostingSchema from '../../../../components/schema/blog-posting-schema'

// In newer versions of marked, it returns a Promise
// This helper function handles both synchronous and asynchronous versions
async function parseMarkdown(content: string): Promise<string> {
  try {
    const result = marked(content);
    // If marked returns a promise
    if (result && typeof result === 'object' && 'then' in result) {
      return await result;
    }
    // If marked returns a string directly
    return result as string;
  } catch (error) {
    console.error('Error parsing markdown:', error);
    return '';
  }
}

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), '_posts')
  const files = fs.readdirSync(postsDir)
  
  // Generate params for static generation
  const params = files.map(file => {
    // Extract year, month, and slug from filename (e.g., 2013-02-27-si-parte-con-alicia.md)
    const match = file.match(/^(\d{4})-(\d{2})-(\d{2})-(.+)\.md$/)
    if (!match) return null
    
    const [_, year, month, _day, slug] = match
    // Only include the params that are in the URL structure
    return { year, month, slug }
  }).filter(Boolean)
  
  return params
}

interface BlogPostParams {
  year: string;
  month: string;
  slug: string;
}

export async function generateMetadata({ params }: { params: Promise<BlogPostParams> }): Promise<Metadata> {
  const { year, month, slug } = await params;
  
  const post = await getPost(year, month, slug)
  
  if (!post) return {
    title: 'Post Not Found',
    description: 'The requested blog post could not be found'
  }
  
  const description = post.description
  
  return {
    title: `${post.title} | Francesco Rampazzo`,
    description: description,
    openGraph: {
      title: post.title,
      description: description,
      type: 'article',
      publishedTime: `${year}-${month}-${post.day}`,
      url: `/posts/${year}/${month}/${slug}`,
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<BlogPostParams> }) {
  const { year, month, slug } = await params;
  
  const post = await getPost(year, month, slug)
  
  if (!post) return notFound()

  // Create ISO date format for schema
  const isoDate = `${year}-${month}-${post.day}T00:00:00Z`
  const postUrl = `/posts/${year}/${month}/${slug}`

  // Display date in desired format
  return (
    <article>
      <BlogPostingSchema 
        title={post.title}
        description={post.description || `Blog post by Francesco Rampazzo: ${post.title}`}
        datePublished={isoDate}
        url={postUrl}
      />
      <header>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 font-bold">{post.title}</h1>
        <time dateTime={isoDate} className="block text-base sm:text-lg lg:text-xl mb-6 font-semibold text-gray-700">
          {post.date}
        </time>
      </header>
      <div className="mb-8">
        <Link 
          href="/blog" 
          className="group inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 rounded-full text-gray-700 font-medium no-underline hover:border-yellow-500 hover:text-yellow-600 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
        >
          <svg 
            className="w-4 h-4 transition-transform group-hover:translate-x-0.5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to blog
        </Link>
      </div>
      <div className="prose-content" dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
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
  
  // Create a plain text description from the content
  const plainTextContent = content.replace(/[#*`_]/g, '').trim()
  const description = plainTextContent.substring(0, 160) + (plainTextContent.length > 160 ? '...' : '')
  
  // Convert markdown to HTML - handle both sync and async versions of marked
  const htmlContent = await parseMarkdown(content)
  
  return {
    title: data.title || slug,
    content: htmlContent, // This is now a string
    date: formattedDate,
    day, // Include the day for use in metadata
    description // Add description for SEO and schema
  }
}
