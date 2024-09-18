export interface AccountTagResult {
  name: string;
  images: Image[];
  url: string;
  benefits: Benefits;
  distance: number;
}

export interface Image {
  id: string;
  type: string;
  url: string;
  highlighted: boolean;
  thumb: boolean;
}

export interface Benefits {
  Black: number;
  Premium: number;
  Classic: number;
}

export const getAccountsByTag = async (
  tag: string,
  page: number = 1
): Promise<AccountTagResult[]> => {
  const res = await fetch(
    `https://api.example.com/accounts/tag?q=${tag}&page=${page}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch accounts");
  }

  return res.json();
};
