'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PageHeader } from '@/components/ui/PageHeader';
import { Card } from '@/components/ui/Card';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';

const socialLinks = [
  {
    platform: 'Instagram',
    url: 'https://instagram.com/mumbobeatz',
    icon: 'pi pi-instagram',
    label: '@mumbobeatz'
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com/Mumbobeatz',
    icon: 'pi pi-twitter',
    label: '@Mumbobeatz'
  },
  {
    platform: 'YouTube',
    url: 'https://youtube.com/@mumbobeatz',
    icon: 'pi pi-youtube',
    label: '@mumbobeatz'
  },
  {
    platform: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61575874555012',
    icon: 'pi pi-facebook',
    label: 'DJ Mumbo'
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader
        title="Contact"
        subtitle="Get in touch for bookings and collaborations"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="h-full">
            <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="name">Name</label>
                <InputText
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email">Email</label>
                <InputText
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="subject">Subject</label>
                <InputText
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message">Message</label>
                <InputTextarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full"
                  required
                />
              </div>
              <Button
                type="submit"
                label="Send Message"
                icon="pi pi-send"
                className="w-full"
              />
            </form>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="h-full">
            <h2 className="text-2xl font-semibold mb-6">Connect With Me</h2>
            <div className="space-y-6">
              <p className="text-gray-400">
                Follow DJ Mumbo on social media for the latest updates, releases, and behind-the-scenes content.
              </p>
              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-gray-400 hover:text-primary-light transition-colors p-4 rounded-lg hover:bg-background-paper/50"
                  >
                    <i className={`${link.icon} text-3xl`}></i>
                    <div>
                      <div className="font-semibold">{link.platform}</div>
                      <div className="text-sm">{link.label}</div>
                    </div>
                  </a>
                ))}
              </div>
              <div className="pt-6 border-t border-background-paper">
                <h3 className="text-xl font-semibold mb-4">Booking Inquiries</h3>
                <p className="text-gray-400">
                  For booking inquiries, please use the contact form or reach out directly via email at{' '}
                  <a href="mailto:booking@djmumbo.com" className="text-primary-light hover:underline">
                    booking@djmumbo.com
                  </a>
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
} 