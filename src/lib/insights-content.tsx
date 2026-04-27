import type { ReactNode } from "react";

const Para = ({ children }: { children: ReactNode }) => (
  <p className="text-foreground/85 leading-relaxed text-lg mb-6">{children}</p>
);

const H2 = ({ children }: { children: ReactNode }) => (
  <h2 className="font-headline text-2xl md:text-3xl font-extrabold tracking-tight mt-12 mb-4 text-foreground">
    {children}
  </h2>
);

const H3 = ({ children }: { children: ReactNode }) => (
  <h3 className="font-headline text-xl md:text-2xl font-bold tracking-tight mt-8 mb-3 text-foreground">
    {children}
  </h3>
);

const UL = ({ children }: { children: ReactNode }) => (
  <ul className="list-disc pl-6 space-y-2 mb-6 text-foreground/85 leading-relaxed text-lg">{children}</ul>
);

const Quote = ({ children }: { children: ReactNode }) => (
  <blockquote className="border-l-4 border-primary/60 bg-muted/40 px-6 py-4 my-8 rounded-r-xl">
    <p className="text-foreground/90 italic text-lg leading-relaxed">{children}</p>
  </blockquote>
);

export const insightsBodies: Record<string, ReactNode> = {
  "scoping-an-ai-poc-that-ships": (
    <>
      <Para>
        Roughly four out of five enterprise AI proofs-of-concept never make it into production. The
        failure almost never sounds like &ldquo;the model wasn&apos;t accurate enough&rdquo; — it sounds
        like &ldquo;we couldn&apos;t figure out where it lives,&rdquo; or &ldquo;compliance had concerns
        we hadn&apos;t thought through,&rdquo; or &ldquo;the team that owns the workflow didn&apos;t ask
        for this.&rdquo;
      </Para>

      <Para>
        Those are scoping failures, not modelling failures. Here&apos;s the discipline we apply at the
        start of every Zianova engagement.
      </Para>

      <H2>1. Pick a problem with a real owner</H2>
      <Para>
        If you can&apos;t name the human who is accountable for the metric the AI is supposed to move,
        you don&apos;t have a project. You have a research budget. The first hour of scoping is finding
        that owner and getting the metric in writing.
      </Para>

      <H2>2. Define the failure mode before the success mode</H2>
      <Para>
        Successful AI launches think about what happens when the model is wrong before they think about
        what happens when it&apos;s right. Who reviews? What&apos;s the fallback path? What&apos;s the
        worst-case business impact of a wrong answer?
      </Para>
      <Quote>
        A POC that doesn&apos;t answer &ldquo;what happens when this model is wrong?&rdquo; is not ready to
        leave the lab.
      </Quote>

      <H2>3. Pre-decide the &ldquo;ship vs. kill&rdquo; threshold</H2>
      <Para>
        Write down before you start: at what number does this graduate to a production roadmap, and at
        what number do we kill it? Every team that skips this step ends up shipping mediocre POCs because
        nobody wants to be the one to call it.
      </Para>

      <H2>4. Build the evaluation harness first</H2>
      <Para>
        Before any prompts or fine-tunes, build the eval set and the harness that scores it. If you
        can&apos;t measure it weekly with one command, you can&apos;t improve it deliberately. We treat
        evals as the first deliverable of every AI project, not the last.
      </Para>

      <H2>5. Wire the integration sketch on day one</H2>
      <Para>
        The most expensive surprises in AI projects come from the integration boundary — auth, data
        residency, downstream systems, audit logging. Build a one-page diagram of every system this
        feature touches before you write any model code. The diagram will tell you which compliance
        people you needed to call last month.
      </Para>

      <H2>The pattern</H2>
      <UL>
        <li>Named owner + measurable metric</li>
        <li>Documented failure modes and fallback paths</li>
        <li>Pre-committed ship/kill threshold</li>
        <li>Eval harness shipped before the model</li>
        <li>Integration boundary mapped before line one</li>
      </UL>
      <Para>
        POCs that do all five graduate. POCs that skip even one usually don&apos;t. The difference
        between the two has very little to do with how clever the model is.
      </Para>
    </>
  ),

  "choosing-the-right-llm-for-enterprise-workflows": (
    <>
      <Para>
        &ldquo;Should we use GPT?&rdquo; is the wrong first question. The right first question is
        &ldquo;what does this workflow actually need?&rdquo; — and the answer almost never points at one
        single model.
      </Para>

      <Para>
        Here&apos;s the decision matrix we walk every enterprise team through before recommending a
        model.
      </Para>

      <H2>Five questions before model choice</H2>
      <UL>
        <li>
          <strong>Data sensitivity.</strong> Can this data leave your perimeter at all? If the answer is
          no, hosted closed-weight is off the table — full stop.
        </li>
        <li>
          <strong>Latency budget.</strong> Are you in a sub-300ms transactional path, or a 30-second
          async pipeline? The answer changes the model class entirely.
        </li>
        <li>
          <strong>Volume.</strong> 10k calls/day or 10M? Token cost compounds fast — small models often
          win at scale.
        </li>
        <li>
          <strong>Domain specificity.</strong> Generic reasoning or deeply domain-coded text? Fine-tuned
          smaller models often beat frontier models on narrow tasks at fraction of cost.
        </li>
        <li>
          <strong>Failure tolerance.</strong> A wrong answer here costs $5 in a refund or $5M in a
          regulator inquiry?
        </li>
      </UL>

      <H2>The four buckets we typically land in</H2>

      <H3>1. Frontier hosted (GPT/Claude/Gemini)</H3>
      <Para>
        Best for: open-ended reasoning, agentic flows, anything where capability matters more than cost.
        Watch for: data-residency, vendor lock-in, surprise pricing model changes.
      </Para>

      <H3>2. Hosted small models (Haiku, Mini-class)</H3>
      <Para>
        Best for: high-volume classification, extraction, lightweight summarization. Often 10-30× cheaper
        with negligible quality drop on narrow tasks. Underused.
      </Para>

      <H3>3. Open-weight self-hosted (Llama, Qwen, Mistral)</H3>
      <Para>
        Best for: data that can&apos;t leave the perimeter, or workloads big enough that the GPU bill
        beats per-token pricing. Watch for: hidden ops cost — you&apos;re now running an inference
        platform.
      </Para>

      <H3>4. Fine-tuned domain models</H3>
      <Para>
        Best for: high-volume, narrow, repetitive tasks where a small fine-tune lifts a small model
        above a frontier baseline. Almost always worth piloting if the task is repetitive enough.
      </Para>

      <H2>The trap to avoid</H2>
      <Quote>
        Picking a model first and the workflow second. The workflow constraints decide the model — not
        the other way around.
      </Quote>

      <Para>
        Most enterprise AI bills are larger than they need to be because someone picked the most
        capable model for tasks that didn&apos;t need it. Match the model to the workflow, not the
        marketing.
      </Para>
    </>
  ),

  "hidden-costs-of-ai-adoption": (
    <>
      <Para>
        When teams budget for AI features, they almost always budget for inference. That&apos;s the
        smallest line item we&apos;ve seen on a real production AI workload. Here are the four costs
        that quietly dominate, and how to plan for them.
      </Para>

      <H2>1. Evaluation infrastructure</H2>
      <Para>
        You can&apos;t improve what you can&apos;t measure. Real evaluation means a curated test set,
        a way to score model output (often with another model), regression tracking across releases, and
        — critically — humans labelling enough samples to keep the test set honest as your data drifts.
        Plan for an eval engineer or eval-eng-equivalent week as a permanent cost, not a one-off.
      </Para>

      <H2>2. Human-in-the-loop review</H2>
      <Para>
        For any AI workflow with non-trivial blast radius, human review is part of the system, not an
        afterthought. That includes the reviewer UI, the queue, the sampling strategy, the SLA on
        review turnaround, and the cost of the reviewers themselves.
      </Para>
      <Quote>
        If your AI feature is good enough to ship, it&apos;s good enough to deserve a human-review
        budget.
      </Quote>

      <H2>3. Vector storage and retrieval</H2>
      <Para>
        RAG demos hide the operational reality. At enterprise scale, you&apos;ll be running a vector
        DB, an embedding pipeline, a chunking strategy that needs tuning, re-indexing on document
        churn, and (often) a re-ranker. Each of those is a compute and headcount line.
      </Para>

      <H2>4. Observability and incident response</H2>
      <Para>
        AI systems fail in ways traditional systems don&apos;t. You&apos;ll need prompt/response
        logging with PII redaction, model-version pinning, drift detection, and on-call rotation that
        understands what to do when a model starts misbehaving at 2am. None of this comes for free.
      </Para>

      <H2>The honest budget</H2>
      <Para>
        For a non-trivial enterprise AI feature, we&apos;d typically expect inference itself to be
        15-25% of total cost. Eval, review, retrieval, and observability often each rival or exceed it.
        Plan accordingly — and your CFO won&apos;t be surprised six months in.
      </Para>
    </>
  ),
};
