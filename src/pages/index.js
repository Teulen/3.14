import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "./header";
import Footer from "./footer";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className='w-full h-full flex flex-col overflow-auto bg-slate-600 dark:bg-slate-900'>
      <Header/>


      {/* Text-1 */}
        <div className="w-full h-1/2">
            <div className="w-full h-full flex flex-col items-center justify-center">
                  <h1 className="text-2xl font-normal text-slate-400 dark:text-slate-300 mt-10 mb-2">
                    <span className="text-slate-400 dark:text-slate-300">МОНПЭЙ МАРКЕТ</span>
                  </h1>
                  <div className="bg-white h-0.5 w-20 rounded mb-10"></div>
                  <h2 className="text-center text-md font-light text-slate-400 dark:text-slate-300">
                    <span className="text-slate-400 dark:text-slate-300">Худалдаа үйлчилгээ эрхлэгч та Монпэй мерчантын энэхүү платформоор дамжуулж өөрийн онлайн вэб дэлгүүртэй болох боломжтой.</span>
                  </h2>
                  <h2 className="text-md font-light text-slate-400 dark:text-slate-300 mb-5">Та МОНПЭЙ МАРКЕТ платформоор дамжуулж:</h2>
            </div>
        </div>


        {/* Icons */}

        <div className="w-full h-1/2 flex justify-center">
          <div className="grid w-8/12 h-full xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 max-sm:grid-cols-3">

            <a className="flex flex-col items-center justify-center">
              <img src="https://merchant.monpay.mn/stat/ministore/1.png"/>
              <h2 className="text-center text-md font-light text-slate-400 dark:text-slate-300">Дэлгүүр нээх</h2>
            </a>
            <a className="flex flex-col items-center justify-center">
              <img src="https://merchant.monpay.mn/stat/ministore/2.png"/>
              <h2 className="text-center text-md font-light text-slate-400 dark:text-slate-300">Бараа оруулах</h2>
            </a>
            <a className="flex flex-col items-center justify-center">
              <img src="https://merchant.monpay.mn/stat/ministore/3.png"/>
              <h2 className="text-center text-md font-light text-slate-400 dark:text-slate-300">Бараа удирдах</h2>
            </a>
            <a className="flex flex-col items-center justify-center">
              <img src="https://merchant.monpay.mn/stat/ministore/4.png"/>
              <h2 className="text-center text-md font-light text-slate-400 dark:text-slate-300">Барааны үлдэгдэл удирдах</h2>
            </a>
            <a className="flex flex-col items-center justify-center">
              <img src="https://merchant.monpay.mn/stat/ministore/5.png"/>
              <h2 className="text-center text-md font-light text-slate-400 dark:text-slate-300">Ангилал удирдах</h2>
            </a>
            <a className="flex flex-col items-center justify-center">
              <img src="https://merchant.monpay.mn/stat/ministore/6.png"/>
              <h2 className="text-center text-md font-light text-slate-400 dark:text-slate-300">Сонголт оруулах</h2>
            </a>
            <a className="flex flex-col items-center justify-center">
              <img src="https://merchant.monpay.mn/stat/ministore/7.png"/>
              <h2 className="text-center text-md font-light text-slate-400 dark:text-slate-300">Бүтээгдэхүүн онцлох</h2>
            </a>
            <a className="flex flex-col items-center justify-center">
              <img src="https://merchant.monpay.mn/stat/ministore/8.png"/>
              <h2 className="text-center text-md font-light text-slate-400 dark:text-slate-300">Захиалга шалгах</h2>
            </a>
            <a className="flex flex-col items-center justify-center">
              <img src="https://merchant.monpay.mn/stat/ministore/9.png"/>
              <h2 className="text-center text-md font-light text-slate-400 dark:text-slate-300">Захиалга оруулах</h2>
            </a>
            <a className="flex flex-col items-center justify-center">
              <img src="https://merchant.monpay.mn/stat/ministore/10.png"/>
              <h2 className="text-center text-md font-light text-slate-400 dark:text-slate-300">Захиалгын төлөв өөрчлөх</h2>
            </a>

          </div>
        </div>


        {/* Text-2 */}
        <div className="w-full h-1/2">
            <div className="w-full h-full flex flex-col items-center justify-center">
                  <h1 className="text-lg font-normal text-slate-400 dark:text-slate-300 my-10">
                    <span className="text-slate-400 dark:text-slate-300 text-center">Та үүсгэсэн дэлгүүрээ Монпэй апликейшнд байршуулж, Монпэй апликейшны 400,000+ хэрэглэгчдэд бүтээгдэхүүнээ шууд хүргээрэй.</span>
                  </h1>
                  <h2 className="text-center text-md font-light text-slate-400 dark:text-slate-300">
                    <span className="text-slate-400 dark:text-slate-300">Дэлгүүрээ үүсгэхийн тулд та Монпэй мерчант болсон байх шаардлагатай ба яг одоо <a className="cursor-pointer font-bold">ЭНД ДАРЖ</a> хүсэлтээ илгээнэ үү.</span>
                  </h2>
            </div>
        </div>


        {/* Zurag */}
        <div className="w-full h-1/4 flex justify-center">
          <img src="https://merchant.monpay.mn/uploads/market.png" className="w-1/2 h-1/2"/>
        </div>


        {/* Contact */}
        <div className="w-full h-1/4 flex justify-center mt-40">
          <div className="w-8/12 h-full grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 max-sm:grid-cols-1 gap-10">

            <div>
              <div className="flex w-full gap-4">
                <img src="https://merchant.monpay.mn/stat/images/icon-headset.png" className="w-12 h-12"/>
                <h1 className="text-wrap text-slate-400 dark:text-slate-300">Харилцагчийн мэдээллийн төв:</h1>
              </div>
              <h1 className="ml-10 text-xl text-slate-400 dark:text-slate-300">1800-1199</h1>
            </div>

            <div>
              <div className="flex w-full gap-4">
                <img src="https://merchant.monpay.mn/stat/images/icon-email.png" className="w-12 h-12"/>
                <h1 className="text-wrap text-slate-400 dark:text-slate-300">И-мэйл хаяг:</h1>
              </div>
              <h1 className="ml-16 text-md font-light text-slate-400 dark:text-slate-300">digitalbusiness@mobicom.mn</h1>
            </div>

            <div>
              <div className="flex w-full gap-4">
                <img src="https://merchant.monpay.mn/stat/images/icon-phone-contact.png" className="w-12 h-12"/>
                <h1 className="text-slate-400 dark:text-slate-300 text-wrap">Холбогдох утас:</h1>
              </div>
              <h1 className="text-slate-400 dark:text-slate-300 ml-10 text-xl">75752255</h1>
            </div>

            <div>
              <div className="flex w-full gap-4">
                <img src="https://merchant.monpay.mn/stat/images/icon-headset.png" className="w-12 h-12"/>
                <h1 className=" text-slate-400 dark:text-slate-300 text-wrap">Манай хаяг:</h1>
              </div>
              <h1 className="text-slate-400 dark:text-slate-300 ml-16 text-md font-light text-wrap">УБ, СБД, 1-р хороо, Юнескогийн гудамж, MПМ цогцолбор3 үгт хаяг: Сүлжмэл, хууль, нууцлах</h1>
            </div>

          </div>
        </div>


        <div className="w-full h-40 flex justify-center">
            <Footer/>
        </div>



    </div>
  );
}
