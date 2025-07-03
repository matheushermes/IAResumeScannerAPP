"use client";

export function FeedbackResult({ result }: { result: any }) {
  if (!result) return null;

  return (
    <div id="feedback" className="space-y-4">
      <h2 className="text-xl font-semibold">Feedback da IA</h2>
      <div className="bg-muted p-4 rounded-md">
        <p><strong>Score:</strong> {result.score}</p>
        <div className="mt-2">
          <strong>Pontos Positivos:</strong>
          <ul className="list-disc ml-6 text-sm">
            {result.pontos_positivos?.map((p: string, i: number) => <li key={i}>{p}</li>)}
          </ul>
        </div>
        <div className="mt-2">
          <strong>Pontos Negativos:</strong>
          <ul className="list-disc ml-6 text-sm">
            {result.pontos_negativos?.map((p: string, i: number) => <li key={i}>{p}</li>)}
          </ul>
        </div>
        <div className="mt-2">
          <strong>Recomendações:</strong>
          <ul className="list-disc ml-6 text-sm">
            {result.recomendacoes?.map((r: string, i: number) => <li key={i}>{r}</li>)}
          </ul>
        </div>
        <p className="mt-2 text-sm"><strong>Feedback Geral:</strong> {result.feedback_geral}</p>
      </div>
    </div>
  );
}