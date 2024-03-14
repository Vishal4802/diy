import {Link} from 'react-router-dom'
import { Images } from '../assets/data'

interface buttonProp{
    name: string,
    url: string,
    itemID?: string,
}

const Button = (props: buttonProp) => {

  const addItem = () => {
    const itemIndex = Images.findIndex(item => item.imgUrl === props.itemID);
    if (itemIndex !== -1) {
      Images[itemIndex] = { ...Images[itemIndex], cart: Images[itemIndex].cart + 1 };
    }
  }

  return (
    <button className="bg-[#FE7A36] text-[#E9F6FF] font-medium rounded-lg text-base px-5 py-2 hover:bg-[#ff945f] hover:text-[#FFFFFF] transition-colors duration-300">
        <Link to={props.url} onClick={addItem}>{props.name}</Link>
    </button>
  )
}

export default Button