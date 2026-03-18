export default function ProjectCard({
  title,
  description,
  tech = [],
  github,
  live,
  image,
}) {
  return (
    <div className="border border-accent  bg-[#1e1e2e] w-auto">
      
      {/* Image */}
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full  object-cover"
        />
      )}

      <div className="p-4 flex flex-col gap-3">
        
        {/* Title */}
        <h3 className="text-white font-main text-xl font-normal">
          {title}
        </h3>

        {/* Description */}
        <p className="text-grey-300 font-main text-sm">
          {description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {tech.map((item, index) => (
            <span
              key={index}
              className="text-xs border border-accent text-accent px-2 py-1 rounded"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 mt-2">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent underline hover:text-accent/85"
            >
              View on GitHub
            </a>
          )}

          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent underline hover:text-accent/85"
            >
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
}