export const fetchItems = async (sessionId: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSess?session_id=${sessionId}`
  );

  if (!res.ok) return;

  const data = await res.json();
  const products = data.session.data;

  return products;
};