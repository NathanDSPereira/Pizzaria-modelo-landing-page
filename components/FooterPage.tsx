export default function Footer() {
    return (
        <footer className="bg-zinc-950 border-t border-zinc-900 px-4 pt-12 pb-32 text-zinc-400">
  <div className="mx-auto max-w-lg space-y-10">
    
    <div className="flex flex-col items-center gap-6 text-center">
      <a href="#" className="flex items-center gap-2 text-white font-bold hover:text-orange-500 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.51"/></svg>
        Siga-nos no Instagram
      </a>
      
      <div className="space-y-1">
        <p className="text-sm">Dúvidas ou suporte?</p>
        <p className="text-white font-medium">(34) 99999-9999</p>
      </div>
    </div>

    <div className="h-px w-full bg-zinc-900"></div>

    <div className="flex flex-col items-center gap-4 text-xs text-center">
      <p>© 2026 Duperon Pizzaria - Todos os direitos reservados.</p>
      <p className="uppercase tracking-widest text-zinc-600">
        Desenvolvido por <span className="text-zinc-400">Nathan Pereira</span>
      </p>
    </div>

  </div>
</footer>
    )
}