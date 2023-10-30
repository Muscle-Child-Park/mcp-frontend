import {useState, createContext, useContext, useMemo} from 'react';
import {User} from 'src/types/type';

interface UserContextActions {
  changeUserName: (name: string) => void;
  setUser: (user: User) => void;
  logout: () => void;
}

interface UserContextType {
  state: User;
  actions: UserContextActions;
}

const initialUser = {
  username: '',
  uid: '',
};

const UserContext = createContext<UserContextType | null>(null);

export function UserContextProvider({children}: {children: React.ReactNode}) {
  const [state, setState] = useState<User>(initialUser);
  const actions: UserContextActions = useMemo(
    () => ({
      changeUserName(name: string) {
        setState({...state, username: name});
      },
      setUser: (user: User) => {
        setState(user);
      },
      // TODO: 수정하기
      logout: () => {
        setState(initialUser);
      },
    }),
    [],
  );
  const contextValue = {state, actions};
  return <UserContext.Provider children={children} value={contextValue} />;
}

export function useUserContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('Cannot find UserContext');
  }
  return context;
}
