'use client'

import MarqueeHeader from '@/components/MarqueeHeader'
import CTAButton from '@/components/CTAButton'

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden" style={{ minHeight: '100vh', height: '100vh' }}>
      {/* Marquee Header Fixo */}
      <MarqueeHeader />

      {/* Seção Hero */}
      <div className="relative w-full h-full">
        {/* Background Image - Imagem fixa completa sem parallax */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('/images/BG RETARGETING ELIAN.webp')",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
          }}
        />

        {/* Conteúdo Principal - Metade superior da tela */}
        <div className="relative z-10 h-full flex flex-col items-center justify-start px-4 md:px-8 pt-12 md:pt-16">
          <div className="max-w-3xl mx-auto text-center space-y-3 md:space-y-4 mt-2 md:mt-4">
            {/* Headline com destaques ciano */}
            <h1 className="text-xl md:text-2xl lg:text-3xl font-black text-white leading-tight uppercase tracking-tight">
              <span className="relative inline-block px-2 py-1 mx-1 bg-neon-cyan text-black rounded">
                Revienta
              </span>
              el Casino en Vivo:{' '}
              <span className="relative inline-block px-2 py-1 mx-1 bg-neon-cyan text-black rounded">
                Multiplica tu plata x4
              </span>
              junto al experto.
            </h1>

            {/* Subheadline com negrito */}
            <p className="text-sm md:text-base lg:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Deja de jugar solo y <strong className="text-white font-bold">empieza a forrarte</strong>. Únete a la transmisión y copia mis jugadas ganadoras en tiempo real.
            </p>

            {/* Botão CTA */}
            <div className="pt-2 md:pt-3">
              <CTAButton />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

