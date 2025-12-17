'use client'

import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

export default function CTAButton() {
  const handleClick = () => {
    // Substitua pela URL do seu grupo Telegram
    window.open('https://t.me/seu_grupo_vip', '_blank')
  }

  return (
    <motion.button
      onClick={handleClick}
      className="relative overflow-hidden bg-telegram-blue text-white font-bold px-10 py-5 md:px-8 md:py-4 rounded-full text-lg md:text-base shadow-2xl group w-full max-w-xs md:max-w-none md:w-auto"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        scale: [1, 1.02, 1],
      }}
      transition={{
        scale: {
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        },
      }}
    >
      {/* Efeito Sheen (Laminado) */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.4) 50%, transparent 70%)',
          width: '200%',
          height: '200%',
        }}
        animate={{
          x: ['-100%', '100%'],
          y: ['-100%', '100%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
          repeatDelay: 0,
        }}
      />
      
      {/* Conteúdo do botão */}
      <span className="relative z-10 whitespace-nowrap">
        Entrar al grupo de live
      </span>
    </motion.button>
  )
}

