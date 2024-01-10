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
      "ผมมองว่าสิ่งที่ครองโลกตั้งแต่อดีต ปัจจุบัน จนถึงอาคตคือเทคโนโลยีและแนวคิดที่ก่อให้เกิดนวัตกรรมต่างๆ ไม่ว่าเราจะไปที่ไหน ทำอะไร เราก็เจอสิ่งเหล่านี้หมด ไม่ว่าจะเป็นเครื่องใช้ไฟฟ้า ยานยนต์ อุปกรณ์สื่อสาร และอื่นๆอีกมากมาย เครื่องมือเหล่านี้มีการพัฒนาอย่างต่อเนื่องเพื่อที่จะตอบโจทย์พวกเราให้สะดวกสบาย เข้าถึงได้อย่างเท่าเทียม และปลอดภัยขึ้นไปเรื่อยๆครับ",
  },
  {
    topic: "ความเข้าใจเกี่ยวกับการพัฒนาซอฟแวร์",
    description:
      "ผมมองว่าสิ่งที่ครองโลกตั้งแต่อดีต ปัจจุบัน จนถึงอาคตคือเทคโนโลยีและแนวคิดที่ก่อให้เกิดนวัตกรรมต่างๆ ไม่ว่าเราจะไปที่ไหน ทำอะไร เราก็เจอสิ่งเหล่านี้หมด ไม่ว่าจะเป็นเครื่องใช้ไฟฟ้า ยานยนต์ อุปกรณ์สื่อสาร และอื่นๆอีกมากมาย เครื่องมือเหล่านี้มีการพัฒนาอย่างต่อเนื่องเพื่อที่จะตอบโจทย์พวกเราให้สะดวกสบาย เข้าถึงได้อย่างเท่าเทียม และปลอดภัยขึ้นไปเรื่อยๆครับ",
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
            <AccordionTrigger className="text-xl font-semibold">
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
