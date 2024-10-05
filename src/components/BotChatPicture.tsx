import Image from 'next/image';
import botProfile from '@/images/botProfile.svg';

export default function BotChatFinalPicture() {
  return (
    <div className="flex items-start gap-3 w-[434px] h-[368px] left-[20px] top-[590px]">
      {/* Bot Profile */}
      <div className="relative w-[50px] h-[50px]">
        <Image src={botProfile} alt="Bot Profile" className="rounded-full" />
      </div>

      {/* Chat Box */}
      <div className="flex items-start p-4 gap-2 w-[372px] h-[368px] bg-white border border-[#6892F9] shadow-md rounded-[4px_32px_32px_32px]">
        {/* Picture in Chat */}
        <div className="w-[332px] h-[332px] rounded-[13px] overflow-hidden">
          <img
            src="https://shopping-phinf.pstatic.net/main_3350403/33504037000.2.jpg"
            alt="Chat Image"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
