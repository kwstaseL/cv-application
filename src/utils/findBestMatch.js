import stringSimilarity from "string-similarity";

export function findBestMatch(label, availableNames) {
  const labelLowerCase = label.toLowerCase();
  const availableLabels = Object.keys(availableNames).map((name) =>
    name.toLowerCase()
  );

  // Using string-similarity to find the closest match
  const matches = stringSimilarity.findBestMatch(
    labelLowerCase,
    availableLabels
  );

  const MIN_SIMILARITY = 0.6;
  const bestMatch = matches.bestMatch;

  if (bestMatch.rating >= MIN_SIMILARITY) {
    const matchedName = Object.keys(availableNames).find(
      (name) => name.toLowerCase() === bestMatch.target
    );

    if (matchedName) {
      const key = availableNames[matchedName];
      return key;
    }
  }
  return null;
}
