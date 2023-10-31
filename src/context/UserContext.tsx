import {useState, createContext, useContext, useMemo} from 'react';
import {User, UserType} from 'src/types/type';

interface UserContextActions {
  InitUserInfo: (name: string, uid: string) => void;
  changeUserName: (name: string) => void;
  setUser: (user: User) => void;
  setUserType: (type: UserType) => void;
  logout: () => void;
}

interface UserContextType {
  state: User;
  actions: UserContextActions;
}

const initialUser = {
  username: '',
  uid: '',
  type: 'mentee' as UserType,
  code: '00000',
};

const UserContext = createContext<UserContextType | null>(null);

export function UserContextProvider({children}: {children: React.ReactNode}) {
  const [state, setState] = useState<User>(initialUser);
  const actions: UserContextActions = useMemo(
    () => ({
      InitUserInfo(name: string, uid: string) {
        setState(prev => ({...prev, username: name, uid: uid}));
      },
      changeUserName(name: string) {
        setState(prev => ({...prev, username: name}));
      },
      setUser: (user: User) => {
        setState(user);
      },
      setUserType: (type: UserType) => {
        setState(prev => ({...prev, type: type}));
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
