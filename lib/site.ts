export const site = {
  name: "VAYRO STUDIOS",
  tagline: "AI-powered video, YouTube, creative production and digital content for ambitious brands.",
  url: "https://vayro.studios",
  email: "hello@vayro.studios",
};

export const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/resources", label: "Resources" },
  { href: "/pricing", label: "Pricing" },
] as const;

export const brands = [
  "Northline",
  "Helio Market",
  "Orbit Channel",
  "Kite & Co.",
  "Lumen Labs",
  "Harbor Media",
  "Vesper",
  "Fieldnote",
  "Arcadia",
  "Pulseform",
];

export const stats = [
  { value: 1500, suffix: "+", label: "Videos produced" },
  { value: 400, suffix: "+", label: "Brands & creators" },
  { value: 35, suffix: "%", label: "Faster production" },
  { value: 4.9, suffix: "/5", label: "Client rating", decimals: 1 },
];

export const benefits = [
  {
    eyebrow: "Flexible production",
    title: "Scale up or down depending on your content needs.",
    body: "Add capacity for a launch week or settle into a steady publishing cadence without rebuilding your team every quarter.",
  },
  {
    eyebrow: "Global creative talent",
    title: "Work with experienced editors, designers and specialists.",
    body: "Motion artists, thumbnail designers, YouTube editors and strategists who understand how content has to perform, not just look finished.",
  },
  {
    eyebrow: "AI-powered workflows",
    title: "Accelerate the repetitive work. Keep human judgment.",
    body: "We use AI to cut busywork, tighten first drafts and keep delivery moving — while editors still make the calls that protect taste and brand.",
  },
];

export const stories = [
  {
    slug: "northline-publishing-engine",
    category: "YouTube Growth",
    client: "Northline",
    title: "Turning a content backlog into a consistent publishing engine",
    description:
      "A weekly long-form show and a daily shorts pipeline, rebuilt around one brief, one review thread and a repeatable edit system.",
    result: "3× publish cadence in 90 days",
    image: "/images/work/w1.jpg",
  },
  {
    slug: "helio-product-launch",
    category: "AI Video Production",
    client: "Helio Market",
    title: "A product launch film system that could ship every week",
    description:
      "Hero films, cutdowns and social variants produced as one connected set — not seven disconnected vendor jobs.",
    result: "12 launch assets in 18 days",
    image: "/images/work/w2.jpg",
  },
  {
    slug: "orbit-short-form",
    category: "Short-Form Video",
    client: "Orbit Channel",
    title: "Short-form that actually sounds like the brand",
    description:
      "Hooks, pacing and on-screen craft aligned to a creator voice — then scaled across platforms without flattening the personality.",
    result: "41% higher average watch time",
    image: "/images/work/w3.jpg",
  },
];

export type ServiceItem = {
  name: string;
  href: string;
  image: string;
};

export type ServiceGroup = {
  title: string;
  items: ServiceItem[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    title: "Video Production",
    items: [
      { name: "YouTube Editing", href: "/services#youtube-editing", image: "/images/services/edit-suite.jpg" },
      { name: "Long-Form Editing", href: "/services#long-form", image: "/images/work/w1.jpg" },
      { name: "Short-Form Editing", href: "/services#short-form", image: "/images/services/shortform.jpg" },
      { name: "AI Video Production", href: "/services#ai-video", image: "/images/services/ai-desk.jpg" },
      { name: "Video Ads", href: "/services#video-ads", image: "/images/work/w4.jpg" },
      { name: "Motion Graphics", href: "/services#motion", image: "/images/services/motion.jpg" },
    ],
  },
  {
    title: "Creative Design",
    items: [
      { name: "YouTube Thumbnails", href: "/services#thumbnails", image: "/images/services/thumbnails.jpg" },
      { name: "Social Media Creative", href: "/services#social", image: "/images/work/w6.jpg" },
      { name: "Brand Design", href: "/services#brand", image: "/images/team/t3.jpg" },
      { name: "Presentation Design", href: "/services#presentations", image: "/images/services/strategy.jpg" },
      { name: "Digital Ads", href: "/services#ads", image: "/images/work/w7.jpg" },
    ],
  },
  {
    title: "AI Creative",
    items: [
      { name: "AI Video", href: "/services#ai-video", image: "/images/services/ai-desk.jpg" },
      { name: "AI Voice", href: "/services#ai-voice", image: "/images/work/w5.jpg" },
      { name: "AI Image Generation", href: "/services#ai-image", image: "/images/services/motion.jpg" },
      { name: "AI Motion", href: "/services#ai-motion", image: "/images/work/w8.jpg" },
      { name: "Content Repurposing", href: "/services#repurposing", image: "/images/work/w2.jpg" },
    ],
  },
  {
    title: "Growth & Strategy",
    items: [
      { name: "YouTube Strategy", href: "/services#youtube-strategy", image: "/images/services/strategy.jpg" },
      { name: "Content Strategy", href: "/services#content-strategy", image: "/images/team/t1.jpg" },
      { name: "Creative Strategy", href: "/services#creative-strategy", image: "/images/team/t4.jpg" },
      { name: "Channel Optimization", href: "/services#optimization", image: "/images/work/w3.jpg" },
    ],
  },
];

export const portfolioItems = [
  {
    title: "Northline Weekly",
    client: "Northline",
    category: "Long-form YouTube",
    image: "/images/work/w1.jpg",
    span: "tall" as const,
  },
  {
    title: "Helio Launch Suite",
    client: "Helio Market",
    category: "AI video",
    image: "/images/work/w2.jpg",
    span: "wide" as const,
  },
  {
    title: "Orbit Daily Cuts",
    client: "Orbit Channel",
    category: "Short-form",
    image: "/images/work/w3.jpg",
    span: "square" as const,
  },
  {
    title: "Kite Campaign Films",
    client: "Kite & Co.",
    category: "Video ads",
    image: "/images/work/w4.jpg",
    span: "square" as const,
  },
  {
    title: "Lumen Session Series",
    client: "Lumen Labs",
    category: "Motion graphics",
    image: "/images/work/w5.jpg",
    span: "tall" as const,
  },
  {
    title: "Harbor Social System",
    client: "Harbor Media",
    category: "Social creative",
    image: "/images/work/w6.jpg",
    span: "wide" as const,
  },
  {
    title: "Vesper Product Stories",
    client: "Vesper",
    category: "Brand film",
    image: "/images/work/w7.jpg",
    span: "square" as const,
  },
  {
    title: "Pulseform Explainers",
    client: "Pulseform",
    category: "Thumbnails & packaging",
    image: "/images/work/w8.jpg",
    span: "square" as const,
  },
];

export const comparisonCategories = [
  "Speed",
  "Flexibility",
  "Quality",
  "Scalability",
  "Consistency",
  "AI Workflow",
  "Creative Direction",
] as const;

export const comparisonOptions = [
  {
    name: "VAYRO STUDIOS",
    highlight: true,
    summary:
      "Senior creative judgment, a dedicated production system, and AI where it actually saves time — without flattening the work.",
    scores: [5, 5, 5, 5, 5, 5, 5],
  },
  {
    name: "Traditional agency",
    highlight: false,
    summary: "Strong craft in bursts, but slower cycles and less room to flex when your calendar shifts.",
    scores: [2, 2, 4, 3, 3, 2, 4],
  },
  {
    name: "Freelancers",
    highlight: false,
    summary: "Useful for one-off jobs. Harder to keep quality, voice and throughput consistent week after week.",
    scores: [3, 3, 3, 2, 2, 2, 3],
  },
  {
    name: "AI tools only",
    highlight: false,
    summary: "Fast first drafts. Missing the human direction, taste and channel craft that make content land.",
    scores: [5, 4, 2, 4, 2, 5, 1],
  },
];

export const testimonials = [
  {
    quote:
      "VAYRO turned our weekly editing workload into a smooth production system. The quality stayed high while our turnaround time dropped dramatically.",
    name: "Amelia Cho",
    title: "Head of Content",
    company: "Northline",
    avatar: "/images/testimonials/a2.jpg",
  },
  {
    quote:
      "We stopped bouncing between editors, thumbnail designers and a motion freelancer. One team, one brief, and the channel finally looks intentional.",
    name: "Marcus Ellison",
    title: "Founder",
    company: "Orbit Channel",
    avatar: "/images/testimonials/a1.jpg",
  },
  {
    quote:
      "The AI workflows are the accelerator, not the product. Humans still make the taste calls — and that is why the work still feels like us.",
    name: "Priya Raman",
    title: "VP Brand",
    company: "Helio Market",
    avatar: "/images/testimonials/a4.jpg",
  },
  {
    quote:
      "Launch week used to mean panic. Now we brief once and receive the film, the cutdowns and the social pack without losing the story.",
    name: "Jonah Blake",
    title: "Creative Director",
    company: "Kite & Co.",
    avatar: "/images/testimonials/a3.jpg",
  },
  {
    quote:
      "Thumbnails, packaging and long-form pacing finally live in the same system. Our click-through improved because the promise matches the video.",
    name: "Elena Voss",
    title: "YouTube Lead",
    company: "Lumen Labs",
    avatar: "/images/testimonials/a6.jpg",
  },
  {
    quote:
      "They work like an embedded studio. Fast when we need speed, careful when the brand has to be exact, and never precious about revisions.",
    name: "David Okonkwo",
    title: "Marketing Director",
    company: "Harbor Media",
    avatar: "/images/testimonials/a5.jpg",
  },
];

export const workflowSteps = [
  { name: "Brief", body: "Submit your creative request with references, goals and the platforms that matter." },
  { name: "Create", body: "Editors, designers and AI workflows move the work forward without starting from zero every time." },
  { name: "Review", body: "Give feedback in one place. Comments stay attached to the cut, not buried in a chat thread." },
  { name: "Deliver", body: "Receive polished final assets, sized and packaged for the channels you actually publish on." },
  { name: "Learn", body: "Your preferences and brand notes improve the next round, so the system gets sharper over time." },
];

export const integrations = [
  "Slack",
  "Notion",
  "Google Drive",
  "Asana",
  "ClickUp",
  "Frame.io",
  "Trello",
];

export const differentiators = [
  {
    kicker: "Scalable",
    title: "Increase production without hiring a larger internal team.",
    body: "Keep strategy in-house and let VAYRO absorb the volume, variety and revision load that usually burns people out.",
  },
  {
    kicker: "Flexible",
    title: "Use exactly the creative services you need.",
    body: "YouTube one month, launch films the next. Shift the mix without renegotiating a new vendor stack.",
  },
  {
    kicker: "Responsive",
    title: "Move quickly when campaigns and deadlines change.",
    body: "A production system built for calendar reality — drops, launches, and the week everything moves up.",
  },
  {
    kicker: "Seamless",
    title: "Keep briefs, revisions and delivery organized.",
    body: "One workflow from request to final file, so your team spends time on taste — not tracking versions.",
  },
];

export const footerColumns = [
  {
    title: "Services",
    links: [
      { label: "Video Editing", href: "/services#youtube-editing" },
      { label: "AI Video Production", href: "/services#ai-video" },
      { label: "Motion Graphics", href: "/services#motion" },
      { label: "YouTube Editing", href: "/services#youtube-editing" },
      { label: "Thumbnail Design", href: "/services#thumbnails" },
      { label: "Social Media Creative", href: "/services#social" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Our Work", href: "/work" },
      { label: "Our Team", href: "/about#team" },
      { label: "Pricing", href: "/pricing" },
      { label: "Reviews", href: "/#testimonials" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/resources" },
      { label: "Guides", href: "/resources#guides" },
      { label: "Case Studies", href: "/work" },
      { label: "YouTube Tips", href: "/resources#youtube" },
      { label: "Creative Resources", href: "/resources" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Instagram", href: "https://instagram.com" },
      { label: "YouTube", href: "https://youtube.com" },
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "Email", href: "mailto:hello@vayro.studios" },
    ],
  },
];
