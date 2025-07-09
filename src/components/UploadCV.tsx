"use client";

import { useState, useRef } from "react";
import { UploadCloud, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

interface UploadCVProps {
  onUpload: (file: File) => Promise<void>;
}

export function UploadCV({ onUpload }: UploadCVProps) {
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [success, setSuccess] = useState(false);
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  async function handleUpload(f: File) {
    setLoading(true);
    setSuccess(false);
    setProgress(0);

    try {
      const fakeUpload = setInterval(() => {
        setProgress((p) => {
          if (p >= 90) {
            clearInterval(fakeUpload);
            return p;
          }
          return p + 10;
        });
      }, 200);

      await onUpload(f);
      setProgress(100);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } finally {
      setLoading(false);
    }
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setDragging(false);
    const f = e.dataTransfer.files?.[0];
    if (f) {
      setFileName(f.name);
      setFile(f);
    }
  }

  function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (f) {
      setFileName(f.name);
      setFile(f);
    }
  }

  return (
    <section
      id="upload"
      className="relative w-full min-h-dvh flex flex-col justify-center items-center px-6 overflow-hidden bg-gradient-to-b from-[#0e0b18] to-black"
    >
      {/* Fundo radial */}
      <div className="absolute inset-0 bg-gradient-radial from-[#1b152a] via-[#0f0b19] to-black opacity-70 z-0" />

      {/* Upload Box */}
      <div
        onDrop={handleDrop}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onClick={() => fileInputRef.current?.click()}
        className={clsx(
          "group relative z-10 w-full max-w-md border-2 border-dashed rounded-2xl bg-[#15101f] text-white p-8 cursor-pointer transition-all duration-300",
          dragging
            ? "border-[#e0a7ff] shadow-[0_0_30px_#a67cf850]"
            : "border-[#a67cf8] hover:border-[#b995ff] hover:shadow-[0_0_60px_#7f22fe30]"
        )}
      >
        <div className="flex flex-col items-center gap-2">
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <UploadCloud
              className="w-10 h-10 text-[#a67cf8] drop-shadow-[0_0_4px_#a67cf8] group-hover:scale-110 transition-transform"
              strokeWidth={2}
            />
          </motion.div>

          <p className="text-lg font-medium">Arraste e solte</p>
          <p className="text-sm text-gray-400">
            ou clique para selecionar o arquivo .pdf ou .docx
          </p>
          {fileName && (
            <p className="text-xs mt-2 text-gray-300">
              Arquivo selecionado: {fileName}
            </p>
          )}
        </div>
        <input
          type="file"
          accept=".pdf,.docx"
          className="hidden"
          ref={fileInputRef}
          onChange={handleFileSelect}
        />
      </div>

      {/* Barra de Progresso */}
      {loading && (
        <div className="z-10 mt-4 w-full max-w-md h-2 bg-[#28203d] rounded-full overflow-hidden">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeOut", duration: 0.4 }}
            className="h-full bg-[#a67cf8] rounded-full"
          />
        </div>
      )}

      {/* Botão */}
      <div className="z-10 mt-6">
        <Button
          disabled={loading || !file}
          className="bg-[#5e3aaf]/20 border border-[#5e3aaf]/30 text-[#a67cf8] hover:bg-[#a67cf8]/20 hover:text-white hover:scale-105 transition-all duration-300 font-semibold px-10 py-5 rounded-lg shadow-md cursor-pointer"
          onClick={() => {
            if (file) handleUpload(file);
          }}
        >
          {loading ? (
            <div className="flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" /> Enviando...
            </div>
          ) : (
            "Enviar arquivo"
          )}
        </Button>
      </div>
    </section>
  );
}
