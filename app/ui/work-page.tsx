import { WorkButtonStatus } from "@/lib/atom";
import { useAtom } from "jotai";
import { useEffect } from "react";

export default function WorkNextPage() {
  const [, closeButton] = useAtom(WorkButtonStatus);

  const CloseBtnHandler = () => {
    closeButton(!WorkButtonStatus);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  });

  return (
    <>
      <div className=" border border-r-pink-400 overflow-hidden absolute top-[100%]  bg-black w-full h-full  ">
        <h1 className="text-5xl font-bold text-white">Wrok page </h1>
        <button onClick={CloseBtnHandler} className="text-9xl text-white  ">
          X
        </button>
      </div>
    </>
  );
}
