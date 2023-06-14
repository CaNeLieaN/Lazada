"use client";

import Image from "next/image";

const ProductCards = () => {
  return (
    <div className="col-span-1 cursor-pointer group">
      <div className="flex flex-col gap-2 w-[300px] h-full ">
        <div
          className="
      aspect-square
      w-auto
      relative
      overflow-hidden
      rounded-xl
      "
        >
          <Image
            src="/images/LINE_ALBUM_รูปสินค้า_230522_47.jpg"
            alt={"Product"}
            width={1080}
            height={1080}
            className="
        object-cover
        h-[300px]   
        w-[300px]
        
        group-hover:scale-110
        transition
        "
          />
        </div>
        <div className="font-semibold text-xl">
          ขนมเกาหลีแสนอร่อย นำเข้าตรงจากเกาหลี ราคาถูกกกกกกกก
        </div>
        <div className="font-light text-neutral-500">ขนมขบเคี๊ยว</div>
        <div className="font-semibold">฿ {99}</div>
        <div className="font-semibold">฿200 {51}% ชิ้น</div>
      </div>
    </div>
  );
};

export default ProductCards;
