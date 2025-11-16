import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { User, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleProvider } from '../lib/firebase';

type AuthUser = {
	uid: string;
	email?: string | null;
	displayName?: string | null;
	firstName: string;
	userId5: string;
	photoURL?: string | null;
};

type AuthContextType = {
	user: AuthUser | null;
	isLoading: boolean;
	loginWithGoogle: () => Promise<void>;
	logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
	user: null,
	isLoading: true,
	loginWithGoogle: async () => {},
	logout: async () => {}
});

function deriveFirstName(displayName?: string | null, email?: string | null): string {
	if (displayName && displayName.trim().length > 0) {
		return displayName.split(' ')[0];
	}
	if (email) {
		return email.split('@')[0];
	}
	return 'User';
}

function generate5DigitId(seed?: string): string {
	const stored = localStorage.getItem('zp_uid5');
	if (stored) return stored;
	// pseudo-random but stable-ish
	let num = 0;
	const basis = seed ?? String(Math.random());
	for (let i = 0; i < basis.length; i++) {
		num = (num * 31 + basis.charCodeAt(i)) % 100000;
	}
	const n = String((num + 100000) % 100000).padStart(5, '0');
	localStorage.setItem('zp_uid5', n);
	return n;
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [firebaseUser, setFirebaseUser] = useState<User | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const unsub = onAuthStateChanged(auth, (usr) => {
			setFirebaseUser(usr);
			setIsLoading(false);
		});
		return () => unsub();
	}, []);

	const user: AuthUser | null = useMemo(() => {
		if (!firebaseUser) return null;
		const firstName = deriveFirstName(firebaseUser.displayName, firebaseUser.email);
		const userId5 = generate5DigitId(firebaseUser.uid);
		return {
			uid: firebaseUser.uid,
			email: firebaseUser.email,
			displayName: firebaseUser.displayName,
			firstName,
			userId5,
			photoURL: firebaseUser.photoURL
		};
	}, [firebaseUser]);

	const loginWithGoogle = async () => {
		await signInWithPopup(auth, googleProvider);
	};

	const logout = async () => {
		await signOut(auth);
		localStorage.removeItem('zp_uid5');
	};

	return (
		<AuthContext.Provider value={{ user, isLoading, loginWithGoogle, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);


