import Link from "next/link";

export default function FirstPost() {
    return (
    <>
    <h1>First Game</h1>
    <button><Link href="/">end game</Link></button>
    </>
    );
  }