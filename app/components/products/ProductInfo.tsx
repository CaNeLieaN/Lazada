import ProductCard from "./ProductCard";
import catoonYelly from "../../../public/images/cartoonyelly.jpg";
import mama from "../../../public/images/mama.jpg";
import drink from "../../../public/images/drink.jpg";
import cookie from "../../../public/images/cookie.jpg";
import spam from "../../../public/images/spam.jpg";
import yam from "../../../public/images/yam.jpg";
import vitamin from "../../../public/images/vitamin.jpg";
import salt from "../../../public/images/salt.jpg";

export const productInfo = [
  {
    label: "Yelly",
    image: catoonYelly,
    price: "฿30",
    discount: "฿39",
    percent: "-30%",
  },
  {
    label: "Mama",
    image: mama,
    price: "฿50",
    discount: "฿60",
    percent: "-20%",
  },
  {
    label: "Drink",
    image: drink,
    price: "฿40",
    discount: "฿45",
    percent: "-10%",
  },
  {
    label: "Cookie",
    image: cookie,
    price: "฿80",
    discount: "฿100",
    percent: "-20%",
  },
  {
    label: "Spam",
    image: spam,
    price: "฿100-200",
    discount: "฿120-240",
    percent: "-20%",
  },
  {
    label: "Yam",
    image: yam,
    price: "฿150",
    discount: "฿180",
    percent: "-20%",
  },
  {
    label: "Vitamin",
    image: vitamin,
    price: "฿70",
    discount: "฿90",
    percent: "-30%",
  },
  {
    label: "Salt",
    image: salt,
    price: "฿60",
    discount: "฿100",
    percent: "-40%",
  },
];

const ProductInfo = () => {
  return (
    <div className="col-span-1 cursor-pointer group">
      <div className="grid grid-cols-4 gap-4">
        {productInfo.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <div className="flex flex-row items-center justify-center gap-5 mt-10">
        <button className="border-2 border-cyan-400 text-cyan-400 w-[400px] h-[50px]">
          โหลดเพิ่มเติม
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
