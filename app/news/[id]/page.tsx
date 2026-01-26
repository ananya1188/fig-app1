'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Header from '../../component/header'
import Footer from '../../component/footer'

type News = {
  id: number
  title: string
  content: string
  author: string
  created_at: string
  image_url: string
  category: string
  publish_date: string
  status: string
}

export default function NewsDetailPage() {
  const { id } = useParams()
  const [news, setNews] = useState<News | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (id) fetchNews()
  }, [id])

  const fetchNews = async () => {
    try {
      const res = await fetch(`/api/news/${id}`)
      const data = await res.json()

      if (data.success) {
        setNews(data.data)
      }
    } catch (error) {
      console.error('Error fetching news:', error)
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

  if (!news) {
    return (
      <>
        <Header />
        <div className="text-center py-20">
          <p className="text-gray-600">News not found</p>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />

      <div className="max-w-4xl mx-auto py-12 px-4">
        {news.image_url && (
          <img
            src={news.image_url}
            alt={news.title}
            className="w-full h-80 object-cover rounded-lg mb-6"
          />
        )}

        <div className="mb-4">
          {news.category && (
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mr-2">
              {news.category}
            </span>
          )}
          {news.status && (
            <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
              {news.status}
            </span>
          )}
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {news.title}
        </h1>

        <div className="text-gray-500 mb-6">
          <span>By {news.author}</span>
          {news.publish_date && (
            <>
              {' • '}
              <span>
                {new Date(news.publish_date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </>
          )}
          {' • '}
          <span>
            {new Date(news.created_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
        </div>

        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed whitespace-pre-line text-lg">
            {news.content}
          </p>
        </div>
      </div>

      <Footer />
    </>
  )
}
