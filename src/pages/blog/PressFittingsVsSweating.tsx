import BlogPostLayout from "../../components/BlogPostLayout";
import { POSTS } from "../../data/posts";

const meta = POSTS.find(p => p.slug === "press-fittings-vs-sweating-propress-megapress-propex")!;

export default function PressFittingsVsSweating() {
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
        Press fittings are no longer the new thing. They're the default for a lot of crews — but soldering hasn't disappeared, and ProPex is its own world. Here's how we'd think about which one to use on a job, based on what we hear at the counter every day.
      </p>

      <h2 className="font-serif text-2xl font-bold text-brand-blue-dark mt-10 mb-4">Pro Press: copper, fast, and now the standard</h2>
      <p>
        Viega ProPress was the first widely-adopted press system for copper, and at this point you can press 1/2" through 4" copper with the right jaws. The math at our counter usually works out the same way: a journeyman can press a fitting in about 7 seconds plus prep, vs roughly 90 seconds to flux, solder, and clean a sweat joint. Multiply that across 80 fittings on a commercial rough and the press tool pays for itself before lunch on the first job.
      </p>
      <p>
        Where ProPress wins:
      </p>
      <ul className="list-disc pl-6 space-y-1 text-brand-charcoal">
        <li>Occupied buildings — no torch, no fire watch, no smell</li>
        <li>Wet lines you can't fully drain</li>
        <li>Tight ceilings or congested mechanical rooms</li>
        <li>Anywhere code or insurance pushes back on hot work</li>
      </ul>
      <p>
        Where sweating still wins: deep retrofit jobs where you're cutting back into 50-year-old copper that's out of round, very tight clearances where the press head won't fit, and any time you're paying by the fitting and the labor delta doesn't matter.
      </p>

      <h2 className="font-serif text-2xl font-bold text-brand-blue-dark mt-10 mb-4">Mega Press: black iron without a threader</h2>
      <p>
        MegaPress is for carbon steel — black iron pipe, used on gas lines (where approved), compressed air, and hydronic returns. The pitch is real: threading 2" black iron is miserable work, especially overhead, and a cut groove threader is a piece of equipment most service trucks don't have on board.
      </p>
      <p>
        A few things to know:
      </p>
      <ul className="list-disc pl-6 space-y-1 text-brand-charcoal">
        <li>NJ has approved MegaPress for natural gas at most pressures, but verify with your local AHJ before quoting a job</li>
        <li>You need different jaws than ProPress — the press depth is different</li>
        <li>The fittings are more expensive than threaded fittings; the savings are in labor and time, not material</li>
      </ul>
      <p>
        On a hydronic baseboard retrofit where you'd otherwise be cutting and threading 1-1/4" black iron in a basement, MegaPress is night-and-day. We stock the common sizes and can usually get specialty fittings next-day from Viega.
      </p>

      <h2 className="font-serif text-2xl font-bold text-brand-blue-dark mt-10 mb-4">ProPex: PEX-A expansion connections</h2>
      <p>
        ProPex (Uponor's PEX-A expansion system) is its own animal. It's not a press fitting in the same sense — you expand the PEX tubing with the tool, slide the fitting in, and let the tube shrink back around it (the "shape memory" of PEX-A). Done correctly, the connection is stronger than the pipe itself.
      </p>
      <p>
        ProPex is the right call when:
      </p>
      <ul className="list-disc pl-6 space-y-1 text-brand-charcoal">
        <li>You're running PEX-A specifically (not PEX-B — that uses crimp or cinch)</li>
        <li>You want a fitting with the largest interior diameter — ProPex doesn't restrict flow the way crimp does</li>
        <li>Long runs in radiant or hydronic where you want fewer pressure drops</li>
      </ul>
      <p>
        Skip it if your job is mostly residential PEX-B repair work — the tools and rings aren't compatible, and you don't want two systems on one truck.
      </p>

      <h2 className="font-serif text-2xl font-bold text-brand-blue-dark mt-10 mb-4">A practical mixed-system approach</h2>
      <p>
        Most pros we work with end up running two systems on the truck: ProPress for copper plus either ProPex (if they're a hydronic shop) or a crimp tool (if they're a residential service shop running PEX-B). MegaPress lives on the commercial truck.
      </p>
      <p>
        At the counter we stock all three families' fittings, plus loaner jaws for the times you forgot the right press head at the shop. Call ahead and we'll have it pulled before you pull in.
      </p>
    </BlogPostLayout>
  );
}
