import { FaWhatsapp } from "react-icons/fa";

export function WhatsButton() {
  const phone = "5511959748448";

  const message = encodeURIComponent(
    "Olá, gostaria de solicitar um orçamento para criação de stand.",
  );

  const url = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-600 w-fit text-white px-6 py-3 rounded-md flex items-center justify-center gap-2 font-medium shadow-lg hover:opacity-90 transition"
    >
      <FaWhatsapp size={20} />
      Falar no WhatsApp
    </a>
  );
}
