import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import Button from "./Button"

export default function PassButton({ back, onClick, className }) {

    const style = back ? 'left-0' : 'right-0'

    return (
        <Button
            className={`mx-2 absolute top-1/2 -translate-y-1/2 
            md:mx-10
            ${style} ${className}`}
            onClick={() => onClick()}
        >
            {back ?
                <FaChevronLeft className='w-4 h-4' /> :
                <FaChevronRight className='w-4 h-4' />
            }
        </Button>
    )
}
