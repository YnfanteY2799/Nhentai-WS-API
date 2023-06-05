export interface IDoujinBook {
  name: string;
  code: string;
  parodies: Array<string>;
  characters: Array<string>;
  tags: Array<string>;
  artists: Array<string>;
  groups: Array<string>;
  languague: Array<string>;
  categories: Array<string>;
  tiles: Array<T_Tile>;
}

export type T_Tile = {
  index: any;
  link: any;
  view: any;
};
