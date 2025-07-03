// components/sidebar.tsx
import { Home, Upload, FileText, Sparkles } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="w-full md:w-60 bg-background border-r px-4 py-6 space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Resume Scanner</h1>
      <nav className="space-y-3 text-sm">
        <a href="#upload" className="flex items-center gap-2 hover:underline">
          <Upload className="w-4 h-4" /> Upload CV
        </a>
        <a href="#description" className="flex items-center gap-2 hover:underline">
          <FileText className="w-4 h-4" /> Descrição
        </a>
        <a href="#feedback" className="flex items-center gap-2 hover:underline">
          <Sparkles className="w-4 h-4" /> Feedback
        </a>
      </nav>
    </aside>
  );
}