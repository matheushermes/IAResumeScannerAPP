"use client";

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Label,
  Tooltip,
} from "recharts";
import { motion, AnimatePresence } from "framer-motion";
import {
  ThumbsUp,
  AlertTriangle,
  Lightbulb,
  BrainCircuit,
} from "lucide-react";
import { useState } from "react";

interface FeedbackResultProps {
  feedback: string;
  score?: number;
  positives: string[];
  negatives: string[];
  recommendations: string[];
}

export function FeedbackResult({
  feedback,
  score,
  positives,
  negatives,
  recommendations,
}: FeedbackResultProps) {
  const [tab, setTab] = useState("positives");

  const chartColor =
    score === undefined
      ? "#d4d4d8"
      : score >= 90
      ? "#6b21a8"
      : score >= 70
      ? "#9333ea"
      : score >= 50
      ? "#a855f7"
      : "#e9d5ff";

  const chartData = [
    { name: "Compatível", value: score || 0 },
    { name: "Gap", value: 100 - (score || 0) },
  ];

  const COLORS = [chartColor, "#27272a"];

  return (
    <section className="w-full
      min-h-dvh
      px-4 
      pt-6 
      space-y-6
      flex
      flex-col
      items-center
      justify-center
      border-solid
      border-r
      relative
      overflow-hidden"
    >
      {/* Glow decorativo no fundo melhorado */}
      <div
        className="absolute -top-16 -right-30 w-64 h-64 rounded-full z-0"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(127, 34, 254, 0.4) 0%, rgba(127, 34, 254, 0) 70%)',
          filter: 'blur(60px)',
          opacity: 0.6,
        }}
      />
      <div
        className="absolute -bottom-38 -left-30 w-102 h-102 rounded-full z-0"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(127, 34, 254, 0.3) 0%, rgba(127, 34, 254, 0) 70%)',
          filter: 'blur(45px)',
          opacity: 0.4,
        }}
      />
      <motion.h3
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-lg font-semibold text-white"
      >
        <h2 className="text-2xl font-bold tracking-widest drop-shadow-md leading-tight mb-8 flex flex-wrap"> ANALISE FINAL <BrainCircuit className="w-8 h-8 ml-2 text-[#a67cf8] drop-shadow-[0_0_4px_#a67cf8]"/> </h2>
      </motion.h3>

      {feedback && (
        <p className="text-sm text-muted-foreground leading-relaxed">
          {feedback}
        </p>
      )}

      {score !== undefined && (
        <div className="relative w-full h-52 flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={70}
                innerRadius={45}
                startAngle={90}
                endAngle={-270}
                stroke="none"
                isAnimationActive
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
                <Label
                  value={`${score}%`}
                  position="center"
                  fill="#e4e4e7"
                  fontSize="20px"
                  fontWeight={600}
                />
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1f1f1f",
                  border: "none",
                  borderRadius: 6,
                  padding: 10,
                }}
                itemStyle={{ color: "#e5e5e5" }}
              />
            </PieChart>
          </ResponsiveContainer>

          {score >= 90 && (
            <motion.div
              className="absolute w-5 h-5 rounded-full bg-green-400 blur-md animate-pulse"
              initial={{ scale: 0.8, opacity: 0.7 }}
              animate={{ scale: 1.2, opacity: 0.4 }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
            />
          )}
        </div>
      )}

      <Tabs defaultValue="positives" onValueChange={setTab} className="w-full flex justify-center items-center">
        <TabsList className="bg-muted text-white gap-2 px-1 rounded-lg shadow-sm">
          <TabsTrigger value="positives" className="flex items-center gap-1">
            <ThumbsUp className="w-4 h-4 text-green-400" /> Positivos
          </TabsTrigger>
          <TabsTrigger value="negatives" className="flex items-center gap-1">
            <AlertTriangle className="w-4 h-4 text-yellow-400" /> Pontos a Melhorar
          </TabsTrigger>
          <TabsTrigger value="recommendations" className="flex items-center gap-1">
            <Lightbulb className="w-4 h-4 text-purple-400" /> Recomendações
          </TabsTrigger>
        </TabsList>

        <AnimatePresence mode="wait">
          {tab === "positives" && (
            <TabsContent value="positives" forceMount>
              <motion.div
                key="positives"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <ul className="list-disc list-inside text-sm text-muted-foreground mt-3 space-y-1">
                  {positives.length > 0 ? (
                    positives.map((item, idx) => <li key={idx}>{item}</li>)
                  ) : (
                    <p className="text-zinc-500">Nenhum ponto positivo encontrado.</p>
                  )}
                </ul>
              </motion.div>
            </TabsContent>
          )}

          {tab === "negatives" && (
            <TabsContent value="negatives" forceMount>
              <motion.div
                key="negatives"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <ul className="list-disc list-inside text-sm text-muted-foreground mt-3 space-y-1">
                  {negatives.length > 0 ? (
                    negatives.map((item, idx) => <li key={idx}>{item}</li>)
                  ) : (
                    <p className="text-zinc-500">Nenhum ponto negativo identificado.</p>
                  )}
                </ul>
              </motion.div>
            </TabsContent>
          )}

          {tab === "recommendations" && (
            <TabsContent value="recommendations" forceMount>
              <motion.div
                key="recommendations"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <ul className="list-disc list-inside text-sm text-muted-foreground mt-3 space-y-1">
                  {recommendations.length > 0 ? (
                    recommendations.map((item, idx) => <li key={idx}>{item}</li>)
                  ) : (
                    <p className="text-zinc-500">Nenhuma recomendação disponível.</p>
                  )}
                </ul>
              </motion.div>
            </TabsContent>
          )}
        </AnimatePresence>
      </Tabs>
    </section>
  );
}
