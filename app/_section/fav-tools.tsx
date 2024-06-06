import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";

const tools = [
  {
    name: "Next.js",
    type: "framework",
    link: "https://nextjs.org",
    image: "/next.svg",
  },
  {
    name: "TypeScript",
    type: "programming language",
    link: "https://typescriptlang.org",
    image: "/typescript.svg",
  },
  {
    name: "C/C++",
    type: "programming language",
    link: "https://cplusplus.com/",
    image: "/cpp.svg",
  },
  {
    name: "TailwindCSS",
    type: "CSS framework",
    link: "https://tailwindcss.com",
    image: "/tailwind.svg",
  },
  {
    name: "Shadcn/UI",
    type: "component libray",
    link: "https://shadcn.com/ui",
    image: "/shadcn-ui.png",
  },
  {
    name: "NextAuth.js",
    type: "Authentication libray",
    link: "https://next-auth.js.org/",
    image: "/next-auth.png",
  },
];

export default function FavoriteTools() {
  return (
    <Container asSub className="space-y-16">
      <h2 className="text-4xl font-medium">ภาษาและเครื่องมือที่ถนัด</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
        {tools.map((item, idx) => (
          <Link
            href={item.link}
            key={idx}
            className="bg-neutral-100 border flex justify-between rounded-xl shadow-sm hover:shadow-lg transition-all p-4"
          >
            <div>
              <p>{item.name}</p>
              <small className="text-muted-foreground">{item.type}</small>
            </div>
            <div>
              <Image
                className="h-16 rounded-lg w-auto"
                alt={item.name}
                src={item.image}
                width={128}
                height={128}
              />
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}
