'use client'

import { motion } from 'framer-motion'

export default function MarqueeHeader() {
  const text = "¡GANA LUCAS CONMIGO EN VIVO! 💸"
  const repeatedText = Array(15).fill(text).join(' • ')

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-neon-cyan overflow-hidden h-12 md:h-14">
      <motion.div
        className="flex whitespace-nowrap h-full items-center"
        animate={{
          x: ['0%', '-50%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        }}
      >
        {/* Duplicar o conteúdo para loop infinito perfeito */}
        <div className="flex-shrink-0">
          <span className="text-black font-bold text-sm md:text-base px-4 inline-block">
            {repeatedText}
          </span>
        </div>
        <div className="flex-shrink-0">
          <span className="text-black font-bold text-sm md:text-base px-4 inline-block">
            {repeatedText}
          </span>
        </div>
      </motion.div>
    </div>
  )
}

