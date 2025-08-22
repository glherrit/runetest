/**
 * DoubletClass represents a simple pair of numbers (a, b).
 *
 * Usage:
 *   const doublet = new DoubletClass(5, 7);
 *   console.log(doublet.a, doublet.b);
 *
 * Properties:
 *   - a: number - The first value
 *   - b: number - The second value
 *
 * Constructor:
 *   DoubletClass(initialA?: number, initialB?: number)
 *     - initialA: number (default 10)
 *     - initialB: number (default 20)
 */
export class DoubletClass {
  a: number;
  b: number;
  constructor(initialA: number = 10, initialB: number = 20) {
    this.a = $state(initialA);
    this.b = $state(initialB);
  }
}
// ...existing code...