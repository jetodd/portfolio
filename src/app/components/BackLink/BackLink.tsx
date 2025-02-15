import Link from "next/link";

export default function BackLink() {
  return (
    <Link className="flex hover:underline" href="../">
      <svg
        className="w-5 mr-1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="48"
          d="M244 400L100 256l144-144M120 256h292"
        />
      </svg>
      Back
    </Link>
  );
}
