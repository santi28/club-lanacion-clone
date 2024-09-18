// contexts/AccountContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";
import { AccountTagResult } from "../services/accounts.service";

interface AccountContextType {
  voucherAccounts: AccountTagResult[];
  tagAccounts: AccountTagResult[];
  setVoucherAccounts: (accounts: AccountTagResult[]) => void;
  setTagAccounts: (accounts: AccountTagResult[]) => void;
}

interface AccountProviderProps {
  children: ReactNode;
  initialVoucherAccounts: AccountTagResult[];
  initialTagAccounts: AccountTagResult[];
}

// Creamos el contexto
const AccountContext = createContext<AccountContextType | undefined>(undefined);

// Creamos el proveedor
export const AccountProvider = ({
  children,
  initialVoucherAccounts,
  initialTagAccounts,
}: AccountProviderProps) => {
  const [voucherAccounts, setVoucherAccounts] = useState<AccountTagResult[]>(
    initialVoucherAccounts
  );
  const [tagAccounts, setTagAccounts] =
    useState<AccountTagResult[]>(initialTagAccounts);

  return (
    <AccountContext.Provider
      value={{
        voucherAccounts,
        tagAccounts,
        setVoucherAccounts,
        setTagAccounts,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

// Custom Hook para consumir el contexto
export const useAccount = (): AccountContextType => {
  const context = useContext(AccountContext);
  if (!context) {
    throw new Error("useAccount debe ser usado dentro de un AccountProvider");
  }
  return context;
};
