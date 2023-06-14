"use client";

import Image from "next/image";
import Link from "next/link";

const AboutLazada = () => {
  return (
    <div className="flex flex-row gap-10 mt-10 ml-[330px]">
      <div className="flex flex-col items-start text-cyan-900">
        <h1 className="text-2xl">ศูนย์ดูแลลูกค้า</h1>
        <Link href="/">ศูนย์ช่วยเหลือ</Link>
        <Link href="/">การสั่งซื้อสินค้า</Link>
        <Link href="/">การส่งสินค้า</Link>
        <Link href="/">นโยบายของสินค้าต่างประเทศ</Link>
        <Link href="/">การคืนสินค้า</Link>
        <Link href="/">ติดต่อเรา</Link>
      </div>
      <div className="flex flex-col items-start text-cyan-900">
        <h1 className="text-2xl">ลาซาด้า</h1>
        <Link href="/">ประเภท</Link>
        <Link href="/">เกี่ยวกับลาซาด้า</Link>
        <Link href="/">Afﬁliate Program</Link>
        <Link href="/">ร่วมงานกับเรา</Link>
        <Link href="/">ข้อตกลงและเงื่อนไข</Link>
        <Link href="/">นโยบายความเป็นส่วนตัว</Link>
        <Link href="/">ข่าวประชาสัมพันธ์</Link>
        <Link href="/">ความปลอดภัยกับลาซาด้า</Link>
        <Link href="/">สินค้ายอดนิยม</Link>
        <Link href="/">Intellectual Property Protection</Link>
      </div>
      <div className="flex flex-row items-start text-cyan-900">
        <Image
          className="hidden md:block cursor-pointer rounded-3xl"
          src="/images/lazadamini.png"
          height="100"
          width="100"
          alt=""
        />
        <div className="flex flex-col gap-3 ">
          <p className="font-semibold text-orange-500 text-[15px] ml-2">
            Go where your heart beats
          </p>
          <div className="font text-[10px] ml-2">Download the App</div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 h-full">
        <Image
          className="hidden md:block cursor-pointer"
          src="/images/apple.jpg"
          height="400"
          width="160"
          alt=""
        />
        <Image
          className="hidden md:block cursor-pointer"
          src="/images/android.jpg"
          height="40"
          width="160"
          alt=""
        />
        <Image
          className="hidden md:block cursor-pointer"
          src="/images/huwei.jpg"
          height="40"
          width="160"
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutLazada;
