"use client";

import { Sidebar } from "@/components/Sidebar";
import { UploadCV } from "@/components/UploadCV";
import { JobDescription } from "@/components/Description";
import { FeedbackResult } from "@/components/Feedback";
import { uploadCV } from "@/lib/uploadCV";
import { analyzeDescription } from "@/lib/match";
import toast from "react-hot-toast";
import { useState } from "react";

export default function MatchPage() {
  const [jobDescription, setJobDescription] = useState("");
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState<number | undefined>(undefined);
  const [positives, setPositives] = useState<string[]>([]);
  const [negatives, setNegatives] = useState<string[]>([]);
  const [recommendations, setRecommendations] = useState<string[]>([]);

  async function handleUpload(file: File) {
    try {
      const res = await uploadCV(file);
      toast.success(res.message);
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
  }

  return (
    <main className="w-full min-h-dvh flex bg-black text-white">
      <Sidebar />
      <section className="flex flex-col md:flex-row w-full overflow-auto">
        <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r dark:border-zinc-800 border-zinc-200">
          <UploadCV onUpload={handleUpload} />
        </div>

        <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r dark:border-zinc-800 border-zinc-200">
          <JobDescription onAnalyze={handleAnalyzeDescription} />
        </div>

        <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r dark:border-zinc-800 border-zinc-200">
          <FeedbackResult
            feedback={feedback}
            score={score}
            positives={positives}
            negatives={negatives}
            recommendations={recommendations}
          />
        </div>
      </section>
    </main>
  );
}
