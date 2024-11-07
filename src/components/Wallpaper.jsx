import wallpaper from "../assets/img/wallpaper.jpg";

export default function Wallpaper() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-black">
      <img
        src={wallpaper}
        className="w-full h-full object-cover opacity-95 blur-sm"
        alt="wallpaper"
      />
    </div>
  );
}
