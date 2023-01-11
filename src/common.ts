export function toCodePoints(unicodeSurrogates) {
  return [...unicodeSurrogates].map((c) => c.codePointAt(0).toString(16)).filter((c) => c !== 'fe0f');
}
