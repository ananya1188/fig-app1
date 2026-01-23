  'use client'

  import { useEffect, useState } from 'react'
  import Header from '../component/header'
  import Footer from '../component/footer'

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

  export default function NewsPage() {
    const [news, setNews] = useState<News[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      fetchNews()
    }, [])

    const fetchNews = async () => {
      try {
        const response = await fetch('/api/news')
        const data = await response.json()
        
        if (data.success) {
          setNews(data.data)
        }
      } catch (error) {
        console.error('Error fetching news:', error)
      } finally {
        setLoading(false)
      }
    }

    return (
      <>
        <Header />
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Our News
            </h1>

            {loading ? (
              <div className="text-center py-12">
                <p className="text-gray-600">Loading news...</p>
              </div>
            ) : news.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600">No news found.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {news.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    {item.image_url && (
                      <img
                        src={item.image_url}
                        alt={item.title}
                        className="w-full h-48 object-cover"
                      />
                    )}
                    <div className="p-6">
                      <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h2>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {item.content}
                      </p>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {item.author}
                      </p>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {item.category}
                      </p>
                           <p className="text-gray-600 mb-4 line-clamp-3">
                        {item.status}
                      </p>
                           <p className="text-gray-600 mb-4 line-clamp-3">
                        {item.publish_date}
                      </p>
                      <div className="flex justify-between items-center text-sm text-gray-500">
                        <span>By {item.author}</span>
                        <span>
                          {new Date(item.created_at).toLocaleDateString()}
                        </span>
                      </div>
                      <a
                        href={`/news/${item.id}`}
                        className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Read More →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <Footer />
      </>
    )
  }
