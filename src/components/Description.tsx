"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const title = "DESCRIÇÃO DA VAGA:";
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.20 },
  },
};
const letter = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

export function JobDescription({
  onAnalyze,
}: {
  onAnalyze: (text: string) => void;
}) {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    if (!text) return;
    setLoading(true);
    await onAnalyze(text);
    setLoading(false);
  }

  return (
    <section className="w-full min-h-dvh flex flex-col justify-center items-center px-6 py-10 text-white bg-gradient-to-b from-[#0e0b18] to-black">
      <motion.h2
        className="text-2xl sm:text-3xl font-bold tracking-widest drop-shadow-md leading-tight text-[#c7b4fc] mb-8 flex flex-wrap justify-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {title.split("").map((char, index) => (
          <motion.span key={index} variants={letter}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h2>

      <div
        className="w-full max-w-md h-1/2 bg-[#15101f] border border-[#2d204b] p-6 rounded-2xl shadow-lg flex flex-col"
      >
        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={6}
          placeholder="Ex: Buscamos um desenvolvedor com experiência em React, Node.js..."
          className="resize-none h-full bg-[#0f0b19] text-white border border-[#3a2d58] focus:border-[#a67cf8] placeholder:text-[#8c86a1]"
        />

        <div className="mt-5 flex items-center justify-end">
          <Button
            disabled={!text || loading}
            onClick={handleClick}
            className="w-full bg-[#5e3aaf]/20 border border-[#5e3aaf]/30 text-[#a67cf8] hover:bg-[#a67cf8]/20 hover:text-white hover:scale-105 transition-all duration-300 font-semibold px-10 py-5 rounded-lg shadow-md cursor-pointer"
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                Analisando...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Enviar para análise
              </div>
            )}
          </Button>
        </div>
      </div>
    </section>
  );
}
