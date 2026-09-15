import Link from "next/link";

export default function Home() {
    return (
        <main>
            {/* Hero */}
            <section className="mx-auto max-w-content px-6 py-20 md:py-28">
                <div className="grid items-center gap-14 md:grid-cols-2">
                    <div>
                        <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-black md:text-6xl">
                            Practice the interview like you mean it.
                        </h1>

                        <p className="mt-6 max-w-md font-body text-lg leading-relaxed text-black">
                            Get your crew together, let AI pull the questions, and run the
                            clock on real mock interviews — live, in sync, no scheduling
                            headaches.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <Link
                                href="/signup"
                                className="rounded-sm bg-ember px-6 py-3 font-body text-sm font-medium text-black transition-colors hover:bg-ember-dim"
                            >
                                Start a session
                            </Link>

                            <Link
                                href="/#how-it-works"
                                className="font-body text-sm font-medium text-black underline decoration-black underline-offset-4 transition-colors"
                            >
                                See how it works
                            </Link>
                        </div>
                    </div>

                    {/* Live session mockup card */}
                    <div className="rounded-md border border-black/20 bg-white shadow-xl">
                        <div className="flex items-center justify-between border-b border-black/10 px-5 py-3">
                            <span className="font-body text-xs font-medium text-black">
                                Frontend Interview Prep
                            </span>

                            <span className="flex items-center gap-1.5 font-body text-xs font-medium text-black">
                                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                                live
                            </span>
                        </div>

                        <div className="px-5 py-6">
                            <p className="font-body text-xs uppercase tracking-wide text-black">
                                Question 3 of 10
                            </p>

                            <p className="mt-2 font-display text-xl text-black">
                                Explain the virtual DOM.
                            </p>

                            <div className="mt-6 flex items-center justify-between border-t border-black/10 pt-4">
                                <span className="font-display text-2xl tabular-nums text-black">
                                    04:12
                                </span>

                                <span className="font-body text-xs text-black">
                                    Sarah is typing…
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section
                id="how-it-works"
                className="border-t border-black/20 bg-white px-6 py-20 text-black md:py-28"
            >
                <div className="mx-auto max-w-content">
                    <h2 className="font-display text-3xl font-semibold tracking-tight text-black md:text-4xl">
                        Three steps, no setup calls.
                    </h2>

                    <div className="mt-12 grid gap-10 md:grid-cols-3">
                        <Step
                            n="1"
                            title="Build your crew"
                            body="Create a prep group and invite the people you're job hunting alongside. Every group's sessions and history stay private to that crew."
                        />

                        <Step
                            n="2"
                            title="Generate questions"
                            body="Paste a job description or just name the role. AI puts together ten relevant questions in seconds — React, systems design, whatever fits."
                        />

                        <Step
                            n="3"
                            title="Run the session live"
                            body="One of you interviews, one answers. Shared timer, shared notes, both screens in sync — like Google Docs for mock interviews."
                        />
                    </div>
                </div>
            </section>

            {/* Progress teaser */}
            <section className="border-t border-black/20 px-6 py-20 md:py-28">
                <div className="mx-auto max-w-content grid items-center gap-12 md:grid-cols-2">
                    <div>
                        <h2 className="font-display text-3xl font-semibold tracking-tight text-black md:text-4xl">
                            See where the gaps are.
                        </h2>

                        <p className="mt-4 max-w-md font-body text-black leading-relaxed">
                            Every session gets logged — questions covered, time spent,
                            category. After a few weeks you'll know exactly what you've
                            drilled and what you've been avoiding.
                        </p>
                    </div>

                    <div className="rounded-md border border-black/20 bg-white p-6">
                        <p className="font-body text-sm text-black">
                            This month
                        </p>

                        <p className="mt-1 font-display text-4xl text-black">
                            12 sessions
                        </p>

                        <div className="mt-5 space-y-2">
                            <Bar label="JavaScript" pct={70} />
                            <Bar label="React" pct={55} />
                            <Bar label="System design" pct={20} />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="border-t border-black/20 bg-white px-6 py-16 text-center">
                <h2 className="font-display text-3xl font-semibold tracking-tight text-black md:text-4xl">
                    Your next interview won't be the first rep.
                </h2>

                <Link
                    href="/signup"
                    className="mt-6 inline-block rounded-sm bg-ember px-6 py-3 font-body text-sm font-medium text-black transition-colors hover:bg-ember-dim"
                >
                    Create your crew
                </Link>
            </section>
        </main>
    );
}

function Step({
    n,
    title,
    body,
}: {
    n: string;
    title: string;
    body: string;
}) {
    return (
        <div className="border-t border-black/20 pt-5">
            <span className="font-display text-sm text-black">{n}</span>

            <h3 className="mt-2 font-display text-xl font-medium text-black">
                {title}
            </h3>

            <p className="mt-2 font-body text-sm leading-relaxed text-black">
                {body}
            </p>
        </div>
    );
}

function Bar({
    label,
    pct,
}: {
    label: string;
    pct: number;
}) {
    return (
        <div>
            <div className="flex justify-between font-body text-xs text-black">
                <span>{label}</span>
                <span>{pct}%</span>
            </div>

            <div className="mt-1 h-1.5 w-full rounded-full bg-black/10">
                <div
                    className="h-1.5 rounded-full bg-gold"
                    style={{ width: `${pct}%` }}
                />
            </div>
        </div>
    );
}