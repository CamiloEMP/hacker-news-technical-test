import { SWRConfig } from 'swr'

export function SWRConfigProvider({ children }: { children: React.ReactNode }) {
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        errorRetryCount: 0,
      }}
    >
      {children}
    </SWRConfig>
  )
}
