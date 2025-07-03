"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";

export default function MatchPage() {
  const [job, setJob] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!file || !job) {
      setError("Adicione um currículo e uma descrição da vaga.");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("jobDescription", job);

      const response = await fetch("/api/match", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error || "Erro ao analisar CV");

      setResult(data.message);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-violet-700">🎯 Match de Currículo com IA</h1>

      <Card>
        <CardContent className="space-y-4 py-6">
          <div className="space-y-2">
            <Label htmlFor="jobDescription">Descrição da Vaga</Label>
            <Textarea
              id="jobDescription"
              placeholder="Digite aqui a descrição da vaga desejada..."
              rows={6}
              value={job}
              onChange={(e) => setJob(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cv">Currículo (PDF ou DOCX)</Label>
            <Input
              id="cv"
              type="file"
              accept=".pdf,.docx"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
          </div>

          <Button
            className="w-full bg-violet-600 hover:bg-violet-700"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? <Loader2 className="animate-spin w-5 h-5 mr-2" /> : "Analisar Currículo"}
          </Button>

          {error && <p className="text-sm text-red-500">{error}</p>}
        </CardContent>
      </Card>

      {result && (
        <Card className="bg-violet-50">
          <CardContent className="py-6 space-y-4">
            <h2 className="text-xl font-semibold text-violet-700">📊 Resultado da Análise</h2>
            <p><strong>Score:</strong> {result.score}/100</p>
            <div>
              <strong>Pontos Positivos:</strong>
              <ul className="list-disc list-inside text-green-700">
                {result.pontos_positivos?.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <strong>Pontos Negativos:</strong>
              <ul className="list-disc list-inside text-red-700">
                {result.pontos_negativos?.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <strong>Recomendações:</strong>
              <ul className="list-disc list-inside text-blue-700">
                {result.recomendacoes?.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <strong>Feedback Geral:</strong>
              <p className="text-gray-800">{result.feedback_geral}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </main>
  );
}
