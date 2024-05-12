import { useEffect, useState } from "react"
import { NewBooks } from "../services/Books/books"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Carousel = () => {

  const [data, setData] = useState([]);
  
  useEffect(() => {
   ( async () => {
    const books = await NewBooks();
    setData(books);
   })()
  }, [])
  
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="section-screen"
        loop={true}
      >
        {
          data?.map((book,index) =>(
            <SwiperSlide key={index}>
              <div className="grid grid-cols-2 gap-4 w-full h-96 px-24">
                  <div className="flex flex-col gap-12 m-auto">
                    <h2 className="font-medium text-3xl text-zinc-800"> {book.volumeInfo.title} </h2>
                    {/* <p> {book.volumeInfo.description} </p> */}
                  </div>
                  <div className="flex m-auto">
                    <img src={book.volumeInfo.imageLinks.thumbnail} alt="book-image" className="w-72 h-72" />
                  </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  )
}

export default Carousel