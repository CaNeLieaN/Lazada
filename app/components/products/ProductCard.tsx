import Image from "next/image";

const ProductCard = ({ product }) => {
  const { label, image, price, discount, percent } = product;

  return (
    <div className="flex flex-col gap-2 w-full h-full ">
      <div className="aspect-square w-auto relative overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={label}
          width={400}
          height={400}
          className="object-cover h-[300px] w-[300px] group-hover:scale-110 transition"
        />
      </div>
      <div className="font-semibold text-xl ml-3">{label}</div>
      <div className="font-light text-orange-600 text-[25px] ml-3">{price}</div>
      <div className="flex flex-row gap-3 ">
        <p className="font-light text-neutral-500 text-[15px] line-through ml-3">
          {discount}
        </p>
        <div className="font text-[15px]">{percent}</div>
      </div>
      {/* Add other product card details here */}
    </div>
  );
};

export default ProductCard;
