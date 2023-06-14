import Image from "next/image";

const Promotion = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-5 mt-10">
      <Image
        className="hidden md:block cursor-pointer"
        src="/images/eGiftCard.jpg"
        height="100"
        width="400"
        alt=""
      />
      <Image
        className="hidden md:block cursor-pointer"
        src="/images/citiBank.jpg"
        height="100"
        width="400"
        alt=""
      />
      <Image
        className="hidden md:block cursor-pointer"
        src="/images/icbcBank.jpg"
        height="100"
        width="400"
        alt=""
      />
    </div>
  );
};

export default Promotion;
