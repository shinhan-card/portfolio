export function calculateReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
}

export function formatReadingTime(minutes: number, language: "en" | "ko"): string {
  if (language === "ko") {
    return `${minutes}분`;
  }
  return `${minutes} min read`;
}
