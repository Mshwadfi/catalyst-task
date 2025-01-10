"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
// import { createProperty } from '@/lib/api';

const propertySchema = z.object({
  title: z.string().min(5),
  description: z.string().min(20),
  location: z.string().min(5),
  price: z.number().min(1),
  bedrooms: z.number().min(1),
  bathrooms: z.number().min(1),
  maxGuests: z.number().min(1),
  images: z.array(z.instanceof(File)).min(1), // Accepts an array of File objects
  amenities: z.string(),
});

export default function HostPage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState('');
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(propertySchema),
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    // Handle the form submission, including uploading images if necessary
    console.log('Form Data:', data);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">List your property</h1>
          <p className="text-gray-600">Fill in the details about your place</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">Property Title</label>
            <input
              placeholder="Cozy beachfront apartment"
              {...register('title')}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title.message as string}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              placeholder="Describe your place..."
              {...register('description')}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 h-32 resize-none"
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">{errors.description.message as string}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Location</label>
            <input
              placeholder="Miami Beach, FL"
              {...register('location')}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
            {errors.location && (
              <p className="text-red-500 text-sm mt-1">{errors.location.message as string}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Price per night</label>
              <input
                type="number"
                placeholder="100"
                {...register('price', { valueAsNumber: true })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
              {errors.price && (
                <p className="text-red-500 text-sm mt-1">{errors.price.message as string}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Max guests</label>
              <input
                type="number"
                placeholder="4"
                {...register('maxGuests', { valueAsNumber: true })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
              {errors.maxGuests && (
                <p className="text-red-500 text-sm mt-1">{errors.maxGuests.message as string}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Bedrooms</label>
              <input
                type="number"
                placeholder="2"
                {...register('bedrooms', { valueAsNumber: true })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
              {errors.bedrooms && (
                <p className="text-red-500 text-sm mt-1">{errors.bedrooms.message as string}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Bathrooms</label>
              <input
                type="number"
                placeholder="2"
                {...register('bathrooms', { valueAsNumber: true })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
              {errors.bathrooms && (
                <p className="text-red-500 text-sm mt-1">{errors.bathrooms.message as string}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Upload Images</label>
            <input
              type="file"
              accept="image/*"
              multiple
              {...register('images')}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
            {errors.images && (
              <p className="text-red-500 text-sm mt-1">{errors.images.message as string}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Amenities</label>
            <input
              placeholder="Wifi, TV, Kitchen (comma-separated)"
              {...register('amenities')}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
            {errors.amenities && (
              <p className="text-red-500 text-sm mt-1">{errors.amenities.message as string}</p>
            )}
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2 px-4 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition disabled:opacity-50"
          >
            {isSubmitting ? 'Creating listing...' : 'Create listing'}
          </button>
        </form>
      </div>
    </div>
  );
}
