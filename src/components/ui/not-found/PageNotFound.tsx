import { titleFont } from "@/config/fonts";
import Image from "next/image";
import Link from "next/link";

export const PageNotFound = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row h-[800px] w-full justify-center items-center align-middle">
      <div className="text-center px-5 mx-5 ">
        <h2 className={`${titleFont.className} antialiased text-9xl`}>404</h2>
        <p className="text-2xl font-semibold">Ops! Pagina no encontrada</p>

        <p className="font-light mt-2">
          <span>Puedes regresar al </span>

          <Link className="font-normal hover:underline transition-all" href="/">
            inicio
          </Link>
        </p>
      </div>

      <div className="px-5 mx-5">
        <Image src="/imgs/starman.png" alt="starman" width={500} height={500} />
      </div>
    </div>
  );
};
