export const calcBackgroundColorByText = (text: string): string => {
  const asciiSum = text
    .toLocaleLowerCase()
    .split('')
    .reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const hexString = (asciiSum % 0xffffff).toString(16);
  return `#${'0'.repeat(6 - hexString.length)}${hexString}`;
};

export const calcColorTextByBackground = (backgroundColor: string): string => {
  const hex = backgroundColor.replace('#', '');
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.substring(i, 2), 16));

  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  return brightness > 128 ? '#2C2E32' : '#fafafa';
};
