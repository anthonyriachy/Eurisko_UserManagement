import { AvatarProps } from "./Avatar.type";

 
export const Avatar = ({ initials }: AvatarProps) => (
    <div className='mx-auto text-[24px] font-semibold text-white flex items-center justify-center bg-[var(--bg-blue)] rounded-full w-[90px] h-[90px]'>
        {initials}
    </div>
); 