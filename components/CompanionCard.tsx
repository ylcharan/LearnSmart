"use client";
// import { removeBookmark } from "@/lib/actions/companion.actions";
// import { addBookmark } from "@/lib/actions/companion.actions";
import Image from "next/image";
import Link from "next/link";
// import { usePathname } from "next/navigation";

interface CompanionCardProps {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
  color: string;
  bookmarked: boolean;
}

const CompanionCard = ({
  id,
  name,
  topic,
  // subject,
  duration,
  color,
}: // bookmarked,
CompanionCardProps) => {
  // const pathname = usePathname();
  // const handleBookmark = async () => {
  //   if (bookmarked) {
  //     await removeBookmark(id, pathname);
  //   } else {
  //     await addBookmark(id, pathname);
  //   }
  // };
  return (
    <article
      className={`companion-card bg-white`}
      // style={{ backgroundColor: color }}
    >
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-sm">{topic}</p>
      <div className="flex items-center gap-2">
        <Image
          src="/icons/clock.svg"
          alt="duration"
          width={13.5}
          height={13.5}
        />
        <p className="text-sm">{duration} minutes</p>
      </div>

      <Link href={`/companions/${id}`} className="w-full">
        <button
          className="btn-primary w-full justify-center text-black"
          style={{
            backgroundColor: color,
            opacity: 1,
          }}
        >
          Launch Lesson
        </button>
      </Link>
    </article>
  );
};

export default CompanionCard;
