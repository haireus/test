export const getTitleEightWords = (content: string) => {
  if (!content) return "";
  const wordArrs = content.split(" ");
  return wordArrs.slice(0, 7).join(" ");
};

export const BuildUrlImage = (url: string) => {
  return `https://c1.neweggimages.com/webresource/b2b/en/images/${url}`;
};

export const BuildProductImage = (url: any) => {
  if (!url) return "";
  return `https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll300/${url}`;
};

const arr = [0, 1, 2, 3, 4, 5, 6];
const n = 3;

export const groupByChunk = (arr: any[], n: number) => {
  return arr.reduce(
    (r, e, i) => (i % n ? r[r.length - 1].push(e) : r.push([e])) && r,
    []
  );
};

export const getDecimalPart = (num: number) => {
  if (Number.isInteger(num)) {
    return "00";
  }
  const decimalStr = num?.toString()?.split(".")[1];
  return decimalStr;
};
