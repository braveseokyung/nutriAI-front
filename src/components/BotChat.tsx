import Image from 'next/image';
import botProfile from '@/images/botProfile.svg';

interface BotChatProps {
  message: string;
}

export default function BotChat({ message }: BotChatProps) {
  return (
    <div className="flex items-start gap-3">
      {/* Bot Profile as Image */}
      <div className="relative w-[50px] h-[50px] flex-shrink-0">
        <Image src={botProfile} alt="Bot Profile" className="rounded-full" />
      </div>

      {/* Chat Box */}
      <div className="flex p-4 gap-2 bg-white border border-[#6892F9] shadow-md rounded-[4px_32px_32px_32px] max-w-[100%]">
        <p className="font-medium text-[16px] leading-[28px] text-[#4D4D4D] break-words">
          {message}
        </p>
      </div>
    </div>
  );
}
