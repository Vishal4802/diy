import { FC } from "react"
import hero from '../assets/hero/hero.png'
import about from '../assets/about/about.webp'
import ItemCard from "../components/item-card"
import { Images } from '../assets/data'
import { Link } from "react-router-dom"

const Home:FC = () => {

  return (
    <>
      <section id="hero" className="flex justify-between items-center px-20 pt-10 max-sm:pt-2">
          <div>
              <h1 className="text-[#3652AD] font-bold text-7xl w-61 max-lg:text-3xl max-lg:w-96 max-sm:hidden">EXPLORE YOUR <span className="text-[#FE7A36]">INNER</span> KID</h1>
              <p className="text-[#280274] font-medium text-xl pt-1 pl-1 max-lg:text-sm max-sm:hidden">100% Safe material used</p>
          </div>
          <div>
              <img src={hero} height={1000} width={1200}/>
          </div>
      </section>

      <section id="about" className="px-20 pb-16 pt-12 bg-[#3652AD]">
        <h2 className="text-[#E9F6FF] font-bold text-3xl pb-10 max-sm:text-center">ABOUT US</h2>
        <div className="flex justify-start gap-5 items-center max-md:flex-col">
          <img src={about} height={400} width={500} className="ml-10 rounded-lg shadow-md shadow-[#280274] max-md:ml-0"/>
          <p className="text-[#E9F6FF] font-medium text-xl p-3 max-md:text-center">Discover the beauty of nature in every hue with our natural DIY coloring discs and keychains. Crafted with organic pigments, each piece offers a sustainable and stylish touch to your accessories. Dive into creativity with Earth's palette at your fingertips.</p>
        </div>
      </section>

      <section id="fetured" className="bg-[#FE7A36] px-20 pt-12 pb-16">
        <h2 className="text-[#E9F6FF] font-bold text-3xl pb-10 max-sm:text-center">FEATURED PRODUCTS</h2>
        <div className="flex flex-wrap gap-5 justify-center">
          {
            Images.filter(item => item.rating > 4.2)
            .sort((a, b) => b.rating - a.rating)
            .map((item) => (
              <ItemCard key={item.imgUrl} name={item.name} price={item.price} rating={item.rating} type={item.type} width="w-96" height="h-50"/>
            ))
          }
        </div>
      </section>

      <section id="category" className="bg-[#E9F6FF] px-20 pt-12 pb-16">
        <h2 className="text-[#3652AD] font-bold text-3xl pb-10 max-sm:text-center">CATEGORIES</h2>

        <div className="flex flex-wrap gap-5 justify-center">
        {
          Images.filter(item => item.rating >= 4.5)
            .sort((a, b) => b.rating - a.rating)
            .map((item) => (
              <div key={item.imgUrl} className='h-96 w-96 rounded-lg bg-cover bg-center relative shadow shadow-[#3652AD]' style={{ backgroundImage: `url(${item.imgUrl})`}}>
                <div className="h-full w-full rounded-lg p-3 flex justify-center items-center bg-[#3652AD] text-[#E9F6FF] text-4xl font-semibold absolute top-0 left-0 opacity-0 transition-opacity duration-300 hover:opacity-100"><Link to={`/shop?type=${item.type}`}>{item.type}</Link></div>
              </div>
            ))
        }
        </div>
      </section>

      
    </>
  )
}

export default Home