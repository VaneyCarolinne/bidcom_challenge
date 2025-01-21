import { TfiArrowCircleUp } from 'react-icons/tfi';
import HomeCarousel from './HomeCarousel';
import HomeText from './HomeText';

const HomeTextProps = {
  title: 'A B O U T — P E R S O N A L',
  greetings: '¡Hello!',
  subject: 'I’m Angela Smith',
  paragraph:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
};

export default function Home() {
  return (
    <div className="grid lg:grid-rows-[20px_0.5fr_20px] grid-rows-[5px_0fr_5px] items-center justify-items-center min-h-screen gap-16">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-col">
          <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center lg:gap-32">
            <HomeText
              title={HomeTextProps.title}
              greetings={HomeTextProps.greetings}
              subject={HomeTextProps.subject}
              paragraph={HomeTextProps.paragraph}
            />
            <HomeCarousel />
          </div>
          <div className="flex justify-center align-middle items-center lg:mt-0 mt-[74px]">
            <TfiArrowCircleUp className="w-[32px] h-[32px]" />
          </div>
        </div>
      </main>
    </div>
  );
}
