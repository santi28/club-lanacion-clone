export interface AccountsResponse {
  metadata: Metadata;
  data: Account[];
}

export interface Metadata {
  totoalResults: number;
  prevPage: number | null;
  nextPage: number | null;
  totalPages: number;
}

export interface Account {
  id: string;
  name: string;
  images: Image[];
  haveVoucher: boolean;
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

const API_URL = process.env.NEXT_PUBLIC_BASE_API_URL || "http://localhost:3000";

export const getAccountsByTag = async (
  tag: string,
  page: number = 1
): Promise<AccountsResponse> => {
  console.log("Fetching accounts to:", API_URL);

  const res = await fetch(`${API_URL}/api/accounts?tag=${tag}&page=${page}`);

  if (!res.ok) {
    throw new Error("Failed to fetch accounts");
  }

  return res.json();
};

export const getAccountsWithVoucher = async (
  page: number = 1
): Promise<AccountsResponse> => {
  console.log("Fetching accounts to:", API_URL);

  const res = await fetch(
    `${API_URL}/api/accounts?withVoucher=true&page=${page}&orderBy=name`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch accounts");
  }

  return res.json();
};
