import { getDoujinObject } from "./Core.js";

import type { IDoujinBook } from "../types/types";

export async function getRandomCode(): Promise<IDoujinBook> {
  return getDoujinObject(`https://nhentai.net/random/`, "getRandomCode");
}
