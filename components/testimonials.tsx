export default function Testimonials() {
  return (
    <section className="relative h-screen w-full bg-[url(/images/xl.png)] bg-cover bg-center">
      <div className="container mx-auto px-4 lg:px-10">
        <article className="absolute bottom-10 max-w-[667px] xl:bottom-20">
          <h1 className="text-2xl font-light text-white md:text-4xl">
            “From branding to web design to marketing, we delivered beyond expectations.”
          </h1>
          <button className="mt-8 px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 text-white font-medium text-lg rounded-lg hover:bg-white/30 hover:border-white/50 transition-all duration-300 shadow-lg">
            Learn More
          </button>
        </article>
      </div>
    </section>
  );
}
