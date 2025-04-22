'use client';

import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

export default function SocialLinks() {
  return (
    <div className="flex gap-4 items-center justify-center md:justify-start">
      <a
        href="https://facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-yellow-300 transition-colors"
        aria-label="Facebook"
      >
        <FaFacebook size={24} />
      </a>
      <a
        href="https://instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-yellow-300 transition-colors"
        aria-label="Instagram"
      >
        <FaInstagram size={24} />
      </a>
      <a
        href="https://youtube.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-yellow-300 transition-colors"
        aria-label="YouTube"
      >
        <FaYoutube size={24} />
      </a>
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-yellow-300 transition-colors"
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  );
}