import BlogPostLayout from "../../components/BlogPostLayout";
import { POSTS } from "../../data/posts";

const meta = POSTS.find(p => p.slug === "why-pros-open-7am-tps-supply-counter")!;

export default function WhyOpenAt7am() {
  return (
    <BlogPostLayout
      title={meta.title}
      slug={meta.slug}
      category={meta.category}
      date={meta.date}
      description={meta.excerpt}
      heroImage={meta.image}
    >
      <p className="text-lg leading-relaxed">
        We open at 7 AM Monday through Friday. We open at 8 AM on Saturday. There's nothing clever or strategic about it. We open early because the people we serve start work at 6, and a supply house that opens at 9 isn't a supply house, it's a hardware store.
      </p>

      <h2 className="font-serif text-2xl font-bold text-brand-blue-dark mt-10 mb-4">A typical Tuesday at 6:55</h2>
      <p>
        Counter staff arrives between 6:30 and 6:45. Coffee on. Will-call orders from the night before are pulled and staged. The phone starts ringing at about 6:50 — two service plumbers from Madison, a contractor on a kitchen reno in Chester, a property manager dealing with a busted hot water heater in a six-unit building in Boonton. The first crew through the door is usually a familiar face we've been seeing for fifteen years.
      </p>
      <p>
        By 7:30, the parking lot has cycled through six trucks. The phones are picking up. The first delivery van leaves at 8 with eight stops queued.
      </p>

      <h2 className="font-serif text-2xl font-bold text-brand-blue-dark mt-10 mb-4">Why it matters more than people think</h2>
      <p>
        The early open isn't a marketing line. It's about saving the contractor a day. Here's the math we've watched at the counter for forty years:
      </p>
      <ul className="list-disc pl-6 space-y-1 text-brand-charcoal">
        <li>If you find out you're missing a part at 6:30 AM and the supply house opens at 9, you've lost half a day. Crews stand around. Customers wait. Subcontractors charge for the trip back.</li>
        <li>If the supply house opens at 7, you're at the counter by 7:15 and on the job by 7:45. Your day starts on time.</li>
      </ul>
      <p>
        Multiply that by 200 working days a year and a 7 AM open is a real business advantage for the people we work with. It's also the reason word-of-mouth has been our biggest source of new accounts since the 1980s.
      </p>

      <h2 className="font-serif text-2xl font-bold text-brand-blue-dark mt-10 mb-4">Saturday at 8 AM</h2>
      <p>
        Saturday morning is its own thing. Service plumbers running emergency calls. Homeowners who finally got a Saturday off and decided it's the day to fix the leaky outdoor spigot before it gets warmer. Property managers catching up on the week.
      </p>
      <p>
        Saturday traffic is lighter than weekdays — but the people who come on Saturday tend to need exactly one specific thing, and they need it to work the first time. We staff Saturday with our most experienced counter people for exactly that reason.
      </p>

      <h2 className="font-serif text-2xl font-bold text-brand-blue-dark mt-10 mb-4">The will-call counter</h2>
      <p>
        If you know what you need, call ahead. We'll have it pulled and staged with your name on it. Pull up, walk in, sign for it, and you're back in the truck in under two minutes. No browsing, no waiting in a line behind a homeowner trying to figure out which gasket they need.
      </p>
      <p>
        Trade account holders can call it in the night before; cash customers can call from the road at 6:55 and we'll have it ready by 7:05.
      </p>

      <h2 className="font-serif text-2xl font-bold text-brand-blue-dark mt-10 mb-4">A few stories from the counter</h2>
      <p>
        A boiler service company in Denville called us at 6:58 on a January morning. They had a cracked Taco circulator on a no-heat call in a senior living facility. We had it pulled, paid for, and on their truck at 7:14. Heat was back on in the building by 9:30.
      </p>
      <p>
        A commercial plumber on a hospital project in Morristown realized at 6:50 he was short eight ProPress 1-1/2" 90s. We staged them, he paid by phone, and his apprentice was back on the floor with the parts before the morning safety meeting was over.
      </p>
      <p>
        A homeowner in Florham Park showed up Saturday morning with a piece of corroded compression fitting in a Ziploc bag and "the guy at Home Depot didn't know what this is." We knew what it was. He left with the right part, the right Teflon, and a written explanation of how to install it. He's now back every few months for the rest of the house.
      </p>

      <h2 className="font-serif text-2xl font-bold text-brand-blue-dark mt-10 mb-4">It's not complicated</h2>
      <p>
        Open early. Stock what people need. Hire counter staff who've been plumbers themselves. Answer the phone on the second ring. Deliver same day. That's most of the playbook. The 7 AM open is just the visible piece.
      </p>
    </BlogPostLayout>
  );
}
