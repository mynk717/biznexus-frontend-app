export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    category: 'insurance' | 'solar' | 'travel' | 'business' | 'automotive' | 'real-estate';
    tags: string[];
    author: {
      name: string;
      avatar?: string;
    };
    publishedAt: string;
    imageUrl?: string;
    readTime: number;
  }
  
  export const blogPosts: BlogPost[] = [
    {
      id: '4',
      title: 'Raipur Used Car Buying Guide: Avoiding Loan Traps & RC Scams',
      slug: 'raipur-used-car-buying-guide-2026',
      excerpt: 'Essential checklist for buying a pre-owned car in Raipur. Learn how to verify RTO records and avoid undisclosed loan liabilities.',
      content: `
        <h2>The Growing Used Car Market in Raipur</h2>
        <p>Raipur's pre-owned car market is booming, but it comes with risks. Whether you are buying from a dealer in Telibandha or a private seller in Samta Colony, verification is key.</p>
        
        <h2>Crucial Verification Steps</h2>
        <ul>
          <li><strong>Check for Hypothecation:</strong> Ensure the car is free from any active bank loans.</li>
          <li><strong>RC Transfer (CG RTO):</strong> Follow the latest Chhattisgarh RTO guidelines for a smooth ownership transfer.</li>
          <li><strong>Insurance Continuity:</strong> Verify if the TATA AIG or existing insurance is transferable.</li>
        </ul>
        
        <h2>How to Avoid Scams</h2>
        <p>Never pay a full amount before verifying the engine and chassis numbers against the Vahan database...</p>
      `,
      category: 'automotive',
      tags: ['used cars', 'Raipur', 'RTO Chhattisgarh', 'buying guide'],
      author: {
        name: 'MDNetwork Automotive Team'
      },
      publishedAt: '2026-05-18',
      imageUrl: '/images/blog/used-car-raipur-guide.jpg',
      readTime: 10
    },
    {
      id: '5',
      title: 'Top Residential Plots in Raipur: RERA Verification & ROI Analysis',
      slug: 'top-residential-plots-raipur-2026',
      excerpt: 'Looking for the best plots in Raipur? Our 2026 guide covers top localities, RERA verification tips, and future growth potential.',
      content: `
        <h2>Why Invest in Raipur Real Estate Now?</h2>
        <p>With infrastructure expanding towards Naya Raipur and GE Road, residential plots are seeing significant appreciation...</p>
        
        <h2>Top Areas to Consider</h2>
        <ul>
          <li><strong>Naya Raipur (Atal Nagar):</strong> Planned development with world-class amenities.</li>
          <li><strong>Vidhan Sabha Road:</strong> The new hub for premium residential colonies.</li>
          <li><strong>Dhamtari Road:</strong> Rapidly developing with affordable housing options.</li>
        </ul>
        
        <h2>RERA Verification: Your Safety Net</h2>
        <p>Before investing, always check the RERA Chhattisgarh website to ensure the project is registered and compliant...</p>
      `,
      category: 'real-estate',
      tags: ['real estate', 'Raipur plots', 'RERA Chhattisgarh', 'investment'],
      author: {
        name: 'MDNetwork Real Estate Team'
      },
      publishedAt: '2026-05-18',
      imageUrl: '/images/blog/raipur-real-estate-guide.jpg',
      readTime: 12
    },
    {
      id: '1',
      title: 'Complete Guide to International Travel Insurance in 2026',
      slug: 'international-travel-insurance-guide-2026',
      excerpt: 'Everything you need to know about choosing the right international travel insurance plan for your overseas trip.',
      content: `
        <h2>Why Travel Insurance is Essential</h2>
        <p>International travel insurance protects you from unexpected medical emergencies, trip cancellations, lost baggage, and more...</p>
        
        <h2>Types of Coverage</h2>
        <ul>
          <li><strong>Medical Coverage:</strong> Emergency medical treatment abroad</li>
          <li><strong>Trip Cancellation:</strong> Non-refundable expenses if trip is cancelled</li>
          <li><strong>Baggage Loss:</strong> Reimbursement for lost or stolen luggage</li>
          <li><strong>Personal Liability:</strong> Coverage for accidents causing injury to others</li>
        </ul>
        
        <h2>How to Choose the Right Plan</h2>
        <p>Consider these factors when selecting travel insurance...</p>
      `,
      category: 'insurance',
      tags: ['travel insurance', 'international travel', 'TATA AIG'],
      author: {
        name: 'MDNetwork Team'
      },
      publishedAt: '2026-01-20',
      imageUrl: '/images/blog/tata-aig-health-insurance-family.jpg',
      readTime: 8
    },
    {
      id: '2',
      title: 'Schengen Visa Travel Insurance Requirements 2026',
      slug: 'schengen-visa-travel-insurance-requirements',
      excerpt: 'Complete guide to travel insurance requirements for Schengen visa application from India.',
      content: `
        <h2>What is Schengen Travel Insurance?</h2>
        <p>Schengen travel insurance is mandatory for all Indian travelers applying for a Schengen visa...</p>
        
        <h2>Minimum Coverage Requirements</h2>
        <p>Your travel insurance must provide minimum coverage of €30,000 (approximately $35,000)...</p>
      `,
      category: 'travel',
      tags: ['schengen visa', 'europe travel', 'visa requirements'],
      author: {
        name: 'MDNetwork Team'
      },
      publishedAt: '2026-01-18',
      imageUrl: '/images/blog/benefits-seo-raipur-business.jpg',
      readTime: 6
    },
    {
      id: '3',
      title: 'Solar Energy Benefits for Raipur Homes in 2026',
      slug: 'solar-energy-benefits-raipur-2026',
      excerpt: 'Discover how solar panels can reduce your electricity bills and environmental impact in Raipur.',
      content: `
        <h2>Why Solar Makes Sense in Chhattisgarh</h2>
        <p>Chhattisgarh receives abundant sunlight throughout the year, making it ideal for solar installations...</p>
        
        <h2>Government Subsidies Available</h2>
        <p>The central and state governments offer attractive subsidies for residential solar installations...</p>
      `,
      category: 'solar',
      tags: ['solar energy', 'Raipur', 'renewable energy', 'subsidies'],
      author: {
        name: 'MDNetwork Team'
      },
      publishedAt: '2026-01-15',
      imageUrl: '/images/blog/solar-benefits-raipur.jpg',
      readTime: 7
    }
  ];
  
  export const getPostBySlug = (slug: string): BlogPost | undefined => {
    return blogPosts.find(post => post.slug === slug);
  };
  
  export const getPostsByCategory = (category: string): BlogPost[] => {
    return blogPosts.filter(post => post.category === category);
  };
  
  export const getAllPosts = (): BlogPost[] => {
    return blogPosts.sort((a, b) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  };
  