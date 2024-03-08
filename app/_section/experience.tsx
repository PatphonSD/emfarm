import Container from "@/components/container";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DashboardIcon } from "@radix-ui/react-icons";

const tools = [
  {
    success: true,
    name: "Smart Meter",
    description: "มิเตอร์ดิจิตอล IoT อัจฉริยะ ecosystem ของ PowerHub",
    link: "https://nextjs.org",
    image: "/project/shem.jpg",
    avatar: "/power-hub.png",
  },
  {
    success: true,
    name: "PowerHub",
    description: "แอพพลิเคชั่นจัดการเครื่องใช้ไฟฟ้าที่ทำงานร่วมกับ AI",
    link: "https://nextjs.org",
    image: "/project/ph.png",
    avatar: "/power-hub.png",
  },
  {
    success: true,
    name: "STC Plus",
    description: "แอพพลิเคชั่นบริการนักเรียนและผู้ปกครอง",
    link: "https://nextjs.org",
    image: null,
    avatar: "/stc-plus.png",
  },
  {
    success: true,
    name: "ระบบเช็คกิจกรรมด้วย QR Code",
    description: "ไม่ต้องเสียเวลาเช็คด้วยกระดาษ และเป็น ecosystem ของ STC Plus",
    link: "",
    image: null,
    avatar: "/stc.jpg",
  },
  {
    success: true,
    name: "ระบบลงเวลาสำหรับบุคลากร",
    description: "ระบบลงเวลาสำหรับบุคลากร",
    link: "",
    image: null,
    avatar: "/stc.jpg",
  },
  {
    success: true,
    name: "Mashroom Farm",
    description: "ฟาร์มเห็ดควบคุมด้วย ESP32 ร่วมกับ Next.js",
    link: "",
    image: "/project/mashroom.jpg",
    avatar: "/tsr.png",
  },
  {
    success: false,
    name: "Air Purifer",
    description: "เครื่องฟอกอากาศ IoT",
    link: "",
    image: null,
    avatar: "/tsr.png",
  },
  {
    success: false,
    name: "DormLogic",
    description: "แอพจัดการหอพักครบวงจร",
    link: "",
    image: "/project/dl.jpg",
    avatar: "",
  },
];

export default function Experience() {
  return (
    <Container className="space-y-16">
      <h2 className="text-4xl font-medium">ประสบการณ์</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
        {tools.map((item, idx) => (
          <div
            key={idx}
            className="bg-neutral-100 flex flex-col rounded-xl shadow-sm transition-all"
          >
            <div>
              {
                item.image ? <img
                className="rounded-t-lg aspect-[2.23] object-cover"
                alt={item.name}
                src={item.image}
              /> : <div className="rounded-t-lg bg-gradient-to-r from-violet-600 to-indigo-600 aspect-[2.23] object-cover"/>
              }
            </div>
            <div className="flex justify-between px-4">
              <Avatar className="w-24 z-0 h-24 rounded-full ring ring-white -mt-12 aspect-square object-cover">
                <AvatarFallback>
                  <DashboardIcon className="w-1/3 text-muted-foreground h-1/3" />
                </AvatarFallback>
                <AvatarImage alt={item.name} src={item.avatar} />
              </Avatar>
              <div>
                <small className="text-muted-foreground bg-white block w-fit mt-2 border px-4 py-0.5 text-xs rounded-full">
                  {item.success ? "สำเร็จ" : "กำลังพัฒนา"}
                </small>
              </div>
            </div>
            <div className="p-4">
              <p className="text-xl font-semibold">{item.name}</p>
              <small className="text-muted-foreground">
                {item.description}
              </small>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
