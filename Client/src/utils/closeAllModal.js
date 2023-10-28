export function closeAllModal() {
  document.querySelectorAll('dialog').forEach(element => {
    element.close();
  });
}
