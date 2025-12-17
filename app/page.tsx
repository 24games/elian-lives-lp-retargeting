'use client'

import MarqueeHeader from '@/components/MarqueeHeader'
import CTAButton from '@/components/CTAButton'

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      {/* Marquee Header Fixo */}
      <MarqueeHeader />

      {/* Seção Hero */}
      <div className="relative w-full" style={{ minHeight: '200vh' }}>
        {/* Background Image - Garantir que apareça completa */}
        <div className="fixed inset-0 w-full h-full -z-10 bg-black overflow-hidden">
          <div className="absolute inset-0 flex items-start justify-center">
            <img
              src="/images/BG RETARGETING ELIAN.webp"
              alt="Background"
              className="w-full h-auto object-contain max-h-screen"
              style={{ minHeight: '100vh' }}
            />
          </div>
        </div>

        {/* Overlay Gradiente - Muito suave para não esconder a imagem */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent" style={{ minHeight: '100vh', pointerEvents: 'none' }} />

        {/* Conteúdo Principal - Metade superior da tela */}
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-start px-4 md:px-8 pt-20 md:pt-24">
          <div className="max-w-3xl mx-auto text-center space-y-4 md:space-y-5 mt-8 md:mt-12">
            {/* Headline com destaques ciano */}
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight">
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
            <div className="pt-3 md:pt-4">
              <CTAButton />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

