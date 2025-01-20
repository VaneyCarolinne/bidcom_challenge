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
    <div className="flex flex-col w-1/2 gap-5 ml-16">
      <p className="text-sm">{title}</p>
      <p className="text-5xl">
        {greetings} <span className="font-bold">{subject}</span>
      </p>
      <p className="text-base text-justify">{paragraph}</p>
    </div>
  );
}
