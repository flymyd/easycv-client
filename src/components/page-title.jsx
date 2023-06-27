import {IconChevronLeft} from "@douyinfe/semi-icons";
import {useNavigate} from "react-router-dom";

export const PageTitle = (props) => {
  const navi = useNavigate()
  return <div className="flex flex-row items-center text-xl font-bold mb-5 select-none">
    {props.back && <IconChevronLeft className="pr-3 cursor-pointer" onClick={() => navi(-1)}/>}
    <h1>{props.title}</h1>
  </div>
}