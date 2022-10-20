const getBackground = (number: number) => {
  const backgrounds = [
    "#1CB5E0 0%, #000851 100%",
    "#00C9FF 0%, #92FE9D 100%",
    "#FC466B 0%, #3F5EFB 100%",
    "#3F2B96 0%, #A8C0FF 100%",
    "#FDBB2D 0%, #22C1C3 100%",
    "#FDBB2D 0%, #3A1C71 100%",
    "#d53369 0%, #daae51 100%",
    "#4b6cb7 0%, #182848 100%",
    "#9ebd13 0%, #008552 100%",
    "#0700b8 0%, #00ff88 100%",
    "#efd5ff 0%, #515ada 100%",
    "#f8ff00 0%, #3ad59f 100%",
  ];

  return backgrounds[number];
};

export default getBackground;
