"use client";

import { Sidebar } from "@/components/Sidebar";
import { UploadCV } from "@/components/UploadCV";
import { JobDescription } from "@/components/Description";
import { FeedbackResult } from "@/components/Feedback";
import { uploadCV } from "@/lib/uploadCV";
import { analyzeDescription } from "@/lib/match";
import toast from "react-hot-toast";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function MatchPage() {
  const [jobDescription, setJobDescription] = useState("");
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState<number | undefined>(undefined);
  const [positives, setPositives] = useState<string[]>([]);
  const [negatives, setNegatives] = useState<string[]>([]);
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [hasUploaded, setHasUploaded] = useState(false);
  const [hasAnalyzed, setHasAnalyzed] = useState(false);

  async function handleUpload(file: File) {
    try {
      const res = await uploadCV(file);
      toast.success(res.message);
      setHasUploaded(true); // libera próxima etapa
    } catch {
      toast.error("Falha ao enviar o arquivo");
    }
  }

  async function handleAnalyzeDescription(description: string) {
    setJobDescription(description);

    const result = await analyzeDescription(description);
    setFeedback(result.feedback);
    setScore(result.score);
    setPositives(result.positives);
    setNegatives(result.negatives);
    setRecommendations(result.recommendations);
    setHasAnalyzed(true); // libera feedback
  }

  return (
    <main className="w-full min-h-dvh flex bg-black text-white">
      <section className="flex flex-col md:flex-row w-full overflow-auto">
        <div className="w-full md:w-1/4 border-b md:border-b-0 md:border-r dark:border-zinc-800 border-zinc-200">
          <Sidebar />
        </div>
        

        <div className="w-full md:w-1/4 border-b md:border-b-0 md:border-r dark:border-zinc-800 border-zinc-200">
          <UploadCV onUpload={handleUpload} />
        </div>

        <AnimatePresence>
          {hasUploaded && (
            <motion.div
              key="description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 1.30 }}
              className="w-full md:w-1/4 border-b md:border-b-0 md:border-r dark:border-zinc-800 border-zinc-200"
            >
              <JobDescription onAnalyze={handleAnalyzeDescription} />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {hasAnalyzed && (
            <motion.div
              key="feedback"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 1.30 }}
              className="w-full md:w-1/4 border-b md:border-b-0 md:border-r dark:border-zinc-800 border-zinc-200"
            >
              <FeedbackResult
                feedback={feedback}
                score={score}
                positives={positives}
                negatives={negatives}
                recommendations={recommendations}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </main>
  );
}
