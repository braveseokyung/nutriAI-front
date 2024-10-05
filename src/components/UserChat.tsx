interface UserChatProps {
  message: string;
}

export default function UserChat({ message }: UserChatProps) {
  return (
    <div className="flex p-4 gap-2 bg-[#3A6BE1] shadow-md rounded-[32px_4px_32px_32px] max-w-[calc(100%-50px)] ml-[62px]">
      <p className="font-medium text-[16px] leading-[28px] text-white break-words">
        {message}
      </p>
    </div>
  );
}
