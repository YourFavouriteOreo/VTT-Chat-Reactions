export function toCodePoints(unicodeSurrogates) {
  const result = [...unicodeSurrogates].map((c) => c.codePointAt(0).toString(16));
  if (result[1] === "fe0f" && result.length <= 3)
    result.splice(1, 1);
  return result;
}
