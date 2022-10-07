const dataBanner = [
  {
    id: 1,
    img: "https://promotions.newegg.com/B2B/rewards/22-0296/160x360.jpg",
  },
  {
    id: 2,
    img: "https://promotions.newegg.com/B2B/SuperMicro/21-2617/160x360.jpg",
  },
];
export const Banner = () => {
  return (
    <div className="banner-right-side">
      {dataBanner.map((el) => (
        <div key={el.id} className="banner-cell">
          <a href="javascript:void(0)">
            <img src={el.img} alt="" />
          </a>
        </div>
      ))}
    </div>
  );
};
