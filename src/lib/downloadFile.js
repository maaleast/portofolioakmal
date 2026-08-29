// Beberapa browser (terutama Chrome) mengabaikan atribut `download` pada
// tag <a> untuk file PDF dan malah membukanya di PDF viewer bawaan,
// terutama kalau server (seperti Vercel) mengirim header
// "Content-Disposition: inline". Fetch manual jadi blob lalu trigger
// lewat blob URL selalu memaksa download, apa pun header dari server.
export async function downloadFile(url, filename) {
  try {
    const res = await fetch(url);
    const blob = await res.blob();
    const blobUrl = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(blobUrl);
  } catch {
    // Fallback kalau fetch gagal (misal offline): buka langsung di tab baru.
    window.open(url, "_blank", "noreferrer");
  }
}
