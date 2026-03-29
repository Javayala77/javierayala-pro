export type BlogPost = {
  slug: string
  title: string
  date: string
  description: string
  category: string
  readTime: string
  content: string
}

export const posts: BlogPost[] = [
  {
    slug: "how-roofers-get-more-leads-from-google",
    title: "How Roofers Get More Leads from Google (Without Paying for Every Click)",
    date: "2026-03-29",
    description: "Most roofing contractors rely 100% on paid ads for leads. Here's the organic strategy that gets you calls from Google Maps and search — for free — month after month.",
    category: "Local SEO",
    readTime: "6 min read",
    content: `
<p>If you're a roofing contractor, you already know the game: someone's roof gets damaged, they grab their phone, type "roofer near me" or "roof repair [city]" — and whoever shows up first gets the call.</p>

<p>The problem is that most roofers are only showing up in the paid ads section at the top. The moment they stop paying, they disappear. Meanwhile, the organic results and the Google Maps pack underneath are sending free leads to competitors every single day.</p>

<p>This guide breaks down exactly how to get your roofing business into those spots — and keep it there.</p>

<h2>Why Google Maps Is the #1 Opportunity for Roofers Right Now</h2>

<p>When someone searches "roof repair near me" or "roofing contractor [city]", Google shows three things:</p>

<ol>
<li>Paid ads (Google Ads)</li>
<li>The Local Pack — 3 businesses with a map</li>
<li>Organic website results</li>
</ol>

<p>The Local Pack (position 2) gets roughly <strong>44% of all clicks</strong> for local searches. That's nearly half the people searching — clicking on just three businesses. And it costs you nothing per click once you're there.</p>

<p>Most roofing contractors don't optimize for it at all. That's your opportunity.</p>

<h2>Step 1: Treat Your Google Business Profile Like a Social Media Account</h2>

<p>This is where most roofers leave money on the table. They set up their Google Business Profile once, fill in the basics, and never touch it again.</p>

<p>Google's local algorithm rewards activity. Businesses that post consistently, respond to reviews, add photos, and update their services regularly rank significantly higher than static profiles.</p>

<p>Here's what you need to do every week:</p>

<ul>
<li><strong>Post at least 3-5 times per week</strong> — completed jobs with photos, tips, seasonal content ("Is your roof ready for storm season?"), before/afters</li>
<li><strong>Respond to every review within 24 hours</strong> — both positive and negative</li>
<li><strong>Add photos regularly</strong> — real job photos outperform stock images significantly</li>
<li><strong>Keep your hours, services, and service area updated</strong></li>
</ul>

<p>Most contractors don't have time for this. That's exactly why automating it gives you a competitive edge — you're doing what your competitors can't sustain manually.</p>

<h2>Step 2: Get More Reviews (The Right Way)</h2>

<p>Reviews are one of the strongest ranking signals for Google Maps. The businesses in the top 3 almost always have more reviews, more recent reviews, and higher ratings than those below them.</p>

<p>The most effective system:</p>

<ol>
<li>Finish the job</li>
<li>Send the customer a WhatsApp or SMS message: "Thanks for choosing us! If you're happy with the work, it would mean a lot if you left us a quick Google review — here's the direct link: [link]"</li>
<li>Follow up once 3 days later if they haven't left one</li>
</ol>

<p>That's it. No complicated software needed. Contractors who implement this system consistently see 5-10 new reviews per month. Within 90 days, they're outranking competitors who've been in business for years.</p>

<h2>Step 3: Publish SEO Content That Ranks for Your City</h2>

<p>The organic results below the map pack are driven by your website's content. And here's what almost no roofing contractor is doing: publishing blog posts targeting local keywords.</p>

<p>Examples of posts that rank and convert:</p>

<ul>
<li>"Average roof replacement cost in [City] 2025"</li>
<li>"Best roofing contractors in [City] — what to look for"</li>
<li>"How to file a roof insurance claim in [State]"</li>
<li>"Signs you need a new roof vs. a repair"</li>
<li>"How long does a roof replacement take in [City]?"</li>
</ul>

<p>These posts target people who are researching before they call. When your site shows up with the answer to their question, you become the authority before they've even picked up the phone.</p>

<p>Publishing one well-optimized post per week compounds over time. 12 posts in 3 months. 52 posts in a year. Each one is a permanent asset bringing you organic traffic indefinitely.</p>

<h2>Step 4: Build Local Citations</h2>

<p>A citation is any mention of your business name, address, and phone number (NAP) on other websites. Google uses consistency of citations to verify that your business is legitimate and local.</p>

<p>Make sure you're listed — with consistent information — on:</p>

<ul>
<li>Yelp</li>
<li>Angi (formerly Angie's List)</li>
<li>HomeAdvisor</li>
<li>Houzz</li>
<li>BBB (Better Business Bureau)</li>
<li>Nextdoor</li>
<li>Your local Chamber of Commerce</li>
</ul>

<p>Inconsistent NAP data (different phone numbers, old addresses) actively hurts your rankings. Audit these listings and make sure everything matches your Google Business Profile exactly.</p>

<h2>The Compounding Effect</h2>

<p>Here's what most contractors don't understand about organic SEO: it's not linear, it's exponential.</p>

<p>Month 1-2: You're building momentum. Not many visible changes.</p>
<p>Month 3: Rankings start moving. A few calls coming in from Google Maps.</p>
<p>Month 4-6: You're in the top 3 for multiple local keywords. Call volume doubles.</p>
<p>Month 6+: The system is self-reinforcing. More reviews → higher ranking → more calls → more jobs → more reviews.</p>

<p>The contractors who commit to this for 90 days consistently outperform competitors who've been running Google Ads for years — at a fraction of the cost.</p>

<h2>The Problem: Doing This Consistently Takes Time</h2>

<p>Everything in this guide works. The challenge is execution. Posting to Google Business 5 times a week, publishing a blog post every week, managing reviews, monitoring rankings — it's 5-10 hours of work per week that most roofing contractors simply don't have.</p>

<p>That's exactly why we built an automated system that handles all of it. Daily GMB posts, weekly SEO blog content, review follow-up sequences, monthly rankings reports — done for you, automatically, while you're on the roof doing actual work.</p>

<p>If you want to see what this would look like for your specific market, message us on WhatsApp. We'll check your current Google rankings for free and show you exactly what's possible in your area.</p>
    `.trim(),
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug)
}

export function getAllPosts(): BlogPost[] {
  return [...posts].sort((a, b) => (a.date > b.date ? -1 : 1))
}
