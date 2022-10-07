const dataNav = [
  {
    id: 1,
    url: "/c/cpus-processors/id-34",
    title: "CPUs / Processors",
  },
  {
    id: 2,
    url: "/c/motherboards/id-20",
    title: "Motherboards",
  },
  {
    id: 3,
    title: "Video Cards & Video Devices",
    url: "/c/video-cards-video-devices/id-38",
  },

  {
    id: 4,
    title: "Data Storage",
    url: "/t/data-storage/id-24",
  },
  {
    id: 5,
    title: "Memory",
    url: "/c/memory/id-17",
  },
];

export const TabStoreSideNav = () => {
  return (
    <div className="tab-store-side-nav">
      <h3 className="tab-store-side-nav-title">By Category</h3>

      <div className="tab-store-nav-outner">
        <div className="tab-store-nav-inner">
          <ul>
            {dataNav.map((el) => (
              <li key={el.id}>
                <a href={el.url} title={el.title}>
                  {el.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
