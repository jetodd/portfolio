import Link from "next/link";

export interface Link {
  bgColor: string;
  color: string;
}

export default function BackLink({
  bgColor,
  color
}: Link) {
  return (
    <Link className="flex hover:underline" href="../">
      <div className={`text-${color} rounded-lg px-4 py-2 flex`}
        style={{ ["backgroundColor" as any]: `var(--color-${bgColor})` }}>
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
      <span className={`text-${color} text-green`}>Back</span>
      </div>
    </Link>
  );
}
