import Image from 'next/image';

export default function HomeCarousel() {
  return (
    <>
      <Image
        aria-hidden
        src="/home.webp"
        alt="home"
        width={500}
        height={620}
        className="mr-16"
      />
    </>
  );
}
