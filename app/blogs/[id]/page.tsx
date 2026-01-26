'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Header from '../../component/header'
import Footer from '../../component/footer'

type Blog = {
  id: number
  title: string
  content: string
  author: string
  created_at: string
  image_url?: string
}

export default function BlogDetailPage() {
  const { id } = useParams()
  const [blog, setBlog] = useState<Blog | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (id) fetchBlog()
  }, [id])

  const fetchBlog = async () => {
    try {
      const res = await fetch(`/api/blogs/${id}`)
      const data = await res.json()
      console.log('API response:', data) // debug

      if (data.success) {
        setBlog(data.data)
      }
    } catch (error) {
      console.error('Error fetching blog:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <>
        <Header />
        <div className="text-center py-20">
          <p className="text-gray-600">Loading...</p>
        </div>
        <Footer />
      </>
    )
  }

  if (!blog) {
    return (
      <>
        <Header />
        <div className="text-center py-20">
          <p className="text-gray-600">Blog not found</p>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />

      <div className="max-w-4xl mx-auto py-12 px-4">
        {/* Blog Image */}
        {blog.image_url && (
          <img
            src={blog.image_url}
            alt={blog.title}
            className="w-full h-80 object-cover rounded-lg mb-6"
          />
        )}

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{blog.title}</h1>

        {/* Author & Date */}
        <div className="text-gray-500 mb-6">
          <span>By {blog.author}</span>
          {' • '}
          <span>
            {new Date(blog.created_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
        </div>

        {/* Content */}
        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed whitespace-pre-line text-lg">
            {blog.content}
          </p>
        </div>
      </div>

      <Footer />
    </>
  )
}
