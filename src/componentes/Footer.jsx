import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Footer(){
    return(
        <footer className="w-full pt-10 flex flex-col gap-4 items-center justify-center text-white bg-[#404040]">
            <h1 className="text-lg font-bold">Redes sociais</h1>
            <div className="flex justify-center gap-4">
                <a className="w-[40px] h-[40px] rounded-full bg-[#323232] flex items-center justify-center  " href=""><FontAwesomeIcon icon={faFacebookF} /></a>
                <a className="w-[40px] h-[40px] rounded-full bg-[#323232] flex items-center justify-center  " href=""><FontAwesomeIcon icon={faInstagram} /></a>
                <a className="w-[40px] h-[40px] rounded-full bg-[#323232] flex items-center justify-center  " href=""><FontAwesomeIcon icon={faXTwitter} /></a>
                <a className="w-[40px] h-[40px] rounded-full bg-[#323232] flex items-center justify-center  " href=""><FontAwesomeIcon icon={faYoutube} /></a>
            </div>

            <p>Siga-nos e fique por dentro das novidades</p>

            <div className="border-t border-[#707070] w-full p-5 text-center">
                <p className="text-[#b5b5b5] text-sm">&copy; 2025 GourmetOn. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
 
}