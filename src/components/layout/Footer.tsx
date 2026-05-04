// import { MapPin, Phone, Mail } from "lucide-react";
// import logo from "@/assets/logo_transparent_fixed.png";

// const Footer = () => {
//   return (
//     <footer id="contact" className="bg-[#0f3b63] text-primary-foreground">
//       <div className="container mx-auto px-6 py-16">
//         <div className="grid md:grid-cols-4 gap-12">
//           {/* Brand */}
//           <div className="md:col-span-1">
//             <div className="flex items-center gap-3 mb-4">
//               <div className="relative w-12 h-12 rounded-full flex items-center justify-center">
//                 <img
//                   src={logo}
//                   alt="Sri Chaitanya logo"
//                   className="w-25 h-25 object-contain"
//                 />
//               </div>
//               <div>
//                 <span className="font-serif text-xl font-bold block">Sri Chaitanya</span>
//                 <span className="text-primary-foreground/70 text-sm">Madhapur, Hyderabad</span>
//               </div>
//             </div>
//             <p className="text-primary-foreground/60 text-sm leading-relaxed">
//               Shaping future leaders with world-class education for over 40 years.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="font-serif font-bold text-lg mb-4">Quick Links</h4>
//             <ul className="space-y-3 text-sm text-primary-foreground/60">
//               <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
//               <li><a href="#achievements" className="hover:text-accent transition-colors">Achievements</a></li>
//               <li><a href="#" className="hover:text-accent transition-colors">Student Life</a></li>
//               <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
//             </ul>
//           </div>

//           {/* Boards */}
//           <div>
//             <h4 className="font-serif font-bold text-lg mb-4">Boards Offered</h4>
//             <ul className="space-y-3 text-sm text-primary-foreground/60">
//               <li>CBSE</li>
//               <li>ICSE</li>
//               <li>IGCSE</li>
//               <li>State Board</li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h4 className="font-serif font-bold text-lg mb-4">Contact</h4>
//             <ul className="space-y-3 text-sm text-primary-foreground/60">
//               <li className="flex items-start gap-2">
//                 <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
//                 Plot No: 80, Sri Sai Plaza, Ayyappa Society, Madhapur, Hyderabad, Telangana - 500081
//               </li>
//               <li className="flex items-center gap-2">
//                 <Phone className="w-4 h-4 shrink-0" />
//                 1800-123-4567
//               </li>
//               <li className="flex items-center gap-2">
//                 <Mail className="w-4 h-4 shrink-0" />
//                 info@srichaitanyaschool.net
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="mt-12">
//           <h4 className="font-serif font-bold text-lg mb-4">Find Us</h4>
//           <div className="overflow-hidden rounded-2xl border border-primary-foreground/10 bg-white/5">
//             <iframe
//               title="Sri Chaitanya Techno School Location"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d74941.26307236507!2d78.38932912343273!3d17.433833063097143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9169d65d473f%3A0x7eef9356821e063e!2sSri%20Chaitanya%20Techno%20School!5e1!3m2!1sen!2sin!4v1771563535342!5m2!1sen!2sin"
//               className="w-full h-64 md:h-72"
//               allowFullScreen
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             />
//           </div>
//         </div>

//         <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm text-primary-foreground/40">
//           (c) 2026 Sri Chaitanya Schools. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




"use client";
import { motion, AnimatePresence } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
  ChevronRight,
  Award,
  BookOpen,
  Users,
  GraduationCap,
  Navigation,
  Building2,
  Locate,
  School,
  Heart,
  Star,
  Shield,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";
const logo = "/assets/logo_transparent_fixed.png";

type FooterProps = {
  onNavigate?: (section: string) => void;
};

// Enhanced Corporate Office Data
const CORPORATE_OFFICE = {
  name: "Sri Chaitanya School Corporate Office",
  address: "Sri Sai Plaza, Plot No. 80, Ayyappa Society Main Rd, Madhapur",
  city: "Hyderabad",
  state: "Telangana",
  pincode: "500081",
  landmark: "Near Kavuri Hills Junction",
  coordinates: { lat: 17.446156294852543, lng: 78.39222245770425 },
  phone: "+91 1800-123-4567",
  email: "corporate@srichaitanya.edu",
  hours: "Mon-Sat: 9:00 AM - 6:00 PM",
  established: "1986",
  employees: "8,200+",
  students: "1,25,000+",
  branches: "156",
};

// Enhanced Nearby Branches with real data
const NEARBY_BRANCHES = [
  {
    name: "Madhapur Main Branch",
    area: "Kavuri Hills",
    address: "Plot 80, Kavuri Hills, Madhapur",
    phone: "+91 1800-123-1122",
    distance: "0.5",
    students: "3,200",
    rating: 4.8,
    facilities: ["Smart Class", "Sports Complex", "Library"],
    coordinates: { lat: 17.4461, lng: 78.3922 },
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=200&h=150&fit=crop"
  },
  {
    name: "Hitech City Branch",
    area: "Hitech City",
    address: "Cyber Pearl, Hitech City",
    phone: "+91 1800-123-1133",
    distance: "1.2",
    students: "2,800",
    rating: 4.7,
    facilities: ["Robotics Lab", "Swimming Pool", "IIT Academy"],
    coordinates: { lat: 17.4435, lng: 78.3772 },
    image: "https://images.unsplash.com/photo-1594122230689-45899d9e6f69?w=200&h=150&fit=crop"
  },
  {
    name: "Jubilee Hills Branch",
    area: "Jubilee Hills",
    address: "Road No. 36, Jubilee Hills",
    phone: "+91 1800-123-1144",
    distance: "2.3",
    students: "2,500",
    rating: 4.9,
    facilities: ["NEET Center", "Auditorium", "Science Park"],
    coordinates: { lat: 17.4294, lng: 78.4090 },
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=200&h=150&fit=crop"
  },
  {
    name: "Banjara Hills Branch",
    area: "Banjara Hills",
    address: "Road No. 12, Banjara Hills",
    phone: "+91 1800-123-1155",
    distance: "3.1",
    students: "2,100",
    rating: 4.6,
    facilities: ["Commerce Hub", "Moot Court", "CA Center"],
    coordinates: { lat: 17.4156, lng: 78.4340 },
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&h=150&fit=crop"
  },
  {
    name: "Gachibowli Branch",
    area: "Gachibowli",
    address: "Near DLF, Gachibowli",
    phone: "+91 1800-123-1166",
    distance: "4.5",
    students: "1,900",
    rating: 4.7,
    facilities: ["Sports Ground", "Hostel", "Research Lab"],
    coordinates: { lat: 17.4391, lng: 78.3578 },
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=200&h=150&fit=crop"
  },
  {
    name: "Kukatpally Branch",
    area: "Kukatpally",
    address: "JNTU Road, Kukatpally",
    phone: "+91 1800-123-1177",
    distance: "5.2",
    students: "1,800",
    rating: 4.5,
    facilities: ["Digital Library", "Olympiad Center", "Sports"],
    coordinates: { lat: 17.4947, lng: 78.3991 },
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=200&h=150&fit=crop"
  }
];

// Quick Links with icons
const QUICK_LINKS = [
  { name: "Home", section: "home", icon: School },
  { name: "About Us", section: "about", icon: Award },
  { name: "Academics", section: "academics", icon: BookOpen },
  { name: "Admissions", section: "admissions", icon: GraduationCap },
  { name: "Branches", section: "branches", icon: Building2 },
  { name: "Results", section: "results", icon: TrendingUp },
  { name: "Careers", section: "careers", icon: Users },
];

// Programs Links
const PROGRAMS = [
  { name: "CBSE Curriculum", href: "/programs/cbse", icon: BookOpen },
  { name: "IIT-JEE Advanced", href: "/programs/iit-jee", icon: TrendingUp },
  { name: "NEET/Medical", href: "/programs/neet", icon: Heart },
  { name: "Foundation", href: "/programs/foundation", icon: Shield },
  { name: "Commerce", href: "/programs/commerce", icon: Building2 },
  { name: "Olympiad", href: "/programs/olympiad", icon: Star },
];

// Social Links with enhanced data
const SOCIAL_LINKS = [
  { icon: Facebook, label: "Facebook", color: "hover:bg-[#1877F2]", href: "https://facebook.com/srichaitanya", followers: "250K+" },
  { icon: Instagram, label: "Instagram", color: "hover:bg-gradient-to-r hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F56040]", href: "https://instagram.com/srichaitanya", followers: "180K+" },
  { icon: Twitter, label: "Twitter", color: "hover:bg-[#1DA1F2]", href: "https://twitter.com/srichaitanya", followers: "120K+" },
  { icon: Youtube, label: "YouTube", color: "hover:bg-[#FF0000]", href: "https://youtube.com/srichaitanya", followers: "500K+" },
  { icon: Linkedin, label: "LinkedIn", color: "hover:bg-[#0A66C2]", href: "https://linkedin.com/school/srichaitanya", followers: "95K+" },
];

const COPYRIGHT_YEAR = 2026;

export default function Footer({ onNavigate }: FooterProps) {
  const [showNearby, setShowNearby] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState<typeof NEARBY_BRANCHES[0] | null>(null);

  const goTo = (section: string) => {
    if (onNavigate) {
      onNavigate(section);
      return;
    }
    const target = document.getElementById(section);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    window.location.assign(`/#${section}`);
  };

  // Calculate nearby branches with distances
  const nearbyBranches = NEARBY_BRANCHES.slice(0, 4);

  const openGoogleMaps = (address?: string) => {
    const searchAddress = address || `${CORPORATE_OFFICE.address}, ${CORPORATE_OFFICE.city}`;
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(searchAddress)}`;
    window.open(url, '_blank');
  };

  const getDirections = (branch: typeof NEARBY_BRANCHES[0]) => {
    openGoogleMaps(branch.address);
  };

  return (
    <footer id="contact" className="relative overflow-hidden bg-[#1F3548] text-white">
      {/* Decorative Elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1100px_520px_at_12%_-10%,rgba(106,159,208,0.45),transparent),radial-gradient(900px_520px_at_100%_15%,rgba(43,74,100,0.72),transparent),linear-gradient(135deg,rgba(31,53,72,0.98),rgba(43,74,100,0.96))] opacity-100" />
        <div className="absolute inset-0 bg-[radial-gradient(600px_240px_at_50%_110%,rgba(141,210,195,0.24),transparent)]" />
      </div>
      <div className="absolute top-0 left-0 right-0 z-20 h-[4px] bg-gradient-to-r from-transparent via-[hsl(var(--accent))] to-transparent opacity-100 shadow-[0_0_18px_rgba(226,61,104,0.55)]" />
      {/* Main Footer Content */}
      <div className="relative w-full pb-20 pt-16  max-w-[80%] mx-auto">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-6">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 shadow-[0_10px_22px_rgba(0,0,0,0.25)]">
                <img
                  src={logo}
                  alt="Sri Chaitanya logo"
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </div>
              <div>
                <h2 className="text-xl font-['Cinzel_Decorative'] font-bold text-white leading-tight">
                  Sri Chaitanya
                </h2>
                <p className="text-sm text-white/80">
                  Madhapur, Hyderabad
                </p>
              </div>
            </div>
            <p className="text-sm text-white/70">
              Transforming education since 1986. Shaping future leaders through innovation, excellence, and holistic development across 156+ branches nationwide.
            </p>
            <div className="space-y-2 text-sm text-white/75">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 text-[hsl(var(--accent))]" />
                <span>{CORPORATE_OFFICE.address}, {CORPORATE_OFFICE.city}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="size-4 text-[hsl(var(--accent))]" />
                <span>{CORPORATE_OFFICE.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="size-4 text-[hsl(var(--accent))]" />
                <span className="break-all">{CORPORATE_OFFICE.email}</span>
              </div>
            </div>
            <div className="flex gap-2">
              {SOCIAL_LINKS.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`group relative flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/10 text-white/80 shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-all hover:border-white/30 ${social.color}`}
                >
                  <social.icon className="size-4 transition-transform group-hover:scale-110 group-hover:text-white" />
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {social.followers} followers
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div>
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <span className="mt-3 block h-1 w-10 rounded-full bg-[hsl(var(--accent))]" />
            </div>
            <ul className="space-y-3 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <button
                    type="button"
                    onClick={() => goTo(link.section)}
                    className="group flex items-center gap-2 text-white/70 transition hover:text-white"
                  >
                    <ChevronRight className="size-4 text-[hsl(var(--accent))] transition group-hover:translate-x-0.5" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Nearby Branches */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold text-white">Nearby Branches</h3>
                <span className="mt-3 block h-1 w-10 rounded-full bg-[hsl(var(--accent))]" />
              </div>
              <button
                type="button"
                onClick={() => setShowNearby(!showNearby)}
                className="text-xs font-semibold text-[hsl(var(--accent))] transition hover:text-white"
              >
                {showNearby ? "Hide" : "View"}
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-white/70">
              <Locate className="size-4 text-[hsl(var(--accent))]" />
              <span>Near Hyderabad</span>
              <span className="rounded-full bg-white/10 px-2 py-0.5 text-white/80">
                Popular
              </span>
            </div>
            <AnimatePresence mode="wait">
              {showNearby ? (
                <motion.div
                  key="nearby-list"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  {nearbyBranches.slice(0, 2).map((branch, index) => (
                    <motion.button
                      key={branch.name}
                      type="button"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.08 }}
                      onClick={() => setSelectedBranch(branch)}
                      className="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-left shadow-[0_12px_24px_rgba(0,0,0,0.2)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_30px_rgba(0,0,0,0.28)]"
                    >
                      <img
                        src={branch.image}
                        alt={branch.name}
                        className="h-12 w-12 rounded-xl object-cover"
                      />
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-white">{branch.name}</div>
                        <div className="text-xs text-white/60">
                          {branch.area} | {branch.distance} km
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-xs font-semibold text-[hsl(var(--accent))]">
                        <Star className="size-3 fill-[hsl(var(--accent))] text-[hsl(var(--accent))]" />
                        {branch.rating}
                      </div>
                    </motion.button>
                  ))}
                  <button
                    type="button"
                    className="text-xs font-semibold text-[hsl(var(--accent))] transition hover:text-white"
                  >
                    View all {NEARBY_BRANCHES.length}+ branches
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="nearby-summary"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 shadow-[0_12px_24px_rgba(0,0,0,0.2)]"
                >
                  <p className="text-sm text-white/75">
                    <span className="font-semibold text-[hsl(var(--accent))]">{NEARBY_BRANCHES.length}+</span> Sri Chaitanya branches near you.
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {NEARBY_BRANCHES.slice(0, 3).map((branch, i) => (
                        <div
                          key={i}
                          className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 text-[9px] font-bold text-white"
                        >
                          {branch.name[0]}
                        </div>
                      ))}
                    </div>
                    <span className="text-xs text-white/60">+ more</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div>
              <h3 className="text-lg font-semibold text-white">Categories</h3>
              <span className="mt-3 block h-1 w-10 rounded-full bg-[hsl(var(--accent))]" />
            </div>
            <ul className="space-y-3 text-sm">
              {PROGRAMS.slice(0, 4).map((program) => (
                <li key={program.name}>
                  <a
                    href={program.href}
                    className="group flex items-center gap-2 text-white/70 transition hover:text-white"
                  >
                    <ChevronRight className="size-4 text-[hsl(var(--accent))] transition group-hover:translate-x-0.5" />
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="h-1 w-full bg-[linear-gradient(90deg,_hsl(var(--accent)),_hsl(var(--primary)))]" />
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-3 py-6 text-xs text-white/70 lg:flex-row lg:px-6">
          <div className="flex flex-wrap items-center gap-2">
            <span>&copy; {COPYRIGHT_YEAR} Sri Chaitanya Schools</span>
            <span className="hidden sm:inline">&bull;</span>
            <span>All rights reserved</span>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            {["Terms & Conditions", "Privacy Policy", "Sitemap", "Contact", "Careers"].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-white/70 transition hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Branch Detail Modal */}
      <AnimatePresence>
        {selectedBranch && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#10202E]/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedBranch(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-gradient-to-br from-[#2B4A64] to-[#4F7BA2] rounded-2xl max-w-2xl w-full p-6 border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">{selectedBranch.name}</h3>
                <button
                  onClick={() => setSelectedBranch(null)}
                  className="p-1 hover:bg-white/10 rounded transition-colors"
                >
                  <ChevronRight className="size-5 rotate-90 text-white/60" />
                </button>
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                <img
                  src={selectedBranch.image}
                  alt={selectedBranch.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="text-xs text-white/40">Distance</div>
                  <div className="text-lg font-bold text-[#D9F3E7]">{selectedBranch.distance} km</div>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="text-xs text-white/40">Students</div>
                  <div className="text-lg font-bold text-[#D9F3E7]">{selectedBranch.students}</div>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="text-xs text-white/40">Rating</div>
                  <div className="text-lg font-bold text-[#D9F3E7] flex items-center gap-1">
                    {selectedBranch.rating} <Star className="size-4 fill-[#8DD2C3] text-[#8DD2C3]" />
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="text-xs text-white/40">Phone</div>
                  <div className="text-sm font-medium text-white">{selectedBranch.phone}</div>
                </div>
              </div>
              <div className="space-y-2 mb-4">
                <p className="text-sm text-white/80 flex items-start gap-2">
                  <MapPin className="size-4 text-[#8DD2C3] flex-shrink-0 mt-0.5" />
                  {selectedBranch.address}
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedBranch.facilities.map((facility) => (
                    <span key={facility} className="text-xs bg-white/10 px-3 py-1 rounded-full text-white/80">
                      {facility}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => getDirections(selectedBranch)}
                  className="flex-1 bg-gradient-to-r from-[#6A9FD0] to-[#8DD2C3] text-[#2B4A64] rounded-lg px-4 py-3 font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Navigation className="size-4" />
                  Get Directions
                </button>
                <button
                  onClick={() => window.location.href = `tel:${selectedBranch.phone}`}
                  className="flex-1 bg-white/10 text-white rounded-lg px-4 py-3 font-semibold hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="size-4" />
                  Call Now
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back to Top */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{ background: "hsl(var(--accent))" }}
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full p-[3px] shadow-lg transition-all"
        aria-label="Back to top"
      >
        <span className="flex h-full w-full items-center justify-center rounded-full bg-[hsl(var(--accent))] shadow-[0_12px_30px_rgba(0,0,0,0.25)]">
          <ChevronRight className="size-5 -rotate-90 text-white" />
        </span>
      </motion.button>
    </footer>
  );
}
