import { Location } from "./location";

export type SearchHistoryItem = Location & {
  date: Date;
};
