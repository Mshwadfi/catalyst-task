/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

const BASE_URL = 'https://test.catalystegy.com/public/api';

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// User APIs
export const getUsers = () => api.get('/users');
export const createUser = (data: any) => api.post('/users', data);
export const getUser = (id: string) => api.get(`/users/${id}`);
export const updateUser = (id: string, data: any) => api.post(`/users/${id}`, data);
export const deleteUser = (id: string) => api.delete(`/users/${id}`);

// Property APIs
export const getProperties = () => api.get('/properties');
export const createProperty = (data: any) => api.post('/properties', data);
export const getProperty = (id: string) => api.get(`/properties/${id}`);
export const updateProperty = (id: string, data: any) => api.post(`/properties/${id}`, data);
export const deleteProperty = (id: string) => api.delete(`/properties/${id}`);

// Booking APIs
export const getBookings = () => api.get('/bookings');
export const createBooking = (data: any) => api.post('/bookings', data);
export const updateBookingStatus = (id: string, status: string) => 
  api.post(`/bookings/${id}/status`, { status });
export const deleteBooking = (id: string) => api.delete(`/bookings/${id}`);