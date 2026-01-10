import Header from '@/components/Header';
import ListPizza from '@/components/ListPizza';
import QuickAcess from '@/components/QuickAcess';
import ListFeedbacks from '@/components/ListFeedbacks';

import BdPizzas from '@/bancoDeDados/BdPizzas.json';
import BdFeedbacks from '@/bancoDeDados/BdFeedbacks.json';

export default function Home() {

  const listaPizzas = BdPizzas;
  const listaDeFeedbacks = BdFeedbacks;

  return (
    <main className="overflow-x-hidden bg-zinc-950 min-h-screen pb-10">
      <Header />
      <QuickAcess />
      <ListPizza listaPizzas={listaPizzas} />
      <ListFeedbacks listaFeedbacks={listaDeFeedbacks} />
    </main>
  );
}
