export async function analyzeDescription(description: string) {
  try {
    const cleanDescription = description.replace(/(\r\n|\n|\r)/gm, " ");

    const res = await fetch("http://localhost:5000/api/v1/scanner/match", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ description: cleanDescription }),
    });

    if (!res.ok) throw new Error("Erro ao se comunicar com a API");

    const result = await res.json();

    return {
      feedback: result.feedback_geral || "Análise concluída.",
      score: result.score ?? undefined,
      positives: result.pontos_positivos || [],
      negatives: result.pontos_negativos || [],
      recommendations: result.recomendacoes || [],
    };
  } catch (error) {
    return {
      feedback: "❌ Erro ao realizar a analise.",
      score: undefined,
      positives: [],
      negatives: [],
      recommendations: [],
    };
  }
}
