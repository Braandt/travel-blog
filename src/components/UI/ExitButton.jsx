import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Button from "./Button";
import { exitButtonFunction } from "../../../utils";

export default function ExitButton({ stateToSetToFalse, scrollPosition }) {

    return (
        <Button
            className='absolute top-0 right-0 m-4 
            md:m-10'
            onClick={() => exitButtonFunction(stateToSetToFalse, scrollPosition)}
        >
            <FaChevronLeft className="absolute translate-x-[3px]" />
            <FaChevronRight className="absolute -translate-x-[3px]" />
        </Button>
    )
}
