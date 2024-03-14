import { FC } from 'react'
import logo from '/man-artist.svg'

const Footer:FC = () => {
  return (
    <footer className="bg-[#3652AD] text-[#E9F6FF]">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
              <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                    <img src={logo} className='max-sm:w-16'/>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap">#DIY</span>
              </a>
              <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-[#E9F6FF] sm:mb-0">
                  <li>
                      <a href="#about" className="hover:underline me-4 md:me-6">About</a>
                  </li>
                  <li>
                      <a href="#fetured" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                  </li>
                  <li>
                      <a href="#fetured" className="hover:underline me-4 md:me-6">Licensing</a>
                  </li>
                  <li>
                      <a href="#fetured" className="hover:underline">Contact</a>
                  </li>
              </ul>
          </div>
          <hr className="my-6 border-[#E9F6FF] sm:mx-auto lg:my-8" />
          <span className="block text-sm text-[#E9F6FF] sm:text-center">© 2024 <a href="#fetured" className="hover:underline">#DIY™</a>. All Rights Reserved. Developed By Vishal Sharma</span>
      </div>
    </footer>
  )
}

export default Footer