'use client'

import { useState } from 'react'
import Header from '../../component/header'
import Footer from '../../component/footer'

export default function AddReviewPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: '',
    review: '',
    product: '',
  })

  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setMessage('Review added successfully!')
        setFormData({
          name: '',
          email: '',
          rating: '',
          review: '',
          product: '',
        })
      } else {
        setMessage('Error: ' + data.error)
      }
    } catch (error) {
      setMessage('Error adding review')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Add Review
          </h1>

          <div className="bg-white rounded-lg shadow-md p-8">
            <form onSubmit={handleSubmit} className="space-y-6">

              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-md"
              />

              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-md"
              />

              <select
                name="rating"
                required
                value={formData.rating}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
              >
                <option value="">Select Rating</option>
                <option value="5">⭐⭐⭐⭐⭐</option>
                <option value="4">⭐⭐⭐⭐</option>
                <option value="3">⭐⭐⭐</option>
                <option value="2">⭐⭐</option>
                <option value="1">⭐</option>
              </select>

              <input
                type="text"
                name="product"
                value={formData.product}
                onChange={handleChange}
                placeholder="Product / Service (optional)"
                className="w-full px-4 py-2 border rounded-md"
              />

              <textarea
                name="review"
                required
                rows={6}
                value={formData.review}
                onChange={handleChange}
                placeholder="Write your review..."
                className="w-full px-4 py-2 border rounded-md"
              />

              <button
                type="submit"
                disabled={loading}
                className="
                  w-full
                  bg-primary
                  text-primary-foreground
                  py-3
                  rounded-md
                  font-medium
                  transition
                  hover:opacity-90
                  disabled:opacity-50
                "
              >
                {loading ? 'Submitting...' : 'Submit Review'}
              </button>

              {message && (
                <div className="text-center text-sm mt-4">{message}</div>
              )}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
