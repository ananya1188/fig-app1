'use client'

import { useState } from 'react'
import Header from '../../component/header'
import Footer from '../../component/footer'

export default function AddNewsPage() {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: '',
    image_url: '',
    category: '',
    publish_date: '',
    status: 'Published',
  })

  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const response = await fetch('/api/news', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setMessage('News added successfully!')
        setFormData({
          title: '',
          content: '',
          author: '',
          image_url: '',
          category: '',
          publish_date: '',
          status: 'Published',
        })
      } else {
        setMessage('Error: ' + data.error)
      }
    } catch (error) {
      setMessage('Error adding news')
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
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Add News
          </h1>

          <div className="bg-white rounded-lg shadow-md p-8">
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* News Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  News Title *
                </label>
                <input
                  type="text"
                  name="title"
                  required
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter news headline"
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>

              {/* Author */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Author Name *
                </label>
                <input
                  type="text"
                  name="author"
                  required
                  value={formData.author}
                  onChange={handleChange}
                  placeholder="Admin / Company Name"
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  News Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md"
                >
                  <option value="">Select category</option>
                  <option value="Announcement">Announcement</option>
                  <option value="Offer">Offer</option>
                  <option value="Event">Event</option>
                  <option value="Update">Update</option>
                </select>
              </div>

              {/* Publish Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Publish Date
                </label>
                <input
                  type="date"
                  name="publish_date"
                  value={formData.publish_date}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>

              {/* Status */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md"
                >
                  <option value="Published">Published</option>
                  <option value="Draft">Draft</option>
                </select>
              </div>

              {/* Featured Image */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Featured Image URL
                </label>
                <input
                  type="url"
                  name="image_url"
                  value={formData.image_url}
                  onChange={handleChange}
                  placeholder="https://example.com/news-image.jpg"
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>

              {/* Content */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  News Content *
                </label>
                <textarea
                  name="content"
                  required
                  rows={8}
                  value={formData.content}
                  onChange={handleChange}
                  placeholder="Write announcement, offer, event or company update..."
                  className="w-full px-4 py-2 border rounded-md"
                />
                <p className="text-xs text-gray-500 mt-2">
                  Keep it short, clear and time-based (news format).
                </p>
              </div>

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
    disabled:cursor-not-allowed
  "
>
  {loading ? 'Submitting...' : 'Submit News'}
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
