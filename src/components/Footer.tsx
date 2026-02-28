import { FaWhatsapp } from "react-icons/fa";
import { IoLocation, IoMail } from "react-icons/io5";
import { WhatsButton } from "./shared/WhatsButton";

export function Footer() {
  return (
    <footer
      id="contato"
      className="bg-linear-to-r from-background to-black text-white py-3 text-center flex flex-col gap-3 items-center"
    >
      <div className="flex flex-col gap-1">
        <h1>PRONTO PARA ELEVAR SEU STAND?</h1>
        <h3>Vamos montar seu projeto?</h3>
        <span className="flex gap-2 flex-col md:flex-row p-4">
          <WhatsButton />
        </span>
      </div>
      <div className="h-0.5 w-full bg-white/10" />
      <article className="flex gap-3 flex-col items-center md:flex-row p-4">
        <span className="flex gap-1 ">
          <IoLocation size={24} />
          Rua João da Costa Ferreira 93, Cidade Líder - SP
        </span>
        <span className="flex items-center gap-1">
          <IoMail />
          comercial@hys.com.br
        </span>
        <span className="flex items-center gap-1">
          <FaWhatsapp />
          +55 11 95974-8448
        </span>
      </article>
    </footer>
  );
}
