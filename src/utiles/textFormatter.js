export function insertNonBreakingSpaces(text) {
  if (typeof text !== "string") return text;

  const patterns = [
    // Артикли перед существительными
    {
      regex: /\b(a|an|the)\s+([a-zA-Z]+)/gi,
      replacement: "$1\u00A0$2",
    },
    // Короткие служебные слова
    {
      regex: /\b(in|on|at|to|for|of|and|or|but|as|by|up|so|if)\s+(\w+)/gi,
      replacement: "$1\u00A0$2",
    },
    // Единицы измерения
    {
      regex:
        /(\d)\s*(km|cm|mm|m|kg|g|mg|l|ml|°C|°F|mph|kph|h|min|s|ms|Hz|kHz|MHz|W|kW|V|A|mA|billion|million|thousand|trillion|times)/gi,
      replacement: "$1\u00A0$2",
    },
    // Титулы и обращения
    {
      regex: /\b(Mr|Mrs|Ms|Dr|Prof|Rev|Hon|St)\.\s+([A-Z][a-z]+)/g,
      replacement: "$1.\u00A0$2",
    },
    // Сокращения
    {
      regex: /(p|pp|ch|fig|sec|no|vol)\.\s+(\d+)/gi,
      replacement: "$1.\u00A0$2",
    },
  ];

  let result = text;
  patterns.forEach((pattern) => {
    result = result.replace(pattern.regex, pattern.replacement);
  });

  return result;
}
