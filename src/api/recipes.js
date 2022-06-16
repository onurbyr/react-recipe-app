import { get } from "./requests";

export async function getCategory(params) {
  return await get("categories.php", params);
}
