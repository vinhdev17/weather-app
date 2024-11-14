import { City } from "../../../../shared/api/city";
import { RejectedDataType } from "../../../../shared/types";

export interface ISearchState {
  readonly cities: City[] | null;
  readonly loading: boolean;
  readonly error: RejectedDataType | null;
}
