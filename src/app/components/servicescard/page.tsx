'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Servicescard() {
  const fullText = "I can do ... Click here to know about my services";
  const [text, setText] = useState('');
  const [hovered, setHovered] = useState(false);
  const router = useRouter(); // Next.js router for navigation

  useEffect(() => {
    if (hovered) {
      let index = 0;
      setText(''); // Reset text before animation

      const interval = setInterval(() => {
        if (index < fullText.length) {
          setText(prev => prev + fullText[index]); 
          index++;
        } else {
          clearInterval(interval);
        }
      }, 50); // Adjust timing for letter-by-letter effect

      return () => clearInterval(interval);
    }
  }, [hovered]);

  const handleClick = () => {
    router.push('/services'); // Navigate to the About page
  };

  return (
    <div 
      className="relative bg-slate-300 w-48 h-48 border rounded-md m-4 overflow-hidden md:h-40 flex items-center justify-center group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setText(''); }} // Reset on hover out
      onClick={handleClick} // Navigate on click
    >
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-50 transition-opacity duration-300 group-hover:opacity-70"
        style={{ backgroundImage: "url('https://lafqkspgkmbrbmxwcagj.supabase.co/storage/v1/object/public/bucketone/uploads/WhatsApp%20Image%202025-03-09%20at%2014.22.26.jpeg')" }}
      ></div>

      {/* Text Content */}
      <div className="relative z-10 text-center text-white font-semibold">
        <h4 className="text-yellow-400 text-lg">Services!</h4>
        <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {text}
        </p>
      </div>

    </div>
  );
}
