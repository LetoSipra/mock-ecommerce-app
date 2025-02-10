export const fetchCategories = async () => {
  const req = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getCategory`
  );
  const data = await req.json();
  const categories: Category[] = data.categories;
  return categories;
};
