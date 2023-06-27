export function handleCopyKey(secretKey: string, showCopied: { set: (value: boolean) => void }): void {
    navigator.clipboard.writeText(secretKey)
      .then(() => {
        showCopiedMessage(showCopied);
      })
      .catch(err => {
        console.error('Error al copiar al portapapeles:', err);
      });
  }
  
  export function showCopiedMessage(showCopied: { set: (value: boolean) => void }): void {
    showCopied.set(true);
    setTimeout(() => {
      showCopied.set(false);
    }, 2000);
  }