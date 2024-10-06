import Image from 'next/image';
import iconThink from '@/images/iconThink.svg';

export default function BotThinking() {
  return (
    <div className="flex items-center">
      {/* 텍스트 */}
      <p className="text-[#909AAF] font-medium text-[24px] leading-[28px]">생각중..</p>
      
      {/* 회전하는 이미지 */}
      <div className="w-[50px] h-[50px] animate-spin-slow">
        <Image src={iconThink} alt="Thinking" />
      </div>
    </div>
  );
}
