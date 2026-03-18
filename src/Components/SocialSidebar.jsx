import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const socials = [
  { icon: <FaGithub />, href: "https://github.com/blake-rs/", label: "GitHub" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/blake-rsimpson/", label: "LinkedIn" },
  { icon: <MdEmail />, href: "mailto:iblakesimpson@gmail.com", label: "Email" },
];

export default function SocialIcons({ menuOpen }) {
    
  return (
    <div className="absolute top-5 left-10 sm:top-10 flex flex-row sm:flex-col  gap-4 z-50">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="text-[#C778DD] text-2xl hover:text-white transition-colors duration-300 p-1"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}