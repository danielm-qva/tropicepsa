'use client'
import {MessageCircle} from "lucide-react";

const phoneWhatsapp = process.env.NEXT_PUBLIC_PHONE || '+15551234567'

const Floating = () => {

    return (<div className="fixed bottom-8 right-8 z-50 animate-bounce">
            <button
                onClick={() => {
                    window.open(`https://api.whatsapp.com/send?phone=+${phoneWhatsapp}&text=Hola,necesito su servicions`, '_blank');
                }}
                className="group relative w-16 h-16 bg-primary text-primary-foreground rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"/>
            </button>
        </div>
    )
}

export default Floating;