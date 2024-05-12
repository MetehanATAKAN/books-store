import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { HighlightsBooks } from "../services/Books/books";

const Highlights = () => {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    (async () => {
      const books = await HighlightsBooks();
      setData(books);
    })();
  }, []);

  return (
    <div className="bg-section py-16">
      <div className="section-screen">
        <div className="flex items-center">
          <hr className="flex-grow border-t border-2 border-neutral-200 mr-12" />
          <span className="px-3 text-3xl font-semibold text-zinc-800">
            Highlights Books
          </span>
          <hr className="flex-grow border-t border-2 border-neutral-200 ml-12" />
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          initialSlide={4}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="py-12"
          loop={true}
          breakpoints={{
            0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
            450: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
            2048: {
              slidesPerView: 4,
              spaceBetween: 50,
            }
          }}
        >
          {data.map((book, index) => (
            <SwiperSlide key={index} className="h-[610px]">
              <div className="max-w-sm rounded overflow-hidden shadow-lg h-full">
                <img
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt="book-image"
                  className="w-full h-96"
                />
                <div className="text-yellow-800 flex flex-col gap-2 py-2 justify-between">
                  <div className="font-bold text-xl mb-2 h-14">
                    <span>{book.volumeInfo.title}</span>
                  </div>

                  <div className="text-gray-700 text-base">
                    <span> {book.volumeInfo.authors[0]}</span>
                  </div>
                  <div className="font-bold px-6 pt-4 pb-2">
                    <span>{book.price} $</span>
                  </div>

                  <button className="border flex gap-3 text-center items-center m-auto px-3 py-1.5 rounded-xl border-solid border-gray-700 text-gray-700"><img src={'/images/basket.png'} alt="basket" className='w-7 h-7' /> ADD TO CART</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Highlights;
