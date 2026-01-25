export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    category: 'insurance' | 'solar' | 'travel' | 'business';
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
  