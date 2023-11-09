"use client"
import { Inter } from 'next/font/google'
import './globals.css'
import { useEffect, useState, useRef } from 'react'
import ColorChanger from '@/components/ColorChanger'

const inter = Inter({ subsets: ['latin'] })
export default function App({
    children,
  }: {
    children: React.ReactNode
  }) {
    const [thema, setThema ] = useState("auto");

    const the = useRef(thema);
    const setThe = useRef(setThema);

    useEffect(() => {
        if (thema == "auto") {
            if (window.matchMedia("(preferences-color-scheme: dark)").matches) {
                localStorage.setItem("theme", "dark");
                setThema("dark");
            } else {
                localStorage.setItem("theme", "light");
                setThema("light");
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
      <html lang="pt-br" data-mode={thema}>
        <body className={inter.className}>{children}
            <ColorChanger colorTheme={thema} />
        </body>
      </html>
    )
  }