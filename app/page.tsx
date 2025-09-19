import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import {
  getAllCompanions,
  getRecentSessions,
} from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";

type Companion = {
  id: string;
  name: string;
  topic: string;
  subject?: string;
  duration: number | string;
  bookmarked?: boolean;
};

const Page = async () => {
  const companions: Companion[] = await getAllCompanions({ limit: 3 });
  const recentSessionsCompanions = await getRecentSessions(10);

  return (
    <main>
      <CTA />
      <h1>Popular Voice-Agents</h1>

      <section className="home-section">
        {companions?.map((companion: Companion) => (
          <CompanionCard
            key={companion.id}
            id={companion.id}
            name={companion.name}
            topic={companion.topic}
            subject={companion.subject}
            duration={Number(companion.duration)}
            bookmarked={Boolean(companion.bookmarked)}
            color={getSubjectColor(companion.subject ?? "default")}
          />
        ))}
      </section>

      <section className="home-section">
        <CompanionsList
          title="Recently completed sessions"
          companions={recentSessionsCompanions}
          classNames="w-full"
        />
      </section>
    </main>
  );
};

export default Page;
