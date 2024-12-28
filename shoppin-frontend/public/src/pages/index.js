import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Welcome to Apple Watch Studio</h1>
      <Link href="/customize">Start Customizing</Link>
    </main>
  );
}
