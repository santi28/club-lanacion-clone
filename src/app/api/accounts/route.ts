import { NextResponse } from "next/server";
import { accounts } from "@/public/accounts.json";

const pageSize = 4; // Tamaño de página para la paginación

// Función para filtrar, ordenar y paginar cuentas
function getFilteredAccounts({
  tag,
  withVoucher,
  orderBy,
  orderDirection,
  page,
}: {
  tag?: string;
  withVoucher?: boolean;
  orderBy?: string;
  orderDirection?: string;
  page: number;
}) {
  let filteredAccounts = accounts;

  // Filtrar por tag si está definido
  if (tag) {
    filteredAccounts = filteredAccounts.filter((account) =>
      account.tags.some((t) => t.name === tag)
    );
  }

  // Filtrar por cuentas con voucher si se requiere
  if (withVoucher) {
    filteredAccounts = filteredAccounts.filter(
      (account) => account.haveVoucher
    );
  }

  // Ordenar las cuentas según el criterio seleccionado y la dirección
  const isAsc = orderDirection === "asc"; // Verificar si la ordenación es ascendente

  if (orderBy === "distance") {
    filteredAccounts.sort((a, b) => {
      const aMinLocation = Math.min(
        ...a.branches.map((branch) => branch.location)
      );
      const bMinLocation = Math.min(
        ...b.branches.map((branch) => branch.location)
      );
      return isAsc ? aMinLocation - bMinLocation : bMinLocation - aMinLocation;
    });
  } else if (orderBy === "name") {
    filteredAccounts.sort((a, b) => {
      const comparison = a.name.localeCompare(b.name);
      return isAsc ? comparison : -comparison;
    });
  }

  // Paginación
  const totalAccounts = filteredAccounts.length;
  const startIndex = (page - 1) * pageSize;
  const paginatedAccounts = filteredAccounts.slice(
    startIndex,
    startIndex + pageSize
  );

  // Mapeo para devolver los datos necesarios
  const accountsData = paginatedAccounts.map((account) => {
    const highestBenefits = account.benefits.reduce(
      (acc, benefit) => {
        const benefitValue = parseFloat(benefit.value);
        if (benefit.program_name.includes("Club La Nación Black")) {
          acc.Black = Math.max(acc.Black, benefitValue);
        }
        if (benefit.program_name.includes("Club La Nación Premium")) {
          acc.Premium = Math.max(acc.Premium, benefitValue);
        }
        if (benefit.program_name.includes("Club La Nación Classic")) {
          acc.Classic = Math.max(acc.Classic, benefitValue);
        }
        return acc;
      },
      { Black: 0, Premium: 0, Classic: 0 }
    );

    return {
      id: account.id,
      name: account.name,
      images: account.images,
      haveVoucher: account.haveVoucher,
      url: `https://club.lanacion.com.ar/${account.crmid}`,
      benefits: highestBenefits,
      distance: Math.min(...account.branches.map((branch) => branch.location)),
    };
  });

  return {
    metadata: {
      totoalResults: totalAccounts,
      prevPage: page > 1 ? page - 1 : null,
      nextPage: startIndex + pageSize < totalAccounts ? page + 1 : null,
      totalPages: Math.ceil(totalAccounts / pageSize),

      // totalAccounts,
      // page,
      // pageSize,
      // totalPages: Math.ceil(totalAccounts / pageSize),
    },
    data: accountsData,
  };
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const tag = searchParams.get("tag") || undefined;
  const withVoucher = searchParams.get("withVoucher") === "true";
  const orderBy = searchParams.get("orderBy") || "distance"; // Orden por defecto: distance
  const orderDirection = searchParams.get("orderDirection") || "asc"; // Dirección por defecto: ascendente
  const page = parseInt(searchParams.get("page") || "1", 10);

  console.log("New request with params:", {
    tag,
    withVoucher,
    orderBy,
    orderDirection,
    page,
  });

  // Obtener cuentas filtradas y paginadas
  const result = getFilteredAccounts({
    tag,
    withVoucher,
    orderBy,
    orderDirection,
    page,
  });

  return NextResponse.json(result);
}
