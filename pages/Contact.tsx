
import React, { useState } from 'react';
import Button from '../components/ui/Button';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you shortly.');
        console.log('Form submitted:', formData);
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    return (
        <>
            <header className="bg-primary text-white py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold font-heading">Get in Touch</h1>
                    <p className="mt-2 text-lg text-gray-300">We're here to help you achieve your safety and environmental goals.</p>
                </div>
            </header>

            <section className="py-20 bg-light">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold font-heading text-primary mb-4">Contact Information</h2>
                        <ul className="space-y-4 text-gray-600">
                            <li className="flex items-center"><span className="font-semibold w-20">Phone:</span> 0114646081 / 0711700652</li>
                            <li className="flex items-center"><span className="font-semibold w-20">Email:</span> info@safemaxconsultants.co.ke</li>
                            <li className="flex items-center"><span className="font-semibold w-20">Address:</span> Mombasa, Kenya</li>
                        </ul>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold font-heading text-primary mb-4">Send us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="sr-only">Name</label>
                                <input type="text" name="name" id="name" placeholder="Name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" />
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">Email</label>
                                <input type="email" name="email" id="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" />
                            </div>
                            <div>
                                <label htmlFor="phone" className="sr-only">Phone</label>
                                <input type="tel" name="phone" id="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" />
                            </div>
                            <div>
                                <label htmlFor="message" className="sr-only">Message</label>
                                <textarea name="message" id="message" rows={4} placeholder="Message" value={formData.message} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"></textarea>
                            </div>
                            <div>
                                <Button type="submit" className="w-full" variant="secondary">Submit Inquiry</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
