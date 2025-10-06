const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "cozy-beachfront-cottage.jpg",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 1500,
    location: "Malibu",
    country: "United States"
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "modern-loft-in-downtown.jpg",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 1200,
    location: "New York City",
    country: "United States"
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "mountain-retreat.jpg",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 1000,
    location: "Aspen",
    country: "United States"
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "historic-villa-in-tuscany.jpg",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 2500,
    location: "Florence",
    country: "Italy"
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "secluded-treehouse-getaway.jpg",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 800,
    location: "Portland",
    country: "United States"
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "beachfront-paradise.jpg",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico"
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "rustic-cabin-by-the-lake.jpg",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States"
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "luxury-penthouse-with-city-views.jpg",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States"
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "ski-in-ski-out-chalet.jpg",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland"
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "safari-lodge-in-the-serengeti.jpg",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania"
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "historic-canal-house.jpg",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands"
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "private-island-retreat.jpg",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji"
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Quaint stone cottage surrounded by the picturesque English countryside. Perfect for a romantic getaway.",
    image: {
      filename: "charming-cottage-in-the-cotswolds.jpg",
      url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 1100,
    location: "Cotswolds",
    country: "United Kingdom"
  },
  {
    title: "Luxury Villa with Infinity Pool",
    description:
      "Enjoy breathtaking ocean views from your private infinity pool in this luxurious villa.",
    image: {
      filename: "luxury-villa-with-infinity-pool.jpg",
      url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 5000,
    location: "Santorini",
    country: "Greece"
  },
  {
    title: "Eco-Friendly Jungle Bungalow",
    description:
      "Immerse yourself in nature in this sustainable jungle bungalow. Ideal for eco-conscious travelers.",
    image: {
      filename: "eco-friendly-jungle-bungalow.jpg",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 700,
    location: "Bali",
    country: "Indonesia"
  },
  {
    title: "Desert Oasis Glamping",
    description:
      "Experience the desert in style with this luxury glamping site. Stargaze like never before.",
    image: {
      filename: "desert-oasis-glamping.jpg",
      url: "https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 950,
    location: "Dubai",
    country: "UAE"
  },
  {
    title: "Chic Studio in Paris",
    description:
      "Stay in the heart of Paris in this chic and modern studio apartment. Walk to the Eiffel Tower!",
    image: {
      filename: "chic-studio-in-paris.jpg",
      url: "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 1300,
    location: "Paris",
    country: "France"
  },
  {
    title: "Countryside Farmhouse",
    description:
      "Relax in a rustic farmhouse surrounded by rolling fields and fresh country air.",
    image: {
      filename: "countryside-farmhouse.jpg",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 600,
    location: "Texas",
    country: "United States"
  },
  {
    title: "Tropical Overwater Bungalow",
    description:
      "Wake up to turquoise waters beneath you in this iconic overwater bungalow.",
    image: {
      filename: "tropical-overwater-bungalow.jpg",
      url: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 4500,
    location: "Maldives",
    country: "Maldives"
  },
  {
    title: "Igloo with Northern Lights View",
    description:
      "Stay in a glass igloo and watch the magical Northern Lights dance above you.",
    image: {
      filename: "igloo-with-northern-lights-view.jpg",
      url: "https://images.unsplash.com/photo-1503264116251-35a269479413?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 3200,
    location: "Lapland",
    country: "Finland"
  },
  {
    title: "Colonial House in Havana",
    description:
      "Step back in time in this colorful colonial-style house in historic Havana.",
    image: {
      filename: "colonial-house-in-havana.jpg",
      url: "https://images.unsplash.com/photo-1519817914152-22f90e7c8e28?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 750,
    location: "Havana",
    country: "Cuba"
  },
  {
    title: "Skyline Apartment",
    description:
      "Soak in stunning skyline views from this modern high-rise apartment.",
    image: {
      filename: "skyline-apartment.jpg",
      url: "https://images.unsplash.com/photo-1499916078039-922301b0eb9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 2200,
    location: "Toronto",
    country: "Canada"
  },
  {
    title: "Himalayan Mountain Lodge",
    description:
      "Find peace in the Himalayas with this secluded mountain lodge.",
    image: {
      filename: "himalayan-mountain-lodge.jpg",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 1400,
    location: "Nepal",
    country: "Nepal"
  },
  {
    title: "Charming Ryokan",
    description:
      "Experience Japanese hospitality in a traditional ryokan with tatami rooms and hot springs.",
    image: {
      filename: "charming-ryokan.jpg",
      url: "https://images.unsplash.com/photo-1544986581-efac024faf62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 1600,
    location: "Kyoto",
    country: "Japan"
  },
  {
    title: "Bohemian Beach Hut",
    description:
      "Colorful and quirky beach hut with a laid-back bohemian vibe.",
    image: {
      filename: "bohemian-beach-hut.jpg",
      url: "https://images.unsplash.com/photo-1519821172141-b5d8d5d3e3f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 500,
    location: "Goa",
    country: "India"
  },
  {
    title: "Luxury Desert Camp",
    description:
      "Unwind in a luxury tent under the stars of the Sahara Desert.",
    image: {
      filename: "luxury-desert-camp.jpg",
      url: "https://images.unsplash.com/photo-1529257414777-1960a42ac8a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 2700,
    location: "Merzouga",
    country: "Morocco"
  },
  {
    title: "Floating House on Lake",
    description:
      "Unique floating house offering serene lake views and tranquility.",
    image: {
      filename: "floating-house-on-lake.jpg",
      url: "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 2100,
    location: "Kerala",
    country: "India"
  },
  {
    title: "Castle Stay",
    description:
      "Live like royalty in a medieval castle with grand halls and lush gardens.",
    image: {
      filename: "castle-stay.jpg",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 3800,
    location: "Edinburgh",
    country: "Scotland"
  },
  {
    title: "Art Deco Apartment",
    description:
      "Stylish apartment with vintage Art Deco charm in a vibrant neighborhood.",
    image: {
      filename: "art-deco-apartment.jpg",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 1250,
    location: "Miami",
    country: "United States"
  }
];
module.exports = { data: sampleListings };
