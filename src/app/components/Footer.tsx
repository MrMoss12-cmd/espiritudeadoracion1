import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    // Changed background color from bg-[#0000FF] to bg-[#8B0000]
    <footer className="bg-[#8B0000] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8" style={{ width: '1099px' }}>
          {/* Logo and Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Espíritu de Adoración</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>(844) 555-5555</li>
              <li>INFO@ADORACION.COM</li>
              <li>CONTACTO@GMAIL.COM</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4 uppercase">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="/about" className="hover:text-white">ABOUT US</a></li>
              <li><a href="/sermons" className="hover:text-white">SERMONS</a></li>
              <li><a href="/events" className="hover:text-white">EVENTS</a></li>
              <li><a href="/blog" className="hover:text-white">BLOG</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-medium mb-4 uppercase">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white/80">FB</a>
              <a href="#" className="hover:text-white/80">TW</a>
              <a href="#" className="hover:text-white/80">IG</a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-medium mb-4">SUBSCRIBE TO GET LATEST<br />UPDATES AND NEWS</h4>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Youremail@gmail.com"
                className="bg-transparent border border-white/20 rounded px-4 py-2 text-sm flex-grow"
              />
              <button className="px-6 py-2 bg-[#FFD7BA] text-black rounded hover:bg-[#FFE4D1] transition-colors">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}