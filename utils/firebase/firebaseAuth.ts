import { auth } from './firebaseConfig';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect, useContext, createContext } from 'react';

// export const AuthContext = createContext({});

// export const AuthContextProvider = (props: any) => {
// 	const [user, setUser] = useState();
// 	const [error, setError] = useState();

// 	useEffect(() => {
// 		const unsubscribe = onAuthStateChanged(auth, setUser, setError);
// 		return () => unsubscribe();
// 	}, []);
// 	return <AuthContext.Provider value={{ user, error }} {...props} />;
// };

// export const useAuthState = () => {
// 	const auth = useContext(AuthContext);
// 	return { ...auth, isAuthenticated: auth.user != null };
// };
