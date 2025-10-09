export enum Difficulty {
  BEGINNER = "Beginner",
  INTERMEDIATE = "Intermediate",
  ADVANCED = "Advanced",
}

export type SheetMusic = {
  _id: string;
  title: string;
  artist: string;
  composer?: string;
  description?: string;
  difficulty?: Difficulty;
  file: string;
  preview?: string;
  video?: string;
}