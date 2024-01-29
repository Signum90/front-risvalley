import CarrouselText from "../../components/CarrouselText"

function Questions () {
  return (
    <div className="h-full w-full">
      <section className="w-full flex justify-center px-6 h-[60vh] items-center">
        <div className="w-full md:w-[80%] lg:w-[60%] xl:w-[650px] xl:max-w-[1100px] 2xl:max-w-[1300px] container flex flex-col items-center">
          <details className="w-full border-b-2 br-amarillo py-2 cursor-pointer">
            <summary className="font-bold text-2xl py-6">What are my options?</summary>
            <p className="pb-4">Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur. Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.</p>
          </details>
          <details className="w-full border-b-2 br-amarillo py-2 cursor-pointer">
            <summary className="font-bold text-2xl py-6">Can I switch to a different plan?</summary>
            <p className="pb-4">Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur. Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.</p>
          </details>
          <details className="w-full border-b-2 br-amarillo py-2 cursor-pointer">
            <summary className="font-bold text-2xl py-6">Do you offer non-disclosure signature?</summary>
            <p className="pb-4">Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur. Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.</p>
          </details>
          <details className="w-full border-b-2 br-amarillo py-2 cursor-pointer">
            <summary className="font-bold text-2xl py-6">Do you issue refunds?</summary>
            <p className="pb-4">Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur. Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.</p>
          </details>
        </div>
      </section>
      <CarrouselText className="bg-red-200" />
    </div>
  )
}

export default Questions