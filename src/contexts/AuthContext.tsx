import {createContext, type ReactNode, useState, useEffect} from 'react';
import {auth,GoogleAuthProvider,onAuthStateChanged,signInWithPopup} from '../services/firebase';
type User={id:string;name:string;avatar:string};
type AuthContextType={user:User|undefined;signInWithGoogle:()=>Promise<void>};
export const AuthContext=createContext<AuthContextType|undefined>(undefined);
export function AuthContextProvider({children}:{children:ReactNode}){
 const [user,setUser]=useState<User>();
 useEffect(()=>{if(!auth)return;return onAuthStateChanged(auth,current=>setUser(current ? {id:current.uid,name:current.displayName || 'Usuário',avatar:current.photoURL || ''}:undefined));},[]);
 async function signInWithGoogle(){if(!auth)throw new Error('Configure o Firebase no .env antes de entrar.');await signInWithPopup(auth,new GoogleAuthProvider());}
 return <AuthContext.Provider value={{user,signInWithGoogle}}>{children}</AuthContext.Provider>;
}
