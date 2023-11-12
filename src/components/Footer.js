// import Link from "next/link";
// import { useRouter } from "next/router";

// const Footer = () => {
//   const router = useRouter();

//   const handleWhatsAppClick = () => {
//     const whatsappNumber = "+905324990501"; // WhatsApp numarasını buraya ekleyin
//     const message = encodeURIComponent("Bende Seni Çok Seviyorum Sevgilim");
//     window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
//   };

//   return (
//     <footer className="container flex justify-center pb-6 pt-6 border-t border-color max-sm:px-4 bottom-0 text-color">
//       <p className="text-sm">
//         <span
//           role="button"
//           tabIndex={0}
//           onClick={handleWhatsAppClick}
//           onKeyDown={handleWhatsAppClick}
//           className="ml-2 cursor-pointer text-blue-500"
//         >
//           &quot;Seni Seviyorum Ayça...&quot;
//         </span>
//       </p>
//     </footer>
//   );
// };

// export default Footer;

const Footer = () => {
  return (
    <footer className="container flex justify-center pb-6 pt-6 border-t border-color max-sm:px-4 bottom-0 text-color">
      <p className="text-sm">&quot;Never give up...&quot;</p>
    </footer>
  );
};

export default Footer;
