import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Button from "./Button";

export default function ExitButton({ setImgPresentation, scrollPosition }) {

    const handleClick = () => {
        document.documentElement.scrollTop = scrollPosition * document.documentElement.offsetHeight
        setImgPresentation(false)
    }

    return (
        <Button
            className='absolute top-0 right-0 m-10'
            onClick={handleClick}
        >
            <FaChevronLeft className="absolute translate-x-[3px]" />
            <FaChevronRight className="absolute -translate-x-[3px]" />
        </Button>
    )
}
