export const getTitleEightWords = (content: string) => {
  if (!content) return "";
  const wordArrs = content.split(" ");
  return wordArrs.slice(0, 7).join(" ");
};

export const BuildUrlImage = (url: string) => {
  return `https://c1.neweggimages.com/webresource/b2b/en/images/${url}`;
};
