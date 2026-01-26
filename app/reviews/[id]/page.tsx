'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Header from '../../component/header'
import Footer from '../../component/footer'

type Review = {
  id: number
  name: string
  email: string
  rating: string
  review: string
  product: string
  created_at: string
}

export default function ReviewsDetailPage() {
  const { id } = useParams()
  const [review, setReview] = useState<Review | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (id) fetchReview()
  }, [id])

  const fetchReview = async () => {
    try {
      const res = await fetch(`/api/reviews/${id}`)
      const data = await res.json()

      if (data.success) {
        setReview(data.data)
      }
    } catch (error) {
      console.error('Error fetching review:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <><Header /><p className="text-center py-20">Loading...</p><Footer /></>

  if (!review) return <><Header /><p className="text-center py-20">Review not found</p><Footer /></>

 return (
  <>
    <Header />

    <div className="max-w-2xl mx-auto py-12 px-4">
      <div className="bg-white rounded-lg shadow-md p-6">

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {review.name}
        </h1>

        <div className="text-gray-700 mb-2">
          <strong>Email:</strong> {review.email}
        </div>

        <div className="text-gray-700 mb-2">
          <strong>Rating:</strong> {'⭐'.repeat(Number(review.rating))}
        </div>

        <div className="text-gray-700 mb-2">
          <strong>Product / Service:</strong> {review.product || 'N/A'}
        </div>

        <div className="text-gray-700 mb-4">
          <strong>Date:</strong>{' '}
          {new Date(review.created_at).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </div>

        <hr className="my-4" />

        <h2 className="text-xl font-semibold mb-2">Review</h2>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line text-lg">
          {review.review}
        </p>

      </div>
    </div>

    <Footer />
  </>
)

}
