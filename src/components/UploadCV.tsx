"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function UploadCV({ onUpload }: { onUpload: (file: File) => void }) {
  const [file, setFile] = useState<File | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (f) {
      setFile(f);
      onUpload(f);
    }
  }

  return (
    <div id="upload" className="space-y-2">
      <label className="text-sm font-semibold">Upload do Currículo</label>
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleChange}
        className="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-violet-600 file:text-white hover:file:bg-violet-700"
      />
      {file && <p className="text-xs text-muted-foreground">Arquivo: {file.name}</p>}
    </div>
  );
}