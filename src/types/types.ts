export interface IDoujinBook {
  name: string;
  code: string;
  tags: Array<string>;
  groups: Array<string>;
  artists: Array<string>;
  parodies: Array<string>;
  languague: Array<string>;
  tiles: Array<Doujin_Tile>;
  characters: Array<string>;
  categories: Array<string>;
}

export type Doujin_Tile = {
  index: number;
  link?: string;
  view?: string;
};

export interface ITiledEntry {
  link?: string;
  name?: string;
  code?: string;
  index?: number;
  coverScr?: string;
}

export type TBookDLs = {
  uri?: string;
  totalPages?: number;
};

export type TRangedEntries = {
  pageIndex: number;
  pageContent: Array<ITiledEntry>;
};
