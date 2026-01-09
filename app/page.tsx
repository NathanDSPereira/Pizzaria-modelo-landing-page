import Header from '@/components/Header';
import ListPizza from '@/components/ListPizza';
import QuickAcess from '@/components/QuickAcess';
import BdPizzas from '@/bancoDeDados/BdPizzas.json';
import ListFeedbacks from '@/components/ListFeedbacks';

export default function Home() {

  const listaPizzas = BdPizzas;
  const listaDeFeedbacks = ListFeedbacks;

  return (
    <main>
      <Header />
      <QuickAcess />
      <ListPizza listaPizzas={listaPizzas} />
      <ListFeedbacks listaFeedbacks={listaDeFeedbacks} />
    </main>
  );
}
