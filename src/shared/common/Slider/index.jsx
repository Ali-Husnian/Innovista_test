// 'use client';
// import React, {useState, useEffect} from 'react';
// import {motion, AnimatePresence} from 'framer-motion';
// import Image from 'next/image';
// import { WidthFull } from '@mui/icons-material';

'use client';
import React, {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {Box} from '@mui/material';
import Image from 'next/image';

export default function Slider() {
 const [currentIndex, setCurrentIndex] = useState(0);
 const [direction, setDirection] = useState(1);

 // Slides with image sources
 const slides = [
  {
   id: 1,
   src: '/Online-Business-6.jpg', // Update with your actual image paths
   alt: 'Slide 1',
   text: 'Slide 1',
  },
  {
   id: 2,
   src: '/Online-Business-6.jpg',
   alt: 'Slide 2',
   text: 'Slide 2',
  },
  {
   id: 3,
   src: '/Online-Business-6.jpg',
   alt: 'Slide 3',
   text: '',
  },
 ];

 useEffect(() => {
  const interval = setInterval(() => {
   setDirection(1);
   setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, 3000);

  return () => clearInterval(interval);
 }, [slides.length]);

 const slideVariants = {
  enter: (direction) => ({
   x: direction > 0 ? '100%' : '-100%',
   opacity: 0,
  }),
  center: {
   x: 0,
   opacity: 1,
   transition: {
    duration: 0.5,
   },
  },
  exit: (direction) => ({
   x: direction > 0 ? '-100%' : '100%',
   opacity: 0,
   transition: {
    duration: 0.5,
   },
  }),
 };

 return (
  <Box
   sx={{
    position: 'relative',
    width: '100%',
    height: '400px',
    overflow: 'hidden',
   }}
  >
   <AnimatePresence custom={direction} initial={false}>
    <motion.div
     key={currentIndex}
     custom={direction}
     variants={slideVariants}
     initial="enter"
     animate="center"
     exit="exit"
     style={{
      position: 'relative',
      width: '100%',
      height: '100%',
     }}
    >
     <Box
      sx={{
       position: 'relative',
       width: '100%',
       height: '100%',
      }}
     >
      <Image
       src={slides[currentIndex].src}
       alt={slides[currentIndex].alt}
       fill
       style={{
        objectFit: 'cover',
        objectPosition: 'center',
       }}
       priority
      />
      
     </Box>
    </motion.div>
   </AnimatePresence>
  </Box>
 );
}

/*
  <Box
       sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 2,
        textAlign: 'center',
       }}
      >
       {slides[currentIndex].text}
      </Box>
*/