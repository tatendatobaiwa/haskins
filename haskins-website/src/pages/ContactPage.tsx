import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormInputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

const ContactPage: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();

    const onSubmit: SubmitHandler<FormInputs> = data => {
        console.log(data);
        // Here you would typically handle form submission, e.g., by sending data to a Firebase Function
        // that emails the form contents or saves it to Firestore.
        alert('Thank you for your message! We will get back to you shortly.');
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-gray-900">Contact Us</h1>
                <p className="mt-4 text-lg text-gray-600">We'd love to hear from you. Reach out with any questions or inquiries.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input type="text" id="name" {...register('name', { required: 'Name is required' })} className={`mt-1 block w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`} />
                            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" id="email" {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })} className={`mt-1 block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`} />
                            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                            <input type="text" id="subject" {...register('subject', { required: 'Subject is required' })} className={`mt-1 block w-full px-3 py-2 border ${errors.subject ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`} />
                            {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>}
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea id="message" {...register('message', { required: 'Message is required' })} rows={4} className={`mt-1 block w-full px-3 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}></textarea>
                            {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
                        </div>

                        <div>
                            <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>

                {/* Direct Contact Info */}
                <div className="space-y-8">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Details</h2>
                        <div className="text-gray-600 space-y-3">
                            <p><strong>Address:</strong> Plot 205, Francistown, Botswana</p>
                            <p><strong>Phone:</strong> +267 241 2301</p>
                            <p><strong>Email:</strong> info@haskins.co.bw</p>
                        </div>
                    </div>
                    {/* Placeholder for a small map */}
                    <div className="h-64 bg-gray-200 rounded-lg text-center flex items-center justify-center">
                        <p className="text-gray-500">Map of Head Office</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
