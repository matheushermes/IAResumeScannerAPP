import { Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge"

export function Sidebar() {
  return (
    <aside className="w-full
            sm:w-[40%]
            lg:w-[30%]
            min-h-dvh
            border-solid
            border-r
            flex
            items-center
            justify-center
            relative
            overflow-hidden">
      
      {/* Glow decorativo no fundo melhorado */}
      <div
        className="absolute -top-16 -left-16 w-64 h-64 rounded-full z-0"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(127, 34, 254, 0.4) 0%, rgba(127, 34, 254, 0) 70%)',
          filter: 'blur(60px)',
          opacity: 0.6,
        }}
      />
      <div
        className="absolute -bottom-32 -right-32 w-102 h-102 rounded-full z-0"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(127, 34, 254, 0.3) 0%, rgba(127, 34, 254, 0) 70%)',
          filter: 'blur(45px)',
          opacity: 0.4,
        }}
      />


      {/* Conteúdo principal */}
      <div className="z-10 flex flex-col items-start gap-4 px-16">
        {/* Título com RESUME e SCANNER empilhados */}
        <div className="relative flex flex-col">
          <h1 className="text-5xl font-bold tracking-widest text-white drop-shadow-md leading-tight">
            RESUME
            <br />
            SCANNER
          </h1>

          {/* Sparkles posicionada próximo ao "E" de RESUME */}
          <Sparkles
            className="w-8 h-8 text-[#a67cf8] absolute top-0 right-[-40px]"
            strokeWidth={2.5}
          />
        </div>

        {/* Descrição maior e cinza claro */}
        <p className="text-base text-gray-400 max-w-md leading-relaxed drop-shadow-sm">
          Analise seu currículo com AI local. Obtenha insights precisos, pontuação personalizada e recomendações profissionais, com velocidade e total privacidade.
        </p>

        {/* Badge alinhado à esquerda, não centralizado */}
        <div className="flex flex-wrap gap-2">
          <Badge className="bg-[#a67cf8]/20 text-[#d0bfff] border-[#a67cf8]/30">
            IA local ⚡
          </Badge>

          <Badge className="bg-[#5e3aaf]/20 text-[#7c5dd6] border-[#5e3aaf]/30">
            Score Inteligente 🧠
          </Badge>

          <Badge className="bg-[#a67cf8]/20 text-[#d0bfff] border-[#a67cf8]/30">
            Análise rápida 🔍
          </Badge>

          <Badge className="bg-[#5e3aaf]/20 text-[#7c5dd6] border-[#5e3aaf]/30">
            Feedback 💬
          </Badge>

          <Badge className="bg-[#a67cf8]/20 text-[#d0bfff] border-[#a67cf8]/30">
            Privacidade 🔒
          </Badge>
        </div>


      </div>
    </aside>
  );
}
