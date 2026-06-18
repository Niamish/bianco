import React, { useState, useEffect, useRef, useCallback } from 'react';

// ============================================
// BIANCO - DEFINITIVE PRODUCTION LANDING PAGE
// ============================================
// Complete sections from bianco-complete.jsx
// + All production improvements:
//   ✅ Custom cursor (desktop only, respects reduced motion)
//   ✅ SVG icons (cart, play, socials, payments)
//   ✅ prefers-reduced-motion support
//   ✅ Optimized useInView (unobserves after trigger)
//   ✅ rAF-throttled parallax scroll
//   ✅ Real cart state
//   ✅ Full accessibility (aria-labels, focus-visible)
//   ✅ Marquee pause on hover
//   ✅ Keyboard navigation support
// ============================================

// ==================== SVG ICONS ====================

const IconCart = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M6 6h15l-1.5 9h-12L6 6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M6 6 5 3H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="9" cy="20" r="1" fill="currentColor"/>
    <circle cx="18" cy="20" r="1" fill="currentColor"/>
  </svg>
);

const IconPlay = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M8 5v14l11-7z"/>
  </svg>
);

const IconArrow = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

const IconInstagram = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
  </svg>
);

const IconTwitter = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const IconYouTube = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const IconFacebook = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const IconVisa = ({ size = 40 }) => (
  <svg width={size} height={size * 0.64} viewBox="0 0 50 32" fill="none" aria-hidden="true">
    <rect width="50" height="32" rx="4" fill="#1A1F71"/>
    <path d="M19.5 21h-2.7l1.7-10h2.7l-1.7 10zm11.1-9.7c-.5-.2-1.4-.4-2.4-.4-2.7 0-4.6 1.4-4.6 3.4 0 1.5 1.4 2.3 2.4 2.8 1 .5 1.4.8 1.4 1.3 0 .7-.8 1-1.6 1-1.1 0-1.6-.2-2.5-.5l-.3-.2-.4 2.2c.6.3 1.8.5 3 .5 2.9 0 4.7-1.4 4.8-3.5 0-1.2-.7-2.1-2.3-2.8-.9-.5-1.5-.8-1.5-1.3 0-.4.5-.9 1.5-.9.9 0 1.5.2 2 .4l.2.1.3-2.1zm7.2-.3h-2.1c-.7 0-1.2.2-1.5.9l-4.2 9.8h2.9l.6-1.6h3.6l.3 1.6h2.6l-2.2-10.7zm-3.5 6.9l1.1-3 .4-1.1.2 1 .6 3.1h-2.3zm-17.1-6.9l-2.6 6.8-.3-1.4c-.5-1.6-2-3.4-3.7-4.3l2.5 9.2h2.9l4.4-10.3h-3.2z" fill="white"/>
    <path d="M10.5 11h-4.4l-.1.3c3.5.9 5.8 3 6.7 5.5l-1-4.8c-.1-.7-.6-.9-1.2-1z" fill="#F9A533"/>
  </svg>
);

const IconMastercard = ({ size = 40 }) => (
  <svg width={size} height={size * 0.64} viewBox="0 0 50 32" fill="none" aria-hidden="true">
    <rect width="50" height="32" rx="4" fill="#F5F5F5"/>
    <circle cx="19" cy="16" r="9" fill="#EB001B"/>
    <circle cx="31" cy="16" r="9" fill="#F79E1B"/>
    <path d="M25 9.2a9 9 0 0 0 0 13.6 9 9 0 0 0 0-13.6z" fill="#FF5F00"/>
  </svg>
);

const IconUPI = ({ size = 40 }) => (
  <svg width={size} height={size * 0.64} viewBox="0 0 50 32" fill="none" aria-hidden="true">
    <rect width="50" height="32" rx="4" fill="#EFEFEF"/>
    <path d="M15 12h3v8h-3v-8zm5 0h3l3 5v-5h3v8h-3l-3-5v5h-3v-8z" fill="#00796B"/>
    <path d="M30 12h5c2 0 3 1 3 2.5s-1 2.5-3 2.5h-2v3h-3v-8zm3 3.5h1.5c.5 0 1-.3 1-.8s-.5-.7-1-.7H33v1.5z" fill="#00796B"/>
  </svg>
);

// Chip SVG for watermarks
const ChipWatermark = ({ className = '', style = {} }) => (
  <svg className={className} style={style} viewBox="0 0 120 80" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="chipWatermarkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F5DEB3" stopOpacity="0.15"/>
        <stop offset="50%" stopColor="#DEB887" stopOpacity="0.12"/>
        <stop offset="100%" stopColor="#D2691E" stopOpacity="0.08"/>
      </linearGradient>
    </defs>
    <ellipse cx="60" cy="40" rx="55" ry="35" fill="url(#chipWatermarkGrad)"/>
    <ellipse cx="60" cy="40" rx="40" ry="25" fill="url(#chipWatermarkGrad)"/>
  </svg>
);

// ==================== CUSTOM HOOKS ====================

// Optimized Intersection Observer - unobserves after visible
const useInView = (threshold = 0.15) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      },
      { threshold }
    );
    
    observer.observe(element);
    
    return () => observer.disconnect();
  }, [threshold]);
  
  return [ref, isVisible];
};

// rAF-throttled parallax scroll
const useParallax = () => {
  const [scrollY, setScrollY] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) return;
      
      rafRef.current = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        rafRef.current = null;
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return scrollY;
};

// Check for reduced motion preference
const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  return prefersReducedMotion;
};

// Animated counter component
const AnimatedCounter = ({ end, duration = 2000, isVisible }) => {
  const [count, setCount] = useState(0);
  const reducedMotion = useReducedMotion();
  
  useEffect(() => {
    if (!isVisible) return;
    
    // If reduced motion, show final value immediately
    if (reducedMotion) {
      setCount(end);
      return;
    }
    
    let startTime;
    let animationFrame;
    
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [isVisible, end, duration, reducedMotion]);
  
  return <span>{count.toLocaleString()}</span>;
};

// ==================== MAIN COMPONENT ====================

export default function BiancoDefinitive() {
  // State
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [cursorActive, setCursorActive] = useState(false);
  const [marqueeHovered, setMarqueeHovered] = useState(false);
  
  // Refs
  const cursorRef = useRef(null);
  
  // Custom hooks
  const scrollY = useParallax();
  const reducedMotion = useReducedMotion();
  
  // Section visibility refs
  const [aboutRef, aboutVisible] = useInView();
  const [productsRef, productsVisible] = useInView();
  const [processRef, processVisible] = useInView();
  const [statsRef, statsVisible] = useInView();
  const [reviewsRef, reviewsVisible] = useInView();
  const [faqRef, faqVisible] = useInView();
  const [ctaRef, ctaVisible] = useInView();

  // Cart function
  const addToCart = useCallback((e) => {
    if (e) e.stopPropagation();
    setCartCount(prev => prev + 1);
  }, []);

  // Custom cursor effect (desktop only, respects reduced motion)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Don't enable cursor on touch devices or if reduced motion is preferred
    if (isCoarsePointer || prefersReducedMotion) return;

    const handleMouseMove = (e) => {
      const cursor = cursorRef.current;
      if (!cursor) return;
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = target.closest('button, a, .product-card, .faq-question, input, .bento-stat, .bento-main');
      setCursorActive(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // ==================== DATA ====================

  const products = [
    { 
      name: 'Sea Salt', 
      tagline: 'The OG. Classic crunch.', 
      description: 'Pure Himalayan salt on perfectly crispy chips. Simple. Perfect.',
      bg: 'linear-gradient(135deg, #FFF8E7 0%, #FFE4B8 100%)', 
      color: '#1a1a1a', 
      price: '₹149',
      weight: '150g',
      emoji: '🧂',
      ingredients: ['Potatoes', 'Sunflower Oil', 'Himalayan Pink Salt']
    },
    { 
      name: 'Black Truffle', 
      tagline: 'Earthy. Luxurious.', 
      description: 'Real Italian truffle oil meets artisanal chips. Indulgence redefined.',
      bg: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)', 
      color: '#D4AF37', 
      price: '₹249',
      weight: '120g',
      emoji: '🍄',
      ingredients: ['Potatoes', 'Truffle Oil', 'Sea Salt', 'Black Pepper']
    },
    { 
      name: 'Rosemary', 
      tagline: 'Garden fresh herbs.', 
      description: 'Fresh rosemary from organic farms. Mediterranean vibes.',
      bg: 'linear-gradient(135deg, #4A6741 0%, #3A5731 100%)', 
      color: '#ffffff', 
      price: '₹179',
      weight: '150g',
      emoji: '🌿',
      ingredients: ['Potatoes', 'Olive Oil', 'Fresh Rosemary', 'Garlic']
    },
    { 
      name: 'Smoky Paprika', 
      tagline: 'Bold & fiery.', 
      description: 'Spanish smoked paprika with a kick. For the adventurous.',
      bg: 'linear-gradient(135deg, #C94A3A 0%, #A93A2A 100%)', 
      color: '#FFE4B5', 
      price: '₹179',
      weight: '150g',
      emoji: '🌶️',
      ingredients: ['Potatoes', 'Smoked Paprika', 'Chili', 'Lime']
    },
  ];

  const processSteps = [
    { 
      num: '01', 
      title: 'Source', 
      desc: 'Hand-picked potatoes from 15+ partner farms across India. Only the finest make the cut.',
      icon: '🥔',
      color: '#4A6741'
    },
    { 
      num: '02', 
      title: 'Slice', 
      desc: 'Paper-thin 1.2mm precision cuts. Every chip identical. No machines—just skilled hands.',
      icon: '🔪',
      color: '#5a5a5a'
    },
    { 
      num: '03', 
      title: 'Cook', 
      desc: 'Small-batch kettle cooking in premium sunflower oil. Golden perfection every time.',
      icon: '🍳',
      color: '#FF6B35'
    },
    { 
      num: '04', 
      title: 'Season', 
      desc: 'Real spices, hand-tossed while still warm. Flavor that penetrates every crunch.',
      icon: '🌿',
      color: '#D4AF37'
    },
  ];

  const reviews = [
    { 
      text: "Best chips I've ever tasted. Not even exaggerating. The truffle ones changed my life.", 
      name: 'Priya Sharma', 
      role: 'Food Blogger', 
      city: 'Mumbai', 
      rating: 5, 
      avatar: '👩‍🦱' 
    },
    { 
      text: "Finally, chips that don't taste like cardboard. The rosemary is absolutely divine.", 
      name: 'Arjun Mehta', 
      role: 'Chef', 
      city: 'Delhi', 
      rating: 5, 
      avatar: '👨‍🍳' 
    },
    { 
      text: "My kids refuse to eat any other brand now. Worth every rupee.", 
      name: 'Sneha Reddy', 
      role: 'Mother of 3', 
      city: 'Bangalore', 
      rating: 5, 
      avatar: '👩' 
    },
    { 
      text: "Sent these to my parents abroad. They called me within an hour asking for more.", 
      name: 'Vikram Kumar', 
      role: 'Software Engineer', 
      city: 'Chennai', 
      rating: 5, 
      avatar: '👨' 
    },
    { 
      text: "The packaging, the taste, the crunch—everything is premium. This is what chips should be.", 
      name: 'Ananya Patel', 
      role: 'Designer', 
      city: 'Ahmedabad', 
      rating: 5, 
      avatar: '👧' 
    },
    { 
      text: "I've tried chips from 20+ countries. Bianco beats them all. No contest.", 
      name: 'Rahul Tiwari', 
      role: 'Travel Vlogger', 
      city: 'Pune', 
      rating: 5, 
      avatar: '🧑' 
    },
  ];

  const faqs = [
    { 
      q: 'What makes Bianco chips different?', 
      a: 'We use only real, pronounceable ingredients. No artificial flavors, no preservatives, no MSG. Just potatoes, premium oils, and real seasonings. Every batch is small-batch kettle-cooked for that perfect crunch.' 
    },
    { 
      q: 'How fresh are the chips?', 
      a: 'Our chips go from farm to bag in 48 hours. We never store inventory for more than 2 weeks. The "packed on" date is always clearly visible, so you know exactly how fresh they are.' 
    },
    { 
      q: 'Are Bianco chips healthy?', 
      a: "Healthier than regular chips, yes. We use high-quality sunflower oil, less sodium, and zero artificial ingredients. But they're still chips—enjoy them as a treat, not a meal replacement!" 
    },
    { 
      q: 'Do you ship internationally?', 
      a: 'Currently, we ship across India with free delivery on orders over ₹500. International shipping is coming soon—join our waitlist to be notified!' 
    },
    { 
      q: "What if I don't like them?", 
      a: "We offer a 100% satisfaction guarantee. If you don't love our chips, email us within 7 days of delivery and we'll refund you completely. No questions asked." 
    },
  ];

  const partners = ['Swiggy', 'Zepto', 'BigBasket', 'Amazon', 'Flipkart', "Nature's Basket"];

  // Particles for slice effect
  const particles = Array.from({ length: 8 }, (_, i) => i);

  return (
    <div className="app">
      {/* ==========================================
          CUSTOM CURSOR
          ========================================== */}
      <div 
        ref={cursorRef} 
        className={`custom-cursor ${cursorActive ? 'active' : ''}`} 
        aria-hidden="true" 
      />

      {/* ==========================================
          SKIP LINK (Accessibility)
          ========================================== */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* ==========================================
          NAVIGATION
          ========================================== */}
      <nav 
        className={`nav ${scrollY > 50 ? 'nav-scrolled' : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="nav-inner">
          <a href="#" className="logo" aria-label="Bianco - Home">
            <div className="logo-icon">🥔</div>
            <span>bianco</span>
          </a>
          
          <div className={`nav-links ${menuOpen ? 'open' : ''}`} id="nav-menu">
            <a href="#about" onClick={() => setMenuOpen(false)}>Story</a>
            <a href="#products" onClick={() => setMenuOpen(false)}>Shop</a>
            <a href="#process" onClick={() => setMenuOpen(false)}>Process</a>
            <a href="#reviews" onClick={() => setMenuOpen(false)}>Reviews</a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
          </div>
          
          <div className="nav-actions">
            <button 
              className="nav-cart" 
              aria-label={`Shopping cart with ${cartCount} items`}
            >
              <IconCart />
              <span className="cart-count" aria-live="polite">{cartCount}</span>
            </button>
            <button className="nav-btn" aria-label="Shop now">
              Shop Now
            </button>
          </div>
          
          <button 
            className={`menu-toggle ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="nav-menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* ==========================================
          HERO SECTION - MASTERPIECE SLICE ANIMATION
          ========================================== */}
      <section className="hero" id="main-content">
        {/* Animated background elements */}
        <div className="hero-bg">
          <div className="bg-gradient"></div>
          <div className="bg-pattern"></div>
          <ChipWatermark 
            className="bg-chip bg-chip-1" 
            style={reducedMotion ? {} : { transform: `translateY(${scrollY * 0.15}px) rotate(${15 + scrollY * 0.02}deg)` }}
          />
          <ChipWatermark 
            className="bg-chip bg-chip-2"
            style={reducedMotion ? {} : { transform: `translateY(${scrollY * -0.1}px) rotate(${-10 + scrollY * 0.015}deg)` }}
          />
          <ChipWatermark 
            className="bg-chip bg-chip-3"
            style={reducedMotion ? {} : { transform: `translateY(${scrollY * 0.08}px) rotate(${25 - scrollY * 0.01}deg)` }}
          />
        </div>

        {/* Screen flash effects - only if motion is allowed */}
        {!reducedMotion && (
          <>
            <div className="screen-flash flash-1"></div>
            <div className="screen-flash flash-2"></div>
            <div className="screen-flash flash-3"></div>
          </>
        )}

        {/* SVG Blade trails - only if motion is allowed */}
        {!reducedMotion && (
          <svg className="blade-trails" viewBox="0 0 1400 900" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="bladeGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="40%" stopColor="#FF6B35" />
                <stop offset="50%" stopColor="#FFFFFF" />
                <stop offset="60%" stopColor="#FF6B35" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
              <linearGradient id="bladeGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="45%" stopColor="#FFD700" />
                <stop offset="50%" stopColor="#FFFFFF" />
                <stop offset="55%" stopColor="#FFD700" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
              <filter id="bladeGlow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <path 
              className="blade blade-1" 
              d="M-100,280 Q400,220 750,320 T1500,180" 
              stroke="url(#bladeGrad1)" 
              strokeWidth="4" 
              fill="none" 
              filter="url(#bladeGlow)"
            />
            <path 
              className="blade blade-2" 
              d="M1500,420 Q900,360 550,460 T-100,320" 
              stroke="url(#bladeGrad2)" 
              strokeWidth="3" 
              fill="none" 
              filter="url(#bladeGlow)"
            />
            <path 
              className="blade blade-3" 
              d="M-100,560 Q350,500 700,580 T1500,460" 
              stroke="url(#bladeGrad1)" 
              strokeWidth="4" 
              fill="none" 
              filter="url(#bladeGlow)"
            />
          </svg>
        )}

        <div className="hero-content">
          <div className="hero-left">
            {/* Badges */}
            <div className="badges">
              <span className="badge badge-orange">🚀 Free Shipping ₹500+</span>
              <span className="badge badge-dark">⭐ 4.9 Rating</span>
              <span className="badge badge-light">🌱 100% Natural</span>
            </div>

            {/* SLICE HEADLINE */}
            <h1 className="headline">
              {/* Line 1 */}
              <div className="line line-1">
                <span className="word-wrapper word-1">
                  <span className="word-container">
                    <span className="word-half word-top" aria-hidden="true">Chips</span>
                    <span className="word-half word-bottom" aria-hidden="true">Chips</span>
                    <span className="word-final">Chips</span>
                    <span className="cut-line" aria-hidden="true"></span>
                    <span className="particles" aria-hidden="true">
                      {particles.map(i => <span key={i} className={`particle p-${i}`}></span>)}
                    </span>
                  </span>
                </span>
                <span className="word-wrapper word-2">
                  <span className="word-container">
                    <span className="word-half word-top" aria-hidden="true">that</span>
                    <span className="word-half word-bottom" aria-hidden="true">that</span>
                    <span className="word-final">that</span>
                    <span className="cut-line" aria-hidden="true"></span>
                    <span className="particles" aria-hidden="true">
                      {particles.map(i => <span key={i} className={`particle p-${i}`}></span>)}
                    </span>
                  </span>
                </span>
              </div>

              {/* Line 2 - Orange accent */}
              <div className="line line-2">
                <span className="word-wrapper word-3 orange">
                  <span className="word-container">
                    <span className="word-half word-top" aria-hidden="true">actually</span>
                    <span className="word-half word-bottom" aria-hidden="true">actually</span>
                    <span className="word-final">actually</span>
                    <span className="cut-line orange-cut" aria-hidden="true"></span>
                    <span className="particles orange-particles" aria-hidden="true">
                      {particles.map(i => <span key={i} className={`particle p-${i}`}></span>)}
                    </span>
                  </span>
                </span>
                <span className="word-wrapper word-4 orange">
                  <span className="word-container">
                    <span className="word-half word-top" aria-hidden="true">taste</span>
                    <span className="word-half word-bottom" aria-hidden="true">taste</span>
                    <span className="word-final">taste</span>
                    <span className="cut-line orange-cut" aria-hidden="true"></span>
                    <span className="particles orange-particles" aria-hidden="true">
                      {particles.map(i => <span key={i} className={`particle p-${i}`}></span>)}
                    </span>
                  </span>
                </span>
              </div>

              {/* Line 3 */}
              <div className="line line-3">
                <span className="word-wrapper word-5">
                  <span className="word-container">
                    <span className="word-half word-top" aria-hidden="true">like</span>
                    <span className="word-half word-bottom" aria-hidden="true">like</span>
                    <span className="word-final">like</span>
                    <span className="cut-line" aria-hidden="true"></span>
                    <span className="particles" aria-hidden="true">
                      {particles.map(i => <span key={i} className={`particle p-${i}`}></span>)}
                    </span>
                  </span>
                </span>
                <span className="word-wrapper word-6">
                  <span className="word-container">
                    <span className="word-half word-top" aria-hidden="true">something.</span>
                    <span className="word-half word-bottom" aria-hidden="true">something.</span>
                    <span className="word-final">something.</span>
                    <span className="cut-line" aria-hidden="true"></span>
                    <span className="particles" aria-hidden="true">
                      {particles.map(i => <span key={i} className={`particle p-${i}`}></span>)}
                    </span>
                  </span>
                </span>
              </div>
            </h1>

            <p className="description">
              Small-batch. Kettle-cooked. Made with real ingredients you can pronounce. 
              No artificial anything. Just pure, honest flavor in every crunch.
            </p>

            <div className="ctas">
              <button 
                className="btn btn-primary"
                aria-label="Shop all chip flavors"
              >
                Shop All Flavors <span className="btn-arrow"><IconArrow /></span>
              </button>
              <button 
                className="btn btn-secondary"
                aria-label="Watch our brand story video"
              >
                <span className="play-icon"><IconPlay /></span> Watch Our Story
              </button>
            </div>

            <div className="social-proof">
              <div className="avatars">
                {['😋', '🤤', '😍', '🥹', '😊'].map((emoji, i) => (
                  <span 
                    key={i} 
                    className="avatar" 
                    style={{ animationDelay: `${2.6 + i * 0.1}s` }}
                  >
                    {emoji}
                  </span>
                ))}
              </div>
              <div className="proof-text">
                <strong>10,000+ happy snackers</strong>
                <span className="stars">★★★★★ from 2,847 reviews</span>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="bento">
              <div className="bento-main">
                <span className="bento-badge">BESTSELLER</span>
                <div className="bento-visual">
                  <span className="bento-chip">🥔</span>
                  <div className="bento-chip-shadow"></div>
                </div>
                <div className="bento-info">
                  <h3>Sea Salt</h3>
                  <p>The one that started it all</p>
                  <span className="bento-price">₹149</span>
                </div>
              </div>
              
              <div 
                className="bento-stat bento-dark" 
                tabIndex="0" 
                role="button"
                aria-label="4 signature flavors available"
              >
                <div className="stat-num">4</div>
                <div className="stat-label">
                  <small>Signature</small>
                  <strong>Flavors</strong>
                </div>
              </div>
              
              <div 
                className="bento-stat bento-orange"
                tabIndex="0"
                role="button"
                aria-label="Zero artificial ingredients"
              >
                <div className="stat-num">0</div>
                <div className="stat-label">
                  <small>Artificial</small>
                  <strong>Ingredients</strong>
                </div>
              </div>
              
              <div className="bento-partners">
                <small>AVAILABLE ON</small>
                <div className="partners">
                  {partners.slice(0, 4).map(partner => (
                    <span key={partner}>{partner}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator" aria-hidden="true">
          <span>Scroll to explore</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* ==========================================
          MARQUEE
          ========================================== */}
      <section 
        className="marquee-section"
        aria-label="Brand values"
        onMouseEnter={() => setMarqueeHovered(true)}
        onMouseLeave={() => setMarqueeHovered(false)}
      >
        <div className={`marquee-track ${marqueeHovered ? 'paused' : ''}`}>
          {[1, 2].map(n => (
            <div key={n} className="marquee-content">
              {['KETTLE COOKED', '✦', 'SMALL BATCH', '✦', 'NO PRESERVATIVES', '✦', 'FARM FRESH', '✦', '100% NATURAL', '✦', 'MADE WITH LOVE', '✦'].map((text, i) => (
                <span key={i}>{text}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ==========================================
          ABOUT SECTION
          ========================================== */}
      <section 
        id="about" 
        ref={aboutRef} 
        className={`about-section ${aboutVisible ? 'visible' : ''}`}
      >
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <div className="about-img-container">
                <div className="about-emoji">🥔</div>
                <div className="about-img-badge">Est. 2022</div>
              </div>
              <div className="about-img-bg"></div>
            </div>
            
            <div className="about-content">
              <span className="section-tag">OUR STORY</span>
              <h2>We got tired of chips that taste like nothing.</h2>
              <p>
                So we quit our jobs and started making our own. Real potatoes from real farms. 
                Cooked in small batches. Seasoned with actual ingredients you can pronounce.
              </p>
              <p>
                Two years later: 10,000+ happy customers, 15+ partner farms, and a mission to 
                prove that snacks don't have to be junk food.
              </p>
              <div className="about-features">
                <div className="about-feature">
                  <span className="feature-icon">🌱</span>
                  <span>100% Natural</span>
                </div>
                <div className="about-feature">
                  <span className="feature-icon">🏠</span>
                  <span>Small Batch</span>
                </div>
                <div className="about-feature">
                  <span className="feature-icon">❤️</span>
                  <span>Made with Love</span>
                </div>
              </div>
              <button className="btn btn-outline" aria-label="Read our full company story">
                Read Our Full Story <span className="btn-arrow"><IconArrow /></span>
              </button>
            </div>

            <div className="about-stats">
              <div className="stat-card" style={{ '--delay': '0.1s' }}>
                <div className="stat-number">15+</div>
                <div className="stat-text">Partner farms across India</div>
              </div>
              <div className="stat-card" style={{ '--delay': '0.2s' }}>
                <div className="stat-number">48hr</div>
                <div className="stat-text">Farm to bag freshness</div>
              </div>
              <div className="stat-card" style={{ '--delay': '0.3s' }}>
                <div className="stat-number">100%</div>
                <div className="stat-text">Natural ingredients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          PRODUCTS SECTION
          ========================================== */}
      <section 
        id="products" 
        ref={productsRef} 
        className={`products-section ${productsVisible ? 'visible' : ''}`}
      >
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-tag">THE COLLECTION</span>
              <h2>Four flavors. Zero compromises.</h2>
              <p className="section-subtitle">Each flavor crafted to perfection. Pick your favorite—or get them all.</p>
            </div>
            <button className="btn btn-outline" aria-label="View all products">
              View All <span className="btn-arrow"><IconArrow /></span>
            </button>
          </div>

          <div className="products-grid" role="list">
            {products.map((product, i) => (
              <article 
                key={product.name} 
                className="product-card"
                style={{ 
                  background: product.bg, 
                  color: product.color,
                  '--delay': `${i * 0.1}s`
                }}
                role="listitem"
              >
                <div className="product-top">
                  <span className="product-emoji">{product.emoji}</span>
                  <div className="product-meta">
                    <span className="product-weight">{product.weight}</span>
                    <span className="product-price">{product.price}</span>
                  </div>
                </div>
                <div className="product-visual">
                  <div className="product-chip-stack">
                    <span>🥔</span>
                    <span>🥔</span>
                    <span>🥔</span>
                  </div>
                </div>
                <div className="product-bottom">
                  <h3>{product.name}</h3>
                  <p className="product-tagline">{product.tagline}</p>
                  <p className="product-desc">{product.description}</p>
                  <div className="product-actions">
                    <button 
                      className="product-btn" 
                      onClick={addToCart}
                      aria-label={`Add ${product.name} to cart`}
                    >
                      Add to Cart
                    </button>
                    <button 
                      className="product-quick"
                      aria-label={`Quick view ${product.name}`}
                    >
                      Quick View
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Variety Pack */}
          <div className="variety-pack">
            <div className="variety-visual">
              <span className="variety-emoji">🎁</span>
              <div className="variety-chips">
                {['🧂', '🍄', '🌿', '🌶️'].map((emoji, i) => (
                  <span key={i} style={{ '--i': i }}>{emoji}</span>
                ))}
              </div>
            </div>
            <div className="variety-content">
              <div className="variety-badge">BEST VALUE</div>
              <h3>Try the Variety Pack</h3>
              <p>All 4 signature flavors in one box. The perfect way to discover your favorite. Save ₹100.</p>
              <div className="variety-includes">
                {products.map(p => (
                  <span key={p.name}>{p.emoji} {p.name}</span>
                ))}
              </div>
            </div>
            <div className="variety-cta">
              <div className="variety-price">
                <span className="original">₹649</span>
                <span className="sale">₹549</span>
              </div>
              <button 
                className="btn btn-primary"
                onClick={addToCart}
                aria-label="Add variety pack to cart"
              >
                Get Variety Pack
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          PROCESS SECTION
          ========================================== */}
      <section 
        id="process" 
        ref={processRef} 
        className={`process-section ${processVisible ? 'visible' : ''}`}
      >
        <div className="container">
          <div className="section-header center light">
            <span className="section-tag">THE PROCESS</span>
            <h2>From farm to bag in 48 hours.</h2>
            <p className="section-subtitle">Every step matters. Here's how we make chips that actually taste like something.</p>
          </div>

          <div className="process-timeline" role="list">
            {processSteps.map((step, i) => (
              <div 
                key={step.num} 
                className="process-step"
                style={{ '--delay': `${i * 0.15}s`, '--color': step.color }}
                role="listitem"
              >
                <div className="step-line">
                  <div className="step-dot"></div>
                  {i < processSteps.length - 1 && <div className="step-connector"></div>}
                </div>
                <div className="step-card">
                  <div className="step-icon">{step.icon}</div>
                  <span className="step-num">{step.num}</span>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          STATS SECTION
          ========================================== */}
      <section 
        ref={statsRef} 
        className={`stats-section ${statsVisible ? 'visible' : ''}`}
        aria-label="Company statistics"
      >
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item" style={{ '--delay': '0s' }}>
              <div className="stat-value">
                <AnimatedCounter end={10000} isVisible={statsVisible} />+
              </div>
              <div className="stat-label">Happy Customers</div>
            </div>
            <div className="stat-item" style={{ '--delay': '0.1s' }}>
              <div className="stat-value">
                <AnimatedCounter end={15} isVisible={statsVisible} />+
              </div>
              <div className="stat-label">Partner Farms</div>
            </div>
            <div className="stat-item" style={{ '--delay': '0.2s' }}>
              <div className="stat-value">4.9</div>
              <div className="stat-label">Average Rating</div>
            </div>
            <div className="stat-item" style={{ '--delay': '0.3s' }}>
              <div className="stat-value">
                <AnimatedCounter end={2847} isVisible={statsVisible} />
              </div>
              <div className="stat-label">5-Star Reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          REVIEWS SECTION
          ========================================== */}
      <section 
        id="reviews" 
        ref={reviewsRef} 
        className={`reviews-section ${reviewsVisible ? 'visible' : ''}`}
      >
        <div className="container">
          <div className="section-header center">
            <span className="section-tag">REVIEWS</span>
            <h2>What people are saying.</h2>
            <p className="section-subtitle">Don't take our word for it. Here's what our customers think.</p>
          </div>

          <div className="reviews-grid" role="list">
            {reviews.map((review, i) => (
              <article 
                key={i} 
                className="review-card"
                style={{ '--delay': `${i * 0.1}s` }}
                role="listitem"
              >
                <div className="review-stars" aria-label={`${review.rating} out of 5 stars`}>
                  {Array.from({ length: review.rating }, (_, i) => '★').join('')}
                </div>
                <p className="review-text">"{review.text}"</p>
                <div className="review-author">
                  <span className="author-avatar">{review.avatar}</span>
                  <div className="author-info">
                    <strong>{review.name}</strong>
                    <span>{review.role} • {review.city}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="reviews-cta">
            <p>Join 10,000+ happy snackers</p>
            <button className="btn btn-primary" aria-label="Shop chips now">
              Shop Now <span className="btn-arrow"><IconArrow /></span>
            </button>
          </div>
        </div>
      </section>

      {/* ==========================================
          FAQ SECTION
          ========================================== */}
      <section 
        id="faq" 
        ref={faqRef} 
        className={`faq-section ${faqVisible ? 'visible' : ''}`}
      >
        <div className="container">
          <div className="faq-grid">
            <div className="faq-header">
              <span className="section-tag">FAQ</span>
              <h2>Got questions?</h2>
              <p>Everything you need to know about Bianco chips.</p>
              <div className="faq-contact">
                <p>Still have questions?</p>
                <a 
                  href="mailto:hello@biancochips.com" 
                  className="btn btn-outline"
                  aria-label="Contact us via email"
                >
                  Contact Us <span className="btn-arrow"><IconArrow /></span>
                </a>
              </div>
            </div>
            
            <div className="faq-list" role="list">
              {faqs.map((faq, i) => (
                <div 
                  key={i} 
                  className={`faq-item ${activeAccordion === i ? 'active' : ''}`}
                  style={{ '--delay': `${i * 0.1}s` }}
                  role="listitem"
                >
                  <button 
                    className="faq-question"
                    onClick={() => setActiveAccordion(activeAccordion === i ? -1 : i)}
                    aria-expanded={activeAccordion === i}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-button-${i}`}
                  >
                    <span>{faq.q}</span>
                    <span className="faq-icon" aria-hidden="true">
                      {activeAccordion === i ? '−' : '+'}
                    </span>
                  </button>
                  <div 
                    id={`faq-panel-${i}`}
                    className="faq-answer"
                    role="region"
                    aria-labelledby={`faq-button-${i}`}
                    hidden={activeAccordion !== i}
                  >
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          CTA SECTION
          ========================================== */}
      <section 
        ref={ctaRef} 
        className={`cta-section ${ctaVisible ? 'visible' : ''}`}
      >
        <div className="cta-bg" aria-hidden="true">
          <ChipWatermark className="cta-chip cta-chip-1" />
          <ChipWatermark className="cta-chip cta-chip-2" />
          <ChipWatermark className="cta-chip cta-chip-3" />
        </div>
        <div className="container">
          <div className="cta-content">
            <h2>Ready to taste the difference?</h2>
            <p>Free shipping on orders over ₹500. 100% satisfaction guarantee—love them or get your money back.</p>
            <form className="cta-form" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="email-signup" className="visually-hidden">Email address</label>
              <input 
                id="email-signup"
                type="email" 
                placeholder="Enter your email for 10% off" 
                required
              />
              <button type="submit" className="btn btn-white">Get 10% Off</button>
            </form>
            <div className="cta-buttons">
              <button 
                className="btn btn-white btn-large"
                aria-label="Shop all chips"
              >
                Shop All Chips <span className="btn-arrow"><IconArrow /></span>
              </button>
              <button 
                className="btn btn-ghost btn-large"
                onClick={addToCart}
                aria-label="Add variety pack to cart"
              >
                Get Variety Pack
              </button>
            </div>
            <div className="cta-trust">
              <span>🚚 Free Shipping ₹500+</span>
              <span>💯 Satisfaction Guarantee</span>
              <span>🔒 Secure Checkout</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          FOOTER
          ========================================== */}
      <footer className="footer" role="contentinfo">
        <div className="container">
          <div className="footer-main">
            <div className="footer-brand">
              <a href="#" className="footer-logo" aria-label="Bianco - Home">
                <div className="logo-icon">🥔</div>
                <span>bianco</span>
              </a>
              <p>Small-batch chips made with real ingredients. No artificial anything. Just pure, honest flavor.</p>
              <div className="footer-social">
                <a href="#" aria-label="Follow us on Instagram"><IconInstagram /></a>
                <a href="#" aria-label="Follow us on Twitter"><IconTwitter /></a>
                <a href="#" aria-label="Subscribe on YouTube"><IconYouTube /></a>
                <a href="#" aria-label="Like us on Facebook"><IconFacebook /></a>
              </div>
            </div>
            
            <div className="footer-links-grid">
              <div className="footer-col">
                <h4>Shop</h4>
                <ul>
                  {products.map(p => (
                    <li key={p.name}><a href="#">{p.name}</a></li>
                  ))}
                  <li><a href="#">Variety Pack</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Company</h4>
                <ul>
                  <li><a href="#">Our Story</a></li>
                  <li><a href="#">Process</a></li>
                  <li><a href="#">Sustainability</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Press</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Help</h4>
                <ul>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Shipping</a></li>
                  <li><a href="#">Returns</a></li>
                  <li><a href="#">Track Order</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Newsletter</h4>
                <p>Get updates on new flavors and exclusive deals.</p>
                <form className="footer-newsletter" onSubmit={(e) => e.preventDefault()}>
                  <label htmlFor="footer-email" className="visually-hidden">Email</label>
                  <input 
                    id="footer-email"
                    type="email" 
                    placeholder="your@email.com" 
                    required
                  />
                  <button type="submit" aria-label="Subscribe to newsletter">→</button>
                </form>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2025 Bianco. Made with 🥔 in India.</p>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Refund Policy</a>
            </div>
            <div className="footer-payments" aria-label="Accepted payment methods">
              <IconVisa />
              <IconMastercard />
              <IconUPI />
            </div>
          </div>
        </div>
      </footer>

      {/* ==========================================
          ALL STYLES
          ========================================== */}
      <style>{`
        /* ========================================
           CSS VARIABLES & RESET
           ======================================== */
        
        :root {
          --orange: #FF6B35;
          --orange-light: #FF8F5C;
          --orange-dark: #E55A2B;
          --dark: #1a1a1a;
          --dark-light: #2d2d2d;
          --cream: #FAFAF8;
          --cream-dark: #F5F2ED;
          --gold: #D4AF37;
          --green: #4A6741;
          --green-dark: #3A5731;
          --red: #C94A3A;
          --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08);
          --shadow-md: 0 10px 40px rgba(0, 0, 0, 0.06);
          --shadow-lg: 0 20px 60px rgba(0, 0, 0, 0.1);
          --shadow-orange: 0 10px 30px rgba(255, 107, 53, 0.3);
          --transition-fast: 0.2s ease;
          --transition-normal: 0.3s ease;
          --transition-slow: 0.5s ease;
          --easing-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
          --easing-smooth: cubic-bezier(0.16, 1, 0.3, 1);
        }

        *,
        *::before,
        *::after {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        .app {
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: var(--cream);
          color: var(--dark);
          overflow-x: hidden;
          min-height: 100vh;
        }

        ::selection {
          background: var(--orange);
          color: white;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ========================================
           ACCESSIBILITY
           ======================================== */

        .skip-link {
          position: absolute;
          top: -100px;
          left: 50%;
          transform: translateX(-50%);
          padding: 12px 24px;
          background: var(--dark);
          color: white;
          border-radius: 8px;
          z-index: 10000;
          text-decoration: none;
          font-weight: 600;
          transition: top var(--transition-fast);
        }

        .skip-link:focus {
          top: 16px;
        }

        .visually-hidden {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        /* Focus styles for keyboard navigation */
        button:focus-visible,
        a:focus-visible,
        input:focus-visible {
          outline: 3px solid rgba(255, 107, 53, 0.5);
          outline-offset: 3px;
          border-radius: 8px;
        }

        /* ========================================
           CUSTOM CURSOR
           ======================================== */

        @media (pointer: fine) {
          body {
            cursor: none;
          }
          
          a, button, input {
            cursor: none;
          }
        }

        .custom-cursor {
          position: fixed;
          top: 0;
          left: 0;
          width: 14px;
          height: 14px;
          border-radius: 999px;
          background: rgba(255, 107, 53, 0.9);
          transform: translate(-100px, -100px);
          pointer-events: none;
          z-index: 9999;
          transition: 
            width 0.18s ease, 
            height 0.18s ease, 
            background 0.18s ease,
            opacity 0.18s ease;
          mix-blend-mode: multiply;
        }

        .custom-cursor::after {
          content: "";
          position: absolute;
          inset: -18px;
          border-radius: 999px;
          border: 1px solid rgba(255, 107, 53, 0.25);
          transition: inset 0.18s ease, opacity 0.18s ease;
        }

        .custom-cursor.active {
          width: 32px;
          height: 32px;
          background: rgba(255, 107, 53, 0.15);
        }

        .custom-cursor.active::after {
          inset: -8px;
          opacity: 0.9;
        }

        /* ========================================
           NAVIGATION
           ======================================== */

        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 16px 32px;
          transition: all var(--transition-normal);
        }

        .nav-scrolled {
          background: rgba(250, 250, 248, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.05);
        }

        .nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          color: var(--dark);
          font-size: 24px;
          font-weight: 900;
          letter-spacing: -0.02em;
        }

        .logo-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, var(--orange), var(--orange-light));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          box-shadow: var(--shadow-orange);
          transition: transform var(--transition-normal);
        }

        .logo:hover .logo-icon {
          transform: rotate(15deg) scale(1.05);
        }

        .nav-links {
          display: flex;
          gap: 40px;
        }

        .nav-links a {
          color: var(--dark);
          text-decoration: none;
          font-weight: 600;
          font-size: 15px;
          position: relative;
          transition: color var(--transition-fast);
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--orange);
          transition: width var(--transition-normal);
        }

        .nav-links a:hover {
          color: var(--orange);
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .nav-cart {
          position: relative;
          background: none;
          border: none;
          font-size: 20px;
          padding: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--dark);
          transition: color var(--transition-fast);
        }

        .nav-cart:hover {
          color: var(--orange);
        }

        .cart-count {
          position: absolute;
          top: 0;
          right: 0;
          min-width: 18px;
          height: 18px;
          background: var(--orange);
          color: white;
          font-size: 11px;
          font-weight: 700;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 4px;
        }

        .nav-btn {
          background: var(--dark);
          color: white;
          border: none;
          padding: 12px 28px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 14px;
          transition: all var(--transition-normal);
        }

        .nav-btn:hover {
          background: var(--orange);
          transform: translateY(-2px);
          box-shadow: var(--shadow-orange);
        }

        .menu-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          padding: 8px;
        }

        .menu-toggle span {
          width: 24px;
          height: 2px;
          background: var(--dark);
          transition: all var(--transition-normal);
          transform-origin: center;
        }

        .menu-toggle.open span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .menu-toggle.open span:nth-child(2) {
          opacity: 0;
        }

        .menu-toggle.open span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        /* ========================================
           HERO SECTION
           ======================================== */

        .hero {
          min-height: 100vh;
          padding: 140px 32px 80px;
          position: relative;
          overflow: hidden;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .bg-gradient {
          position: absolute;
          top: -50%;
          right: -20%;
          width: 80%;
          height: 150%;
          background: radial-gradient(circle, rgba(255, 107, 53, 0.08) 0%, transparent 60%);
        }

        .bg-pattern {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        .bg-chip {
          position: absolute;
          width: 200px;
          height: 140px;
          opacity: 0.6;
          transition: transform 0.1s ease-out;
        }

        .bg-chip-1 {
          top: 15%;
          right: 8%;
        }

        .bg-chip-2 {
          bottom: 25%;
          left: 5%;
          width: 150px;
          height: 100px;
        }

        .bg-chip-3 {
          top: 55%;
          right: 3%;
          width: 100px;
          height: 70px;
        }

        /* Screen flash effects */
        .screen-flash {
          position: fixed;
          inset: 0;
          background: white;
          pointer-events: none;
          opacity: 0;
          z-index: 100;
        }

        .flash-1 {
          animation: screenFlash 0.15s ease-out 0.3s;
        }

        .flash-2 {
          animation: screenFlash 0.15s ease-out 0.9s;
        }

        .flash-3 {
          animation: screenFlash 0.15s ease-out 1.5s;
        }

        @keyframes screenFlash {
          0% { opacity: 0; }
          50% { opacity: 0.4; }
          100% { opacity: 0; }
        }

        /* Blade trails */
        .blade-trails {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 5;
        }

        .blade {
          stroke-dasharray: 2500;
          stroke-dashoffset: 2500;
          opacity: 0;
        }

        .blade-1 {
          animation: bladeSlash 0.5s ease-out 0.25s forwards;
        }

        .blade-2 {
          animation: bladeSlash 0.5s ease-out 0.85s forwards;
        }

        .blade-3 {
          animation: bladeSlash 0.5s ease-out 1.45s forwards;
        }

        @keyframes bladeSlash {
          0% {
            stroke-dashoffset: 2500;
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 0;
          }
        }

        .hero-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
          align-items: center;
          min-height: calc(100vh - 220px);
          position: relative;
          z-index: 10;
        }

        /* Badges */
        .badges {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 40px;
          opacity: 0;
          animation: fadeUp 0.8s var(--easing-smooth) 2s forwards;
        }

        .badge {
          padding: 10px 18px;
          border-radius: 50px;
          font-size: 13px;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .badge-orange {
          background: linear-gradient(135deg, var(--orange), var(--orange-light));
          color: white;
          box-shadow: 0 4px 15px rgba(255, 107, 53, 0.25);
        }

        .badge-dark {
          background: var(--dark);
          color: white;
        }

        .badge-light {
          background: #FFF8E7;
          color: var(--dark);
          border: 1px solid #E8DFD0;
        }

        /* ========================================
           SLICE HEADLINE ANIMATION
           ======================================== */

        .headline {
          font-size: clamp(48px, 7vw, 82px);
          font-weight: 900;
          line-height: 1.05;
          margin-bottom: 40px;
          letter-spacing: -0.02em;
        }

        .line {
          display: block;
          margin-bottom: 8px;
          overflow: visible;
        }

        .word-wrapper {
          display: inline-block;
          margin-right: 0.22em;
          position: relative;
        }

        .word-container {
          position: relative;
          display: inline-block;
        }

        .word-half {
          position: absolute;
          left: 0;
          width: 100%;
          overflow: hidden;
          color: var(--dark);
        }

        .word-top {
          top: 0;
          height: 50%;
          clip-path: inset(0 0 50% 0);
        }

        .word-bottom {
          bottom: 0;
          height: 50%;
          clip-path: inset(50% 0 0 0);
        }

        .orange .word-half,
        .orange .word-final {
          background: linear-gradient(135deg, var(--orange), var(--orange-light));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .word-final {
          opacity: 0;
          transform: scale(1.1);
        }

        .cut-line {
          position: absolute;
          left: -10%;
          right: -10%;
          top: 50%;
          height: 4px;
          background: linear-gradient(90deg, transparent 0%, #FFD700 20%, #FFFFFF 50%, #FFD700 80%, transparent 100%);
          transform: translateY(-50%) scaleX(0);
          transform-origin: left;
          box-shadow: 
            0 0 20px var(--orange), 
            0 0 40px var(--orange), 
            0 0 60px rgba(255, 107, 53, 0.5);
          z-index: 10;
        }

        .orange-cut {
          background: linear-gradient(90deg, transparent 0%, var(--orange) 20%, #FFFFFF 50%, var(--orange) 80%, transparent 100%);
          box-shadow: 
            0 0 20px var(--orange), 
            0 0 40px #FFD700, 
            0 0 60px rgba(255, 215, 0, 0.5);
        }

        .particles {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 0;
          height: 0;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          width: 8px;
          height: 8px;
          background: linear-gradient(135deg, #E8C896, #D4A86C);
          border-radius: 50%;
          opacity: 0;
        }

        .orange-particles .particle {
          background: linear-gradient(135deg, var(--orange), #FFD700);
        }

        /* Particle positions */
        .p-0 { --px: -80px; --py: -60px; --r: 720deg; }
        .p-1 { --px: 90px; --py: -50px; --r: -540deg; }
        .p-2 { --px: -60px; --py: 70px; --r: 450deg; }
        .p-3 { --px: 100px; --py: 55px; --r: -630deg; }
        .p-4 { --px: -100px; --py: 20px; --r: 810deg; }
        .p-5 { --px: 70px; --py: -70px; --r: -900deg; }
        .p-6 { --px: -40px; --py: -80px; --r: 540deg; }
        .p-7 { --px: 50px; --py: 80px; --r: -720deg; }

        /* Word animation timings */
        .word-1 .word-top { animation: sliceTop 0.6s var(--easing-smooth) 0.3s forwards; }
        .word-1 .word-bottom { animation: sliceBottom 0.6s var(--easing-smooth) 0.3s forwards; }
        .word-1 .word-final { animation: wordReveal 0.5s var(--easing-smooth) 0.5s forwards; }
        .word-1 .cut-line { animation: cutSlash 0.3s ease-out 0.3s forwards; }
        .word-1 .particle { animation: particleBurst 0.8s var(--easing-smooth) 0.3s forwards; }

        .word-2 .word-top { animation: sliceTop 0.6s var(--easing-smooth) 0.5s forwards; }
        .word-2 .word-bottom { animation: sliceBottom 0.6s var(--easing-smooth) 0.5s forwards; }
        .word-2 .word-final { animation: wordReveal 0.5s var(--easing-smooth) 0.7s forwards; }
        .word-2 .cut-line { animation: cutSlash 0.3s ease-out 0.5s forwards; }
        .word-2 .particle { animation: particleBurst 0.8s var(--easing-smooth) 0.5s forwards; }

        .word-3 .word-top { animation: sliceTop 0.6s var(--easing-smooth) 0.9s forwards; }
        .word-3 .word-bottom { animation: sliceBottom 0.6s var(--easing-smooth) 0.9s forwards; }
        .word-3 .word-final { animation: wordReveal 0.5s var(--easing-smooth) 1.1s forwards; }
        .word-3 .cut-line { animation: cutSlash 0.3s ease-out 0.9s forwards; }
        .word-3 .particle { animation: particleBurst 0.8s var(--easing-smooth) 0.9s forwards; }

        .word-4 .word-top { animation: sliceTop 0.6s var(--easing-smooth) 1.1s forwards; }
        .word-4 .word-bottom { animation: sliceBottom 0.6s var(--easing-smooth) 1.1s forwards; }
        .word-4 .word-final { animation: wordReveal 0.5s var(--easing-smooth) 1.3s forwards; }
        .word-4 .cut-line { animation: cutSlash 0.3s ease-out 1.1s forwards; }
        .word-4 .particle { animation: particleBurst 0.8s var(--easing-smooth) 1.1s forwards; }

        .word-5 .word-top { animation: sliceTop 0.6s var(--easing-smooth) 1.5s forwards; }
        .word-5 .word-bottom { animation: sliceBottom 0.6s var(--easing-smooth) 1.5s forwards; }
        .word-5 .word-final { animation: wordReveal 0.5s var(--easing-smooth) 1.7s forwards; }
        .word-5 .cut-line { animation: cutSlash 0.3s ease-out 1.5s forwards; }
        .word-5 .particle { animation: particleBurst 0.8s var(--easing-smooth) 1.5s forwards; }

        .word-6 .word-top { animation: sliceTop 0.6s var(--easing-smooth) 1.7s forwards; }
        .word-6 .word-bottom { animation: sliceBottom 0.6s var(--easing-smooth) 1.7s forwards; }
        .word-6 .word-final { animation: wordReveal 0.5s var(--easing-smooth) 1.9s forwards; }
        .word-6 .cut-line { animation: cutSlash 0.3s ease-out 1.7s forwards; }
        .word-6 .particle { animation: particleBurst 0.8s var(--easing-smooth) 1.7s forwards; }

        @keyframes sliceTop {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(-40px) rotate(-8deg) scale(0.9);
            opacity: 0;
          }
        }

        @keyframes sliceBottom {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(40px) rotate(8deg) scale(0.9);
            opacity: 0;
          }
        }

        @keyframes wordReveal {
          0% {
            opacity: 0;
            transform: scale(1.15);
            filter: blur(4px);
          }
          100% {
            opacity: 1;
            transform: scale(1);
            filter: blur(0);
          }
        }

        @keyframes cutSlash {
          0% {
            transform: translateY(-50%) scaleX(0);
            opacity: 1;
          }
          60% {
            transform: translateY(-50%) scaleX(1);
            opacity: 1;
          }
          100% {
            transform: translateY(-50%) scaleX(1);
            opacity: 0;
          }
        }

        @keyframes particleBurst {
          0% {
            transform: translate(0, 0) rotate(0deg) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(var(--px), var(--py)) rotate(var(--r)) scale(0);
            opacity: 0;
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Hero content */
        .description {
          font-size: 18px;
          color: rgba(26, 26, 26, 0.6);
          line-height: 1.7;
          max-width: 500px;
          margin-bottom: 32px;
          opacity: 0;
          animation: fadeUp 0.8s var(--easing-smooth) 2.2s forwards;
        }

        .ctas {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 48px;
          opacity: 0;
          animation: fadeUp 0.8s var(--easing-smooth) 2.4s forwards;
        }

        /* ========================================
           BUTTONS
           ======================================== */

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 18px 36px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 16px;
          cursor: pointer;
          transition: all var(--transition-normal);
          border: none;
          text-decoration: none;
          font-family: inherit;
        }

        .btn-arrow {
          display: flex;
          align-items: center;
          transition: transform var(--transition-normal);
        }

        .btn:hover .btn-arrow {
          transform: translateX(5px);
        }

        .btn-primary {
          background: var(--dark);
          color: white;
        }

        .btn-primary:hover {
          background: var(--orange);
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(255, 107, 53, 0.3);
        }

        .btn-secondary {
          background: transparent;
          border: 2px solid var(--dark);
          color: var(--dark);
        }

        .btn-secondary:hover {
          background: var(--dark);
          color: white;
        }

        .play-icon {
          display: flex;
          align-items: center;
        }

        .btn-outline {
          background: transparent;
          border: 2px solid var(--dark);
          color: var(--dark);
        }

        .btn-outline:hover {
          background: var(--dark);
          color: white;
        }

        .btn-white {
          background: white;
          color: var(--orange);
        }

        .btn-white:hover {
          background: var(--dark);
          color: white;
        }

        .btn-ghost {
          background: transparent;
          border: 2px solid white;
          color: white;
        }

        .btn-ghost:hover {
          background: white;
          color: var(--orange);
        }

        .btn-large {
          padding: 22px 44px;
          font-size: 18px;
        }

        /* Social proof */
        .social-proof {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px 24px;
          background: white;
          border-radius: 20px;
          box-shadow: var(--shadow-md);
          max-width: fit-content;
          opacity: 0;
          animation: fadeUp 0.8s var(--easing-smooth) 2.6s forwards;
        }

        .avatars {
          display: flex;
        }

        .avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, #FFF0E5, #FFD4B8);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          margin-left: -12px;
          border: 3px solid white;
          box-shadow: var(--shadow-sm);
          opacity: 0;
          animation: avatarPop 0.5s var(--easing-bounce) forwards;
        }

        .avatar:first-child {
          margin-left: 0;
        }

        @keyframes avatarPop {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .proof-text strong {
          display: block;
          font-size: 15px;
          margin-bottom: 2px;
        }

        .stars {
          color: var(--orange);
          font-size: 13px;
          font-weight: 500;
        }

        /* ========================================
           BENTO GRID
           ======================================== */

        .hero-right {
          opacity: 0;
          animation: fadeUp 0.8s var(--easing-smooth) 2s forwards;
        }

        .bento {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .bento-main {
          grid-column: span 2;
          height: 280px;
          background: linear-gradient(135deg, #FFE4B8, #E8C896);
          border-radius: 28px;
          padding: 28px;
          position: relative;
          overflow: hidden;
          transition: transform 0.4s ease;
        }

        .bento-main:hover {
          transform: scale(0.98);
        }

        .bento-badge {
          display: inline-block;
          padding: 8px 16px;
          background: linear-gradient(135deg, var(--orange), var(--orange-light));
          color: white;
          border-radius: 50px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .bento-visual {
          position: absolute;
          bottom: -40px;
          right: -40px;
        }

        .bento-chip {
          font-size: 200px;
          display: block;
          animation: chipFloat 4s ease-in-out infinite;
        }

        @keyframes chipFloat {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(5deg);
          }
        }

        .bento-info {
          position: absolute;
          bottom: 28px;
          left: 28px;
        }

        .bento-info h3 {
          font-size: 32px;
          font-weight: 800;
          margin-bottom: 4px;
        }

        .bento-info p {
          font-size: 15px;
          opacity: 0.6;
          margin-bottom: 8px;
        }

        .bento-price {
          font-size: 18px;
          font-weight: 800;
          color: var(--orange);
        }

        .bento-stat {
          height: 170px;
          border-radius: 24px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          color: white;
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
        }

        .bento-stat:hover,
        .bento-stat:focus {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .bento-dark {
          background: linear-gradient(135deg, var(--dark), var(--dark-light));
        }

        .bento-orange {
          background: linear-gradient(135deg, var(--orange), var(--orange-light));
        }

        .stat-num {
          font-size: 56px;
          font-weight: 900;
          line-height: 1;
        }

        .stat-label small {
          display: block;
          opacity: 0.6;
          font-size: 13px;
        }

        .stat-label strong {
          font-weight: 700;
          font-size: 17px;
        }

        .bento-partners {
          grid-column: span 2;
          background: white;
          border-radius: 20px;
          padding: 20px;
          text-align: center;
          border: 1px solid rgba(0, 0, 0, 0.05);
          transition: box-shadow var(--transition-normal);
        }

        .bento-partners:hover {
          box-shadow: var(--shadow-md);
        }

        .bento-partners small {
          color: rgba(26, 26, 26, 0.4);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1px;
        }

        .partners {
          display: flex;
          justify-content: center;
          gap: 32px;
          margin-top: 12px;
        }

        .partners span {
          font-weight: 700;
          color: rgba(26, 26, 26, 0.25);
          font-size: 14px;
          transition: color var(--transition-fast);
          cursor: pointer;
        }

        .partners span:hover {
          color: var(--orange);
        }

        /* Scroll indicator */
        .scroll-indicator {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          opacity: 0;
          animation: fadeUp 0.8s var(--easing-smooth) 2.8s forwards;
        }

        .scroll-indicator span {
          font-size: 12px;
          font-weight: 600;
          color: rgba(26, 26, 26, 0.4);
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .scroll-line {
          width: 2px;
          height: 40px;
          background: rgba(26, 26, 26, 0.1);
          border-radius: 2px;
          position: relative;
          overflow: hidden;
        }

        .scroll-line::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 50%;
          background: var(--orange);
          animation: scrollPulse 1.5s ease-in-out infinite;
        }

        @keyframes scrollPulse {
          0%, 100% {
            transform: translateY(-100%);
          }
          50% {
            transform: translateY(200%);
          }
        }

        /* ========================================
           MARQUEE
           ======================================== */

        .marquee-section {
          background: var(--dark);
          padding: 24px 0;
          overflow: hidden;
        }

        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 40s linear infinite;
        }

        .marquee-track.paused {
          animation-play-state: paused;
        }

        .marquee-content {
          display: flex;
          align-items: center;
          gap: 48px;
          padding-right: 48px;
        }

        .marquee-content span {
          color: white;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 3px;
          white-space: nowrap;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* ========================================
           SECTIONS BASE STYLES
           ======================================== */

        .section-tag {
          display: inline-block;
          padding: 10px 20px;
          background: linear-gradient(135deg, var(--orange), var(--orange-light));
          color: white;
          border-radius: 50px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          margin-bottom: 20px;
        }

        .section-header {
          margin-bottom: 60px;
        }

        .section-header.center {
          text-align: center;
        }

        .section-header.light {
          color: white;
        }

        .section-header.light .section-subtitle {
          color: rgba(255, 255, 255, 0.7);
        }

        .section-header h2 {
          font-size: clamp(36px, 5vw, 52px);
          font-weight: 900;
          margin-bottom: 16px;
          letter-spacing: -0.02em;
        }

        .section-subtitle {
          font-size: 18px;
          color: rgba(26, 26, 26, 0.6);
          max-width: 600px;
          line-height: 1.6;
        }

        .section-header.center .section-subtitle {
          margin: 0 auto;
        }

        /* ========================================
           ABOUT SECTION
           ======================================== */

        .about-section {
          padding: 120px 24px;
          background: white;
        }

        .about-section.visible .about-image,
        .about-section.visible .about-content,
        .about-section.visible .about-stats .stat-card {
          opacity: 1;
          transform: translateY(0);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr 0.8fr;
          gap: 32px;
          align-items: stretch;
        }

        .about-image {
          position: relative;
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s var(--easing-smooth);
        }

        .about-img-container {
          height: 100%;
          min-height: 400px;
          background: linear-gradient(135deg, #E8E4DD, #D4CFC4);
          border-radius: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .about-emoji {
          font-size: 120px;
          transition: transform var(--transition-slow);
        }

        .about-img-container:hover .about-emoji {
          transform: scale(1.2) rotate(15deg);
        }

        .about-img-badge {
          position: absolute;
          bottom: 20px;
          left: 20px;
          padding: 8px 16px;
          background: white;
          border-radius: 50px;
          font-size: 12px;
          font-weight: 700;
        }

        .about-content {
          padding: 20px 0;
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s var(--easing-smooth) 0.1s;
        }

        .about-content h2 {
          font-size: 36px;
          font-weight: 900;
          margin-bottom: 24px;
          line-height: 1.2;
        }

        .about-content p {
          color: rgba(26, 26, 26, 0.6);
          line-height: 1.8;
          margin-bottom: 20px;
          font-size: 16px;
        }

        .about-features {
          display: flex;
          gap: 24px;
          margin: 32px 0;
        }

        .about-feature {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          font-size: 14px;
        }

        .feature-icon {
          font-size: 20px;
        }

        .about-stats {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .about-stats .stat-card {
          flex: 1;
          padding: 28px;
          border-radius: 24px;
          color: white;
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s var(--easing-smooth);
          transition-delay: var(--delay);
        }

        .about-stats .stat-card:nth-child(1) {
          background: linear-gradient(135deg, var(--green), var(--green-dark));
        }

        .about-stats .stat-card:nth-child(2) {
          background: linear-gradient(135deg, var(--orange), var(--orange-light));
        }

        .about-stats .stat-card:nth-child(3) {
          background: linear-gradient(135deg, var(--dark), var(--dark-light));
        }

        .stat-number {
          font-size: 40px;
          font-weight: 900;
          margin-bottom: 8px;
        }

        .stat-text {
          font-size: 14px;
          opacity: 0.8;
        }

        /* ========================================
           PRODUCTS SECTION
           ======================================== */

        .products-section {
          padding: 120px 24px;
          background: var(--cream-dark);
        }

        .products-section.visible .product-card,
        .products-section.visible .variety-pack {
          opacity: 1;
          transform: translateY(0);
        }

        .products-section .section-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          flex-wrap: wrap;
          gap: 24px;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-bottom: 40px;
        }

        .product-card {
          border-radius: 28px;
          padding: 28px;
          min-height: 420px;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          opacity: 0;
          transform: translateY(40px);
          transition: 
            all 0.8s var(--easing-smooth), 
            transform 0.4s ease, 
            box-shadow 0.4s ease;
          transition-delay: var(--delay);
        }

        .product-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
        }

        .product-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .product-emoji {
          font-size: 48px;
          transition: transform 0.4s ease;
        }

        .product-card:hover .product-emoji {
          transform: scale(1.3) rotate(-15deg);
        }

        .product-meta {
          text-align: right;
        }

        .product-weight {
          display: block;
          font-size: 12px;
          opacity: 0.5;
          margin-bottom: 4px;
        }

        .product-price {
          font-size: 18px;
          font-weight: 800;
        }

        .product-visual {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .product-chip-stack {
          position: relative;
          width: 100px;
          height: 80px;
        }

        .product-chip-stack span {
          position: absolute;
          font-size: 60px;
          opacity: 0.15;
          transition: all 0.4s ease;
        }

        .product-chip-stack span:nth-child(1) {
          top: 0;
          left: 0;
          transform: rotate(-15deg);
        }

        .product-chip-stack span:nth-child(2) {
          top: 10px;
          left: 20px;
          transform: rotate(5deg);
        }

        .product-chip-stack span:nth-child(3) {
          top: 20px;
          left: 40px;
          transform: rotate(20deg);
        }

        .product-card:hover .product-chip-stack span {
          opacity: 0.3;
        }

        .product-card:hover .product-chip-stack span:nth-child(1) {
          transform: rotate(-25deg) translateY(-10px);
        }

        .product-card:hover .product-chip-stack span:nth-child(3) {
          transform: rotate(30deg) translateY(10px);
        }

        .product-bottom h3 {
          font-size: 28px;
          font-weight: 800;
          margin-bottom: 6px;
        }

        .product-tagline {
          font-size: 15px;
          opacity: 0.7;
          margin-bottom: 8px;
        }

        .product-desc {
          font-size: 13px;
          opacity: 0.6;
          line-height: 1.5;
          margin-bottom: 20px;
        }

        .product-actions {
          display: flex;
          gap: 12px;
        }

        .product-btn {
          flex: 1;
          padding: 14px 20px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: none;
          border-radius: 50px;
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
          color: inherit;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.4s ease;
          font-family: inherit;
        }

        .product-quick {
          padding: 14px;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          border-radius: 50px;
          font-size: 14px;
          cursor: pointer;
          color: inherit;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.4s ease 0.05s;
          font-family: inherit;
        }

        .product-card:hover .product-btn,
        .product-card:hover .product-quick {
          opacity: 1;
          transform: translateY(0);
        }

        .product-btn:hover {
          background: rgba(255, 255, 255, 0.35);
        }

        /* Variety Pack */
        .variety-pack {
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 40px;
          align-items: center;
          background: white;
          border-radius: 28px;
          padding: 40px;
          border: 1px solid rgba(0, 0, 0, 0.05);
          box-shadow: var(--shadow-md);
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s var(--easing-smooth) 0.4s;
        }

        .variety-visual {
          position: relative;
        }

        .variety-emoji {
          font-size: 80px;
          display: block;
        }

        .variety-chips {
          position: absolute;
          top: -10px;
          right: -30px;
          display: flex;
        }

        .variety-chips span {
          font-size: 24px;
          animation: chipOrbit 3s ease-in-out infinite;
          animation-delay: calc(var(--i) * 0.2s);
        }

        @keyframes chipOrbit {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .variety-content {
          max-width: 400px;
        }

        .variety-badge {
          display: inline-block;
          padding: 6px 12px;
          background: #E8F5E9;
          color: #2E7D32;
          border-radius: 50px;
          font-size: 11px;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .variety-content h3 {
          font-size: 28px;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .variety-content p {
          color: rgba(26, 26, 26, 0.6);
          font-size: 15px;
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .variety-includes {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .variety-includes span {
          padding: 6px 12px;
          background: var(--cream-dark);
          border-radius: 50px;
          font-size: 13px;
          font-weight: 600;
        }

        .variety-cta {
          text-align: center;
        }

        .variety-price {
          margin-bottom: 16px;
        }

        .variety-price .original {
          font-size: 18px;
          color: rgba(26, 26, 26, 0.4);
          text-decoration: line-through;
          margin-right: 12px;
        }

        .variety-price .sale {
          font-size: 32px;
          font-weight: 900;
          color: var(--orange);
        }

        /* ========================================
           PROCESS SECTION
           ======================================== */

        .process-section {
          padding: 120px 24px;
          background: linear-gradient(135deg, var(--dark), #0d0d0d);
          color: white;
        }

        .process-section.visible .process-step {
          opacity: 1;
          transform: translateY(0);
        }

        .process-timeline {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          position: relative;
        }

        .process-step {
          position: relative;
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s var(--easing-smooth);
          transition-delay: var(--delay);
        }

        .step-line {
          display: flex;
          align-items: center;
          margin-bottom: 24px;
        }

        .step-dot {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: var(--color);
          box-shadow: 0 0 20px var(--color);
        }

        .step-connector {
          flex: 1;
          height: 2px;
          background: linear-gradient(90deg, var(--color), rgba(255, 255, 255, 0.1));
          margin-left: 12px;
        }

        .step-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 24px;
          padding: 32px;
          height: 280px;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.4s ease;
        }

        .step-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.1);
          transform: translateY(-5px);
        }

        .step-icon {
          font-size: 60px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          opacity: 0.15;
          transition: all 0.4s ease;
        }

        .step-card:hover .step-icon {
          opacity: 0.3;
          transform: translate(-50%, -50%) scale(1.2);
        }

        .step-num {
          font-size: 12px;
          font-weight: 700;
          opacity: 0.4;
          margin-bottom: auto;
        }

        .step-card h3 {
          font-size: 26px;
          font-weight: 800;
          margin-bottom: 8px;
          position: relative;
        }

        .step-card p {
          font-size: 14px;
          opacity: 0.6;
          line-height: 1.6;
          position: relative;
        }

        /* ========================================
           STATS SECTION
           ======================================== */

        .stats-section {
          padding: 80px 24px;
          background: var(--orange);
          color: white;
        }

        .stats-section.visible .stat-item {
          opacity: 1;
          transform: translateY(0);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
          text-align: center;
        }

        .stat-item {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s var(--easing-smooth);
          transition-delay: var(--delay);
        }

        .stat-item .stat-value {
          font-size: 56px;
          font-weight: 900;
          margin-bottom: 8px;
        }

        .stat-item .stat-label {
          font-size: 16px;
          opacity: 0.9;
        }

        /* ========================================
           REVIEWS SECTION
           ======================================== */

        .reviews-section {
          padding: 120px 24px;
          background: white;
        }

        .reviews-section.visible .review-card {
          opacity: 1;
          transform: translateY(0);
        }

        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 60px;
        }

        .review-card {
          background: var(--cream);
          border-radius: 24px;
          padding: 32px;
          border: 1px solid rgba(0, 0, 0, 0.05);
          opacity: 0;
          transform: translateY(40px);
          transition: 
            all 0.8s var(--easing-smooth), 
            box-shadow var(--transition-normal);
          transition-delay: var(--delay);
        }

        .review-card:hover {
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
        }

        .review-stars {
          color: #FFB800;
          font-size: 18px;
          letter-spacing: 2px;
          margin-bottom: 20px;
        }

        .review-text {
          font-size: 17px;
          line-height: 1.7;
          margin-bottom: 24px;
          color: var(--dark);
        }

        .review-author {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .author-avatar {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: linear-gradient(135deg, #FFF0E5, #FFD4B8);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        }

        .author-info strong {
          display: block;
          font-size: 15px;
          margin-bottom: 2px;
        }

        .author-info span {
          font-size: 13px;
          color: rgba(26, 26, 26, 0.5);
        }

        .reviews-cta {
          text-align: center;
        }

        .reviews-cta p {
          font-size: 18px;
          color: rgba(26, 26, 26, 0.6);
          margin-bottom: 20px;
        }

        /* ========================================
           FAQ SECTION
           ======================================== */

        .faq-section {
          padding: 120px 24px;
          background: var(--cream-dark);
        }

        .faq-section.visible .faq-header,
        .faq-section.visible .faq-item {
          opacity: 1;
          transform: translateY(0);
        }

        .faq-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 60px;
          align-items: start;
        }

        .faq-header {
          position: sticky;
          top: 120px;
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s var(--easing-smooth);
        }

        .faq-header h2 {
          font-size: 42px;
          font-weight: 900;
          margin-bottom: 16px;
        }

        .faq-header > p {
          color: rgba(26, 26, 26, 0.6);
          font-size: 16px;
          margin-bottom: 40px;
          line-height: 1.6;
        }

        .faq-contact p {
          font-size: 14px;
          margin-bottom: 12px;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .faq-item {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(0, 0, 0, 0.05);
          opacity: 0;
          transform: translateY(40px);
          transition: 
            all 0.8s var(--easing-smooth), 
            box-shadow var(--transition-normal);
          transition-delay: var(--delay);
        }

        .faq-item:hover {
          box-shadow: var(--shadow-md);
        }

        .faq-question {
          width: 100%;
          padding: 24px 28px;
          background: none;
          border: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 17px;
          font-weight: 700;
          text-align: left;
          cursor: pointer;
          transition: color var(--transition-fast);
          font-family: inherit;
          color: var(--dark);
        }

        .faq-question:hover {
          color: var(--orange);
        }

        .faq-icon {
          font-size: 24px;
          font-weight: 300;
          color: var(--orange);
          transition: transform var(--transition-normal);
        }

        .faq-item.active .faq-icon {
          transform: rotate(180deg);
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease;
        }

        .faq-item.active .faq-answer {
          max-height: 300px;
        }

        .faq-answer p {
          padding: 0 28px 24px;
          color: rgba(26, 26, 26, 0.6);
          line-height: 1.7;
          font-size: 15px;
        }

        /* ========================================
           CTA SECTION
           ======================================== */

        .cta-section {
          padding: 120px 24px;
          background: linear-gradient(135deg, var(--orange), var(--orange-light));
          color: white;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .cta-section.visible .cta-content {
          opacity: 1;
          transform: translateY(0);
        }

        .cta-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .cta-chip {
          position: absolute;
          width: 200px;
          opacity: 0.3;
        }

        .cta-chip-1 {
          top: 10%;
          left: 5%;
          transform: rotate(-20deg);
        }

        .cta-chip-2 {
          bottom: 10%;
          right: 5%;
          transform: rotate(15deg);
        }

        .cta-chip-3 {
          top: 50%;
          left: 80%;
          transform: rotate(30deg);
          width: 120px;
        }

        .cta-content {
          position: relative;
          z-index: 1;
          max-width: 700px;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s var(--easing-smooth);
        }

        .cta-section h2 {
          font-size: clamp(40px, 6vw, 56px);
          font-weight: 900;
          margin-bottom: 20px;
        }

        .cta-content > p {
          font-size: 20px;
          opacity: 0.9;
          margin-bottom: 40px;
        }

        .cta-form {
          display: flex;
          gap: 12px;
          max-width: 500px;
          margin: 0 auto 32px;
        }

        .cta-form input {
          flex: 1;
          padding: 18px 24px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50px;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          font-size: 16px;
          font-family: inherit;
        }

        .cta-form input::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }

        .cta-form input:focus {
          outline: none;
          border-color: white;
          background: rgba(255, 255, 255, 0.15);
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }

        .cta-trust {
          display: flex;
          justify-content: center;
          gap: 32px;
          flex-wrap: wrap;
        }

        .cta-trust span {
          font-size: 14px;
          opacity: 0.9;
        }

        /* ========================================
           FOOTER
           ======================================== */

        .footer {
          padding: 80px 24px 40px;
          background: #0a0a0a;
          color: white;
        }

        .footer-main {
          display: grid;
          grid-template-columns: 1.2fr 2fr;
          gap: 60px;
          margin-bottom: 60px;
        }

        .footer-brand {
          max-width: 300px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          color: white;
          font-size: 24px;
          font-weight: 900;
          margin-bottom: 20px;
        }

        .footer-brand > p {
          color: rgba(255, 255, 255, 0.5);
          font-size: 15px;
          line-height: 1.7;
          margin-bottom: 24px;
        }

        .footer-social {
          display: flex;
          gap: 16px;
        }

        .footer-social a {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
          transition: all var(--transition-normal);
        }

        .footer-social a:hover {
          background: var(--orange);
          transform: translateY(-3px);
        }

        .footer-links-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
        }

        .footer-col h4 {
          font-size: 15px;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .footer-col ul {
          list-style: none;
        }

        .footer-col li {
          margin-bottom: 12px;
        }

        .footer-col a {
          color: rgba(255, 255, 255, 0.5);
          text-decoration: none;
          font-size: 14px;
          transition: color var(--transition-fast);
        }

        .footer-col a:hover {
          color: white;
        }

        .footer-col > p {
          color: rgba(255, 255, 255, 0.5);
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .footer-newsletter {
          display: flex;
          gap: 8px;
        }

        .footer-newsletter input {
          flex: 1;
          padding: 12px 16px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.05);
          color: white;
          font-size: 14px;
          font-family: inherit;
        }

        .footer-newsletter input::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }

        .footer-newsletter button {
          padding: 12px 16px;
          background: var(--orange);
          border: none;
          border-radius: 8px;
          color: white;
          font-size: 16px;
          cursor: pointer;
          transition: all var(--transition-normal);
        }

        .footer-newsletter button:hover {
          background: var(--orange-light);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 40px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          flex-wrap: wrap;
          gap: 20px;
        }

        .footer-bottom > p {
          color: rgba(255, 255, 255, 0.4);
          font-size: 14px;
        }

        .footer-legal {
          display: flex;
          gap: 24px;
        }

        .footer-legal a {
          color: rgba(255, 255, 255, 0.4);
          text-decoration: none;
          font-size: 13px;
          transition: color var(--transition-fast);
        }

        .footer-legal a:hover {
          color: white;
        }

        .footer-payments {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        /* ========================================
           REDUCED MOTION SUPPORT
           ======================================== */

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }

          .blade,
          .screen-flash,
          .scroll-line::after,
          .particles,
          .cut-line {
            display: none !important;
          }

          .word-final {
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
          }

          .word-half {
            display: none !important;
          }

          .marquee-track {
            animation: none !important;
          }

          .bento-chip {
            animation: none !important;
          }

          .variety-chips span {
            animation: none !important;
          }

          .badges,
          .description,
          .ctas,
          .social-proof,
          .hero-right,
          .scroll-indicator,
          .about-image,
          .about-content,
          .about-stats .stat-card,
          .product-card,
          .variety-pack,
          .process-step,
          .stat-item,
          .review-card,
          .faq-header,
          .faq-item,
          .cta-content {
            opacity: 1 !important;
            transform: none !important;
          }

          .custom-cursor {
            display: none !important;
          }
        }

        /* ========================================
           RESPONSIVE STYLES
           ======================================== */

        @media (max-width: 1024px) {
          .hero-content {
            grid-template-columns: 1fr;
          }

          .hero-right {
            display: none;
          }

          .about-grid {
            grid-template-columns: 1fr;
          }

          .about-stats {
            flex-direction: row;
          }

          .products-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .process-timeline {
            grid-template-columns: repeat(2, 1fr);
          }

          .step-connector {
            display: none;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .reviews-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .faq-grid {
            grid-template-columns: 1fr;
          }

          .faq-header {
            position: relative;
            top: 0;
          }

          .variety-pack {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .variety-cta {
            width: 100%;
          }

          .footer-main {
            grid-template-columns: 1fr;
          }

          .footer-links-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .nav-links {
            position: fixed;
            top: 80px;
            left: 0;
            right: 0;
            background: white;
            flex-direction: column;
            padding: 32px;
            gap: 24px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
            transform: translateY(-100%);
            opacity: 0;
            pointer-events: none;
            transition: all var(--transition-normal);
          }

          .nav-links.open {
            transform: translateY(0);
            opacity: 1;
            pointer-events: auto;
          }

          .menu-toggle {
            display: flex;
          }

          .nav-cart {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .hero {
            padding: 120px 20px 60px;
          }

          .headline {
            font-size: 40px;
          }

          .products-grid {
            grid-template-columns: 1fr;
          }

          .process-timeline {
            grid-template-columns: 1fr;
          }

          .stats-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .stat-item .stat-value {
            font-size: 44px;
          }

          .reviews-grid {
            grid-template-columns: 1fr;
          }

          .about-stats {
            flex-direction: column;
          }

          .footer-links-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }

          .cta-form {
            flex-direction: column;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .btn-large {
            width: 100%;
            justify-content: center;
          }

          .custom-cursor {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
