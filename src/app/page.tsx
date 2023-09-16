import Link from "next/link";
import HelloWorld from "./hello.mdx";

export default function Page() {
  return (
    <>
      <Link href="/editor"> Go to the Editor </Link>
      <div className="prose">
        <HelloWorld />
      </div>
    </>
  );
}
