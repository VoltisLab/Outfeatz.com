// components/WhyCard.tsx
import Image from "next/image";

interface WhyCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

export default function WhyCard({ imageSrc, title, description }: WhyCardProps) {
  return (
    <div className="bg-[#101010] rounded-3xl flex flex-col items-center text-center p-6 w-full max-w-[300px] space-y-4">
      <Image src={imageSrc} alt={title} width={80} height={80} priority className="object-contain" />
      <h3 className="text-[#F1F1EF] text-lg font-semibold my-5">{title}</h3>
      <p className="text-[#ADADAD] text-sm">{description}</p>
    </div>
  );
}
