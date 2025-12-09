"use client";

import { staggerContainer, staggerItem } from "@/lib/animations";
import { zodResolver } from "@hookform/resolvers/zod";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import { CheckCircle2, Mail, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      // Show success state
      setIsSuccess(true);
      
      // Trigger confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#00ffff", "#ff00ff", "#ff0080"],
      });

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        reset();
      }, 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message. Please try again.');
      console.error('Error sending message:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[oklch(0.8_0.18_195)] font-semibold mb-2">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let&apos;s Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s discuss how I can help bring your ideas to life.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <p className="text-muted-foreground mb-8">
                Have a project in mind? I&apos;d love to hear about it. Send me a message and I&apos;ll get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-4">
              <motion.a
                href="mailto:jahangir147441@gmail.com"
                className="flex items-center gap-4 p-4 glass rounded-lg hover:bg-white/10 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="p-3 rounded-lg bg-[oklch(0.8_0.18_195)]/10 group-hover:bg-[oklch(0.8_0.18_195)]/20 transition-colors">
                  <Mail className="w-6 h-6 text-[oklch(0.8_0.18_195)]" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-sm text-muted-foreground">jahangir147441@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                href="https://wa.me/8801778175444"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 glass rounded-lg hover:bg-white/10 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="p-3 rounded-lg bg-[oklch(0.7_0.28_285)]/10 group-hover:bg-[oklch(0.7_0.28_285)]/20 transition-colors">
                  <svg className="w-6 h-6 text-[oklch(0.7_0.28_285)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <p className="text-sm text-muted-foreground">+880 1778 175444</p>
                </div>
              </motion.a>
            </div>

            <div className="pt-8">
              <p className="text-sm text-muted-foreground mb-4">
                Available for freelance projects and full-time opportunities
              </p>
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-green-500">Available for work</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <motion.div variants={staggerItem}>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  {...register("name")}
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 glass rounded-lg border border-white/10 focus:border-[oklch(0.8_0.18_195)] focus:outline-none transition-colors"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </motion.div>

              <motion.div variants={staggerItem}>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  {...register("email")}
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 glass rounded-lg border border-white/10 focus:border-[oklch(0.8_0.18_195)] focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </motion.div>

              <motion.div variants={staggerItem}>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  {...register("subject")}
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 glass rounded-lg border border-white/10 focus:border-[oklch(0.8_0.18_195)] focus:outline-none transition-colors"
                  placeholder="Project inquiry"
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                )}
              </motion.div>

              <motion.div variants={staggerItem}>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  {...register("message")}
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 glass rounded-lg border border-white/10 focus:border-[oklch(0.8_0.18_195)] focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </motion.div>

              <motion.button
                variants={staggerItem}
                type="submit"
                disabled={isSubmitting || isSuccess}
                className="w-full px-6 py-4 bg-gradient-to-r from-[oklch(0.8_0.18_195)] to-[oklch(0.7_0.28_285)] text-background font-semibold rounded-lg hover:shadow-2xl transition-shadow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                whileHover={!isSubmitting && !isSuccess ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting && !isSuccess ? { scale: 0.98 } : {}}
              >
                {isSuccess ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-background border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg"
                >
                  <p className="text-red-500 text-sm">{error}</p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
