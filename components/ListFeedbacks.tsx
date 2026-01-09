import { Feedback } from "@/interface/Feedback";
import FeedbackCard from "./FeedbackCard";

export default function ListFeedbacks({listaFeedbacks}: {listaFeedbacks: Feedback[]}) {
    return (
        <section className="bg-zinc-950">
            <div className="flex overflow-x-auto snap-x snap-mandatory px-4 scroll-smooth">
                {
                    listaFeedbacks.map((feedback) => (
                        <div className="min-w-70 snap-center bg-amber500" key={feedback.id}>
                            <FeedbackCard feedback={feedback} />
                        </div>
                    ))
                }
            </div>
        </section>
    );
}