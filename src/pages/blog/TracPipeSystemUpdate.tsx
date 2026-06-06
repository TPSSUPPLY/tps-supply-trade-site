import { Link } from "react-router-dom";
import BlogPostLayout from "../../components/BlogPostLayout";
import { POSTS } from "../../data/posts";

const meta = POSTS.find(p => p.slug === "tracpipe-system-update-2026")!;

export default function TracPipeSystemUpdate() {
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
        If you've run gas line in Morris County in the last twenty years, you've run TracPipe. It's the flexible CSST — corrugated stainless steel tubing — that replaced a lot of the black iron we used to thread for residential and light commercial gas. Pull it off the coil, route it through the joists, terminate with an AutoFlare fitting, and you've moved gas from the meter to the appliance in a fraction of the time it took to cut, thread, and dope rigid pipe. It's the standard for a reason, and it's what we keep on the rack.
      </p>

      <p>
        On June 5th, Omega Flex sent out word that the TracPipe System is getting an update. We read the announcement the way you probably will — looking for the part where they tell you everything you know is about to change. That part isn't there, and that's the point.
      </p>

      <h2 className="font-serif text-2xl font-bold text-brand-blue-dark mt-10 mb-4">What Omega Flex actually announced</h2>
      <p>
        The short version: a new iteration of TracPipe <em>fittings</em> is coming, along with a refreshed Omega Flex logo. The tubing system you already know stays the system you already know. In their words, contractors aren't learning a completely new system — they're getting enhancements to the proven TracPipe System they already use. The fittings are being reworked to improve the install experience while building on the performance TracPipe has always had.
      </p>
      <p>
        They're pointing at four improvements. Here's how each one reads from the counter side.
      </p>

      <h2 className="font-serif text-2xl font-bold text-brand-blue-dark mt-10 mb-4">Greater installation adaptability</h2>
      <p>
        Nobody runs gas line in a clean, open basement on the job that pays. You're in a mechanical room packed with a boiler, an indirect, a couple of zone pumps, and whatever the last guy left behind. Fittings that give you more room to work — more routing options when you're boxed in — save the call where you're standing there trying to make an angle that doesn't exist. That's what "adaptability" should mean in practice.
      </p>

      <h2 className="font-serif text-2xl font-bold text-brand-blue-dark mt-10 mb-4">Cleaner, more professional installations</h2>
      <p>
        A lot of gas piping ends up visible — exposed along a basement ceiling, down a garage wall, in a commercial mechanical room that gets walked by an inspector and an owner. When the finished work looks tight, the whole job reads better. If the new fittings make a visible run look more deliberate, that's a small thing that shows up every time someone with a clipboard looks at your work.
      </p>

      <h2 className="font-serif text-2xl font-bold text-brand-blue-dark mt-10 mb-4">Simplified accessory integration</h2>
      <p>
        TracPipe is never just tubing. There's the manifold for multi-appliance branches, the AutoFlare terminations, the striker plates that keep a drywall screw off your line, the bonding clamp that gets you through inspection. Anything that makes those pieces go together with less fuss is time back. Omega Flex says the new fittings are built to integrate accessories more simply — we'll see exactly how when they land, but that's the right thing to be working on.
      </p>

      <h2 className="font-serif text-2xl font-bold text-brand-blue-dark mt-10 mb-4">Faster installation of larger commercial fittings</h2>
      <p>
        This is the one that matters most to the dollars. On a residential job the 1/2" and 3/4" terminations go fast either way. It's the 1-1/4", 1-1/2", and 2" runs on commercial work where the labor adds up — bigger fittings, more torque, more time per termination. If Omega Flex shaves time off the large-diameter fittings, that's where the savings actually land on a bid.
      </p>

      <h2 className="font-serif text-2xl font-bold text-brand-blue-dark mt-10 mb-4">About that new logo</h2>
      <p>
        There's also a brand refresh — a new Omega Flex logo. Doesn't change a thing on the job, but you'll start seeing it on packaging and materials, so don't do a double-take when the box looks a little different. Same product inside.
      </p>

      <h2 className="font-serif text-2xl font-bold text-brand-blue-dark mt-10 mb-4">What TPS Supply stocks today</h2>
      <p>
        None of this is in your hands yet — Omega Flex says training resources, installation guidance, and launch materials are coming in the weeks ahead. In the meantime, the shelf hasn't moved. We stock the TracPipe System you're using now:
      </p>
      <ul className="list-disc pl-6 space-y-1 text-brand-charcoal">
        <li>TracPipe CounterStrike CSST tubing — the yellow-jacketed gas tubing, common residential and light commercial sizes</li>
        <li>AutoFlare fittings — the single-piece flare terminations</li>
        <li>Striker plates — code-required protection where the line passes framing</li>
        <li>Bonding clamps — code-required grounding</li>
        <li>Manifolds — for multi-appliance branch runs</li>
      </ul>

      <h2 className="font-serif text-2xl font-bold text-brand-blue-dark mt-10 mb-4">The practical read</h2>
      <p>
        You don't need to retrain, and you don't need to do anything today. The transition will be gradual — the current fittings keep working, the new ones show up when they show up, and Omega Flex is putting out the guidance to go with them. We'll stock the new fittings as they become available and we'll keep the current ones on the rack as long as you're pulling them.
      </p>
      <p>
        When the new fittings land, we'll have details — and stock. Until then, call the counter at <a href="tel:+19735383662" className="text-brand-blue font-semibold underline">973-538-3662</a> for current TracPipe availability, sizing questions, or to get on the list for an update when the new fittings hit. We're open Mon–Fri 7am–4pm and Sat 8am–1pm. Stop in, or read more on our{" "}
        <Link to="/brands/omega-flex" className="text-brand-blue font-semibold underline">Omega Flex / TracPipe page</Link>.
      </p>
    </BlogPostLayout>
  );
}
