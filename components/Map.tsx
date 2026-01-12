export default function Map() {
    return (
        <section className="flex flex-col justify-center items-center mb-100">
            <div className="text-center mb-6 mt-10">
                <h4 className="text-slate-200 font-bold text-xl font-serif tracking-wide">Onde estamos</h4>
                <p className="text-zinc-400">venha nos visitar na Unidade Estados Unidos</p>
            </div>

            <div className="w-72  bg-zinc-900/90 backdrop-blur-sm rounded-xl flex flex-col gap-4 shadow-lg">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3755.1630256443564!2d-47.924466264556884!3d-19.748227056834736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bad02989347f65%3A0x8475c5b0b39d5813!2sQuibe%20do%20Z%C3%A9!5e0!3m2!1spt-BR!2sbr!4v1768074231331!5m2!1spt-BR!2sbr"
                    frameBorder="0" 
                    allowFullScreen
                    loading="lazy"
                    className="grayscale w-full h-52 rounded-tr-3xl rounded-tl-3xl invert"
                    referrerPolicy="no-referrer-when-downgrade"
                >
                </iframe>
                <div className="flex flex-col gap-3 pb-6">
                    <div className="flex items-start justify-center gap-4 px-4 py-2">
                        <div className="rounded-full bg-orange-500/10 p-2 text-orange-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-slate-200 font-semibold">Unidade Estados Unidos</p>
                            <p className="text-zinc-400 font-medium text-sm">Estados Unidos, 406</p>
                            <p className="text-zinc-400 font-medium text-sm">Uberaba - MG, 38025-170</p>
                        </div>
                    </div>
                    <button className="bg-zinc-700/50 border border-zinc-800 text-zinc-300 py-3 mx-4 rounded-xl text-md font-semibold active:scale-95 transition-all active:border-amber-500 flex items-center gap-2 justify-center">
                        Como chegar
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-external-link-icon lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                    </button>
                </div>
            </div>
        </section>
    );
}