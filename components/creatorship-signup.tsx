'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase-browser';

export default function CreatorshipSignup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    motivation: ''
  });

  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.from('creatorship_signups').insert([{ ...formData }]);

    if (error) {
      console.error('Supabase Insert Error:', error); // Log for debugging
      setError(error.message);
    } else {
      router.push('/creatorship/thank-you');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-xl p-6">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Radical Sensitive Creatorship
        </h2>
        <p className="text-center text-base mb-8">
          A space for depth-driven creators seeking resonance, not reach.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block font-medium">Why do you want to join?</label>
            <textarea
              name="motivation"
              value={formData.motivation}
              onChange={handleChange}
              required
              rows={4}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <button
            type="submit"
            className="bg-black text-white text-base px-4 py-2 rounded w-full"
          >
            Join the List
          </button>
        </form>
      </div>
    </div>
  );
}


