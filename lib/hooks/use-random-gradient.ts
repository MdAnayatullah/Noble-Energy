"use client";

import { useState, useCallback } from 'react';

const gradients = [
  'from-blue-500 to-purple-500',
  'from-green-400 to-blue-500',
  'from-purple-500 to-pink-500',
  'from-yellow-400 to-orange-500',
  'from-pink-500 to-rose-500',
  'from-indigo-500 to-blue-500',
  'from-emerald-500 to-teal-500',
  'from-orange-500 to-red-500',
  'from-violet-500 to-purple-500',
  'from-cyan-500 to-blue-500'
];

export function useRandomGradient() {
  const [gradient, setGradient] = useState(gradients[0]);

  const changeGradient = useCallback(() => {
    const currentIndex = gradients.indexOf(gradient);
    const nextIndex = Math.floor(Math.random() * (gradients.length - 1));
    const adjustedIndex = nextIndex >= currentIndex ? nextIndex + 1 : nextIndex;
    setGradient(gradients[adjustedIndex]);
  }, [gradient]);

  return { gradient, changeGradient };
}