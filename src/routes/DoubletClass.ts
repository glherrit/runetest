// DoubletClass.ts - Plain class without runes
export class DoubletClass {
  a: number;
  b: number;

  constructor(initialA: number = 10, initialB: number = 20) {
    this.a = initialA;
    this.b = initialB;
  }

    // Helper method to create a new instance with updated values
  // This ensures reactivity by creating a new object reference
  update(changes: Partial<DoubletClass>): DoubletClass {
    return new DoubletClass(
      changes.a ?? this.a,
      changes.b ?? this.b,
    );
  }
}