import { get } from "./requests";

export async function search(params) {
  return await get("search.php", params);
}
