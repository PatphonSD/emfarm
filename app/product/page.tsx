import Container from "@/components/container";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { product } from "@/constant/product";
import {
  ArrowTopRightIcon,
  DashboardIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import Hero from "./hero";

export default function Product() {
  return (
    <main className="flex flex-col gap-8">
      <Hero/>
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
