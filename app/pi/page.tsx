import Container from "@/components/container";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { DashboardIcon, PinTopIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import Link from "next/link";

export default function PersonalInformation() {
  return (
    <main>
      <div className="bg-neutral-900 text-white">
        <Container className="flex flex-col md:flex-row gap-8 justify-between md:items-center">
          <div className="space-y-4">
            <p className="text-xl text-muted-foreground">
              Personal Information
            </p>
            <p className="text-5xl md:text-7xl font-medium">นายพัชรพล ศรีดา</p>
          </div>
          <Link
            href={"/resume.pdf"}
            className={clsx(buttonVariants({ variant: "secondary" }), "w-fit")}
          >
            ดาวน์โหลด Resume
          </Link>
        </Container>
      </div>
      <Container className="flex flex-col gap-4 md:flex-row">
        <aside className="w-full flex flex-col gap-4 md:w-1/3">
          <Avatar className="w-24 ring ring-neutral-900 ring-offset-2 h-24 md:h-36 md:w-36">
            <AvatarFallback>
              <DashboardIcon className="w-1/3 text-muted-foreground h-auto" />
            </AvatarFallback>
            <AvatarImage src="/avatar.jpg" />
          </Avatar>
          <div>
            <h2 className="text-xl font-medium">ข้อมูลส่วนตัว</h2>
            <p>วันเกิด : 23 สิงหาคม ค.ศ.2006</p>
            <p>สัญชาติ : ไทย</p>
            <p>ชื่อเล่น : เหม่ง</p>
            <p>โทร : +66 83 608 2281</p>
            <p>อีเมล : muc5674@gmail.com</p>
          </div>
          <div>
            <h2 className="text-xl font-medium">ภาษาสื่อสาร</h2>
            <p>- ไทย</p>
            <p>- อังกฤษ</p>
          </div>
          <div>
            <h2 className="text-xl font-medium">เครื่องมือที่ถนัด</h2>
            <p>- Next.js</p>
            <p>- React Native</p>
            <p>- TailwindCSS</p>
            <p>- Shadcn/UI</p>
            <p>- TypeScript</p>
            <p>- Prisma ORM</p>
            <p>- Neon PostgresDB</p>
            <p>- PlatformIO</p>
          </div>
          <div>
            <h2 className="text-xl font-medium">ใบขับขี่</h2>
            <p>ใบขับขี่ชั่วคราว 2 ปี</p>
          </div>
        </aside>
        <Separator orientation="vertical" />
        <div className="w-full space-y-4">
          <p>
            ตามความคิดของผม
            สิ่งที่ครองโลกในปัจจุบันและในอนาคตคือเทคโนโลยีและแนวคิดที่นำไปสู่นวัตกรรมต่าง
            ๆ ไม่ว่าจะเป็นที่ไหนหรือทำอะไร เราก็ต้องพึ่งพาบนสิ่งเหล่านี้ทั้งหมด
            เช่นเครื่องใช้ไฟฟ้า, ยานยนต์, อุปกรณ์สื่อสาร, และอื่นๆอีกมากมาย
            สิ่งต่างๆในทุกวันนี้ล้วนถูกสร้างขึ้นจากการพัฒนาที่ต่อเนื่องจากแนวคิดที่เป็นนวัตกรรม
            เพื่อให้การใช้งานเป็นไปอย่างสะดวกสบาย เข้าถึงได้ทุกที่และปลอดภัย
            ผมมองว่าสิ่งที่สำคัญในการสร้างนวัตกรรมเหล่านี้คือศาสตร์ของไฟฟ้าและการพัฒนาซอฟต์แวร์
            ดังนั้นผมมุ่งมั่นที่จะเรียนรู้และเข้าใจทั้งศาสตร์ของไฟฟ้ากำลังและการพัฒนาซอฟต์แวร์นั่นเองครับ
          </p>
          <h2 className="text-2xl py-4 font-medium">ประวัติการศึกษา</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded bg-neutral-100">
              <div className="flex gap-4 items-center">
                <Avatar className="w-24 h-24">
                  <AvatarImage src="/tsr.png" />
                </Avatar>
                <div>
                  <p className="text-muted-foreground">ระดับมัธยมศึกษาตอนต้น</p>
                  <p className="text-lg font-medium">โรงเรียนแตลศิริวิทยา</p>
                  <h3>เกรดเฉลี่ยสะสม 3.70</h3>
                </div>
              </div>
            </div>
            <div className="p-4 rounded bg-neutral-100">
              <div className="flex gap-4 items-center">
                <Avatar className="w-24 h-24">
                  <AvatarImage src="/stc.jpg" />
                </Avatar>
                <div>
                  <p className="text-muted-foreground">
                    ระดับประกาศนียบัตรวิชาชีพ
                  </p>
                  <p className="text-lg font-medium">วิทยาลัยเทคนิคสุรินทร์</p>
                  <h3>เกรดเฉลี่ยสะสม 3.77</h3>
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-2xl py-4 font-medium">ประสบการณ์</h2>
          <div className="p-4 rounded bg-neutral-100">
            <p className="text-lg font-medium">
              การแข่งขันสิ่งประดิษฐ์นวัตกรรมอาชีวะศึกษา ประจำปี 2565
            </p>
            <p>
              ชื่อโครงการ :
              ชุดออกแบบระบบระบายความร้อนใต้หลังคาเพื่อลดพลังงานไฟฟ้า
            </p>
            <p>- ชนะเลิศเหรียญทองระดับ อศจ.</p>
            <p>- ชนะเลิศเหรียญทองระดับภาค</p>
            <p>- รางวัลชมเชยระดับชาติ</p>
          </div>
          <div className="p-4 rounded bg-neutral-100">
            <p className="text-lg font-medium">
              การแข่งขันสิ่งประดิษฐ์นวัตกรรมอาชีวะศึกษา ประจำปี 2566
            </p>
            <p>ชื่อโครงการ : ชุดจัดการพลังงานไฟฟ้า(Power-Hub)</p>
            <p>- ชนะเลิศเหรียญทองระดับ อศจ.</p>
          </div>
          <div className="p-4 rounded bg-neutral-100">
            <p className="text-lg font-medium">
              การแข่งขันสิ่งประดิษฐ์นวัตกรรมอาชีวะศึกษา ประจำปี 2566
            </p>
            <p>
              ชื่อโครงการ :
              ชุดออกแบบระบบระบายความร้อนใต้หลังคาเพื่อลดพลังงานไฟฟ้า
            </p>
            <p>- ชนะเลิศเหรียญทองระดับ อศจ.</p>
          </div>
        </div>
      </Container>
    </main>
  );
}
