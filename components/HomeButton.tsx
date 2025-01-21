import { FaArrowRight } from 'react-icons/fa';

export default function HomeButton() {
  return (
    <>
      <button className="text-base rounded-md bg-black text-white lg:w-2/12 w-3/4 h-14 flex items-center gap-2 justify-center absolute lg:mt-0 mt-[326px]">
        Get started <FaArrowRight />
      </button>
    </>
  );
}
