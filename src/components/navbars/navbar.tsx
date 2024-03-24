"use client"

import { useAuth } from "@/contexts/authContext";
import Link from "next/link";

export function Navbar(): JSX.Element {
  const authUser = useAuth()

  return (
    <nav className="flex justify-between items-center p-5 dark:border-white">
      <h1 className="text-4xl font-bold mb-1">Title</h1>
      <ul className="flex gap-5">
        {authUser ? (
          <h3 className="text-xl">{authUser.name}</h3>
        ) : (
          <Link href="/" className="border border-black rounded-md px-4 py-2 dark:border-white">Login</Link>
        )}
      </ul>
    </nav>
  )
}