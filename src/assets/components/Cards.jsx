import { Icon, Users } from "lucide-react";

export default function Cards({desc, title, icon:Icon, bgColor, iconColor}) {
  return (
    <>
      <li className={`${bgColor} p-6 rounded-2xl flex flex-col gap-2 shadow-xl md:flex-1`}>
        <Icon className={`${iconColor} size-16 self-center`} />
        <h2 className="subtitle self-center text-center md:w-28 leading-6">{title}</h2>
        <hr className="border-t border-(--grafitti)/30" />
        <p className="self-center text-center">
          {desc}
        </p>
      </li>
    </>
  );
}
