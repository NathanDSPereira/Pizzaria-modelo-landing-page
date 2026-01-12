"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function QuickAcess() {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <section className="bg-zinc-950 py-8 px-4 space-y-6">
            <div className="text-slate-200 flex justify-center items-center text-center">
                <h2 className="italic">&quot;A tradição do forno a lenha direto na sua mesa&quot;</h2>
            </div>

            <div className="flex flex-col gap-4">
                <button className="w-full bg-amber-600 text-zinc-950 font-bold py-4 rounded-2xl shadow-lg active:scale-95 transition-all">
                🍕 FAZER PEDIDO AGORA
                </button>

                <div className="grid grid-cols-2 gap-3">
                    <button className="bg-zinc-900/50 border border-zinc-800 text-zinc-300 py-3 rounded-2xl text-sm font-medium active:scale-95 transition-all active:border-amber-500">
                        📄 Ver Cardápio
                    </button>
                    <button className="flex justify-center items-center bg-zinc-900/50 border border-zinc-800 text-zinc-300 py-3 rounded-2xl text-sm font-medium active:scale-95 transition-all active:border-amber-500">
                        <Image 
                            src="/images/whatsapp.png" 
                            alt="WhatsApp" 
                            width={16} 
                            height={16} 
                            className="inline-block mr-2 mb-1" 
                        />      
                        WhatsApp
                    </button>
                </div>
            </div>

            <div className={`fixed bottom-6 left-0 right-0 z-50 px-4 transition-all duration-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                <button className="w-full bg-amber-600 text-zinc-950 font-bold py-4 rounded-2xl shadow-lg active:scale-95 transition-all">
                🍕 FAZER PEDIDO AGORA
                </button>
            </div>
        </section>
    );
}