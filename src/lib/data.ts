export const BRAND = {
  name: "Vibe Create Media",
  logo: "VC",
  color: "#FFD400",
  hoverColor: "#E6BE00",
  email: "growth@vibecreatemedia.com",
  phone: "7020906559",
  whatsapp: "https://wa.me/917020906559",
} as const;

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
] as const;

export const TEAM: { name: string; role: string; description: string; initials: string; image: string }[] = [
  {
    name: "Dr. Aditya Fattepurkar",
    role: "Founder",
    description: "The architect behind every growth strategy. Obsessed with data, driven by results, allergic to mediocrity.",
    initials: "AF",
    image: "/images/team/founder.png",
  },
  {
    name: "Mrs. Shivani Fattepurkar",
    role: "CEO",
    description: "Operational excellence meets creative vision. She ensures every project doesn't just launch it lands.",
    initials: "SF",
    image: "/images/team/ceo.png",
  },
  {
    name: "Prathviraj Jadhav",
    role: "Growth Lead",
    description: "Turns ad spend into revenue machines. If he can't scale it, it probably doesn't exist.",
    initials: "PJ",
    image: "/images/team/prathviraj.png",
  },
  {
    name: "Ram Shingne",
    role: "Designer",
    description: "Pixel-perfect obsessed. Every design he touches doesn't just look good it converts.",
    initials: "RS",
    image: "/images/team/ram.png",
  },
  {
    name: "Harish Lonkar",
    role: "Videographer",
    description: "Frames stories that stop the scroll. His videos don't just get views they get saved.",
    initials: "HL",
    image: "/images/team/harsh.png",
  },
  {
    name: "Ritika",
    role: "Social Media Manager",
    description: "She doesn't just manage feeds she engineers virality. Every post has a purpose.",
    initials: "R",
    image: "/images/team/ritika.png",
  },
];

export const SERVICES = [
  {
    id: "performance-marketing",
    title: "Performance Marketing",
    shortDesc: "ROI-positive campaigns that turn ad spend into revenue machines.",
    description: "We don't just run ads we engineer conversion systems. Every rupee is tracked, every funnel is optimized, every campaign is built to scale. From Meta Ads to Google Ads, we build performance infrastructure that compounds.",
    icon: "TrendingUp",
    timeline: "Results visible in 2-4 weeks. Scaling phase: 60-90 days.",
    features: ["Meta & Google Ads Management", "Conversion Tracking & Attribution", "A/B Testing Framework", "Funnel Optimization", "ROAS-focused Strategy", "Custom Audience Engineering"],
  },
  {
    id: "branding",
    title: "Branding & Identity",
    shortDesc: "Brands that command attention and refuse to be forgotten.",
    description: "Your brand isn't your logo. It's the feeling people get when they hear your name. We build brand identities that create emotional shortcuts in your audience's brain the kind that makes them choose you without thinking.",
    icon: "Palette",
    timeline: "Brand strategy: 2 weeks. Full identity: 4-6 weeks.",
    features: ["Brand Strategy & Positioning", "Visual Identity Design", "Brand Voice & Messaging", "Brand Guidelines", "Logo & Identity System", "Brand Architecture"],
  },
  {
    id: "ugc-videos",
    title: "UGC Video Creation",
    shortDesc: "Scroll-stopping content that sells without looking like an ad.",
    description: "The future of advertising doesn't look like advertising. UGC videos outperform traditional ads by 4x because they don't trigger ad blindness they trigger trust. We create content that feels organic but converts like performance art.",
    icon: "Video",
    timeline: "First batch delivery: 7-10 days. Ongoing: weekly sprints.",
    features: ["UGC Strategy & Scripting", "Creator Sourcing & Management", "Video Production & Editing", "A/B Variations", "Platform-specific Optimization", "Performance Analytics"],
  },
  {
    id: "content-marketing",
    title: "Content Marketing",
    shortDesc: "Content that ranks, converts, and compounds over time.",
    description: "Most content is digital noise. We create content assets articles, guides, and frameworks that build authority, capture search traffic, and nurture leads while you sleep. Content that works like a 24/7 sales team.",
    icon: "FileText",
    timeline: "SEO results: 3-6 months. Authority building: ongoing.",
    features: ["SEO Content Strategy", "Blog & Article Writing", "Content Calendar Management", "Lead Magnet Creation", "Content Distribution", "Performance Tracking"],
  },
  {
    id: "social-media",
    title: "Social Media Marketing",
    shortDesc: "Social presence that builds communities, not just followers.",
    description: "Followers are vanity metrics. Community is a business asset. We build social strategies that turn passive scrollers into active buyers because every post should move your business forward, not just fill a content calendar.",
    icon: "Share2",
    timeline: "Engagement lift: 2-4 weeks. Community growth: 60-90 days.",
    features: ["Platform Strategy", "Content Creation & Scheduling", "Community Management", "Social Listening", "Influencer Partnerships", "Analytics & Reporting"],
  },
  {
    id: "web-development",
    title: "Website Development",
    shortDesc: "Websites that convert visitors into customers, not just look pretty.",
    description: "A beautiful website that doesn't convert is just expensive art. We build conversion-engineered websites every pixel has a purpose, every page has a funnel, every interaction is designed to move visitors toward action.",
    icon: "Globe",
    timeline: "Landing page: 2 weeks. Full website: 6-8 weeks.",
    features: ["Conversion-optimized Design", "Responsive Development", "SEO Architecture", "Speed Optimization", "CMS Integration", "Analytics Setup"],
  },
  {
    id: "business-development",
    title: "Business Development",
    shortDesc: "Strategic partnerships and growth channels you haven't thought of yet.",
    description: "Growth doesn't just come from marketing. We identify untapped revenue channels, strategic partnerships, and market expansion opportunities that create compounding business value not just one-off wins.",
    icon: "Handshake",
    timeline: "Strategy: 2-3 weeks. Implementation: ongoing.",
    features: ["Growth Strategy", "Partnership Development", "Market Expansion", "Revenue Channel Identification", "Sales Process Optimization", "Competitive Analysis"],
  },
  {
    id: "video-editing",
    title: "Video Editing & Production",
    shortDesc: "Professional video content that commands attention in a skip-happy world.",
    description: "In a world of 3-second attention spans, your video has 0.5 seconds to prove it's worth watching. We edit and produce videos that not only stop the scroll but hold attention through the entire story and drive action.",
    icon: "Film",
    timeline: "Single video: 3-5 days. Series: ongoing sprints.",
    features: ["Professional Video Editing", "Motion Graphics", "Color Grading", "Sound Design", "Short-form Content", "Long-form Production"],
  },
  {
    id: "meta-ads",
    title: "Meta Ads Creatives",
    shortDesc: "Ad creatives that break through the noise and force clicks.",
    description: "The best targeting in the world means nothing if your creative is forgettable. We design Meta ad creatives that stop thumbs, spark curiosity, and drive clicks backed by data, refined by testing, built to scale.",
    icon: "Target",
    timeline: "Creative batch: 5-7 days. Optimization: ongoing.",
    features: ["Creative Strategy", "Ad Design & Copy", "A/B Testing", "Dynamic Creative Optimization", "Retargeting Creatives", "Performance Reporting"],
  },
] as const;

export const CASE_STUDIES = [
  {
    id: "all-works-immigration",
    title: "All Works Immigration",
    description: "Scaling a trusted immigration consultancy through strategic digital presence and lead generation",
    videoUrl: "/images/Videos/Arrow up ward.mp4",
    bgColor: "bg-[#1a3a5c]",
    buttonType: "light" as const,
  },
  {
    id: "andaman-bliss",
    title: "Andaman Bliss",
    description: "Turning a paradise destination into a bookable brand with performance marketing and stunning visuals",
    videoUrl: "/images/Videos/fifth one.mp4",
    bgColor: "bg-[#1a4a3e]",
    buttonType: "light" as const,
  },
  {
    id: "thinklygold",
    title: "ThinklyGold",
    description: "Building trust and driving inquiries for a premium gold investment platform through strategic content",
    videoUrl: "/images/Videos/Shape.mp4",
    bgColor: "bg-[#3e3a1d]",
    buttonType: "dark" as const,
  },
  {
    id: "room-hug",
    title: "Room Hug",
    description: "From zero to fully booked a hospitality brand's journey through performance marketing and social proof",
    videoUrl: "/images/Videos/fourth one.mp4",
    bgColor: "bg-[#4a2d2d]",
    buttonType: "dark" as const,
  },
  {
    id: "story-buzz",
    title: "Story Buzz",
    description: "Amplifying a content studio's reach through UGC-first strategy and multi-platform growth systems",
    videoUrl: "/images/Videos/Recreate it.mp4",
    bgColor: "bg-[#2d2d4a]",
    buttonType: "light" as const,
  },
] as const;

export const UGC_VIDEOS = [
  {
    id: "ugc-1",
    title: "Product Review Style",
    thumbnail: "",
    videoUrl: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_122702_390f5305-8719-41d5-ae80-d23ab3796c28.mp4",
    category: "UGC",
  },
  {
    id: "ugc-2",
    title: "Unboxing Experience",
    thumbnail: "",
    videoUrl: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_123323_f909c2b8-ff6c-4edf-882b-8ebcdbe389b5.mp4",
    category: "UGC",
  },
  {
    id: "ugc-3",
    title: "Testimonial Format",
    thumbnail: "",
    videoUrl: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_122702_390f5305-8719-41d5-ae80-d23ab3796c28.mp4",
    category: "UGC",
  },
  {
    id: "ugc-4",
    title: "Before & After",
    thumbnail: "",
    videoUrl: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_123323_f909c2b8-ff6c-4edf-882b-8ebcdbe389b5.mp4",
    category: "UGC",
  },
] as const;

export const UGC_CATEGORIES = [
  {
    id: "product-reviews",
    title: "Product Reviews",
    emoji: "📦",
    description: "Amazon, Flipkart & D2C products ke honest UGC review videos that build trust and drive sales.",
    features: ["Honest product walkthroughs", "Unboxing & first impressions", "Feature highlight reels", "Comparison & vs. content", "Amazon/Flipkart optimized", "D2C conversion focused"],
    driveLink: "#",
    color: "from-amber-500 to-orange-600",
  },
  {
    id: "beauty-skincare",
    title: "Beauty & Skincare",
    emoji: "💄",
    description: "Makeup demos, skincare routines, before-after results & genuine testimonial videos.",
    features: ["Makeup tutorial UGC", "Skincare routine videos", "Before & after results", "Product swatches & reviews", "Ingredient breakdowns", "Genuine testimonials"],
    driveLink: "#",
    color: "from-pink-500 to-rose-600",
  },
  {
    id: "health-wellness",
    title: "Health & Wellness",
    emoji: "🏋️",
    description: "Ayurveda, fitness, supplements, clinics & wellness brands ke trust-focused videos.",
    features: ["Fitness transformation UGC", "Ayurveda product reviews", "Supplement testimonials", "Clinic & hospital reviews", "Wellness routine content", "Health myth-busting videos"],
    driveLink: "#",
    color: "from-green-500 to-emerald-600",
  },
  {
    id: "food-grocery",
    title: "Food & Grocery",
    emoji: "🍔",
    description: "Food tasting, grocery products, cooking demos & FMCG brand UGC content.",
    features: ["Food tasting reactions", "Cooking demonstration UGC", "Grocery haul reviews", "FMCG product showcases", "Recipe-based content", "Restaurant review UGC"],
    driveLink: "#",
    color: "from-red-500 to-orange-600",
  },
  {
    id: "fashion-accessories",
    title: "Fashion & Accessories",
    emoji: "👗",
    description: "Clothing try-ons, styling videos, jewellery & accessories promotion content.",
    features: ["Try-on haul videos", "Styling & outfit ideas", "Jewellery showcase UGC", "Seasonal fashion content", "Accessories review reels", "OOTD testimonial format"],
    driveLink: "#",
    color: "from-purple-500 to-violet-600",
  },
  {
    id: "education-courses",
    title: "Education & Online Courses",
    emoji: "🎓",
    description: "Coaching institutes, online courses, ed-tech platforms & student review videos.",
    features: ["Student success stories", "Course review UGC", "Ed-tech platform testimonials", "Coaching institute reviews", "Learning journey content", "Result showcase videos"],
    driveLink: "#",
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: "real-estate-travel",
    title: "Real Estate & Travel",
    emoji: "🏠",
    description: "Property walkthroughs, villas, hotels, resorts & travel experience videos.",
    features: ["Property walkthrough UGC", "Hotel & resort reviews", "Travel vlog-style content", "Interior showcase videos", "Location highlight reels", "Experience testimonial UGC"],
    driveLink: "#",
    color: "from-teal-500 to-cyan-600",
  },
  {
    id: "local-services",
    title: "Local & Professional Services",
    emoji: "🛠",
    description: "Clinics, agencies, consultants, repair services & local business testimonials.",
    features: ["Service experience UGC", "Clinic & hospital reviews", "Consultant testimonials", "Repair service showcases", "Local business stories", "Professional credibility content"],
    driveLink: "#",
    color: "from-slate-500 to-gray-600",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing & Branding",
    emoji: "📈",
    description: "Ad creatives, brand awareness videos, lead generation & performance campaigns.",
    features: ["Ad creative UGC", "Brand story videos", "Lead gen testimonial content", "Performance campaign UGC", "Social proof videos", "Campaign result showcases"],
    driveLink: "#",
    color: "from-yellow-500 to-amber-600",
  },
  {
    id: "trading-finance",
    title: "Trading, Finance & Investment",
    emoji: "📊",
    description: "Stock market, crypto, forex, finance education & trading-related UGC videos.",
    features: ["Trading result UGC", "Finance education content", "Crypto platform reviews", "Investment testimonial videos", "Stock market analysis UGC", "Financial literacy content"],
    driveLink: "#",
    color: "from-emerald-500 to-green-600",
  },
] as const;

export const BLOGS = [
  {
    id: "why-most-digital-marketing-agencies-fail",
    title: "Why Most Digital Marketing Agencies Fail (And How to Spot the Ones That Don't)",
    excerpt: "90% of agencies deliver vanity metrics. Here's the framework to identify the 10% that actually move revenue needles.",
    category: "Research",
    categoryColor: "bg-blue-100 text-blue-800",
    readTime: "8 min",
    intent: "educational",
  },
  {
    id: "ugc-video-roi-framework",
    title: "The UGC Video ROI Framework: How to 4x Your Ad Performance",
    excerpt: "User-generated content doesn't just perform better it's mathematically superior. Here's the data-backed framework we use for every client.",
    category: "Consulting",
    categoryColor: "bg-green-100 text-green-800",
    readTime: "12 min",
    intent: "consulting",
  },
  {
    id: "performance-marketing-playbook-2026",
    title: "The 2026 Performance Marketing Playbook: What Actually Works Now",
    excerpt: "Forget what worked last year. The rules have changed. Here's what's generating actual ROI in the current landscape.",
    category: "Education",
    categoryColor: "bg-amber-100 text-amber-800",
    readTime: "15 min",
    intent: "educational",
  },
  {
    id: "branding-mistakes-killing-growth",
    title: "5 Branding Mistakes That Are Quietly Killing Your Growth",
    excerpt: "Your brand might be the reason your marketing isn't working. Here are the silent growth killers most founders never notice.",
    category: "Promotional",
    categoryColor: "bg-purple-100 text-purple-800",
    readTime: "6 min",
    intent: "promotional",
  },
  {
    id: "meta-ads-creative-system",
    title: "The Meta Ads Creative System That Scales to ₹10L+/month",
    excerpt: "We've spent crores testing creative frameworks. This is the exact system we use to scale ad accounts profitably.",
    category: "Consulting",
    categoryColor: "bg-green-100 text-green-800",
    readTime: "10 min",
    intent: "consulting",
  },
  {
    id: "business-development-playbook",
    title: "The Business Development Playbook: Beyond Cold Outreach",
    excerpt: "Cold DMs are dead. Here's how strategic business development actually works in 2026 and why most companies are doing it wrong.",
    category: "Education",
    categoryColor: "bg-amber-100 text-amber-800",
    readTime: "11 min",
    intent: "educational",
  },
] as const;

export interface BlogSection {
  id: string;
  heading: string;
  content: string[];
  callout?: {
    type: "pro-tip" | "key-insight" | "data-point" | "warning";
    title: string;
    text: string;
  };
  stats?: { label: string; value: string; description: string }[];
  pullQuote?: string;
}

export interface BlogDetailArticle {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  categoryColor: string;
  readTime: string;
  intent: string;
  author: { name: string; role: string; initials: string };
  publishedDate: string;
  heroSubtitle: string;
  sections: BlogSection[];
  keyTakeaways: string[];
}

export const BLOG_DETAIL_DATA: Record<string, BlogDetailArticle> = {
  "why-most-digital-marketing-agencies-fail": {
    id: "why-most-digital-marketing-agencies-fail",
    title: "Why Most Digital Marketing Agencies Fail (And How to Spot the Ones That Don't)",
    excerpt: "90% of agencies deliver vanity metrics. Here's the framework to identify the 10% that actually move revenue needles.",
    category: "Research",
    categoryColor: "bg-blue-100 text-blue-800",
    readTime: "8 min",
    intent: "educational",
    author: { name: "Dr. Aditya Fattepurkar", role: "Founder", initials: "AF" },
    publishedDate: "Feb 15, 2026",
    heroSubtitle: "The agency industry has a dirty secret: most of them are selling you reports, not results. Here's how to tell the difference before you sign the check.",
    sections: [
      {
        id: "the-agency-failure-problem",
        heading: "The Agency Failure Problem",
        content: [
          "Let's start with an uncomfortable truth: the majority of digital marketing agencies are failing their clients. Not because they're malicious most are well-intentioned. They're failing because the agency model itself is broken.",
          "The typical agency operates on a retainer model where hours billed matter more than outcomes delivered. This creates a fundamental misalignment: your success is secondary to their utilization rate. The result? Beautiful reports, impressive-looking dashboards, and a bank account that looks suspiciously unchanged.",
          "We've audited over 200 agency-client relationships across India, and the pattern is devastatingly consistent. 87% of brands couldn't directly attribute revenue growth to their agency's efforts. That's not a statistic that's an indictment."
        ],
        callout: {
          type: "data-point",
          title: "Data Point",
          text: "87% of brands surveyed could not directly attribute revenue growth to their agency's work. The remaining 13%? They all shared one trait: outcome-based KPIs in their contracts."
        }
      },
      {
        id: "the-vanity-trap",
        heading: "The Vanity Metric Trap",
        content: [
          "Here's how the trap works. Your agency shows you a dashboard with impressions up 300%, reach growing 150%, and engagement rate at 4.2%. You feel good. The numbers are going up. Something must be working, right?",
          "Wrong. Impressions without conversions are just expensive entertainment. Reach without revenue is a popularity contest you're paying to lose. And engagement rate? It's the agency world's favorite misdirection a metric that looks impressive in reports but has zero correlation with your business growth.",
          "The agencies that actually deliver results measure different things entirely. They track cost per acquisition, customer lifetime value, return on ad spend, and revenue attribution. These aren't sexy metrics for a slide deck, but they're the only ones that keep you in business."
        ],
        pullQuote: "Impressions without conversions are just expensive entertainment. Reach without revenue is a popularity contest you're paying to lose."
      },
      {
        id: "the-framework-spotting-winners",
        heading: "The Framework: Spotting Winners",
        content: [
          "After analyzing what separates the 10% of agencies that deliver from the 90% that don't, we identified four non-negotiable signals. Think of these as your agency evaluation cheat sheet.",
          "First, look at their KPIs. If they pitch impressions and reach as primary metrics, that's a red flag. Winning agencies lead with revenue metrics ROAS, CPA, LTV. If they can't tie their work to your revenue, they're not partners, they're vendors.",
          "Second, examine their reporting cadence. Average agencies send monthly reports. Great agencies provide real-time dashboards with weekly strategy calls. The difference isn't frequency it's accountability. Real-time data means real-time course correction."
        ],
        stats: [
          { label: "Revenue Attribution", value: "87%", description: "of brands can't link agency work to revenue" },
          { label: "Agencies Using ROAS", value: "13%", description: "tie their KPIs to actual business outcomes" },
          { label: "Avg. Retainer Waste", value: "₹2.4L", description: "wasted monthly on non-performing agencies" },
          { label: "Client Retention Gap", value: "3.2x", description: "higher retention for outcome-based agencies" }
        ],
        callout: {
          type: "key-insight",
          title: "Key Insight",
          text: "The single strongest predictor of agency success isn't their portfolio or team size it's whether their compensation model is tied to your outcomes. Skin in the game changes everything."
        }
      },
      {
        id: "red-flags-to-watch",
        heading: "Red Flags to Watch For",
        content: [
          "Beyond the obvious (late deliverables, unresponsive account managers), there are subtler red flags that most brands miss until it's too late.",
          "The 'proprietary methodology' smokescreen. If an agency won't explain their strategy in plain language, they either don't have one or it's not worth explaining. Real expertise demystifies. Fake expertise hides behind jargon.",
          "The 'we need more budget' reflex. When results are poor and the first suggestion is always 'increase spend,' that's not strategy that's hope dressed up as professional advice. Great agencies optimize before they scale. Average agencies throw money at problems.",
          "The template strategy. If your brand strategy looks suspiciously similar to their last three clients, you're not getting a strategy you're getting a fill-in-the-blanks worksheet with your logo on top."
        ],
        callout: {
          type: "warning",
          title: "Warning Sign",
          text: "If an agency can't explain their strategy in a 10-minute conversation without using buzzwords, they don't have a strategy. They have a script."
        }
      },
      {
        id: "what-great-looks-like",
        heading: "What Great Actually Looks Like",
        content: [
          "Now for the good news. Great agencies do exist, and they share a consistent set of behaviors that make them unmistakable once you know what to look for.",
          "They ask uncomfortable questions in the first meeting. Not 'what's your budget?' but 'what's your customer acquisition cost?' and 'what happens after they buy?' They're already thinking three moves ahead while everyone else is still setting up the board.",
          "They reject clients they can't help. This sounds counterintuitive, but it's the ultimate green flag. An agency that says 'we're not the right fit for this' is an agency that values outcomes over invoices. That's the partner you want.",
          "They show you the messy middle. Great agencies don't just present polished results they walk you through the iterations, the failed tests, the pivots. Because growth isn't a straight line, and anyone who pretends it is hasn't actually grown anything."
        ],
        callout: {
          type: "pro-tip",
          title: "Pro Tip",
          text: "Ask any prospective agency: 'Tell me about a campaign that failed and what you did next.' Their answer tells you everything. If they can't name one, they're either lying or not testing aggressively enough."
        }
      }
    ],
    keyTakeaways: [
      "87% of brands can't attribute revenue growth to their agency's work the model is fundamentally broken for most",
      "Vanity metrics (impressions, reach, engagement rate) are the agency world's favorite misdirection demand revenue metrics instead",
      "The #1 predictor of agency success: their compensation model is tied to your outcomes, not their hours",
      "Great agencies ask uncomfortable questions, reject bad-fit clients, and show you the messy middle of growth",
      "If they can't explain their strategy without buzzwords, they don't have one they have a script"
    ]
  },
  "ugc-video-roi-framework": {
    id: "ugc-video-roi-framework",
    title: "The UGC Video ROI Framework: How to 4x Your Ad Performance",
    excerpt: "User-generated content doesn't just perform better it's mathematically superior. Here's the data-backed framework we use for every client.",
    category: "Consulting",
    categoryColor: "bg-green-100 text-green-800",
    readTime: "12 min",
    intent: "consulting",
    author: { name: "Prathviraj Jadhav", role: "Growth Lead", initials: "PJ" },
    publishedDate: "Feb 8, 2026",
    heroSubtitle: "We've spent over ₹2Cr testing video frameworks. Here's the exact system that consistently outperforms traditional ads by 4x and the math behind why it works.",
    sections: [
      {
        id: "the-ugc-revolution",
        heading: "The UGC Revolution Isn't Coming It's Here",
        content: [
          "If you're still debating whether UGC is worth the investment, you're already behind. The data isn't just compelling it's overwhelming. User-generated content outperforms branded content across every major platform, every demographic, and every product category we've tested.",
          "But here's what most marketers get wrong: they think UGC is just 'regular people making videos.' It's not. Effective UGC is a precision-engineered persuasion system disguised as organic content. The casualness is intentional. The imperfection is strategic. The 'amateur' quality is what makes it convert.",
          "Our framework has been refined across 200+ campaigns and ₹2Cr+ in ad spend. It's not theory. It's a battle-tested system that produces predictable, scalable results."
        ],
        callout: {
          type: "data-point",
          title: "Data Point",
          text: "UGC videos generate 4x higher click-through rates and 2.5x lower cost-per-acquisition compared to traditional branded ads across our client portfolio."
        }
      },
      {
        id: "why-ugc-works",
        heading: "The Neuroscience of Why UGC Works",
        content: [
          "Your brain has a built-in ad-blocking system. It's called the prefrontal cortex, and it's been trained by decades of advertising to recognize and dismiss traditional ad formats within milliseconds. Branded content triggers skepticism. UGC bypasses it entirely.",
          "When a consumer sees a polished ad, their brain activates defensive processing: 'They're trying to sell me something.' When they see a person casually talking about a product, their brain activates social processing: 'This person is sharing their experience.' Same product, completely different neurological pathway.",
          "This isn't speculation. Eye-tracking studies show consumers spend 5.3x more time engaging with UGC-style content than branded equivalents. Not because the content is better because the brain doesn't categorize it as advertising."
        ],
        pullQuote: "Effective UGC is a precision-engineered persuasion system disguised as organic content. The casualness is intentional. The imperfection is strategic."
      },
      {
        id: "the-framework",
        heading: "The 4-Step UGC ROI Framework",
        content: [
          "After hundreds of campaigns, we've distilled what works into four repeatable steps. Skip any one of them and your ROI drops by 40-60%. Follow all four and you'll consistently outperform branded content by 3-5x.",
          "Step 1: The Hook Architecture. The first 0.5 seconds determine everything. We don't start with product we start with a problem the viewer didn't know they had. The formula: surprising statement + visual pattern break + implied solution. This isn't clickbait. It's cognitive engagement.",
          "Step 2: The Trust Sequence. Within the first 3 seconds, we establish credibility without claiming it. The viewer must feel like they're discovering something, not being sold something. We use specific language patterns that trigger social proof circuits in the brain.",
          "Step 3: The Conversion Bridge. This is where most UGC fails the transition from content to commerce. We use 'natural next step' framing: 'I found this...' 'What happened next...' 'Here's where I got it...' The link between content and product feels organic, not forced."
        ],
        stats: [
          { label: "Higher CTR", value: "4x", description: "vs. traditional branded ads" },
          { label: "Lower CPA", value: "2.5x", description: "cost-per-acquisition reduction" },
          { label: "Engagement Time", value: "5.3x", description: "more time spent on UGC content" },
          { label: "Framework ROI", value: "₹2Cr+", description: "tested across our client base" }
        ],
        callout: {
          type: "key-insight",
          title: "Key Insight",
          text: "Skip any one of the four framework steps and your ROI drops by 40-60%. The system only works as a complete sequence partial implementation gives partial results."
        }
      },
      {
        id: "scaling-the-system",
        heading: "Scaling the System Without Breaking It",
        content: [
          "The biggest mistake brands make with UGC is treating it like a volume game. More videos doesn't mean more conversions if the quality degrades. Our scaling protocol is counterintuitive: we produce fewer videos but more variations per concept.",
          "Here's the math: 5 concepts × 4 variations each = 20 testable assets. That outperforms 20 random concepts every single time. Why? Because you're testing variations of proven patterns instead of gambling on unproven ideas.",
          "We also implement a creative fatigue monitoring system. Every asset has a predictable performance curve, and we retire creatives before they decline not after. This alone can improve your account's average ROAS by 30%."
        ],
        callout: {
          type: "pro-tip",
          title: "Pro Tip",
          text: "Retire your winning creatives before they decline, not after. By the time you notice performance dropping, you've already wasted 15-20% of your budget on declining assets."
        }
      }
    ],
    keyTakeaways: [
      "UGC outperforms branded content by 4x because it bypasses the brain's ad-blocking system it triggers social processing instead of defensive processing",
      "The 4-step framework (Hook Architecture → Trust Sequence → Conversion Bridge → Retire Protocol) must be followed as a complete system",
      "Produce fewer concepts with more variations 5×4 beats 20×1 every time in our testing",
      "Creative fatigue is predictable retire assets before they decline to maintain 30% higher average ROAS",
      "The 'amateur' quality of UGC is strategic, not accidental imperfection is what makes it convert"
    ]
  },
  "performance-marketing-playbook-2026": {
    id: "performance-marketing-playbook-2026",
    title: "The 2026 Performance Marketing Playbook: What Actually Works Now",
    excerpt: "Forget what worked last year. The rules have changed. Here's what's generating actual ROI in the current landscape.",
    category: "Education",
    categoryColor: "bg-amber-100 text-amber-800",
    readTime: "15 min",
    intent: "educational",
    author: { name: "Dr. Aditya Fattepurkar", role: "Founder", initials: "AF" },
    publishedDate: "Jan 28, 2026",
    heroSubtitle: "The performance marketing landscape has fundamentally shifted. If you're running 2025 playbooks in 2026, you're burning money. Here's what the data says is working right now.",
    sections: [
      {
        id: "what-changed",
        heading: "What Changed and Why You're Not Ready",
        content: [
          "Every year, the marketing ecosystem shifts. But 2026 isn't a gradual evolution it's a tectonic shift. Three converging forces have rewritten the rules: AI-driven ad delivery, privacy-first tracking, and the creative-as-targeting era.",
          "Meta's Advantage+ and Google's Performance Max have fundamentally changed how ad delivery works. The algorithm is no longer just optimizing bids it's optimizing creative. Your targeting inputs matter less than your creative inputs. Most agencies haven't caught up.",
          "Meanwhile, server-side tracking isn't optional anymore. Client-side pixels are losing 30-40% of conversion data due to browser restrictions. If your agency is still relying on standard Meta pixels, up to 40% of your conversions are invisible to the algorithm. That's not a tracking problem that's a scaling problem."
        ],
        callout: {
          type: "data-point",
          title: "Data Point",
          text: "Brands using server-side tracking see 35% better ROAS on average because the algorithm has 40% more conversion data to optimize toward."
        }
      },
      {
        id: "the-creative-economy",
        heading: "Welcome to the Creative Economy",
        content: [
          "Here's the paradigm shift that's separating winners from losers in 2026: creative is the new targeting. The algorithm decides who sees your ad based on how your creative performs with different audiences. Your job isn't to pick the audience it's to create content the algorithm wants to distribute.",
          "This means the old workflow (strategy → targeting → creative → launch) is inverted. The new workflow is: creative hypothesis → rapid testing → algorithmic distribution → scale what works. Your creative team isn't supporting your media team your media team is amplifying your creative team.",
          "The brands winning right now are producing 10-20 creative variations per week. Not 10-20 campaigns. 10-20 variations of the same campaign concept, each testing a different angle, hook, or format. Volume beats perfection when the algorithm is your media buyer."
        ],
        pullQuote: "Creative is the new targeting. The algorithm decides who sees your ad based on how your creative performs. Your job isn't to pick the audience it's to create content the algorithm wants to distribute."
      },
      {
        id: "the-2026-playbook",
        heading: "The 2026 Playbook: 5 Plays That Are Working Now",
        content: [
          "Play 1: UGC-First Creative Strategy. Lead with UGC, support with branded. Our data shows UGC-first accounts achieve 3.8x ROAS vs. 1.2x for branded-first. The formula: 70% UGC, 20% hybrid (UGC + brand elements), 10% pure branded for retargeting.",
          "Play 2: Server-Side Tracking as Day 1 Priority. If you're not implementing CAPI (Conversions API) before launching campaigns, you're operating at 60% capacity. This isn't a 'nice to have' it's the foundation everything else is built on.",
          "Play 3: Creative Testing Velocity. Test 3-5 new creatives per week minimum. Kill anything under 1.5x ROAS within 48 hours. Scale anything above 3x ROAS to 70% of budget. The math is simple more tests means more winners.",
          "Play 4: First-Party Data Moats. Build email lists, SMS databases, and loyalty programs aggressively. Third-party data is dying. First-party data is your competitive moat. The brands with the best first-party data will win the next decade of performance marketing.",
          "Play 5: Full-Funnel Attribution. Stop optimizing for last-click. Implement multi-touch attribution that accounts for the entire customer journey. The ad that introduced your brand is just as valuable as the ad that closed the sale they're just valuable in different ways."
        ],
        stats: [
          { label: "UGC-First ROAS", value: "3.8x", description: "vs. 1.2x for branded-first" },
          { label: "Data Loss (No CAPI)", value: "40%", description: "of conversions invisible to algorithm" },
          { label: "Creative Testing", value: "3-5/week", description: "minimum for competitive accounts" },
          { label: "SS Tracking Lift", value: "35%", description: "better ROAS with server-side" }
        ],
        callout: {
          type: "key-insight",
          title: "Key Insight",
          text: "The 70/20/10 creative split (UGC/Hybrid/Branded) outperforms every other ratio we've tested. It's not a rule it's a statistical reality across our portfolio."
        }
      },
      {
        id: "budget-allocation",
        heading: "How to Allocate Budget in 2026",
        content: [
          "The old 70/30 rule (70% proven, 30% testing) is dead. In 2026, you need to allocate closer to 50/30/20: 50% scaling proven winners, 30% testing new concepts, 20% exploring new channels and formats.",
          "That 20% exploration budget is critical. The channels that will drive your growth in 2027 are the ones you're not spending on today. We've seen brands discover 2-3x ROAS on 'secondary' channels that became their primary revenue driver within 6 months.",
          "Most importantly: never let your testing budget drop below 20%. The moment you stop testing is the moment your performance starts declining. Creative fatigue is real, and the only cure is fresh creative which requires consistent investment in testing."
        ],
        callout: {
          type: "pro-tip",
          title: "Pro Tip",
          text: "The channels that will drive your growth in 2027 are the ones you're not spending on today. Allocate at least 20% to exploration it's not waste, it's R&D for your growth engine."
        }
      }
    ],
    keyTakeaways: [
      "Creative is the new targeting the algorithm decides distribution based on creative performance, not manual targeting inputs",
      "Server-side tracking (CAPI) is now foundational without it, 40% of conversions are invisible to the algorithm",
      "The 70/20/10 creative split (UGC/Hybrid/Branded) consistently outperforms other ratios across our portfolio",
      "Test 3-5 new creatives per week minimum creative testing velocity is the single biggest lever for ROAS improvement",
      "Budget allocation should shift to 50/30/20 (scale/test/explore) the 20% exploration budget is R&D for future growth"
    ]
  },
  "branding-mistakes-killing-growth": {
    id: "branding-mistakes-killing-growth",
    title: "5 Branding Mistakes That Are Quietly Killing Your Growth",
    excerpt: "Your brand might be the reason your marketing isn't working. Here are the silent growth killers most founders never notice.",
    category: "Promotional",
    categoryColor: "bg-purple-100 text-purple-800",
    readTime: "6 min",
    intent: "promotional",
    author: { name: "Ram Shingne", role: "Designer", initials: "RS" },
    publishedDate: "Jan 20, 2026",
    heroSubtitle: "Your marketing might be perfect. Your product might be superior. But if your brand is sending the wrong signals, none of it matters. Here are the 5 mistakes we see killing growth every single day.",
    sections: [
      {
        id: "mistake-1-logo-obsession",
        heading: "Mistake #1: Confusing Logo with Brand",
        content: [
          "This is the most expensive misunderstanding in business. A logo is a symbol. A brand is a feeling. And while you've been obsessing over your logo's shade of blue, your competitors have been building emotional shortcuts in your audience's brain.",
          "Your brand is what people say about you when you're not in the room. It's the split-second association that determines whether someone clicks your ad or scrolls past. It's the reason Apple can charge 2x for the same specs and people thank them for it.",
          "The fix isn't a redesign it's a repositioning. Start by defining the single emotion you want people to feel when they encounter your brand. Then make every touchpoint from your website footer to your customer support tone consistently deliver that feeling."
        ],
        callout: {
          type: "key-insight",
          title: "Key Insight",
          text: "A logo is a symbol. A brand is a feeling. The brands that win don't have better logos they have clearer emotional associations."
        }
      },
      {
        id: "mistake-2-consistency",
        heading: "Mistake #2: Inconsistency That Erodes Trust",
        content: [
          "Every inconsistent brand touchpoint is a micro-betrayal. Your website says 'premium' but your social media says 'budget.' Your packaging says 'innovative' but your emails say 'generic.' Each inconsistency doesn't just confuse it erodes trust at a subconscious level.",
          "Consistency isn't about using the same shade of navy blue everywhere. It's about delivering the same emotional promise across every interaction. Your brand voice, visual system, and customer experience should feel like they came from the same brain because they should have."
        ],
        stats: [
          { label: "Brand Recognition", value: "80%", description: "increase from consistent presentation" },
          { label: "Revenue Impact", value: "23%", description: "average revenue increase with consistency" },
          { label: "Trust Erosion", value: "3x", description: "faster from inconsistency than building" },
          { label: "Time to Rebuild", value: "6-12mo", description: "to recover from brand inconsistency" }
        ]
      },
      {
        id: "mistake-3-generic",
        heading: "Mistake #3: Playing It Safe Makes You Invisible",
        content: [
          "The most dangerous thing a brand can be is forgettable. And the fastest way to become forgettable is to play it safe. Generic brand language ('innovative solutions,' 'customer-first,' 'best-in-class') doesn't communicate it camouflages.",
          "Your brand should have opinions. It should take positions. It should repel the wrong customers as forcefully as it attracts the right ones. If your brand doesn't have haters, it doesn't have lovers either it just has apathetic observers.",
          "Fearless branding isn't about being controversial for attention. It's about having the conviction to stand for something specific instead of everything generic. The brands we remember are the ones that made us feel something and that requires taking a stand."
        ],
        pullQuote: "If your brand doesn't have haters, it doesn't have lovers either it just has apathetic observers."
      },
      {
        id: "mistake-4-5",
        heading: "Mistakes #4 & #5: Copying Competitors & Ignoring Internal Brand",
        content: [
          "Mistake #4: Copying your competitors' brand strategy is like copying someone else's homework you get the same answers but you don't understand the reasoning. Your competitor's brand works because it's aligned with their unique truth. Copy the format and you miss the substance.",
          "What works for them is rooted in their story, their team, their market position, and their customer relationships. You can't replicate those and trying to makes you a derivative brand. Derivative brands always lose to originals because they're fighting on someone else's terms.",
          "Mistake #5: Your internal brand (how your team perceives the company) determines your external brand (how customers perceive you). If your employees don't believe in the brand, neither will your customers. Culture is the most authentic brand expression and it's the one you can't fake."
        ],
        callout: {
          type: "warning",
          title: "Warning Sign",
          text: "If you find yourself saying 'we want to look like [competitor],' you've already lost. Their brand works for their truth, not yours. Find your own."
        }
      }
    ],
    keyTakeaways: [
      "A logo is a symbol, a brand is a feeling start by defining the single emotion you want people to associate with you",
      "Inconsistency doesn't just confuse it erodes trust 3x faster than you can build it",
      "If your brand doesn't have haters, it doesn't have lovers it just has apathetic observers",
      "Copying competitor brands makes you derivative, and derivative brands always lose to originals",
      "Internal brand alignment (team belief) is the foundation of external brand credibility (customer belief)"
    ]
  },
  "meta-ads-creative-system": {
    id: "meta-ads-creative-system",
    title: "The Meta Ads Creative System That Scales to ₹10L+/month",
    excerpt: "We've spent crores testing creative frameworks. This is the exact system we use to scale ad accounts profitably.",
    category: "Consulting",
    categoryColor: "bg-green-100 text-green-800",
    readTime: "10 min",
    intent: "consulting",
    author: { name: "Prathviraj Jadhav", role: "Growth Lead", initials: "PJ" },
    publishedDate: "Jan 12, 2026",
    heroSubtitle: "After managing ₹10Cr+ in Meta ad spend, we've reverse-engineered the creative system that separates scaling accounts from stagnant ones. Here's the complete framework.",
    sections: [
      {
        id: "why-creative-system",
        heading: "Why You Need a Creative System (Not Just Creative)",
        content: [
          "Most brands treat creative as art. We treat it as engineering. The difference isn't aesthetic it's economic. Art is subjective, inconsistent, and impossible to scale. Engineering is systematic, repeatable, and predictable. When you're spending ₹10L+/month on Meta, you need predictable.",
          "A creative system isn't a template. It's a framework for generating unlimited variations that all perform within a predictable range. Think of it like a recipe: same technique, different ingredients. The system ensures every creative has the structural elements that drive performance, while leaving room for the variation that keeps audiences engaged."
        ],
        callout: {
          type: "data-point",
          title: "Data Point",
          text: "Accounts using a structured creative system achieve 2.8x higher ROAS and 60% less creative fatigue compared to ad-hoc creative production."
        }
      },
      {
        id: "the-creative-hierarchy",
        heading: "The Creative Hierarchy: What Matters Most",
        content: [
          "Not all creative elements are created equal. Our testing across 500+ ad sets revealed a clear hierarchy of impact. Understanding this hierarchy is the difference between spending ₹50K on a winner vs. ₹5L on a guess.",
          "The hierarchy, from highest to lowest impact: (1) Hook/Opening Frame accounts for 47% of performance variance, (2) Script/Messaging 28% of variance, (3) Visual Style 15% of variance, (4) Format/Length 10% of variance.",
          "This means if you're spending 80% of your creative budget on visual polish and 20% on hook development, your allocation is exactly inverted. The hook is everything it determines whether the algorithm shows your ad and whether humans stop scrolling."
        ],
        stats: [
          { label: "Hook Impact", value: "47%", description: "of performance variance from opening frame" },
          { label: "Script Impact", value: "28%", description: "of performance variance from messaging" },
          { label: "ROAS Improvement", value: "2.8x", description: "with structured creative system" },
          { label: "Fatigue Reduction", value: "60%", description: "less creative fatigue with system" }
        ],
        pullQuote: "If you're spending 80% of your creative budget on visual polish and 20% on hook development, your allocation is exactly inverted."
      },
      {
        id: "the-framework",
        heading: "The 3-Layer Framework for Every Creative",
        content: [
          "Layer 1: The Pattern Interrupt. Your first frame must break the scroll pattern. We use five proven pattern interrupts: counterintuitive statements, visual surprises, direct challenges, identity calls, and curiosity gaps. Each has specific use cases based on your product and audience.",
          "Layer 2: The Value Bridge. Between the hook and the CTA, you need a logical bridge that makes the product the natural solution, not a forced one. The formula: acknowledge the problem → demonstrate understanding → reveal the solution as a natural next step → provide social proof. This isn't manipulation it's clear communication.",
          "Layer 3: The Action Trigger. Your CTA shouldn't ask it should invite. 'Buy now' creates friction. 'See how it works' creates curiosity. The highest-converting CTAs in our system frame the next step as discovery rather than commitment."
        ],
        callout: {
          type: "key-insight",
          title: "Key Insight",
          text: "The highest-converting CTAs frame the next step as discovery rather than commitment. 'See how it works' outperforms 'Buy now' by 340% in our testing."
        }
      },
      {
        id: "scaling-mechanics",
        heading: "Scaling Mechanics: From ₹1L to ₹10L+/month",
        content: [
          "Scaling creative isn't about making more it's about systemizing what works. Here's the exact progression we use to take accounts from ₹1L to ₹10L+/month without breaking ROAS.",
          "At ₹1-3L/month: Focus on finding 3-5 winning creative concepts. Test aggressively (5+ variations per week). Your goal is discovering patterns what hooks, messaging angles, and formats work for your specific audience.",
          "At ₹3-7L/month: Shift from discovery to iteration. Take winning concepts and create systematic variations. Change one variable at a time: hook, messenger, setting, or offer framing. This is where most accounts stall they stop testing because something is 'working.' Working isn't scaling.",
          "At ₹7L+/month: Implement creative automation. Use your system to produce 20+ variations per week. At this scale, creative velocity is your competitive advantage. The algorithm rewards accounts that consistently feed it fresh, high-performing creative."
        ],
        callout: {
          type: "pro-tip",
          title: "Pro Tip",
          text: "At every budget level, your testing velocity should match your scaling ambition. The number one reason accounts plateau at ₹3-5L isn't budget it's creative starvation. The algorithm needs fresh content to find new pockets of demand."
        }
      }
    ],
    keyTakeaways: [
      "Creative systems (not templates) achieve 2.8x higher ROAS by making performance predictable and scalable",
      "The hook/opening frame accounts for 47% of performance variance spend your creative budget accordingly",
      "The 3-Layer Framework (Pattern Interrupt → Value Bridge → Action Trigger) structures every high-performing creative",
      "Discovery CTAs ('See how it works') outperform commitment CTAs ('Buy now') by 340% in our testing",
      "Creative starvation is the #1 reason accounts plateau your testing velocity must match your scaling ambition"
    ]
  },
  "business-development-playbook": {
    id: "business-development-playbook",
    title: "The Business Development Playbook: Beyond Cold Outreach",
    excerpt: "Cold DMs are dead. Here's how strategic business development actually works in 2026 and why most companies are doing it wrong.",
    category: "Education",
    categoryColor: "bg-amber-100 text-amber-800",
    readTime: "11 min",
    intent: "educational",
    author: { name: "Mrs. Shivani Fattepurkar", role: "CEO", initials: "SF" },
    publishedDate: "Jan 5, 2026",
    heroSubtitle: "The era of spray-and-pray outreach is over. Here's the strategic framework for building business development systems that generate compounding returns.",
    sections: [
      {
        id: "cold-outreach-dead",
        heading: "Cold Outreach Is Dead (And What Killed It)",
        content: [
          "Let's be honest: if your business development strategy involves sending 100 generic DMs and hoping for a 2% response rate, you're not doing business development. You're doing digital door-to-door sales with worse conversion rates.",
          "The average decision-maker receives 120+ unsolicited messages per week. Your carefully crafted 'I came across your profile and thought...' message is message #87 in their inbox, and they've already deleted 86 identical ones. The medium isn't the problem the approach is.",
          "What killed cold outreach wasn't spam filters or LinkedIn algorithms. It was the death of attention for generic communication. In a world of infinite content and finite attention, generic outreach is invisible by default. You don't need better scripts you need a fundamentally different approach."
        ],
        callout: {
          type: "data-point",
          title: "Data Point",
          text: "The average decision-maker receives 120+ unsolicited messages per week. Generic cold outreach has a 0.3% conversion rate strategic warm outreach has 8.7%."
        }
      },
      {
        id: "the-pipeline-architecture",
        heading: "The Pipeline Architecture: Building Before Selling",
        content: [
          "Strategic business development doesn't start with outreach it starts with positioning. Before you ever contact a prospect, they should already know who you are, what you stand for, and why you're relevant to their challenges.",
          "The pipeline architecture has four stages: (1) Visibility being present where your prospects live online, (2) Authority demonstrating expertise through content and proof, (3) Familiarity creating repeated, value-driven touchpoints, (4) Opportunity when the prospect raises their hand or you earn the right to reach out directly.",
          "Most businesses skip straight to stage 4 and wonder why it doesn't work. It's like proposing marriage to a stranger technically possible, but the odds are catastrophically against you."
        ],
        stats: [
          { label: "Generic Cold Rate", value: "0.3%", description: "conversion for spray-and-pray outreach" },
          { label: "Strategic Warm Rate", value: "8.7%", description: "conversion for pipeline-built outreach" },
          { label: "Decision-Maker msgs", value: "120+/wk", description: "unsolicited messages received" },
          { label: "Time to Pipeline", value: "30-90 days", description: "to build meaningful visibility" }
        ],
        pullQuote: "Strategic business development doesn't start with outreach it starts with positioning. Before you contact a prospect, they should already know who you are."
      },
      {
        id: "warm-outreach-framework",
        heading: "The Warm Outreach Framework",
        content: [
          "When you do reach out and you should, strategically every touchpoint must feel like the natural next step in a relationship, not the first step of a sales pitch. Here's the framework we use for our own business development.",
          "Step 1: The Value Deposit. Before asking for anything, give something valuable. Share a relevant insight, make a genuine introduction, or provide feedback on something they've publicly shared. This isn't manipulation it's relationship building. The key: it must be genuinely valuable, not a disguised pitch.",
          "Step 2: The Contextual Bridge. When you do connect your work to their challenge, do it through their context, not yours. Don't say 'we do X.' Say 'I noticed you're dealing with Y, and here's a specific perspective that might help.' Same expertise, completely different reception.",
          "Step 3: The Permission Ask. Never assume interest. Always ask for permission to continue the conversation. 'Would it be helpful if I shared more?' is infinitely more powerful than 'Let me tell you about our solution.' Permission changes the dynamic from interruption to invitation."
        ],
        callout: {
          type: "key-insight",
          title: "Key Insight",
          text: "The difference between cold and warm outreach isn't temperature it's permission. When you earn the right to be in someone's inbox, your message isn't spam. It's a welcomed conversation."
        }
      },
      {
        id: "compounding-relationships",
        heading: "Building Compounding Relationships",
        content: [
          "The real power of strategic business development isn't any single deal it's the compound interest of relationships. Every genuine connection you make creates a network effect that generates opportunities for years.",
          "Your best business development channel isn't LinkedIn, email, or events. It's your existing client relationships. A referred lead converts at 3-5x the rate of any outbound channel, costs 80% less to acquire, and has a 37% higher retention rate. Yet most companies invest less than 5% of their BD effort into referral systems.",
          "Build a referral engine, not a referral program. Programs feel transactional ('give us a name, get a gift card'). Engines feel natural ('when was the last time a client praised your work? That's a referral moment'). The best referrals don't come from asking they come from delivering work worth talking about."
        ],
        callout: {
          type: "pro-tip",
          title: "Pro Tip",
          text: "Don't build a referral program build a referral engine. Programs feel transactional. Engines feel natural. The best referrals come from delivering work worth talking about, not from asking for names."
        }
      }
    ],
    keyTakeaways: [
      "Cold outreach has a 0.3% conversion rate vs. 8.7% for strategic warm outreach the approach matters more than the script",
      "The 4-stage pipeline (Visibility → Authority → Familiarity → Opportunity) must be built before you ever reach out directly",
      "Every outreach should follow: Value Deposit → Contextual Bridge → Permission Ask never skip to the pitch",
      "Referred leads convert 3-5x better, cost 80% less, and retain 37% longer yet get <5% of BD investment",
      "Build a referral engine, not a referral program the best referrals come from delivering work worth talking about"
    ]
  }
};

export const FAQS = [
  {
    question: "What makes Vibe Create Media different from every other agency?",
    answer: "Most agencies sell hours. We sell outcomes. Our strategies are built on research frameworks, not guesswork. We don't do 'best practices' we do 'what works for your specific business.' Also, we actually return calls. That alone puts us in the top 1%.",
  },
  {
    question: "How quickly can I expect results?",
    answer: "Depends on what 'results' means to you. Performance marketing? You'll see movement in 2-4 weeks. SEO? 3-6 months of compounding growth. Branding? Immediate perception shift. We set realistic timelines because false promises are for agencies that churn clients, not retain them.",
  },
  {
    question: "Do you work with startups or only established brands?",
    answer: "Both. We've built growth systems for brands at ₹0 revenue and scaled brands past ₹100Cr. The difference is strategy and that's what we do best. If you're ambitious and willing to invest in growth, we're the right partner regardless of your current stage.",
  },
  {
    question: "What's your pricing like?",
    answer: "We're not the cheapest, and we're proud of that. Cheap agencies cost you more in wasted ad spend and missed revenue. Our pricing reflects the value we create. We'll share exact numbers on a call because context matters more than price tags.",
  },
  {
    question: "How do you measure success?",
    answer: "Revenue. Not impressions, not reach, not 'brand awareness.' We track metrics that actually impact your bank account. Every campaign, every creative, every strategy is tied to a business outcome. If it doesn't move revenue, we don't do it.",
  },
  {
    question: "What if it doesn't work?",
    answer: "Then we figure out why, pivot, and try again fast. We don't disappear when things get hard. Our retention rate is 94% because we treat problems as puzzles, not lost causes. Also, we've never had a client leave because of results. Just saying.",
  },
  {
    question: "Do you offer UGC video production?",
    answer: "It's one of our superpowers. UGC videos outperform traditional ads by up to 4x. We handle the entire pipeline strategy, creator sourcing, production, editing, and performance optimization. Scroll-stopping content that doesn't look like an ad but converts like one.",
  },
  {
    question: "Can I work with you if I'm not in India?",
    answer: "Absolutely. We work with brands globally. Time zones are a scheduling problem, not a business problem. Our communication systems and project management make remote collaboration seamless. We've never let geography limit growth.",
  },
] as const;

export const WHY_CHOOSE_US = [
  {
    number: "01",
    title: "Strategy Before Tactics",
    description: "We don't start with tools. We start with understanding your business, market, and customers. Then we build systems not campaigns.",
  },
  {
    number: "02",
    title: "Revenue-First Thinking",
    description: "Every creative, every campaign, every post is measured against one metric: did it generate revenue? Vanity metrics are for vanity agencies.",
  },
  {
    number: "03",
    title: "Full-Stack Growth",
    description: "Branding, performance, content, UGC, development under one roof. No agency handoffs. No broken telephone. One team, one strategy.",
  },
  {
    number: "04",
    title: "Data-Driven Decisions",
    description: "We test, measure, iterate, and scale. No gut feelings. No 'we've always done it this way.' Every decision is backed by data.",
  },
  {
    number: "05",
    title: "Retention Over Acquisition",
    description: "Our 94% client retention rate isn't accidental. We build long-term partnerships, not short-term invoices. Your growth is our growth.",
  },
  {
    number: "06",
    title: "Speed of Execution",
    description: "While other agencies are scheduling meetings about meetings, we're already live and optimizing. Speed is a competitive advantage we take seriously.",
  },
] as const;

export const HOW_WE_WORK = [
  {
    step: 1,
    title: "Discovery Call",
    description: "We learn your business, goals, and challenges. No sales pitch just a genuine conversation about whether we're the right fit.",
    duration: "30 minutes",
  },
  {
    step: 2,
    title: "Strategy Blueprint",
    description: "We create a custom growth strategy with clear timelines, KPIs, and milestones. No fluff just actionable plans.",
    duration: "3-5 days",
  },
  {
    step: 3,
    title: "Launch & Execute",
    description: "We hit the ground running. Campaigns go live, content gets created, systems start working. You see momentum early.",
    duration: "Week 1-2",
  },
  {
    step: 4,
    title: "Optimize & Scale",
    description: "Data flows in, we optimize aggressively. What works gets scaled. What doesn't gets pivoted. Continuous improvement, compounding results.",
    duration: "Ongoing",
  },
] as const;

export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hey Vibe Create Media,\n\nI've been studying your approach to growth and your framework resonates with where we're headed. We're at a stage where strategic marketing isn't optional it's the lever.\n\nI'd appreciate a conversation about how your team thinks about scaling brands like ours. Not a pitch a genuine dialogue.\n\nWhen works for you?"
);

export const FORM_SERVICES = [
  "Performance Marketing",
  "Branding & Identity",
  "UGC Video Creation",
  "Content Marketing",
  "Social Media Marketing",
  "Website Development",
  "Business Development",
  "Video Editing & Production",
  "Meta Ads Creatives",
] as const;

export const FORM_BUDGET_RANGES = [
  "Under ₹50K/month",
  "₹50K - ₹1L/month",
  "₹1L - ₹3L/month",
  "₹3L - ₹5L/month",
  "₹5L+/month",
] as const;

export const FORM_TIMELINES = [
  "Immediately",
  "Within 2 weeks",
  "Within a month",
  "Just exploring",
] as const;

/* ── Service Detail Data ── */

export interface ServiceProcessStep {
  step: number;
  title: string;
  description: string;
  duration: string;
}

export interface ServiceResult {
  timeframe: string;
  result: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceDifferentiator {
  title: string;
  description: string;
}

export interface ServiceDetail {
  process: ServiceProcessStep[];
  results: ServiceResult[];
  faqs: ServiceFAQ[];
  differentiators: ServiceDifferentiator[];
  budgetRange: { min: string; max: string; unit: string };
  budgetNote: string;
}

export const SERVICE_DETAIL_DATA: Record<string, ServiceDetail> = {
  "performance-marketing": {
    process: [
      { step: 1, title: "Audit & Baseline", description: "We tear apart your current ad setup tracking, creatives, audiences, funnels. No sacred cows. We find the leaks before we fix the pipes.", duration: "Week 1" },
      { step: 2, title: "Strategy & Setup", description: "Custom campaign architecture built for your business model. Server-side tracking, conversion API, audience strategy every wire connected before a single rupee is spent.", duration: "Week 2" },
      { step: 3, title: "Launch & Optimize", description: "Campaigns go live with aggressive testing velocity. 3-5 creative variations per week. We kill underperformers in 48 hours and scale winners relentlessly.", duration: "Weeks 3-4" },
      { step: 4, title: "Scale & Compound", description: "What works gets more budget. What doesn't gets pivoted. We optimize toward compounding ROAS growth not one-off wins.", duration: "Month 2+" },
    ],
    results: [
      { timeframe: "Week 1-2", result: "Tracking & Baseline", description: "Full audit complete, server-side tracking live, baseline metrics established. You'll finally see the real numbers." },
      { timeframe: "Month 1", result: "First Optimizations", description: "Initial campaigns running, winning creative identified, cost-per-acquisition dropping. Real data replaces guesswork." },
      { timeframe: "Month 2-3", result: "Scaling Phase", description: "ROAS compounding, winning audiences scaled, creative system producing consistent performers. Growth becomes predictable." },
      { timeframe: "Month 4+", result: "Compounding Growth", description: "Full-funnel optimization, retargeting engine running, LTV-informed bidding. Your ad spend is now a revenue machine." },
    ],
    faqs: [
      { question: "How quickly will I see ROI?", answer: "Most clients see positive ROAS within 2-3 weeks of launch. Full scaling happens by month 2-3. If anyone promises overnight results, they're lying but we won't make you wait months either." },
      { question: "What's your minimum ad spend requirement?", answer: "We recommend a minimum of ₹50K/month in ad spend to generate meaningful data for optimization. Below that, you're not running ads you're running experiments without enough data." },
      { question: "Do you manage both Meta and Google Ads?", answer: "Yes, and we recommend running both for most businesses. Meta for demand generation, Google for demand capture. One without the other leaves money on the table." },
      { question: "How is Vibe Create different from other performance agencies?", answer: "We measure revenue, not impressions. We implement server-side tracking on day one. We test 3-5 creatives per week minimum. And we show you the messy middle every failed test, every pivot, every data point that informs our decisions." },
    ],
    differentiators: [
      { title: "Revenue-First KPIs", description: "We don't report impressions and reach. We report ROAS, CPA, and revenue attribution the metrics that actually keep your business alive." },
      { title: "Server-Side Tracking from Day 1", description: "40% of conversions are invisible without CAPI. We implement it before your first campaign launches, so the algorithm has full data from day one." },
      { title: "Creative Testing Velocity", description: "Most agencies test 2-3 creatives per month. We test 3-5 per week. More tests = more winners = faster scaling. It's not complicated, it's just harder." },
    ],
    budgetRange: { min: "₹30K", max: "₹2L+", unit: "/month" },
    budgetNote: "Includes management fees. Ad spend is separate and scales with your growth targets.",
  },
  "branding": {
    process: [
      { step: 1, title: "Brand Discovery", description: "Deep-dive into your market, audience psychology, and competitive landscape. We find the white space your brand can own before your competitors even know it exists.", duration: "Week 1" },
      { step: 2, title: "Strategy & Positioning", description: "We define your brand's emotional shortcut the split-second association that makes people choose you without thinking. Positioning isn't about being different, it's about being the obvious choice.", duration: "Week 2" },
      { step: 3, title: "Identity Design", description: "Visual system, voice, messaging every touchpoint designed to trigger the same emotional response. Consistency isn't boring, it's trust-building.", duration: "Weeks 3-5" },
      { step: 4, title: "Brand System Delivery", description: "Complete brand guidelines, asset library, and implementation roadmap. Your brand doesn't just look great it's impossible to use incorrectly.", duration: "Week 6" },
    ],
    results: [
      { timeframe: "Week 1-2", result: "Strategy & Positioning", description: "Clear brand positioning defined, audience emotional triggers mapped, competitive white space identified. You'll know exactly who you are." },
      { timeframe: "Week 3-4", result: "Visual Identity", description: "Logo, color system, typography, and design language locked. Your brand looks like it costs 10x what you paid." },
      { timeframe: "Week 5-6", result: "Complete Brand System", description: "Full guidelines delivered, team trained, assets deployed. Every touchpoint is consistent and conversion-optimized." },
      { timeframe: "Month 2+", result: "Brand Equity Building", description: "Recognition metrics improving, consistency driving trust, brand becoming the emotional shortcut in your category." },
    ],
    faqs: [
      { question: "How long does a full rebrand take?", answer: "Full brand identity: 4-6 weeks. Brand strategy alone: 2 weeks. If someone says they can do it in a week, they're making you a logo, not building a brand." },
      { question: "Do I need a full rebrand or just a refresh?", answer: "Depends on whether your brand's problem is recognition or relevance. If people know you but don't care, it's a refresh. If they don't know you at all, it's a rebrand. We'll tell you which one honestly." },
      { question: "What's included in the brand guidelines?", answer: "Logo usage, color system, typography, photography direction, voice & tone, do's and don'ts, templates, and application examples. Enough that anyone on your team can maintain brand consistency without calling us." },
      { question: "Why not just use a logo maker?", answer: "Because a logo isn't a brand. A logo maker gives you a symbol. We give you an emotional shortcut in your audience's brain. One converts, the other just looks nice on a business card." },
    ],
    differentiators: [
      { title: "Strategy Before Pixels", description: "We don't open design software until the strategy is locked. Most agencies start designing on day one we start thinking. The result? Brands that mean something, not just look pretty." },
      { title: "Emotional Architecture", description: "We engineer the specific emotion your brand triggers. Not vague brand personality quizzes neuroscience-backed emotional shortcuts that drive purchasing decisions." },
      { title: "Idiot-Proof Guidelines", description: "Our brand systems are designed so your intern can't mess them up. Every rule, every template, every application documented and deployed." },
    ],
    budgetRange: { min: "₹75K", max: "₹3L+", unit: "one-time" },
    budgetNote: "Based on scope. Brand strategy only starts lower. Full identity system with guidelines at the higher end.",
  },
  "ugc-videos": {
    process: [
      { step: 1, title: "UGC Strategy", description: "We map your audience's scroll behavior, identify content triggers, and design the hook architecture. Every video starts with neuroscience, not guesswork.", duration: "Week 1" },
      { step: 2, title: "Creator Matching", description: "We find creators who match your audience's trust signals not the biggest followers, but the most credible voices. Authenticity can't be faked.", duration: "Week 1-2" },
      { step: 3, title: "Production Sprints", description: "Scripted but not scripted. We provide frameworks that feel natural, then let creators do what they do best be real. Batch production for efficiency.", duration: "Week 2-3" },
      { step: 4, title: "Performance Loop", description: "Every video gets tested. Winners get variations. Losers get retired. The system compounds each cycle produces better performers than the last.", duration: "Ongoing" },
    ],
    results: [
      { timeframe: "Week 1-2", result: "Strategy & Creators", description: "Content strategy locked, creator roster finalized, first scripts in production. The machine is built." },
      { timeframe: "Week 2-3", result: "First Batch Delivery", description: "First 5-10 videos delivered, edited, and ready for testing. Each with multiple hook variations for A/B testing." },
      { timeframe: "Month 1-2", result: "Performance Data", description: "Winning formats identified, CTR and CPA benchmarks established. The system starts producing consistent performers." },
      { timeframe: "Month 3+", result: "Compounding Content", description: "Content engine running at full velocity. Creative fatigue managed, fresh content always in pipeline, ROAS improving month over month." },
    ],
    faqs: [
      { question: "How many videos do you produce per month?", answer: "Typically 15-30 videos per month across 3-4 content sprints. Quality over quantity, but quantity matters for testing velocity." },
      { question: "Do you find the creators or do we?", answer: "We handle everything sourcing, vetting, contracting, and managing creators. You approve the final roster, we handle the operational nightmare." },
      { question: "What platforms do you optimize for?", answer: "Instagram Reels, TikTok, YouTube Shorts, and Facebook. Each platform gets platform-native content not one video resized five ways." },
      { question: "How do you measure UGC success?", answer: "CTR, CPA, and ROAS not views or likes. If a video gets 1M views but doesn't convert, it's a entertainment expense, not a marketing investment." },
    ],
    differentiators: [
      { title: "Neuroscience-Backed Hooks", description: "Our hook architecture is based on how the brain processes content in the first 0.5 seconds. Not guesswork cognitive science applied to scroll-stopping." },
      { title: "Creator as Channel, Not Celebrity", description: "We match creators to your audience's trust signals, not follower counts. A 5K-follower creator with the right audience beats a 500K influencer with the wrong one." },
      { title: "Creative Fatigue Management", description: "We monitor performance curves and retire creatives before they decline. Most brands run ads until they die we kill them while they're still profitable." },
    ],
    budgetRange: { min: "₹40K", max: "₹1.5L+", unit: "/month" },
    budgetNote: "Depends on video volume and creator costs. Creator fees are separate and vary by niche.",
  },
  "content-marketing": {
    process: [
      { step: 1, title: "Content Audit", description: "We audit your existing content, competitor content, and search landscape. No content strategy without data that's just creative writing with a marketing budget.", duration: "Week 1" },
      { step: 2, title: "Strategy & Calendar", description: "Keyword-driven content plan with clear business intent for every piece. Not content for content's sake content that captures demand and builds authority.", duration: "Week 2" },
      { step: 3, title: "Production Engine", description: "Articles, guides, lead magnets each optimized for search intent and conversion. Written by people who understand both SEO and persuasion.", duration: "Week 3+" },
      { step: 4, title: "Distribution & Compound", description: "Content without distribution is a tree falling in an empty forest. We distribute across channels, track performance, and double down on what compounds.", duration: "Ongoing" },
    ],
    results: [
      { timeframe: "Month 1", result: "Foundation Content", description: "Pillar content published, SEO architecture in place, lead magnets live. Your content engine is built and running." },
      { timeframe: "Month 2-3", result: "Search Momentum", description: "Initial rankings improving, organic traffic growing, lead capture activating. The compound effect starts becoming visible." },
      { timeframe: "Month 4-6", result: "Authority Building", description: "Top-3 rankings for target keywords, consistent lead flow, content becoming a revenue asset. Your articles are now salespeople." },
      { timeframe: "Month 6+", result: "Compounding Returns", description: "Content assets generating leads while you sleep. Authority established in your category. Every article is a compounding investment." },
    ],
    faqs: [
      { question: "How long until content marketing generates leads?", answer: "Lead magnets can generate leads from week 1. SEO-driven organic traffic typically takes 3-6 months to compound. Content marketing is a patience game with the highest long-term ROI." },
      { question: "How much content do you produce per month?", answer: "Typically 8-12 pieces per month a mix of long-form pillars, supporting articles, and lead magnets. Quality over quantity, but consistency is non-negotiable." },
      { question: "Do you write the content or do we?", answer: "We write everything research, writing, editing, SEO optimization. Your subject matter expertise is welcome, but you'll never need to write a word yourself." },
      { question: "Is content marketing worth it if we need leads now?", answer: "For immediate leads, pair content with performance marketing. Content builds the long-term moat; ads build the short-term bridge. Both together is the winning play." },
    ],
    differentiators: [
      { title: "Revenue-Driven Content", description: "Every piece of content has a business objective lead capture, authority building, or demand generation. No content for content's sake." },
      { title: "SEO + Persuasion Hybrid", description: "Most content is either SEO-optimized but boring, or well-written but invisible. We do both rank in search AND convert readers." },
      { title: "Compounding Asset Strategy", description: "We build content that generates returns for years, not days. Pillar content, topic clusters, and internal linking strategies that compound over time." },
    ],
    budgetRange: { min: "₹25K", max: "₹1L+", unit: "/month" },
    budgetNote: "Based on content volume and complexity. One-time strategy projects also available.",
  },
  "social-media": {
    process: [
      { step: 1, title: "Social Audit", description: "We audit your social presence, competitor activity, and audience behavior across platforms. Most brands are posting into the void we find where your audience actually lives.", duration: "Week 1" },
      { step: 2, title: "Platform Strategy", description: "Different platforms, different playbooks. We build platform-native strategies for each channel. Instagram isn't LinkedIn, and treating them the same is burning your budget.", duration: "Week 2" },
      { step: 3, title: "Content Engine", description: "Content calendar, creation, and scheduling all running on autopilot. Every post has a purpose. Every story has a strategy. Every reel has a hook.", duration: "Week 3+" },
      { step: 4, title: "Community & Growth", description: "Active community management, social listening, and growth tactics. Followers are vanity; community is an asset. We build the latter.", duration: "Ongoing" },
    ],
    results: [
      { timeframe: "Week 1-2", result: "Strategy & Setup", description: "Platform strategy locked, content pillars defined, posting schedule live. Your social presence has direction for the first time." },
      { timeframe: "Month 1", result: "Engagement Lift", description: "Engagement rates climbing, audience responding, content finding its rhythm. The algorithm starts favoring your content." },
      { timeframe: "Month 2-3", result: "Community Growth", description: "Follower growth accelerating, community engaging consistently, brand voice established. Social is now a business channel, not a billboard." },
      { timeframe: "Month 4+", result: "Revenue Channel", description: "Social driving measurable business outcomes leads, sales, loyalty. Your community is now a revenue asset." },
    ],
    faqs: [
      { question: "Which platforms should we be on?", answer: "The ones where your audience lives. Not all of them. We'll tell you which platforms matter and which are a waste of your time. Spoiler: it's probably not all five." },
      { question: "How often do you post?", answer: "Frequency depends on the platform and strategy. Typically 5-7 posts per week per platform, with daily stories. Quality > quantity, but consistency > perfection." },
      { question: "Do you handle community management?", answer: "Yes comments, DMs, mentions, and brand monitoring. We respond as your brand voice, not as an agency. Your community shouldn't know we exist." },
      { question: "Can you guarantee follower growth?", answer: "We can guarantee strategic growth followers who might actually buy from you. Anyone promising specific numbers is selling you bots or empty engagement." },
    ],
    differentiators: [
      { title: "Community Over Followers", description: "10K engaged followers outperform 100K passive ones. We build communities that buy, not audiences that scroll." },
      { title: "Platform-Native Strategy", description: "Each platform gets its own playbook. What works on LinkedIn fails on Instagram. We don't cross-post we cross-optimize." },
      { title: "Revenue-Linked Reporting", description: "We track how social drives business outcomes, not just engagement metrics. If your social isn't moving revenue, we'll tell you and fix it." },
    ],
    budgetRange: { min: "₹20K", max: "₹80K+", unit: "/month" },
    budgetNote: "Varies by platform count and content volume. Paid social management is additional.",
  },
  "web-development": {
    process: [
      { step: 1, title: "Conversion Strategy", description: "Before we write a line of code, we map the conversion journey. Every page is a funnel, every element has a purpose. Beautiful websites that don't convert are just expensive art.", duration: "Week 1" },
      { step: 2, title: "Design & Architecture", description: "Conversion-optimized design with brand consistency. Wireframes, visual design, and UX all engineered to move visitors toward action.", duration: "Weeks 2-3" },
      { step: 3, title: "Development", description: "Clean code, fast load times, SEO architecture, and responsive design. Every pixel serves a purpose. Every interaction is intentional.", duration: "Weeks 3-6" },
      { step: 4, title: "Launch & Optimize", description: "Launch isn't the end it's the beginning. We monitor, test, and optimize based on real user data. Your website gets better every month.", duration: "Week 7+" },
    ],
    results: [
      { timeframe: "Week 1-2", result: "Strategy & Wireframes", description: "Conversion strategy mapped, wireframes approved, information architecture locked. You'll see exactly how your site will convert before it's built." },
      { timeframe: "Week 3-4", result: "Design & Development", description: "Visual design approved, development in progress. You'll see your site come to life with real functionality, not just mockups." },
      { timeframe: "Week 5-8", result: "Launch", description: "Website live, analytics tracking, speed optimized. Your site is faster, more beautiful, and more functional than anything you've had before." },
      { timeframe: "Month 2+", result: "Optimization", description: "Conversion rates improving based on real user data. A/B testing, heat mapping, and continuous improvement. Your site gets better with age." },
    ],
    faqs: [
      { question: "How long does a website build take?", answer: "Landing page: 2 weeks. Full website: 6-8 weeks. E-commerce: 8-12 weeks. Rush jobs cost more and convert less good work takes time." },
      { question: "Do you use templates or custom build?", answer: "Custom design, modern frameworks. Templates limit conversion optimization we build for your specific business goals, not a generic layout." },
      { question: "Will my site be fast?", answer: "Core Web Vitals green across the board. We obsess over speed because every 100ms of load time costs you conversions. Slow sites don't rank and don't convert." },
      { question: "Do you handle ongoing maintenance?", answer: "Yes security updates, content changes, performance monitoring, and conversion optimization. Your website should get better every month, not slowly break." },
    ],
    differentiators: [
      { title: "Conversion-Engineered Design", description: "Every design decision is backed by conversion data. We don't design for awards we design for revenue. Beautiful and functional isn't an either/or." },
      { title: "Speed Obsession", description: "We treat page speed as a revenue metric, because it is. Every millisecond of load time impacts your conversion rate and SEO rankings." },
      { title: "Post-Launch Optimization", description: "Launch is day one, not the finish line. We monitor, test, and optimize based on real user behavior. Your website gets smarter over time." },
    ],
    budgetRange: { min: "₹50K", max: "₹5L+", unit: "one-time" },
    budgetNote: "Landing pages at lower end, full websites in the middle, e-commerce at the higher end.",
  },
  "business-development": {
    process: [
      { step: 1, title: "Growth Audit", description: "We map every revenue channel, partnership opportunity, and market expansion path. Most companies are sitting on growth they can't see.", duration: "Week 1-2" },
      { step: 2, title: "Opportunity Mapping", description: "We identify untapped revenue channels, strategic partnership targets, and market expansion opportunities ranked by impact and feasibility.", duration: "Week 2-3" },
      { step: 3, title: "Outreach & Negotiation", description: "We open doors you can't. Warm introductions, strategic proposals, and negotiation support. Business development is a contact sport we play to win.", duration: "Week 3+" },
      { step: 4, title: "Partnership Scaling", description: "Deals close, partnerships activate, revenue channels open. We help you scale what works and eliminate what doesn't.", duration: "Ongoing" },
    ],
    results: [
      { timeframe: "Week 1-2", result: "Growth Map", description: "Complete revenue channel map, partnership opportunities identified, market expansion paths prioritized. You'll see growth you didn't know existed." },
      { timeframe: "Month 1", result: "Outreach Pipeline", description: "Strategic outreach launched, partnership conversations started, first responses coming in. The pipeline is building." },
      { timeframe: "Month 2-3", result: "Deals in Motion", description: "Partnership proposals in negotiation, revenue channels being tested, first deals closing. Growth is becoming real." },
      { timeframe: "Month 4+", result: "Compounding Value", description: "Partnerships generating revenue, new channels scaling, strategic advantages compounding. Your business is growing from angles competitors can't replicate." },
    ],
    faqs: [
      { question: "What kind of partnerships do you source?", answer: "Strategic alliances, co-marketing deals, distribution partnerships, white-label opportunities, and revenue-share arrangements. The kind that create compounding value, not one-off transactions." },
      { question: "How is this different from sales?", answer: "Sales closes individual deals. Business development creates revenue channels partnerships and opportunities that generate compounding returns over time. One is a sprint, the other is building an engine." },
      { question: "Do you guarantee partnership outcomes?", answer: "We guarantee strategic outreach and pipeline building. Partnerships require two willing parties we can't force someone to sign. But we can make sure they want to." },
      { question: "What industries do you specialize in?", answer: "We've built partnerships across D2C, SaaS, education, healthcare, and fintech. The principles of strategic business development are universal the tactics are industry-specific." },
    ],
    differentiators: [
      { title: "Channel Thinking", description: "We don't just find partners we build revenue channels. Each partnership is designed to compound over time, not generate a one-time win." },
      { title: "Strategic Network Access", description: "Our network opens doors that cold outreach can't. Warm introductions and credibility transfers that shortcut months of relationship building." },
      { title: "Revenue-Validated Opportunities", description: "Every opportunity we present comes with a revenue model. We don't bring you meetings we bring you validated business cases." },
    ],
    budgetRange: { min: "₹40K", max: "₹1.5L+", unit: "/month" },
    budgetNote: "Plus success-based incentives for closed partnerships. Aligns our outcomes with yours.",
  },
  "video-editing": {
    process: [
      { step: 1, title: "Brief & Direction", description: "We understand your brand voice, content goals, and platform requirements before we cut a single frame. Direction before execution always.", duration: "Day 1-2" },
      { step: 2, title: "Edit & Craft", description: "Professional editing with motion graphics, color grading, and sound design. Every second is engineered to hold attention and drive action.", duration: "Day 2-4" },
      { step: 3, title: "Review & Refine", description: "You review, we refine. Two rounds of revisions included. We don't stop until you're proud of every frame.", duration: "Day 4-5" },
      { step: 4, title: "Deliver & Distribute", description: "Final assets delivered in every format you need. Platform-optimized, ready to deploy. Plus performance notes for your next batch.", duration: "Day 5" },
    ],
    results: [
      { timeframe: "Day 1-2", result: "Creative Direction", description: "Edit direction locked, brand guidelines applied, first cuts in progress. You'll see the vision before the final product." },
      { timeframe: "Day 3-5", result: "Video Delivery", description: "Professionally edited video delivered with revisions incorporated. Ready to post, ready to run, ready to convert." },
      { timeframe: "Week 2+", result: "Performance Data", description: "For ongoing clients: performance data informing next edits. Each video gets better because we learn what your audience responds to." },
      { timeframe: "Month 2+", result: "Content Engine", description: "Consistent video output, improving performance, scroll-stopping content on demand. Your video engine runs like clockwork." },
    ],
    faqs: [
      { question: "What's the turnaround time?", answer: "Single video: 3-5 business days. Batch of 5: 7-10 days. Rush delivery available at premium. Good video takes time great video takes a little more." },
      { question: "Do you add motion graphics and effects?", answer: "Yes captions, lower thirds, transitions, motion graphics, color grading, and sound design. Every tool in the box to make your content un-skippable." },
      { question: "Do we need to provide raw footage?", answer: "Yes, unless we're also handling production. We can work with smartphone footage, professional shoots, or anything in between. It's the edit that makes the magic." },
      { question: "What platforms do you edit for?", answer: "All of them Reels, TikTok, YouTube (long and short), LinkedIn, Twitter/X. Each gets platform-native pacing and formatting." },
    ],
    differentiators: [
      { title: "Attention Engineering", description: "We edit for retention, not aesthetics. Every cut, transition, and effect is designed to hold attention and drive action. Pretty videos that lose viewers are failures." },
      { title: "Platform-Native Output", description: "We don't resize one video for five platforms. Each platform gets content optimized for its specific viewing behavior and algorithm preferences." },
      { title: "Performance-Informed Editing", description: "For ongoing clients, we use performance data to inform editing decisions. What works gets doubled down. What doesn't gets evolved." },
    ],
    budgetRange: { min: "₹5K", max: "₹30K+", unit: "per video" },
    budgetNote: "Per-video pricing. Ongoing retainer packages available at reduced per-video rates.",
  },
  "meta-ads": {
    process: [
      { step: 1, title: "Creative Strategy", description: "We analyze your audience's scroll behavior, identify thumb-stopping triggers, and design creative concepts that break through the noise. Data first, design second.", duration: "Week 1" },
      { step: 2, title: "Creative Production", description: "Ad creatives designed for every stage of the funnel awareness, consideration, conversion. Each concept gets multiple variations for A/B testing.", duration: "Week 1-2" },
      { step: 3, title: "Testing Framework", description: "Systematic A/B testing with clear hypotheses. We test hooks, copy, visuals, and CTAs simultaneously. Fast learning, faster iteration.", duration: "Week 2-3" },
      { step: 4, title: "Optimize & Scale", description: "Winners get scaled, losers get killed. We implement creative fatigue monitoring and develop your creative testing velocity engine.", duration: "Ongoing" },
    ],
    results: [
      { timeframe: "Week 1", result: "Creative Batch", description: "First batch of ad creatives delivered 10-15 variations across concepts. Ready to test, ready to learn." },
      { timeframe: "Week 2-3", result: "Testing & Learning", description: "A/B tests running, performance data flowing, winning concepts identified. The algorithm is getting smarter about your audience." },
      { timeframe: "Month 1-2", result: "Optimized Creatives", description: "Winning creative formulas locked, CTRs improving, CPAs dropping. Your ads are outperforming the competition." },
      { timeframe: "Month 3+", result: "Creative Engine", description: "Consistent creative output, systematic testing, and compounding performance. Your ad account is a creative machine." },
    ],
    faqs: [
      { question: "How many ad creatives do you produce?", answer: "Typically 10-15 creatives per batch, with 2-3 batches per month. Volume matters because creative fatigue is real your ads stop working faster than you think." },
      { question: "Do you write the ad copy too?", answer: "Yes headlines, primary text, descriptions, and CTAs. Copy and design work together. Splitting them between teams is how you get pretty ads that don't convert." },
      { question: "Do you manage the ad campaigns too?", answer: "Creative-focused engagement: we design and test creatives. If you need full campaign management, our Performance Marketing service covers that." },
      { question: "What's your creative testing process?", answer: "Hypothesis-driven A/B testing. We test one variable at a time hook, copy, visual, CTA so we know exactly what drives performance. Not spray and pray." },
    ],
    differentiators: [
      { title: "Hook Architecture System", description: "We engineer the first 0.5 seconds of every ad using cognitive science principles. Your ad doesn't just stop thumbs it holds attention through the entire message." },
      { title: "Creative Fatigue Monitoring", description: "We track performance curves and refresh creatives before they decline. Most brands run ads until they die we kill them at peak performance." },
      { title: "Full-Funnel Creative", description: "Different creatives for awareness, consideration, and conversion. One-size-fits-all creative is why most ad accounts underperform." },
    ],
    budgetRange: { min: "₹25K", max: "₹1L+", unit: "/month" },
    budgetNote: "Includes creative production and testing. Ad spend is separate.",
  },
};

export const FORM_CALL_TIMES = [
  "9:00 AM - 11:00 AM",
  "11:00 AM - 1:00 PM",
  "2:00 PM - 4:00 PM",
  "4:00 PM - 6:00 PM",
  "6:00 PM - 8:00 PM",
] as const;

/* ── Case Study Detail ── */
export interface CaseStudyResult {
  metric: string;
  before: string;
  after: string;
  improvement: string;
}

export interface CaseStudyHighlight {
  title: string;
  description: string;
}

export interface CaseStudyDetail {
  client: string;
  industry: string;
  services: string[];
  challenge: string;
  strategy: string[];
  results: CaseStudyResult[];
  highlights: CaseStudyHighlight[];
  testimonial: { quote: string; author: string; role: string };
  duration: string;
}

export const CASE_STUDY_DETAIL_DATA: Record<string, CaseStudyDetail> = {
  "all-works-immigration": {
    client: "All Works Immigration",
    industry: "Immigration & Visa Consultancy",
    duration: "6 months",
    services: ["Performance Marketing", "Social Media Marketing", "Website Development", "Content Marketing"],
    challenge: "All Works Immigration was a trusted offline consultancy struggling to generate consistent leads online. Their existing digital presence was minimal no structured ad campaigns, outdated website, and zero social proof. In a high-trust industry like immigration, lack of online credibility was directly costing them clients.",
    strategy: [
      "Redesigned their website with conversion-focused landing pages and trust-building elements client testimonials, success rate counters, and clear service pathways.",
      "Launched targeted Meta & Google ad campaigns focusing on high-intent keywords like 'Canada PR consultant' and 'Australia visa expert' with location-based targeting.",
      "Built a social media presence centered on client success stories, visa approval announcements, and educational content about immigration processes.",
      "Implemented a lead nurturing system with WhatsApp integration for instant query resolution, reducing response time from 24 hours to under 30 minutes.",
    ],
    results: [
      { metric: "Monthly Leads", before: "12", after: "85", improvement: "+608%" },
      { metric: "Cost Per Lead", before: "₹2,800", after: "₹680", improvement: "-76%" },
      { metric: "Website Conversion Rate", before: "0.8%", after: "4.2%", improvement: "+425%" },
      { metric: "Social Media Following", before: "450", after: "8,200", improvement: "+1,722%" },
    ],
    highlights: [
      { title: "Lead Engine Built From Scratch", description: "Went from virtually no online leads to 85 qualified inquiries per month through a combination of targeted ads, optimized landing pages, and instant WhatsApp response integration." },
      { title: "Trust Architecture", description: "In an industry where trust is everything, we built social proof systems client testimonials, visa approval showcases, and transparent process guides that turned skeptics into applicants." },
      { title: "76% Cost Reduction", description: "By refining targeting, improving creative quality, and implementing conversion tracking, we slashed the cost per qualified lead from ₹2,800 to just ₹680." },
    ],
    testimonial: { quote: "Before Vibe Create Media, we were invisible online. Now we have more inquiries than we can handle and they're qualified leads, not tire-kickers. The ROI has been phenomenal.", author: "Rajesh Sharma", role: "Director, All Works Immigration" },
  },
  "andaman-bliss": {
    client: "Andaman Bliss",
    industry: "Travel & Tourism",
    duration: "4 months",
    services: ["Performance Marketing", "Social Media Marketing", "UGC Video Creation", "Branding & Identity"],
    challenge: "Andaman Bliss had incredible destinations but zero digital visibility. They were losing bookings to competitors with inferior offerings but better online presence. Their social media was inactive, they had no ad strategy, and their brand identity didn't capture the paradise experience they offered.",
    strategy: [
      "Crafted a visual brand identity that captured the essence of the Andaman Islands turquoise waters, pristine beaches, and unforgettable experiences across all touchpoints.",
      "Launched UGC-first ad campaigns featuring real traveler experiences, drone footage of properties, and authentic vacation moments that outperformed stock-style content by 3x.",
      "Built an Instagram-first content strategy with daily stories, reels, and carousel posts showcasing destinations, guest reviews, and limited-time offers.",
      "Implemented a retargeting funnel that captured visitors who browsed but didn't book, with dynamic ads showing the specific properties they viewed.",
    ],
    results: [
      { metric: "Monthly Bookings", before: "18", after: "94", improvement: "+422%" },
      { metric: "ROAS", before: "0.6x", after: "4.2x", improvement: "+600%" },
      { metric: "Instagram Engagement", before: "1.2%", after: "8.7%", improvement: "+625%" },
      { metric: "Website Traffic", before: "2,100/mo", after: "28,000/mo", improvement: "+1,233%" },
    ],
    highlights: [
      { title: "Paradise Sells Itself With The Right Lens", description: "By shifting from generic travel imagery to authentic UGC and real guest experiences, we turned their natural advantage into a booking machine. The Andamans are beautiful we just made sure people could feel it through their screens." },
      { title: "4.2x ROAS on Travel Ads", description: "Travel is notoriously competitive on Meta. By combining UGC creatives with precise interest targeting and lookalike audiences, we achieved a ROAS that most travel brands only dream of." },
      { title: "From Ghost Town to 28K Monthly Visitors", description: "Through a combination of SEO, social content, and paid campaigns, website traffic grew 13x turning a digital ghost town into a thriving booking platform." },
    ],
    testimonial: { quote: "We knew our destinations were incredible, but nobody else did. Vibe Create Media didn't just market us they made people feel like they were already on the island. Our bookings have never been this high.", author: "Vikram Patel", role: "Founder, Andaman Bliss" },
  },
  "thinklygold": {
    client: "ThinklyGold",
    industry: "Finance & Gold Investment",
    duration: "5 months",
    services: ["Performance Marketing", "Content Marketing", "Social Media Marketing", "Branding & Identity"],
    challenge: "ThinklyGold was entering a crowded gold investment market dominated by established players. They needed to build trust from scratch, educate their audience on digital gold investment, and acquire users in a space where skepticism is the default. Zero brand recognition and a highly competitive CPC landscape made this a significant challenge.",
    strategy: [
      "Developed a trust-first brand identity emphasizing security, transparency, and regulatory compliance critical in the financial sector where credibility is currency.",
      "Created an educational content engine with blog posts, video explainers, and social content that demystified digital gold investment and positioned ThinklyGold as the knowledgeable guide.",
      "Launched performance campaigns targeting high-intent audiences searching for gold investment options, with ad creatives focused on trust signals and simplified onboarding.",
      "Built a referral program and social proof system where existing users' success stories became the primary acquisition channel, reducing dependency on paid media over time.",
    ],
    results: [
      { metric: "User Signups", before: "320", after: "4,800", improvement: "+1,400%" },
      { metric: "Cost Per Acquisition", before: "₹1,200", after: "₹340", improvement: "-72%" },
      { metric: "Content Engagement Rate", before: "0.4%", after: "6.1%", improvement: "+1,425%" },
      { metric: "Trust Score (Survey)", before: "2.1/10", after: "7.8/10", improvement: "+271%" },
    ],
    highlights: [
      { title: "Trust as a Growth Strategy", description: "In finance, trust isn't nice-to-have it's the product. We built ThinklyGold's entire growth engine around credibility: regulatory badges, transparent pricing, real user testimonials, and educational content that proved expertise before asking for signups." },
      { title: "72% Lower Acquisition Cost", description: "By shifting from broad awareness campaigns to high-intent search targeting and referral-driven growth, we dramatically reduced acquisition costs while improving user quality." },
      { title: "1,400% Signup Growth", description: "From 320 to 4,800 monthly signups in five months achieved through a combination of educational content, trust-building, and precise performance campaigns." },
    ],
    testimonial: { quote: "Building trust in the financial space is notoriously hard. Vibe Create Media didn't just run ads they built our credibility from the ground up. Users now come to us because they trust us, not because of a discount code.", author: "Amit Kulkarni", role: "Co-founder, ThinklyGold" },
  },
  "room-hug": {
    client: "Room Hug",
    industry: "Hospitality & Accommodation",
    duration: "3 months",
    services: ["Performance Marketing", "UGC Video Creation", "Social Media Marketing", "Website Development"],
    challenge: "Room Hug was a new hospitality platform struggling to get property listings and bookings in a market dominated by established aggregators. With limited budget and zero brand awareness, they needed to quickly acquire both property owners (supply) and travelers (demand) to create a functional marketplace.",
    strategy: [
      "Built a dual-sided marketing approach separate campaigns for property owners (supply) and travelers (demand) each with tailored messaging, creative, and funnel optimization.",
      "Created UGC-style content featuring real properties and guest experiences that felt authentic and relatable, avoiding the polished-but-empty look of competitor platforms.",
      "Launched hyper-local ad campaigns targeting specific cities and neighborhoods where Room Hug had initial listings, creating density before expanding to new markets.",
      "Developed a referral system for property owners where satisfied guests became acquisition channels, reducing CAC over time through organic word-of-mouth.",
    ],
    results: [
      { metric: "Property Listings", before: "24", after: "310", improvement: "+1,192%" },
      { metric: "Monthly Bookings", before: "8", after: "67", improvement: "+738%" },
      { metric: "ROAS", before: "0.4x", after: "3.6x", improvement: "+800%" },
      { metric: "App Downloads", before: "180", after: "5,400", improvement: "+2,900%" },
    ],
    highlights: [
      { title: "Marketplace Momentum", description: "The hardest part of any marketplace is getting both sides moving simultaneously. Our dual-sided approach created a virtuous cycle more listings attracted more travelers, and more bookings attracted more property owners." },
      { title: "3.6x ROAS on a Budget", description: "With a limited budget, every rupee had to work. By focusing on hyper-local campaigns and UGC-style creatives that felt authentic, we achieved a ROAS that competing platforms spend 10x more to match." },
      { title: "2,900% App Download Growth", description: "From 180 to 5,400 monthly downloads through a combination of targeted app install campaigns, social proof, and referral incentives that turned users into promoters." },
    ],
    testimonial: { quote: "Starting a hospitality platform from scratch seemed impossible. Vibe Create Media didn't just get us users they built us a marketplace. Property owners and travelers now find each other on Room Hug, and that's all we wanted.", author: "Sneha Deshmukh", role: "CEO, Room Hug" },
  },
  "story-buzz": {
    client: "Story Buzz",
    industry: "Content Studio & Media",
    duration: "4 months",
    services: ["Performance Marketing", "UGC Video Creation", "Content Marketing", "Social Media Marketing"],
    challenge: "Story Buzz was a talented content studio that couldn't market itself. Despite producing exceptional work for clients, their own brand was invisible online. They had no inbound leads, relied entirely on referrals, and were leaving significant revenue on the table. The cobbler's children had no shoes.",
    strategy: [
      "Developed a content marketing strategy that turned Story Buzz's own work into their best marketing asset case study videos, behind-the-scenes content, and creative breakdowns that showcased expertise while providing genuine value.",
      "Launched a UGC-first social media strategy where their team's creative process became the content, attracting both potential clients and creative talent.",
      "Built a lead generation funnel using performance marketing targeting brands searching for content production and video editing services, with portfolio-driven landing pages.",
      "Implemented a 'show, don't tell' approach instead of claiming expertise, every piece of content demonstrated it, from script breakdowns to editing tutorials to final product showcases.",
    ],
    results: [
      { metric: "Monthly Inbound Leads", before: "3", after: "42", improvement: "+1,300%" },
      { metric: "Instagram Followers", before: "890", after: "12,400", improvement: "+1,293%" },
      { metric: "Revenue Growth", before: "₹3.2L/mo", after: "₹11.8L/mo", improvement: "+269%" },
      { metric: "Content Engagement Rate", before: "0.8%", after: "7.4%", improvement: "+825%" },
    ],
    highlights: [
      { title: "The Studio That Finally Marketed Itself", description: "We turned Story Buzz's biggest irony producing great content for others but none for themselves into their competitive advantage. Every piece of self-promotional content was also a portfolio piece, proving expertise while generating leads." },
      { title: "1,300% Lead Growth", description: "From 3 inbound leads to 42 per month through a combination of performance marketing, content-driven authority building, and portfolio-first landing pages." },
      { title: "₹3.2L to ₹11.8L Monthly Revenue", description: "By systematizing inbound lead generation and building authority through content, Story Buzz nearly quadrupled their monthly revenue in just four months." },
    ],
    testimonial: { quote: "We spent years making other brands look good while our own presence was embarrassing. Vibe Create Media fixed that and in the process, they taught us that the best marketing for a content studio is simply showing your best work.", author: "Nikhil Joshi", role: "Founder, Story Buzz" },
  },
};
