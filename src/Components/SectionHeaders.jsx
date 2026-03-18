export default function SectionHeader({ title }) {
  return (
    <div className=" font-second ml-[15%] w-50 topper flex justify-between items-center gap-4 mb-10 mt-10">
      <h2 className="h2 relative text-white font-normal text-3xl">
        <span className="text-accent text-3xl font-normal">#</span>
        {title}
        <span className="absolute top-1/2 right-[-16px] w-[10vw] h-px bg-accent transform translate-x-full -translate-y-1/2"></span>
      </h2>

     
    </div>
  );
}