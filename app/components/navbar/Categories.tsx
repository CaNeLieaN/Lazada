import Container from "../Container";
import Image from "next/image";

const Categories = () => {
  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        <button className="home-button flex flex-row items-center font-medium text-sm px-4 py-2 rounded">
          <div className="mr-2 md:w-[250px]  flex flex-row bg-white rounded-full">
            <div className="h-[45px] w-[45px]">
              <Image
                src="/images/Lazmall.png"
                alt="LazMall"
                width={45}
                height={45}
              />
            </div>
            <div className="ml-1 mt-2">
              <div
                className="text-lg font-semibold text-black"
                style={{ fontFamily: "Roboto-Regular, 'Helvetica Neue'" }}
              >
                LazMall
              </div>
            </div>
          </div>
        </button>
        <button className="home-button flex flex-row items-center text-neutral-500 font-medium text-sm px-4 py-2 rounded">
          <div className="mr-2 md:w-[220px] flex flex-row bg-white rounded-full">
            <div className="h-[45px] w-[45px]">
              <Image
                src="/images/ticket.png"
                alt="ticket"
                width={45}
                height={45}
              />
            </div>
            <div className="ml-1 mt-2">
              <div
                className="text-lg font-semibold text-black"
                style={{ fontFamily: "Roboto-Regular, 'Helvetica Neue'" }}
              >
                คูปองลดเพิ่ม
              </div>
            </div>
          </div>
        </button>
        <button className="home-button flex flex-row items-center text-neutral-500 font-medium text-sm px-4 py-2 rounded">
          <div className="mr-2 md:w-[250px] flex flex-row bg-white rounded-full">
            <div className="h-[45px] w-[45px]">
              <Image
                src="/images/prepayanddeal.png"
                alt="prepayanddeal"
                width={45}
                height={45}
              />
            </div>
            <div className="ml-1 mt-2">
              <div
                className="text-lg font-semibold text-black"
                style={{ fontFamily: "Roboto-Regular, 'Helvetica Neue'" }}
              >
                เติมเงิน&ดีลอาหาร
              </div>
            </div>
          </div>
        </button>
        <button className="home-button flex flex-row items-center text-neutral-500 font-medium text-sm px-4 py-2 rounded">
          <div className="mr-2 md:w-[250px] flex flex-row bg-white rounded-full">
            <div className="h-[45px] w-[45px]">
              <Image
                src="/images/lazblog.png"
                alt="lazblog.png"
                width={45}
                height={45}
              />
            </div>
            <div className="ml-1 mt-2">
              <div
                className="text-lg font-semibold text-black"
                style={{ fontFamily: "Roboto-Regular, 'Helvetica Neue'" }}
              >
                LazBlog
              </div>
            </div>
          </div>
        </button>
        <button className="flex flex-row items-center text-neutral-500 font-medium text-sm px-4 py-2 rounded">
          <div className="mr-2 md:w-[250px] flex flex-row bg-white rounded-full">
            <div className="h-[45px] w-[45px]">
              <Image
                src="/images/suggestshop.png"
                alt="suggestshop"
                width={45}
                height={45}
              />
            </div>
            <div className="ml-1 mt-2">
              <div
                className="text-lg font-semibold text-black"
                style={{ fontFamily: "Roboto-Regular, 'Helvetica Neue'" }}
              >
                ร้านค้าแนะนำ
              </div>
            </div>
          </div>
        </button>
      </div>
    </Container>
  );
};

export default Categories;
