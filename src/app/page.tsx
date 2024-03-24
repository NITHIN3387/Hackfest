import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <section>
        <h1 className="text-4xl font-bold mb-1">Title</h1>
        <p className="text-lg text-gray-500 font-semibold mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, reprehenderit!</p>
        <ul className="flex gap-5">
          <Link href="/" className="border border-black rounded-md px-4 py-2">Sign Up</Link>
          <Link href="/" className="border border-black rounded-md px-4 py-2">Login</Link>
        </ul>
      </section>
    </div>
  );
}