  'use client'

  import { useEffect, useState } from 'react'
  import Header from '../component/header'
  import Footer from '../component/footer'

  type Reviews = {
    id: number
    name: string
    email: string
    rating: string
    review: string
    product: string
    created_at: string
    
  }

  export default function ReviewsPage() {
    const [reviews, setReviews] = useState<Reviews[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      fetchReviews()
    }, [])

    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/reviews')
        const data = await response.json()
        
        if (data.success) {
          setReviews(data.data)
        }
      } catch (error) {
        console.error('Error fetching reviews:', error)
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
              Our Reviews
            </h1>

            {loading ? (
              <div className="text-center py-12">
                <p className="text-gray-600">Loading Reviews...</p>
              </div>
            ) : reviews.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600">No reviews found.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {reviews.map((review) => (
                  <div
                    key={review.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    
                    <div className="p-6">
                      <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                        {review.name}
                      </h2>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {review.email}
                      </p>
                      <div className="flex justify-between items-center text-sm text-gray-500">
                        <span>By ⭐{review.rating}</span>
                          <p className="text-gray-600 mb-4 line-clamp-3">
                        {review.review}
                      </p>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                        {review.product}
                      </p>
                        <span>
                          {new Date(review.created_at).toLocaleDateString()}
                        </span>
                      </div>
                      <a
                        href={`/news/${review.id}`}
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
