export async function uploadCV(file: File) {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch("http://localhost:5000/api/v1/scanner/upload", {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    throw new Error(`Erro ao enviar o arquivo: ${res.statusText}`);
  }

  return await res.json();
}
