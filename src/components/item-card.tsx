import {Images} from '../assets/data'
import Button from './Button';

interface cardProp{
    name: string,
    price: number,
    rating: number,
    type: string,
    width: string,
    height: string,
}

const ItemCard = (props: cardProp) => {
  const image = Images.find(data => data.name === props.name && data.type === props.type)

  return (
    <div className={`${props.width} rounded-lg pb-3 shadow shadow-[#3652AD] bg-[#E9F6FF]`}>
        <img className={`w-full ${props.height} rounded-lg pb-3 object-cover`} src={image?.imgUrl} />
        <h3 className='text-[#3652AD] font-bold text-xl text-center'>{props.name}</h3>
        <p className='pl-5 pb-3'>Pre marked {props.type} 2 Layered - {props.name} <span className='text-[#E9F6FF]'>welcome to diy</span></p>
        <div className="flex justify-around pb-2">
          <div>
            <h3 className='text-[#3652AD] font-medium text-base'>Rating: {props.rating}</h3>
            <h2 className='text-[#280274] font-bold text-xl'>Rs {props.price}/-</h2>
          </div>
          <Button name='Add to Cart' url='/cart' itemID = {image?.imgUrl} />
        </div>
    </div>
  )
}

export default ItemCard