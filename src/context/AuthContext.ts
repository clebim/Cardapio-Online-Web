import { createContext } from 'react';

interface Authcontext {
  name: string;
}

const authContext = createContext<Authcontext>({} as Authcontext);

export default authContext;
