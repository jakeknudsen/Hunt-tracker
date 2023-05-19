import Link from "next/link";

export default function GameTracker() {
    return (
    <>
    <h1>Start Game</h1>
    <button><Link href="/">end game</Link></button>
    </>
    );
  }