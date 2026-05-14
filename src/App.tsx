/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Facebook, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Star, 
  Anchor,
  Sun,
  Waves
} from "lucide-react";

const IMAGES = [
  "https://i.postimg.cc/FFW4g8fQ/469861200-519012891100159-2398208358358233176-n.jpg",
  "https://i.postimg.cc/kX2djs8j/474063768-550492644631188-4713803586505470879-n.jpg",
  "https://i.postimg.cc/hPXqCsxM/474268416-551045971242522-6206699701040565476-n.jpg",
  "https://i.postimg.cc/VLJc7gMH/474445937-550493894631063-7109952352273282711-n.jpg",
  "https://i.postimg.cc/NfKwNDTJ/476235205-564631983217254-4122589035381140938-n.jpg",
  "https://i.postimg.cc/SNHbH971/476461541-565285103151942-5194983599366912295-n.jpg",
  "https://i.postimg.cc/WbxcxZ68/476831497-565285109818608-8865663819797362396-n.jpg"
];

const WaveTransition = ({ color = "#FFF8F0", flip = false }) => (
  <div className={`wave-divider ${flip ? 'rotate-180' : ''}`} style={{ backgroundColor: 'transparent' }}>
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path 
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.05,108.5,133.15,116,201,100,268.85,84,263.39,67.23,321.39,56.44Z" 
        fill={color}
      ></path>
    </svg>
  </div>
);

export default function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Decorative floating elements */}
      <div className="fixed top-20 left-10 opacity-5 pointer-events-none rotate-12">
        <Anchor size={120} />
      </div>
      <div className="fixed bottom-20 right-10 opacity-5 pointer-events-none -rotate-12">
        <Sun size={150} />
      </div>

      {/* Hero Section */}
      <header className="relative pt-12 pb-32 confetti-bg px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", damping: 12 }}
            className="mb-8 relative"
          >
            <div className="absolute inset-0 bg-sand/30 blur-3xl rounded-full scale-150 -z-10" />
            <img 
              src="https://i.postimg.cc/sgfH6DbK/336773682-121821437422761-5437428296227120744-n-(1).jpg"
              alt="Gofrownia Dan & Dad"
              className="w-40 h-40 md:w-56 md:h-56 rounded-full border-8 border-white shadow-xl object-cover"
            />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl mb-4 leading-tight"
          >
            Gofrownia <span className="block italic text-ocean">Dan & Dad</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-text-muted font-medium max-w-2xl"
          >
            Legendarne gofry w Dźwirzynie. <br />
            <span className="text-waffle">Tradycja od 1984 roku.</span>
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex gap-4"
          >
            <a 
              href="#lokalizacja" 
              className="bg-ocean hover:bg-ocean-light text-white px-8 py-4 rounded-full font-bold shadow-lg transition-all transform hover:-translate-y-1 flex items-center gap-2"
            >
              <MapPin size={20} /> Znajdź nas
            </a>
            <a 
              href="#galeria" 
              className="bg-waffle hover:bg-waffle-light text-white px-8 py-4 rounded-full font-bold shadow-lg transition-all transform hover:-translate-y-1 flex items-center gap-2"
            >
               Menu & Zdjęcia
            </a>
          </motion.div>
        </div>

        {/* Floating Shell SVGs could go here */}
      </header>

      <WaveTransition color="#FFF8F0" />
      
      {/* Story Section */}
      <section className="bg-bg-section py-20 px-4 relative wood-texture overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp} className="mb-12">
            <h2 className="text-4xl md:text-6xl mb-6">Nasza Historia</h2>
            <div className="w-24 h-1 bg-sand mx-auto mb-8 rounded-full" />
            <p className="text-lg md:text-xl leading-relaxed text-text">
              Gofry od 1984 roku. Oryginalna receptura i tylko naturalne składniki zapewniają nam 
              zadowolenie na twarzach prawdziwych koneserów i ich rodziców. Od dekad dbamy o to, 
              by każdy kęs naszych gofrów przywoływał najlepsze wspomnienia wakacji nad morzem.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="waffle-card">
              <Sun className="text-waffle mb-4 mx-auto" size={40} />
              <h3 className="text-2xl mb-2">Naturalne</h3>
              <p className="text-text-muted">Tylko świeże jaja, mleko i mąka. Żadnych proszków i polepszaczy.</p>
            </div>
            <div className="ocean-card">
              <Star className="text-ocean mb-4 mx-auto" size={40} />
              <h3 className="text-2xl mb-2">Tradycyjne</h3>
              <p className="text-text-muted">Receptura przekazywana z pokolenia na pokolenie od 1984 roku.</p>
            </div>
            <div className="waffle-card">
              <Waves className="text-waffle mb-4 mx-auto" size={40} />
              <h3 className="text-2xl mb-2">Baltyckie</h3>
              <p className="text-text-muted">Prawdziwy smak Dźwirzyna, dostępny tuż przy samej plaży.</p>
            </div>
          </div>
        </div>
      </section>

      <WaveTransition color="#FDF6E3" flip />

      {/* Gallery Section */}
      <section id="galeria" className="py-20 px-4 bg-bg overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-4">Galeria Smaków</h2>
            <p className="text-text-muted">Zobacz jak wyglądają nasze małe dzieła sztuki</p>
          </motion.div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 pb-12">
            {IMAGES.map((src, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="mb-8 break-inside-avoid group"
              >
                <div className="relative p-3 bg-white shadow-sm rounded-lg border border-sand/20 transition-all duration-500 group-hover:shadow-2xl group-hover:-rotate-1 group-hover:scale-[1.02]">
                  <img 
                    src={src} 
                    alt={`Gofrowa inspiracja ${idx}`} 
                    className="w-full h-auto rounded-md"
                  />
                  {/* Decorative tape or corner element could go here */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-12 h-4 bg-sand/30 backdrop-blur-sm -rotate-2 hidden group-hover:block" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WaveTransition color="#FFF8F0" />

      {/* Info & Reviews Section */}
      <section className="bg-bg-section py-20 px-4 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Info Card */}
          <motion.div {...fadeInUp} className="space-y-8">
            <h2 className="text-4xl md:text-5xl">Gdzie nas znaleźć?</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-waffle/10 rounded-xl text-waffle shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Adres</h4>
                  <p className="text-text-muted">Wyzwolenia 24, 78-131 Dźwirzyno</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-ocean/10 rounded-xl text-ocean shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Telefon</h4>
                  <p className="text-text-muted">452 110 100</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-ocean/10 rounded-xl text-ocean shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">E-mail</h4>
                  <p className="text-text-muted">dandad2023@hotmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-sand/10 rounded-xl text-waffle shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Godziny otwarcia</h4>
                  <div className="grid grid-cols-2 gap-2 mt-2 font-mono text-sm">
                    <span>Poniedziałek:</span> <span>10:00 - 19:00</span>
                    <span>Wtorek:</span> <span>10:00 - 19:00</span>
                    <span>Środa:</span> <span>10:00 - 19:00</span>
                    <span>Czwartek:</span> <span>10:00 - 19:00</span>
                    <span>Piątek:</span> <span>10:00 - 19:00</span>
                    <span>Sobota:</span> <span>10:00 - 19:00</span>
                    <span>Niedziela:</span> <span>10:00 - 19:00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <a 
                href="https://www.facebook.com/DanielPawliszcze" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors shadow-lg"
              >
                <Facebook size={24} /> Obserwuj nas na Facebooku
              </a>
            </div>
          </motion.div>

          {/* Facebook Link Section */}
          <motion.div {...fadeInUp} className="waffle-card border-ocean">
            <h3 className="text-3xl mb-4 text-ocean">Opinie Naszych Gości</h3>
            <p className="text-text-muted mb-6 italic">
              "Rewelacyjne desery, gofry i kawa 👌 ośmielę się stwierdzić, że prawdopodobnie najlepszy tego typu punkt nad naszym polskim morzem! 🌊 Będziemy tu wracać nie raz i nie dwa! 🤸 Polecamy najmocniej!"
            </p>
            <div className="space-y-4">
              <div className="flex gap-1 text-sand">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
              </div>
              <p className="text-sm font-bold">Więcej opinii znajdziesz na naszym profilu:</p>
              <a 
                href="https://www.facebook.com/DanielPawliszcze/reviews/?id=100090113719669&sk=reviews" 
                target="_blank" 
                rel="noreferrer"
                className="block p-4 border-2 border-ocean/20 rounded-xl hover:bg-ocean/5 transition-colors group"
              >
                <div className="flex justify-between items-center">
                  <span className="font-bold text-ocean">Pokaż opinie na FB</span>
                  <div className="bg-ocean text-white p-1 rounded-full group-hover:translate-x-1 transition-transform">
                    <Facebook size={16} />
                  </div>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section id="lokalizacja" className="w-full h-[450px] bg-bg relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2336.1696097625636!2d15.40669907719181!3d54.159359113581694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47001339d0e4c465%3A0x750ddd2955451d68!2sWyzwolenia%2024%2C%2078-131%20D%C5%BAwirzyno!5e0!3m2!1spl!2spl!4v1778756950125!5m2!1spl!2spl" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-700"
          title="Lokalizacja Gofrowni"
        ></iframe>
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-ocean/20 hidden md:block">
          <p className="font-bold flex items-center gap-2 text-ocean">
            <MapPin size={16} /> Wyzwolenia 24, Dźwirzyno
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-text text-white py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl text-sand mb-2">Dan & Dad</h2>
            <p className="text-white/60 font-mono text-sm tracking-widest uppercase">Prawdziwe Gofry od 1984</p>
          </div>
          
          <div className="flex gap-6">
            <a href="https://www.facebook.com/DanielPawliszcze" className="hover:text-ocean transition-colors">
              <Facebook size={28} />
            </a>
            <a href="mailto:dandad2023@hotmail.com" className="hover:text-ocean transition-colors">
              <Mail size={28} />
            </a>
          </div>

          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Gofrownia Dan & Dad Dźwirzyno. <br className="md:hidden" />
            Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </footer>
    </div>
  );
}
