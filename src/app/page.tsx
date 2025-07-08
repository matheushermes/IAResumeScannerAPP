"use client";

import { Sidebar } from "@/components/Sidebar"
import { UploadCV } from "@/components/UploadCV"
import { JobDescription } from "@/components/Description"
import { FeedbackResult } from "@/components/Feedback"

import { uploadCV } from "@/lib/uploadCV";

import toast from "react-hot-toast";


export default function MatchPage() {
  async function handleUpload(file: File) {
    try {
      const res = await uploadCV(file);
      toast.success(res.message);
    } catch {
      toast.error("Falha ao enviar ao arquivo");
    }
  }

  return (
    <main className="w-full min-h-dvh flex">
      <Sidebar />
      <section className="flex flex-col md:flex-row w-full overflow-auto">
        <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r dark:border-zinc-800 border-zinc-200">
          <UploadCV onUpload={handleUpload} />
        </div>

        <div className="w-full md:w-1/3 p-4 border-b md:border-b-0 md:border-r dark:border-zinc-800 border-zinc-200">
          <JobDescription />
        </div>

        <div className="w-full md:w-1/3 p-4">
          <FeedbackResult />
        </div>
      </section>
    </main>
  )
}