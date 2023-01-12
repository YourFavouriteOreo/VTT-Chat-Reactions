export function toCodePoints(unicodeSurrogates) {
  const result = [...unicodeSurrogates].map((c) => c.codePointAt(0).toString(16));
  if (result.length === 2 && result[1] === "fe0f")
    result.pop();
  return result;
}
