'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

const blogPosts = [
  {
    id: 1,
    title: 'The Oversaturation of AI Products: Why Quality Matters More Than Hype',
    slug: 'ai-oversaturation-quality-over-hype',
    excerpt: 'The AI boom has unleashed a flood of tools into the marketplace. While innovation is exciting, oversaturation comes with serious downsides that prioritize speed over quality.',
    content: `The AI boom has unleashed a flood of tools, apps, and platforms into the marketplace. Every week it feels like a new product promises to change how we work, create, or connect. While this level of innovation is exciting, it also comes with a serious downside: oversaturation.

## A Sea of Copycats

One of the biggest red flags in today's AI landscape is the sheer number of copycat products. Many companies are rushing to release AI tools that mimic existing ones rather than innovating with original features. This creates a competitive environment where quality often takes a back seat to speed.

Instead of building unique value, we're seeing:

- Superficial rebrands of existing models
- Tools that offer no meaningful differentiation
- Short-term projects released just to catch hype trends

For users, this makes it harder to identify which products are truly reliable and which are just clones.

## Quality Over Quantity

With AI tools everywhere, creators and businesses should prioritize the quality of the build rather than the quantity of releases. Poorly executed AI products not only frustrate users but also damage trust in the technology as a whole.

Some key markers of quality include:

- Transparent information about how the product works
- Clear communication of limitations
- Robust support and user feedback channels
- Evidence of security and respect for user data

## The Problem of Stolen Work

Another troubling trend is the theft of websites, designs, and even backend functionality. As AI codebases and interfaces are rushed out, unethical players sometimes scrape or outright steal existing platforms, wrap them in different branding, and present them as their own. This not only hurts the original builders but also undermines honest innovation.

Protecting creative work will require:

- Stronger accountability measures for AI startups
- Education about intellectual property rights
- A cultural shift that discourages shortcuts and rewards genuine creativity

## Why This Matters

AI is powerful — but reckless use and oversaturation risk drowning its potential. If we allow the market to become dominated by clones, rushed projects, and stolen ideas, users will lose trust, and true innovation will get buried.

The challenge is to slow down, prioritize meaningful development, and support the platforms that are built with integrity. In a crowded market, quality, authenticity, and originality will always stand out.`,
    publishedAt: '2025-09-15',
    author: 'Hologramview Team',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80'
  }
]

export default function Blog() {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <div className="bg-white pt-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Blog
            </h1>
            <p className="mt-4 text-xl leading-8 text-gray-600">
              Insights on technology, innovation, and the future of digital solutions
            </p>
          </div>
          
          <div className="space-y-20">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="relative isolate flex flex-col gap-8 lg:flex-row"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                    sizes="(max-width: 1024px) 100vw, 256px"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div>
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.publishedAt} className="text-gray-500">
                      {formatDate(post.publishedAt)}
                    </time>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-500">{post.author}</span>
                  </div>
                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <Link href={`/blog/${post.slug}`}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="mt-6">
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-sm font-semibold text-blue-600 hover:text-blue-500"
                    >
                      Read full article →
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
