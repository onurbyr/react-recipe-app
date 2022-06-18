import { get } from "./requests";

export async function getCategory(params) {
  return await get("categories.php", params);
}

export async function filterByCategory(params) {
  return await get("filter.php", params);
}

export async function getCategoriesAndfilterByFirstCategory(params) {
  const categories = await getCategory();
  const filteredByFirstCategory = await filterByCategory({
    c: categories.categories[0].strCategory,
  });
  return {
    categories: categories.categories,
    filteredByFirstCategory: filteredByFirstCategory.meals,
  };
}
