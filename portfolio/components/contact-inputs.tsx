"use client"

import { useState } from "react";

const ContactInputs = () => {
    const [copyMail,setCopyMail] = useState("🔗");
    const [copyTel,setCopyTel] = useState("🔗");

    const copyTextToClipboard = async (text: string) => {
        await navigator.clipboard.writeText(text);
        switch (text) {
            case "ignacioaprile@hotmail.com":
                setCopyMail("✔");
                setTimeout(() => setCopyMail("🔗"), 700);
                break;
            case "1535094880":
                setCopyTel("✔");
                setTimeout(() => setCopyTel("🔗"), 500);
                break;
        }
    };
    return ( 
        <section className="z-20 flex justify-center gap-5 flex-wrap">
            <div className="flex justify-center text-lg ">
                <p className="py-1 px-4 bg-slate-800 text-center text-slate-100/80 w-60">ignacioaprile@hotmail.com</p>
                <button 
                title="Copiar Mail"
                className="py-1 px-1 bg-secondary rounded-r-lg w-10
                cursor-pointer hover:bg-secondary/80" onClick={()=>copyTextToClipboard("ignacioaprile@hotmail.com")}
                >{copyMail}</button>
            </div>
            
            <div className="flex justify-center text-lg ">
                <p className="py-1 px-4 bg-slate-800 text-center text-slate-100/80 w-60">15-3509-4880</p>
                <button 
                title="Copiar Teléfono"
                className="py-1 px-1 bg-secondary rounded-r-lg w-10
                cursor-pointer hover:bg-secondary/80" onClick={()=>copyTextToClipboard("1535094880")}
                >{copyTel}</button>
            </div>
        </section>
     );
}
 
export default ContactInputs;