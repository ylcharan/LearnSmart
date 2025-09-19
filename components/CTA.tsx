import Image from "next/image";
import Link from "next/link";

const Cta = () => {
  return (
    <section className="cta-section w-full h-[60vh] items-center justify-center shadow-xl">
      <div className="cta-badge bg-black text-white">
        Discover a Learning Experience Built for You
      </div>
      <h2 className="text-3xl font-bold">
        Create and Customize Your Learning Assistant
      </h2>
      <p>
        Personalize your companion with a name, subject, and voice — then learn
        through interactive voice conversations.
      </p>
      <button className="btn-primary !bg-black">
        <Image src="/icons/plus.svg" alt="plus" width={12} height={12} />
        <Link href="/companions/new">
          <p>Create a New Voice Agent</p>
        </Link>
      </button>
    </section>
  );
};
export default Cta;
