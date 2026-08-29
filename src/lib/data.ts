export const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1558005530-a7958896ec60?auto=format&fit=crop&w=1920&q=80',
    title: 'Discover the Art of Meaningful Travel',
    subtitle: "Ahmedabad's most authentic travel community crafting memories that stay with you forever."
  },
  {
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1920&q=80',
    title: "Explore God's Own Country",
    subtitle: 'Journey through the tranquil backwaters and misty hills of Kerala.'
  },
  {
    image: 'https://images.unsplash.com/photo-1626621341169-52441de0b7e6?auto=format&fit=crop&w=1920&q=80',
    title: 'Serene Meghalaya',
    subtitle: 'Soak into the beauty and serenity of Meghalaya.'
  },
  {
    image: 'https://images.unsplash.com/photo-1626016570422-e63c3c93e12e?auto=format&fit=crop&w=1920&q=80',
    title: 'Himachal Mystique',
    subtitle: 'Venture into the rugged heart of the Himalayas with our local captain experts.'
  },
  {
    image: 'https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=1920&q=80',
    title: 'Kashmir Beauty',
    subtitle: 'Luxury villa stays and spiritual awakenings in the heart of Kashmir valley.'
  },
  {
    image: 'https://images.unsplash.com/photo-1727276884218-ec3be46cda91?auto=format&fit=crop&w=1920&q=80',
    title: 'Goa Coastal Escape',
    subtitle: 'Sun-soaked beaches, beach shacks, and sunset cruises along the Arabian Sea.'
  },
  {
    image: 'https://images.unsplash.com/photo-1760835251791-1fda687de791?auto=format&fit=crop&w=1920&q=80',
    title: 'Ladakh High Altitude Trail',
    subtitle: 'Ride through moon-like landscapes and monasteries perched above the clouds.'
  },
  {
    image: 'https://images.unsplash.com/photo-1709620220232-12ecd7ca33a8?auto=format&fit=crop&w=1920&q=80',
    title: 'Royal Rajasthan',
    subtitle: 'Palaces, desert dunes, and centuries of royal heritage across the Thar.'
  },
  {
    image: 'https://images.unsplash.com/photo-1721834058855-b9d0570722b4?auto=format&fit=crop&w=1920&q=80',
    title: 'Andaman Island Getaway',
    subtitle: 'Turquoise waters, coral reefs, and untouched beaches far from the mainland.'
  },
  {
    image: 'https://images.unsplash.com/photo-1557093793-d149a38a1be8?auto=format&fit=crop&w=1920&q=80',
    title: 'Bali Island Soul',
    subtitle: "Rice terraces, temple sunsets, and island calm across Indonesia's Bali."
  }
];

export const getWhatsAppLink = (message = "Hi Infi Yatra! I'd like to plan a trip.") => {
  const phoneNumber = '919601793485';
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};
