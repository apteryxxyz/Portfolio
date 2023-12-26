'use client';

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';

export const PreferredContext = createContext<
  [Record<string, string>, Dispatch<SetStateAction<Record<string, string>>>]
>([{}, () => {}]);

export function usePreferred(identifier: string) {
  const [preferred, setPreferred] = useContext(PreferredContext);

  return [
    preferred[identifier],
    (value: string) =>
      setPreferred((preferred) => ({ ...preferred, [identifier]: value })),
  ] as const;
}

export function PreferredProvider({ children }: { children: React.ReactNode }) {
  const [preferred, setPreferred] = useState<Record<string, string>>({});

  return (
    <PreferredContext.Provider value={[preferred, setPreferred]}>
      {children}
    </PreferredContext.Provider>
  );
}
