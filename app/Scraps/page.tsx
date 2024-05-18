import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export default function Scraps() {
  return (
    <div>
      <div className="flex flex-col items-center justify-between text-lg pt-32 pb-16">Sign in first to throw your scraps!</div>
      <div>
        <div className="flex flex-col items-center justify-between">
        <Link
        
        href="/sign-in"
        >
      <Button className="cursor-customHover cursor-customHoverClick">
        Sign In
      </Button>
      </Link>
      </div>
      </div>
    </div>
  );
}