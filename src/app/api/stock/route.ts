import { NextResponse } from 'next/server';

interface StockPhoto {
  id: string;
  url: string;
  thumb: string;
  author: string;
  link: string;
  category: string;
  keywords: string[];
}

const STOCK_PHOTOS: StockPhoto[] = [
  // COFFEE & CAFE & FOOD
  {
    id: 'c1',
    url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200',
    thumb: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=400',
    author: 'Nathan Dumlao',
    link: 'https://unsplash.com/photos/Y333H1F1rCI',
    category: 'coffee',
    keywords: ['coffee', 'cafe', 'bar', 'cup', 'beans', 'mug', 'drink', 'latte', 'northwood']
  },
  {
    id: 'c2',
    url: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1200',
    thumb: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=400',
    author: 'Tyler Nix',
    link: 'https://unsplash.com/photos/yYlh153gTFE',
    category: 'coffee',
    keywords: ['coffee', 'latte', 'art', 'cup', 'drink', 'barista', 'espresso']
  },
  {
    id: 'c3',
    url: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=1200',
    thumb: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=400',
    author: 'Clay Banks',
    link: 'https://unsplash.com/photos/hwLAI50Yuyg',
    category: 'coffee',
    keywords: ['coffee', 'pour', 'drip', 'brew', 'drink', 'kettle']
  },
  {
    id: 'c4',
    url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200',
    thumb: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=400',
    author: 'Garan de Bruin',
    link: 'https://unsplash.com/photos/8tY1J2_c3nc',
    category: 'coffee',
    keywords: ['coffee', 'espresso', 'machine', 'extraction', 'barista', 'cafe']
  },
  {
    id: 'c5',
    url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200',
    thumb: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=400',
    author: 'Janko Ferlic',
    link: 'https://unsplash.com/photos/sf_1Z1JK1hc',
    category: 'coffee',
    keywords: ['cafe', 'interior', 'cozy', 'restaurant', 'tables', 'ambience']
  },
  {
    id: 'c6',
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200',
    thumb: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=400',
    author: 'Kael Bloom',
    link: 'https://unsplash.com/photos/3m5s11_1hc0',
    category: 'food',
    keywords: ['restaurant', 'dining', 'food', 'tables', 'bar', 'lunch', 'dinner']
  },
  {
    id: 'c7',
    url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200',
    thumb: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=400',
    author: 'Chad Montano',
    link: 'https://unsplash.com/photos/l9_1hc_4jhc',
    category: 'food',
    keywords: ['food', 'dish', 'plate', 'steak', 'meal', 'delicious', 'gourmet']
  },
  {
    id: 'c8',
    url: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=1200',
    thumb: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=400',
    author: 'Ella Olsson',
    link: 'https://unsplash.com/photos/oB2_1hc_mhc',
    category: 'food',
    keywords: ['food', 'platter', 'salad', 'salmon', 'healthy', 'eating', 'spread']
  },

  // LANDSCAPING & NATURE & GARDEN
  {
    id: 'n1',
    url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200',
    thumb: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400',
    author: 'Petarose',
    link: 'https://unsplash.com/photos/1hc_Gsk9',
    category: 'nature',
    keywords: ['landscaping', 'lawn', 'mow', 'grass', 'gardening', 'greenscape', 'yard']
  },
  {
    id: 'n2',
    url: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?q=80&w=1200',
    thumb: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?q=80&w=400',
    author: 'Kari Shea',
    link: 'https://unsplash.com/photos/1hc_1hck',
    category: 'nature',
    keywords: ['garden', 'plants', 'flowers', 'greenhouse', 'potted', 'botanical']
  },
  {
    id: 'n3',
    url: 'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?q=80&w=1200',
    thumb: 'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?q=80&w=400',
    author: 'Sebastian Unrau',
    link: 'https://unsplash.com/photos/sp-p7V1JK1M',
    category: 'nature',
    keywords: ['nature', 'forest', 'trees', 'mist', 'woods', 'sunlight', 'fog']
  },
  {
    id: 'n4',
    url: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1200',
    thumb: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=400',
    author: 'Filip Urban',
    link: 'https://unsplash.com/photos/sf-p7V1J',
    category: 'nature',
    keywords: ['garden', 'lawn', 'backyard', 'house', 'flowers', 'landscaping']
  },
  {
    id: 'n5',
    url: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1200',
    thumb: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=400',
    author: 'Sven-Erik Arndt',
    link: 'https://unsplash.com/photos/Q1J2_c3n',
    category: 'nature',
    keywords: ['nature', 'mountain', 'landscape', 'green', 'valley', 'hills', 'sky']
  },
  {
    id: 'n6',
    url: 'https://images.unsplash.com/photo-1533038590840-1cde6b66b706?q=80&w=1200',
    thumb: 'https://images.unsplash.com/photo-1533038590840-1cde6b66b706?q=80&w=400',
    author: 'Gary Barnes',
    link: 'https://unsplash.com/photos/gb_1hck',
    category: 'nature',
    keywords: ['garden', 'walkway', 'stone', 'path', 'landscaping', 'backyard']
  },

  // PHOTOGRAPHY & ART & PORTFOLIO
  {
    id: 'p1',
    url: 'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=1200',
    thumb: 'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=400',
    author: 'Aman Upadhyay',
    link: 'https://unsplash.com/photos/aU_1hc',
    category: 'photography',
    keywords: ['photography', 'camera', 'vintage', 'hand', 'photographer', 'lauren']
  },
  {
    id: 'p2',
    url: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1200',
    thumb: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=400',
    author: 'ShareGrid',
    link: 'https://unsplash.com/photos/sg_1hck',
    category: 'photography',
    keywords: ['camera', 'lens', 'professional', 'dslr', 'video', 'aperture']
  },
  {
    id: 'p3',
    url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200',
    thumb: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=400',
    author: 'Caleb Oquendo',
    link: 'https://unsplash.com/photos/co_1hck',
    category: 'photography',
    keywords: ['camera', 'tripod', 'studio', 'lighting', 'photography', 'production']
  },
  {
    id: 'p4',
    url: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1200',
    thumb: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=400',
    author: 'Alice Dietrich',
    link: 'https://unsplash.com/photos/ad_1hck',
    category: 'art',
    keywords: ['art', 'abstract', 'painting', 'watercolor', 'paint', 'brushes', 'canvas']
  },
  {
    id: 'p5',
    url: 'https://images.unsplash.com/photo-1501472312651-726afd116ff1?q=80&w=1200',
    thumb: 'https://images.unsplash.com/photo-1501472312651-726afd116ff1?q=80&w=400',
    author: 'Rory',
    link: 'https://unsplash.com/photos/r_1hck',
    category: 'art',
    keywords: ['art', 'gallery', 'exhibition', 'museum', 'paintings', 'frames']
  },

  // BUSINESS & TEAM & OFFICE & TECH
  {
    id: 'b1',
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200',
    thumb: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=400',
    author: 'Joel Filipe',
    link: 'https://unsplash.com/photos/jf_1hck',
    category: 'business',
    keywords: ['office', 'skyscraper', 'building', 'modern', 'corporate', 'agency', 'design']
  },
  {
    id: 'b2',
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200',
    thumb: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400',
    author: 'Jason Goodman',
    link: 'https://unsplash.com/photos/jg_1hck',
    category: 'business',
    keywords: ['team', 'work', 'collaboration', 'meeting', 'office', 'people', 'agency']
  },
  {
    id: 'b3',
    url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200',
    thumb: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=400',
    author: 'Clément Hélardot',
    link: 'https://unsplash.com/photos/ch_1hck',
    category: 'tech',
    keywords: ['tech', 'laptop', 'code', 'programmer', 'screen', 'software', 'developer']
  },
  {
    id: 'b4',
    url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200',
    thumb: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=400',
    author: 'Domenico Loia',
    link: 'https://unsplash.com/photos/dl_1hck',
    category: 'tech',
    keywords: ['office', 'desk', 'workspace', 'laptop', 'modern', 'agency', 'computer']
  },
  {
    id: 'b5',
    url: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1200',
    thumb: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=400',
    author: 'Luke Chesser',
    link: 'https://unsplash.com/photos/lc_1hck',
    category: 'tech',
    keywords: ['tech', 'dashboard', 'graph', 'chart', 'stats', 'analytics', 'tablet']
  },
  {
    id: 'b6',
    url: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1200',
    thumb: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=400',
    author: 'Christina @ wocintechchat.com',
    link: 'https://unsplash.com/photos/cwt_1hck',
    category: 'business',
    keywords: ['business', 'woman', 'meeting', 'office', 'corporate', 'team']
  },
  {
    id: 'b7',
    url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200',
    thumb: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=400',
    author: 'Cytonn Photography',
    link: 'https://unsplash.com/photos/cp_1hck',
    category: 'business',
    keywords: ['handshake', 'deal', 'agreement', 'business', 'partnership', 'meeting']
  },

  // SOLAR & ENERGY & ECO
  {
    id: 's1',
    url: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200',
    thumb: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=400',
    author: 'Vivint Solar',
    link: 'https://unsplash.com/photos/vs_1hck',
    category: 'energy',
    keywords: ['solar', 'panels', 'energy', 'sun', 'power', 'brighter', 'roof']
  },
  {
    id: 's2',
    url: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1200',
    thumb: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=400',
    author: 'Andreas Gücklhorn',
    link: 'https://unsplash.com/photos/ag_1hck',
    category: 'energy',
    keywords: ['solar', 'cells', 'sun', 'sky', 'light', 'clean', 'panels']
  },
  {
    id: 's3',
    url: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1200',
    thumb: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=400',
    author: 'Karsten Würth',
    link: 'https://unsplash.com/photos/kw_1hck',
    category: 'energy',
    keywords: ['energy', 'wind', 'turbine', 'generator', 'eco', 'sustainable', 'green']
  },

  // SERVICES & HANDYMAN
  {
    id: 'h1',
    url: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200',
    thumb: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=400',
    author: 'Volha Flanagan',
    link: 'https://unsplash.com/photos/vf_1hck',
    category: 'service',
    keywords: ['cleaning', 'clean', 'spray', 'kitchen', 'housework', 'hygiene']
  },
  {
    id: 'h2',
    url: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=1200',
    thumb: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=400',
    author: 'Cesar Carlevarino Mbia',
    link: 'https://unsplash.com/photos/ccm_1hck',
    category: 'service',
    keywords: ['tools', 'hammer', 'work', 'handyman', 'construction', 'wood', 'carpentry']
  },
  {
    id: 'h3',
    url: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200',
    thumb: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=400',
    author: 'Emmanuel Ikwuegbu',
    link: 'https://unsplash.com/photos/ei_1hck',
    category: 'service',
    keywords: ['electrician', 'wiring', 'repair', 'installation', 'electric', 'tools']
  },
  {
    id: 'h4',
    url: 'https://images.unsplash.com/photo-1505798577917-a65157d3320a?q=80&w=1200',
    thumb: 'https://images.unsplash.com/photo-1505798577917-a65157d3320a?q=80&w=400',
    author: 'Christian Torres',
    link: 'https://unsplash.com/photos/ct_1hck',
    category: 'service',
    keywords: ['plumbing', 'plumber', 'sink', 'repair', 'kitchen', 'water']
  }
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const rawQuery = searchParams.get('query') || '';
  const query = rawQuery.trim().toLowerCase();

  const accessKey = process.env.UNSPLASH_ACCESS_KEY || process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;

  if (accessKey) {
    try {
      let photosData: any[] = [];
      if (query) {
        const searchUrl = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=24`;
        const res = await fetch(searchUrl, {
          headers: {
            Authorization: `Client-ID ${accessKey}`
          }
        });
        if (res.ok) {
          const data = await res.json();
          photosData = data.results || [];
        } else {
          console.error('Unsplash search API error status:', res.status);
          throw new Error(`Unsplash search API responded with status ${res.status}`);
        }
      } else {
        const listUrl = `https://api.unsplash.com/photos?per_page=24`;
        const res = await fetch(listUrl, {
          headers: {
            Authorization: `Client-ID ${accessKey}`
          }
        });
        if (res.ok) {
          photosData = await res.json();
        } else {
          console.error('Unsplash list API error status:', res.status);
          throw new Error(`Unsplash list API responded with status ${res.status}`);
        }
      }

      if (photosData && photosData.length > 0) {
        const mapped = photosData.map((photo: any) => ({
          id: photo.id,
          url: photo.urls?.regular || photo.urls?.full,
          thumb: photo.urls?.small || photo.urls?.thumb,
          author: photo.user?.name || 'Unsplash',
          link: photo.links?.html || 'https://unsplash.com'
        }));
        return NextResponse.json({ photos: mapped, isLive: true });
      }
    } catch (error) {
      console.error('Unsplash API connection failed, falling back to local seeds:', error);
    }
  }

  try {
    // If query is empty, return a diverse subset of photos
    if (!query) {
      const defaultPhotos = STOCK_PHOTOS.slice(0, 16);
      return NextResponse.json({ photos: defaultPhotos, isLive: false });
    }

    // Filter local seed photos matching the query term
    const matchedPhotos = STOCK_PHOTOS.filter(photo => {
      return (
        photo.category.toLowerCase().includes(query) ||
        photo.author.toLowerCase().includes(query) ||
        photo.keywords.some(keyword => keyword.toLowerCase().includes(query))
      );
    });

    // If no direct matches, return fallback mixed results so grid is never empty
    if (matchedPhotos.length === 0) {
      // Return first 12 mixed photos
      const fallbackPhotos = STOCK_PHOTOS.slice(0, 12);
      return NextResponse.json({ photos: fallbackPhotos, isLive: false });
    }

    return NextResponse.json({ photos: matchedPhotos, isLive: false });
  } catch (error) {
    console.error('Error serving stock photos:', error);
    return NextResponse.json({ error: 'Server error serving stock photos' }, { status: 500 });
  }
}
