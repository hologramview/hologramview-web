'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { supabase } from '@/lib/supabase'
import type { BlogPost } from '@/types/database'

export default function BlogPost() {
  const params = useParams()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data, error: fetchError } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('slug', params.slug)
          .eq('status', 'published')
          .single()

        if (fetchError) throw fetchError

        setPost(data)
      } catch (err) {
        console.error('Error fetching blog post:', err)
        setError('Failed to load blog post. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [params.slug])

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="text-center">Loading post...</div>
          </div>
        </div>
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="text-center text-red-600">
              {error || 'Blog post not found'}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white py-24 sm:py-32">
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-7xl px-6 lg:px-8"
      >
        <div className="mx-auto max-w-2xl">
          <div className="mb-8">
            <time dateTime={post.published_at} className="text-gray-500">
              {post.published_at ? formatDate(post.published_at) : 'No date'}
            </time>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {post.title}
            </h1>
            <div className="mt-4 flex items-center">
              <div className="h-10 w-10 rounded-full bg-gray-50" />
              <div className="ml-4">
                <p className="text-sm font-semibold text-gray-900">
                  Hologramview Technologies
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg prose-indigo mx-auto mt-16">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
      </motion.article>
    </div>
  )
}
