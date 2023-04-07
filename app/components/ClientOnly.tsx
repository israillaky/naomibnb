"use client";
import { useEffect, useState, ReactNode, FC } from "react";

interface ClientOnlyProps {
  children: ReactNode;
}

const ClientOnly: FC<ClientOnlyProps> = ({ children }) => {
  const [hasMouted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [setMounted]);

  if (!hasMouted) {
    return null;
  }

  return <>{children}</>;
};

export default ClientOnly;
