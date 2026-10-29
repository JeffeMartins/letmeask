import { initializeApp, getApps } from 'firebase/app';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
const config={apiKey:import.meta.env.VITE_FIREBASE_API_KEY,authDomain:import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,databaseURL:import.meta.env.VITE_FIREBASE_DATABASE_URL,projectId:import.meta.env.VITE_FIREBASE_PROJECT_ID,appId:import.meta.env.VITE_FIREBASE_APP_ID};
export const configured=Boolean(config.apiKey && config.authDomain && config.projectId);
export const auth=configured ? getAuth(getApps()[0] || initializeApp(config)) : null;
export {GoogleAuthProvider,onAuthStateChanged,signInWithPopup};
