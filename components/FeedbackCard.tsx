import { Feedback } from "@/interface/Feedback";
import Image from "next/image";

export default function FeedbackCard({feedback}: {feedback: Feedback}) {
    return (

        <section className="bg-zinc-900 w-full">
            <div>
                <p>{feedback.comentario}</p>
            </div>
            <div className="flex gap-4">
                <div>
                    <Image 
                        src={feedback.urlImagem}
                        alt="nome do usuario"
                    />
                </div>
                <h4>{feedback.nome}</h4>
            </div>
        </section>
    );
}