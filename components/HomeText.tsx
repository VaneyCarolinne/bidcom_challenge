import HomeButton from './HomeButton';

interface HomeTextProps {
  title: string;
  greetings: string;
  subject: string;
  paragraph: string;
}

export default function HomeText({
  title,
  greetings,
  subject,
  paragraph,
}: HomeTextProps) {
  return (
    <div className="flex flex-col lg:w-1/2 gap-5 lg:ml-16 ">
      <p className="lg:text-sm text-xs flex justify-center items-center lg:justify-start lg:items-start">
        {title}
      </p>
      <p className="lg:text-5xl text-3xl flex justify-center items-center lg:justify-start lg:items-start gap-2">
        {greetings} <span className="font-bold">{subject}</span>
      </p>
      <p className="text-base lg:text-justify text-center flex justify-center items-center lg:justify-start lg:items-start lg:p-0 p-4">
        {paragraph}
      </p>
      <div className="flex justify-center lg:justify-start">
        <HomeButton />
      </div>
    </div>
  );
}
