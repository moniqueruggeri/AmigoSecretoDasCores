import { Icon, Users } from "lucide-react";

export default function Cards({desc, title, icon:Icon, bgColor, iconColor}) {
  return (
    <div>
      <li className={`${bgColor} p-6 rounded-2xl flex flex-col gap-2 shadow-xl`}>
        <Icon className={`${iconColor} size-16 self-center`} />
        <h2 className="subtitle self-center">{title}</h2>
        <hr className="border-t border-(--grafitti)/30" />
        <p className="self-center text-center">
          {desc}
        </p>
      </li>
    </div>
  );
}
