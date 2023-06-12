import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Button from "./Button";

export default function ExitButton({ setImgPresentation }) {
    return (
        <Button
            className='absolute top-0 right-0 m-10'
            onClick={() => setImgPresentation(false)}
        >
            <FaChevronLeft className="absolute translate-x-[3px]" />
            <FaChevronRight className="absolute -translate-x-[3px]" />
        </Button>
    )
}
