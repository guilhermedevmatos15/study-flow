import { FunctionComponent, ReactNode } from "react"

import UsersProvider from "./UsersProvider";

const GlobalProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
   return <>
      <UsersProvider>
         {children}
      </UsersProvider>
   </>
}

export default GlobalProvider;