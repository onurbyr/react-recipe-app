import { get } from "./requests";

export async function getCategory(params) {
  return await get("categories.php", params);
}

export async function filterByCategory(params) {
  return await get("filter.php", params);
}
