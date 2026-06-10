const buildPaths = (category: string, count: number) =>
  Array.from({ length: count }, (_, index) => `/images/portfolio/${category}/${String(index + 1).padStart(2, "0")}.jpg`);

export const portfolioImages = {
  bathrooms: buildPaths("bathrooms", 7),
  bedrooms: buildPaths("bedrooms", 1),
  exteriors: buildPaths("exteriors", 4),
  kitchens: buildPaths("kitchens", 5),
  livingRooms: buildPaths("living-rooms", 1),
} as const;

export const featuredImages = {
  homeHero: portfolioImages.livingRooms[0],
  homeFeatureA: portfolioImages.bathrooms[0],
  homeFeatureB: portfolioImages.exteriors[0],
  homeFeatureC: portfolioImages.kitchens[0],
  homeFooter: portfolioImages.exteriors[1],
  aboutHero: portfolioImages.bedrooms[0],
  aboutTeam: portfolioImages.exteriors[2],
  contactMap: portfolioImages.exteriors[3],
} as const;
