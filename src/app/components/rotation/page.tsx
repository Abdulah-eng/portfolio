'use client';
import { useState } from 'react';
import Hell from '../Card/page';
import Servicescard from '../servicescard/page';
import Aboutcard from '../aboutcard/page';

export default function Rotation() {
  const [isHovered, setIsHovered] = useState(false);

  // Define card components in alternating order
  const cards = [<Hell key={0} />, <Aboutcard key={1} />, <Servicescard key={2} />, <Hell key={3} />, <Aboutcard key={4} />, <Servicescard key={5} />];

  return (
    <div className="relative w-[300px] h-[300px] mx-auto mt-20 flex justify-center ml-[-50px] perspective-1000">
      {/* Rotating container (stops rotating on hover) */}
      <div
        className={`relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] transform-style-3d transition-all ${
          isHovered ? '' : 'animate-spin3D'
        }`}
      >
        {/* Generate multiple cards in a circular 3D layout */}
        {cards.map((CardComponent, i) => (
          <div
            key={i}
            className="absolute w-[120px] h-[160px] md:w-[150px] md:h-[200px] transition-all transform origin-center"
            style={{
              transform: `rotateY(${i * 60}deg) translateZ(200px) translateY(80px)`,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="transition-transform hover:scale-125">
              {CardComponent}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
