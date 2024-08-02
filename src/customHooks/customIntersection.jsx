import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';

const customIntersection = () => {
  function callback(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(entry.target.dataset.animationClass, "madEntries");
        const animationClass = entry.target.dataset.animationClass;
        entry.target.classList.add(animationClass);
      }
    });
  }

  const section = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(callback);

    section.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      section.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);
  return section
}

  

export default customIntersection