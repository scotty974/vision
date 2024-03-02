import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

function Header({ Enter, Exit }: any) {
  return (
    <header className="p-4">
      <nav className="flex items-center justify-between">
        <h1
          className="text-3xl font-main"
          onMouseEnter={Enter}
          onMouseLeave={Exit}
        >
          Vision.
        </h1>
        <ul className="flex gap-2 font-main">
          <li>
            <a href="#" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#work" className="hover:underline">
              Work
            </a>
          </li>
          <li>
            <a href="#about" className="hover:underline">
              About
            </a>
          </li>
        </ul>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"outline"} className="text-black">
              Contact
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuItem>
              <a
                href="https://www.linkedin.com/in/fabien-etheve-7125a0226/"
                target="_blank"
                className="underline"
              >
                Linkedin
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="mailto:fabienethevepro@gmail.com" className="underline">fabienethevepro@gmail.com</a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </header>
  );
}

export default Header;
