"use client";
import { Textarea } from "@/components/ui/textarea";

export function JobDescription({ onChange }: { onChange: (text: string) => void }) {
  return (
    <div id="description" className="space-y-2">
      <label className="text-sm font-semibold">Descrição da Vaga</label>
      <Textarea
        onChange={(e) => onChange(e.target.value)}
        rows={6}
        placeholder="Informe os detalhes da vaga"
        className="resize-none"
      />
    </div>
  );
}