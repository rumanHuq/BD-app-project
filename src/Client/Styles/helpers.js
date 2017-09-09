// @flow

export default function em(px: number, base: number = 16) {
  return `${px / base}em`;
}
