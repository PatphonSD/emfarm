import Container from "@/components/container";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { DashboardIcon, PinTopIcon } from "@radix-ui/react-icons";

export default function PersonalInformation() {
  return (
    <main>
      <div className="bg-neutral-900 text-white">
        <Container>
          <p className="text-xl text-muted-foreground">Personal Information</p>
          <p className="text-5xl md:text-7xl font-medium">นายพัชรพล ศรีดา</p>
          <p className="text-xl text-muted-foreground">นักเรียน</p>
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
            สวัสดีครับทุกท่าน ผมชื่อพัชรพล นักเรียนระดับประกาศนียบัตรวิชาชีพ
            สาขาวิชาไฟฟ้ากำลัง
            สนใจด้านการเขียนโค้ดเพื่อพัฒนาซอฟต์แวร์และแอปพลิเคชันต่างๆ
            มองว่าการเขียนโค้ดเป็นทักษะที่จำเป็นสำหรับยุคดิจิทัล
            จึงตั้งใจที่จะพัฒนาทักษะนี้ให้เก่งยิ่งขึ้น
            ผมเข้าใจว่าการเขียนโค้ดเป็นทักษะที่ท้าทายและซับซ้อน
            แต่ผมพร้อมที่จะเรียนรู้และเผชิญความท้าทายต่างๆ เพื่อพัฒนาตัวเอง
            ผมเชื่อว่าการเรียนรู้อย่างต่อเนื่องเป็นสิ่งสำคัญที่จะทำให้เราเติบโตและก้าวหน้าในอาชีพ
            ด้วยพลังแห่งความมุ่งมั่น ผมสัญญาว่าจะไม่หยุดพัฒนาตัวเอง
            ไม่ว่าจะเป็นการเรียนรู้เกี่ยวกับภาษาโปรแกรม การอ่านและเข้าใจโค้ด
            ไปจนถึงการเรียนรู้เกี่ยวกับเทคโนโลยีและแนวโน้มใหม่ๆ ในวงการซอฟต์แวร์
            ผมจะทำทุกอย่างเพื่อให้ตัวเองก้าวข้ามขีดจำกัดและเติบโตเป็นนักพัฒนาซอฟต์แวร์ที่มีคุณภาพ
            ถึงแม้ว่าผมจะยังไม่เก่งมากในขณะนี้
            แต่ผมก็มุ่งมั่นที่จะพัฒนาความสามารถของตัวเองในทุกๆ วัน
            ขอบคุณทุกคนที่ให้การสนับสนุนและกำลังใจในการเรียนรู้ของผม
            หากมีคำแนะนำหรือคำปรึกษาใดๆ อยากจะแบ่งปัน
            ผมยินดีที่จะฟังและพูดคุยครับ
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
