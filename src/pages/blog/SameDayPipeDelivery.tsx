import BlogPostLayout from "../../components/BlogPostLayout";
import { POSTS } from "../../data/posts";

const meta = POSTS.find(p => p.slug === "same-day-pipe-delivery-morris-county-nj")!;

export default function SameDayPipeDelivery() {
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
        On a busy week in Morris County, a single missing fitting can stall a four-man crew. We built our 90-minute same-day delivery window around that exact moment — the call that comes in at 9:15 AM when a service truck is already on the second job and somebody at the counter needs to make the day work anyway.
      </p>

      <h2 className="font-serif text-2xl font-bold text-brand-blue-dark mt-10 mb-4">What "same day" actually means at our counter</h2>
      <p>
        Most plumbing supply houses say "same day" and mean "next day after 3 PM." We mean a truck out the door inside 90 minutes for in-stock items within our delivery radius — Morristown, Madison, Chatham, Florham Park, Mendham, Randolph, Denville, Parsippany, Boonton, Mountain Lakes, Chester, Dover, Rockaway, Wharton, Stanhope, and Bernardsville. If it's on the rack and you're in the radius, it's on a truck before lunch is over.
      </p>
      <p>
        That promise is built on three things: a 7 AM open Monday through Friday, a stocked floor with depth instead of breadth (we'd rather have ten of something than one of fifty things), and a will-call system that doesn't require an account number to be quoted.
      </p>

      <h2 className="font-serif text-2xl font-bold text-brand-blue-dark mt-10 mb-4">What's on the floor</h2>
      <p>
        Pipe supply is the engine of the counter. On any given Tuesday we're carrying:
      </p>
      <ul className="list-disc pl-6 space-y-1 text-brand-charcoal">
        <li>Type L and Type M copper — 1/2", 3/4", 1", 1-1/4", 1-1/2", 2" — in 10-foot and 20-foot lengths</li>
        <li>Schedule 40 PVC and CPVC, full DWV range plus pressure pipe</li>
        <li>PEX-A and PEX-B in red, blue and white — 100', 300' and 500' coils</li>
        <li>Black iron and galvanized — 1/2" through 4", standard nipple inventory</li>
        <li>Cast iron no-hub, hubless couplings, and shielded transition fittings</li>
        <li>ProPress, MegaPress and ProPress XL fittings up to 4"</li>
        <li>Brass fittings, dielectric unions, and the boring-but-critical commodity stuff that always seems to be the thing nobody ordered</li>
      </ul>

      <h2 className="font-serif text-2xl font-bold text-brand-blue-dark mt-10 mb-4">Who actually uses same-day delivery</h2>
      <p>
        Three groups, mostly. Service plumbers running residential calls who hit something unexpected behind a wall. Mechanical contractors on commercial jobs where a cut-list is wrong and the punch list won't wait. And property managers — apartment complexes, schools, restaurants — who need a recirculation pump or a backflow rebuild kit before tenants notice.
      </p>
      <p>
        The common thread isn't size, it's timing. Big projects buy in advance. Small projects don't have to. Same-day exists for the third category — the medium-sized job that suddenly becomes urgent at 10:30 AM.
      </p>

      <h2 className="font-serif text-2xl font-bold text-brand-blue-dark mt-10 mb-4">How to call it in</h2>
      <p>
        Phone the counter at (973) 538-3662. Have your part numbers ready or just describe what you need — most of our staff have spent decades behind the counter and can read you back what you actually want. We'll confirm stock, quote a price, and book the delivery window. Trade account holders get a release number; cash customers can pay on delivery.
      </p>

      <h2 className="font-serif text-2xl font-bold text-brand-blue-dark mt-10 mb-4">Why we open at 7 AM</h2>
      <p>
        Because contractors start their day at 6. By the time you've loaded a truck and hit a job, it's 7:30, you've found out something is missing at 8, and you've got an hour to fix it before the inspector or the homeowner shows up. Opening at 7 means we're stocked, staffed, and on the phone when that call lands.
      </p>
      <p>
        It's not a luxury. It's table stakes for working plumbers. We've been doing it for 40+ years and we're not changing it.
      </p>
    </BlogPostLayout>
  );
}
