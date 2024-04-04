export function vigenereDecoder({ text, key }: { text: string; key?: string }) {
  if (!key) return text
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ]
  let result = ''

  const decodedText = []
  let spaces = 0
  for (let i = 0; i < text.length; i++) {
    const char = text[i]
    const keyChar = key[(i - spaces) % key.length]
    const charIndex = alphabet.indexOf(char.toLowerCase())
    const keyIndex = alphabet.indexOf(keyChar.toLowerCase())
    if (charIndex === -1) {
      decodedText.push(' ')
      spaces++
    } else {
      const decodedIndex =
        (charIndex - keyIndex + alphabet.length) % alphabet.length
      const decodedChar = alphabet[decodedIndex]
      decodedText.push(decodedChar)
    }
  }
  result = decodedText.join('')
  return result
}
