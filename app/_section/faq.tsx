"use client"

import Container from "@/components/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

const FaqData = [
  {
    topic: "มุมมองที่มีต่ออนาคต",
    description:
      "ผมมองว่าสิ่งที่ครองโลกตั้งแต่อดีต ปัจจุบัน จนถึงอาคตคือเทคโนโลยีและแนวคิดที่ก่อให้เกิดนวัตกรรมต่างๆ ไม่ว่าเราจะไปที่ไหน ทำอะไร เราก็เจอสิ่งเหล่านี้หมด ไม่ว่าจะเป็นเครื่องใช้ไฟฟ้า ยานยนต์ อุปกรณ์สื่อสาร และอื่นๆอีกมากมาย เครื่องมือเหล่านี้มีการพัฒนาอย่างต่อเนื่องเพื่อที่จะตอบโจทย์พวกเราให้สะดวกสบาย เข้าถึงได้อย่างเท่าเทียม และปลอดภัยขึ้นไปเรื่อยๆครับ",
  },
  {
    topic: "ทำไมถึงชอบทั้งการพัฒนาซอฟแวร์และไฟฟ้ากำลัง",
    description:
      "ตามความคิดของผม สิ่งที่ครองโลกในปัจจุบันและในอนาคตคือเทคโนโลยีและแนวคิดที่นำไปสู่นวัตกรรมต่าง ๆ ไม่ว่าจะเป็นที่ไหนหรือทำอะไร เราก็ต้องพึ่งพาบนสิ่งเหล่านี้ทั้งหมด เช่นเครื่องใช้ไฟฟ้า, ยานยนต์, อุปกรณ์สื่อสาร, และอื่นๆอีกมากมาย สิ่งต่างๆในทุกวันนี้ล้วนถูกสร้างขึ้นจากการพัฒนาที่ต่อเนื่องจากแนวคิดที่เป็นนวัตกรรม เพื่อให้การใช้งานเป็นไปอย่างสะดวกสบาย เข้าถึงได้ทุกที่และปลอดภัย ผมมองว่าสิ่งที่สำคัญในการสร้างนวัตกรรมเหล่านี้คือศาสตร์ของไฟฟ้าและการพัฒนาซอฟต์แวร์ ดังนั้นผมมุ่งมั่นที่จะเรียนรู้และเข้าใจทั้งศาสตร์ของไฟฟ้ากำลังและการพัฒนาซอฟต์แวร์นั่นเองครับ",
  },
];

export default function FAQ() {
  const [mainTitle , setMainTitle] = useState(FaqData[0].topic)
  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex gap-1 flex-col justify-center rounded-3xl">
        <h2 className="text-xl text-muted-foreground">มุมมองของผม</h2>
        <p className="text-4xl font-medium max-w-lg">{mainTitle}</p>
      </div>
      <Accordion defaultValue={FaqData[0].topic} onValueChange={e=>setMainTitle(e)} type="single" collapsible>
        {FaqData.map((item, idx) => (
          <AccordionItem key={idx} value={item.topic}>
            <AccordionTrigger className="text-xl text-start font-semibold">
              {item.topic}
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              {item.description}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
}
