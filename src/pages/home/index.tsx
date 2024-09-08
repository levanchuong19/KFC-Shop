
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import FoodList from "../../components/food-list"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './index.scss';

function Home() {

  return (
    <div>
     
      
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/DzutDealHuHon.webp?v=gXdk9g" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/RiceMilk.webp?v=gXdk9g" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/OtXiemXanh.webp?v=gXdk9g" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/DinnerP2.webp?v=gXdk9g" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/BanhMi.webp?v=Lnl1lg" alt="" /></SwiperSlide>
      </Swiper>

     <>
      <Swiper 
        
        slidesPerView={5}
        centeredSlides={true}
        spaceBetween={0}
        // navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper__order"
      >
        <SwiperSlide className="slide"><a href="/">New Products</a></SwiperSlide>
        <SwiperSlide className="slide"><a href="/">Combo for 1</a></SwiperSlide>
        <SwiperSlide className="slide"><a href="/">Combo for sharing</a></SwiperSlide>
        <SwiperSlide className="slide"><a href="/">Fried & Roasted</a></SwiperSlide>
        <SwiperSlide className="slide"><a href="/">Rice - Burger - Pasta</a></SwiperSlide>
        <SwiperSlide className="slide"><a href="/">Snack</a></SwiperSlide>
        <SwiperSlide className="slide"><a href="/">Dessert & Drinks</a></SwiperSlide>
      </Swiper>
      <div className='Liner'></div>
    </>
      <FoodList/>
    </div>
  )
}

export default Home