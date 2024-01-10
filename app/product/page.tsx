import Container from "@/components/container";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { product } from "@/constant/product";
import {
  ArrowTopRightIcon,
  DashboardIcon,
  Link1Icon,
} from "@radix-ui/react-icons";
import Link from "next/link";

export default function Product() {
  return (
    <main className="flex flex-col gap-8">
      <div className="bg-neutral-900 rounded-2xl relative text-white">
        <Container className="z-10 h-full flex items-center absolute">
          <h1 className="text-3xl md:text-5xl font-medium">ผลิตภัณฑ์ของผม</h1>
        </Container>
        <img className="rounded-b-2xl" src="/cover.png" />
      </div>
      <Container asSub>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {product.map((item, idx) => (
            <div
              key={idx}
              className="p-4 bg-neutral-100 rounded-xl flex justify-between"
            >
              <div className="flex gap-2 items-center">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={item.avatar} />
                  <AvatarFallback>
                    <DashboardIcon />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-lg">{item.name}</p>
                  <small className="text-muted-foreground">
                    {item.description}
                  </small>
                </div>
              </div>
              <Link href={item.link}>
                <ArrowTopRightIcon />
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}
