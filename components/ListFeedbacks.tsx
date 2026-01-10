import FeedbackCard from "./FeedbackCard";
import { Feedback } from "@/interface/Feedback";

export default function ListFeedbacks({listaFeedbacks}: {listaFeedbacks: Feedback[]}) {
    return (
        <section className="bg-zinc-950 mt-5">
            <div className="px-4 py-6 flex flex-col justify-center items-center text-center">
                <h3 className="text-slate-200 text-xl font-bold mb-4 font-serif tracking-wide">O que dizem nossos clientes</h3>
                <p className="text-zinc-500 font-medium text-xs mt-1 uppercase tracking-wide">Depoimentos reais que mostram a qualidade do nosso serviço</p>
            </div>

            <div className="flex overflow-x-auto snap-x snap-mandatory px-2 scroll-smooth">
                {
                    listaFeedbacks.map((feedback) => (
                        <div className="min-w-60 h-80 snap-center m-2" key={feedback.id}>
                            <FeedbackCard feedback={feedback} />
                        </div>
                    ))
                }
            </div>
        </section>
    );
}