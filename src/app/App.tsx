'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import { useEffect, useState } from 'react';
import ColorChanger from '@/components/ColorChanger';

const inter = Inter({ subsets: ['latin'] });
export default function App({ children }: any) {
	const [thema, setThema] = useState('auto');

	useEffect(() => {
		if (thema == 'auto') {
			if (window.matchMedia('(preferences-color-scheme: dark)').matches) {
				localStorage.setItem('theme', 'dark');
				setThema('dark');
			} else {
				localStorage.setItem('theme', 'light');
				setThema('light');
			}
		} // eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<html lang="pt-br" data-mode={thema}>
			<body className={inter.className}>
				<ColorChanger colorTheme={thema} fun={setThema} />
				{children}
			</body>
		</html>
	);
}
