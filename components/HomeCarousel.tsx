import Image from 'next/image';

export default function HomeCarousel() {
  return (
    <div className="flex justify-center items-center lg:justify-center lg:items-center">
      <Image
        aria-hidden
        src="/home.webp"
        alt="home"
        width={500}
        height={620}
        className="lg:mr-16 lg:w-[600px] lg:h-[520px] w-[349px] h-[328px] lg:p-0 p-6 "
      />
    </div>
  );
}
