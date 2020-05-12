import fs from 'fs';

export class CsvFileReader {
  data: string[][] = []; // 2d array initialized to empty array
  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, { encoding: 'utf-8' })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      });
  }
}
