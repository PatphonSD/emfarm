import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";
import Mock01 from "./mock/01.jpg";
import Mock02 from "./mock/02.jpg";
import Mock03 from "./mock/03.jpg";
import Mock04 from "./mock/04.jpg";
import Mock05 from "./mock/05.jpg";

export default function Hero() {
  return (
    <section>
      <Container className="flex flex-col md:flex-row gap-16">
        <p className="text-4xl mb-0 pb-0 text-neutral-900 lg:text-8xl font-medium text-nowrap leading-tight lg:leading-tight">
          สวัสดี!
          <br />
          ผมชื่อพัชรพล ศรีดา
        </p>
        <div className="flex flex-col gap-4 justify-between">
          <p className="text-xl text-muted-foreground">
            ผมเป็นนักศึกษาระดับชั้น ปวช. ที่มีความสนใจในด้านของ Internet of
            Things เป็นพิเศษ
            และนี่คือเหตุผลหลักที่ทำให้ผมรักในวิชาชีพไฟฟ้ากำลังและการพัฒนาซอฟแวร์
            ด้วยปรัชญาชีวิตที่ว่า &quot;ตราบใดที่โลกยังพัฒนา
            ตราบนั้นยังต้องมีเทคโนโลยี&quot;
          </p>
          <div className="flex gap-2">
            <Link
              href={"https://github.com/PatphonSD"}
              className="border shadow-sm hover:shadow-lg transition-all rounded-full px-4 py-1 font-medium"
            >
              GitHub
            </Link>
            <Link
              href={
                "https://www.facebook.com/profile.php?id=100075414066608&mibextid=ZbWKwL"
              }
              className="border shadow-sm hover:shadow-lg transition-all rounded-full px-4 py-1 font-medium"
            >
              Facebook
            </Link>
          </div>
        </div>
      </Container>
      <Container asSub>
        <HeroMock />
      </Container>
    </section>
  );
}

const HeroMock = () => (
  <div className="grid grid-cols-1 gap-2">
    <div className="bg-blue-950 rounded-2xl object-bottom object-cover h-36 md:h-52 w-full">
      <Image
       
        className="rounded-2xl object-bottom object-cover h-full"
        src={Mock04}
        alt="dnewuifhn"
      />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <div className="bg-red-950 rounded-2xl h-36 md:h-52 w-full overflow-hidden">
        <Image src={Mock01} alt="dnewuifhn" />
      </div>
      <div className="bg-orange-950 rounded-2xl h-36 md:h-52 w-full overflow-hidden">
        <Image src={Mock03} alt="dnewuifhn" />
      </div>
    </div>
    <div className="flex gap-2">
      <div className="bg-green-950 rounded-2xl h-36 md:h-52 aspect-square w-auto overflow-hidden">
        <Image
         
          src={Mock05}
          className="h-full aspect-square object-cover w-auto"
          alt="dnewuifhn"
        />
      </div>
      <div className="bg-violet-950 rounded-2xl h-36 flex-1 md:h-52 w-full overflow-hidden">
        <Image className="h-full object-cover" src={Mock02} alt="dnewuifhn" />
      </div>
    </div>
  </div>
);
