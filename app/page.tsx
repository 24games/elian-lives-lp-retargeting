'use client'

import MarqueeHeader from '@/components/MarqueeHeader'
import CTAButton from '@/components/CTAButton'

export default function Home() {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      {/* Marquee Header Fixo */}
      <MarqueeHeader />

      {/* Seção Hero */}
      <div className="relative h-full w-full">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/BG RETARGETING ELIAN.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Fallback caso a imagem não carregue */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black" />
        </div>

        {/* Overlay Gradiente */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-transparent" />

        {/* Conteúdo Principal */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 md:px-8 pt-16 md:pt-20">
          <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
            {/* Headline */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Revienta el Casino en Vivo: Multiplica tu plata x4 junto al experto.
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-xl lg:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Deja de jugar solo y empieza a forrarte. Únete a la transmisión y copia mis jugadas ganadoras en tiempo real.
            </p>

            {/* Botão CTA */}
            <div className="pt-4 md:pt-6">
              <CTAButton />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

