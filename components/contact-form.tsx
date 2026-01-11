'use client'

import React, { useState } from 'react'
import { toast } from 'sonner'

export const ContactForm = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { name, email, message } = formData
    if (!name || !email || !message) {
      toast.error('Please fill all the fields')
      return
    }
    // call you api here to submit the form
    // here is a mock api for you

    const response = await new Promise((resolve, rejects) => {
      setTimeout(() => {
        resolve('API Call Successfully')
      })
      if (false) {
        rejects('API Call Failed')
      }
    })

    if (response) {
      toast.success('Message sent successfully')
      setFormData({
        name: '',
        email: '',
        message: '',
      })
    } else {
      toast.error('Something went wrong')
    }
  }

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="shadow-section-inset dark:shadow-section-inset-dark mx-auto my-6 border-y border-neutral-100 px-4 py-12 dark:border-neutral-800"
    >
      <div className="mx-auto flex max-w-lg flex-col gap-5 ">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-sm font-medium tracking-tight text-neutral-600"
          >
            Full name
          </label>
          <input
            id="name"
            name="name"
            onChange={handleOnChange}
            type="text"
            placeholder="Tyler Durden"
            className="shadow-aceternity rounded-md px-2 py-1 text-sm focus:ring-primary focus:ring-2 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-sm font-medium tracking-tight text-neutral-600"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            onChange={handleOnChange}
            type="email"
            placeholder="tyler@example.com"
            className="shadow-aceternity rounded-md px-2 py-1 text-sm focus:ring-primary focus:ring-2 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-sm font-medium tracking-tight text-neutral-600"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            onChange={handleOnChange}
            placeholder="Tell me about your project..."
            className="shadow-aceternity rounded-md px-2 py-1 text-sm focus:ring-primary focus:ring-2 focus:outline-none resize-none"
          />
        </div>
        <button
          type="submit"
          className="rounded-md border border-neutral-200 bg-neutral-100 px-4 py-1.5 text-sm text-neutral-700 shadow-[0px_4px_8px_0px_var(--color-neutral-200)_inset] transition-colors hover:bg-neutral-200 dark:border-neutral-700 cursor-pointer dark:bg-neutral-800 dark:text-neutral-200 dark:shadow-[0px_4px_8px_0px_var(--color-neutral-700)_inset]"
        >
          Send Message
        </button>
      </div>
    </form>
  )
}
