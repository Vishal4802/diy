import { useEffect, useState } from "react";
import { Images } from "../assets/data"

const Cart = () => {

    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        calculateTotal();
    }, []);

    const calculateTotal = () => {
        let sum: number = 0;
        Images.forEach(element => {
            sum += (element.price * element.cart);
        });
        setTotal(sum);
    }

    const add = (imgUrl: string): React.MouseEventHandler<HTMLDivElement> => () => {
        const itemIndex = Images.findIndex(item => item.imgUrl === imgUrl);
        if (itemIndex !== -1) {
            Images[itemIndex] = { ...Images[itemIndex], cart: Images[itemIndex].cart + 1 };
            calculateTotal();
        }
    }

    const subtract = (imgUrl: string): React.MouseEventHandler<HTMLDivElement> => () => {
        const itemIndex = Images.findIndex(item => item.imgUrl === imgUrl);
        if (itemIndex !== -1 && Images[itemIndex].cart > 0) {
            Images[itemIndex] = { ...Images[itemIndex], cart: Images[itemIndex].cart - 1 };
            calculateTotal();
        }
    }

  return (
    <>
        <h1 className="text-center px-10 pt-10 text-4xl font-bold text-[#3652AD]">TOTAL PRICE: Rs.{total}</h1>

        <div className="p-10 flex flex-col gap-5 justify-center items-center">
            {
            Images.filter(item => item.cart > 0)
                .map((item) => (
                <div key={item.imgUrl} className="flex flex-wrap justify-between py-5 px-10 w-[40%] max-sm:w-[80%] bg-[#FE7A36] rounded-lg shadow-md shadow-[#3652AD]">
                    <img src={item.imgUrl} height={100} width={250} className="rounded-lg"/>
                    <div className="flex flex-col gap-2 justify-around items-start text-2xl font-bold text-[#E9F6FF]">
                        <div>
                            <h2>{item.name}</h2>
                            <h2 className="text-base font-semibold">#DIY Special {item.type}</h2>
                            <h2 className="text-[#280274] text-base font-semibold">Rs. {item.price}/-</h2>
                        </div>
                        <h2 className="flex flex-wrap gap-2 justify-center items-center">In Cart: <span className="text-[#280274] text-xl flex gap-1 pt-1 justify-center items-center"><div className="bg-[#3652AD] text-[#E9F6FF] px-2.5 pb-[.25rem] rounded-lg cursor-pointer hover:bg-[#4d6ac8] hover:text-[#FFFFFF] transition-colors duration-300" onClick={subtract(item.imgUrl)}>-</div>{item.cart}<div className="bg-[#3652AD] text-[#E9F6FF] px-2 pb-1 rounded-lg cursor-pointer hover:bg-[#4d6ac8] hover:text-[#FFFFFF] transition-colors duration-300" onClick={add(item.imgUrl)}>+</div></span></h2>
                    </div>
                </div>
                ))
            }
        </div>
    </>
  )
}

export default Cart