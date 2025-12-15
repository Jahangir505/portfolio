"use client";

import { VisitorCounter } from "@/components/ui/visitor-counter";
import { motion } from "framer-motion";
import { Github, Heart, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { name: "GitHub", href: "https://github.com", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com", icon: Twitter },
  { name: "Email", href: "mailto:jahangir147441@gmail.com", icon: Mail },
];

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-background/50 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold gradient-text">
                Jahangir Hossain
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Full Stack Developer crafting beautiful, performant web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-[oklch(0.8_0.18_195)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-foreground">
              Connect
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg glass hover:bg-white/10 transition-colors group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5 text-muted-foreground group-hover:text-[oklch(0.8_0.18_195)] transition-colors" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Jahangir Hossain. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <VisitorCounter />
              <p className="text-sm text-muted-foreground flex items-center">
                Made with <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" /> and lots of coffee
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[oklch(0.8_0.18_195)] to-transparent" />
    </footer>
  );
}
