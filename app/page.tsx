import * as React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent
} from "@/components/ui/card"

const cards = [
  {
    id: 1,
    title: "Keep your brain clean",
    description: "This is a description for card 1.",
    content: `Throw your thoughts into "Scraps". Just write them down and move on.`,
    image: "/id1.png",
  },
  {
    id: 2,
    title: "No more categorization",
    description: "This is a description for card 2.",
    content: "This AI will constantly organize all of your Scraps for you. No more manual work.",
    image: "/id2.png",
  },
  {
    id: 3,
    title: "Categorized notes for you",
    description: "This is a description for card 3.",
    content: `You can easily check organized Scraps in "Notes". Your Scraps are always organized.`,
    image: "/id3.png",
  },
  {
    id: 4,
    title: "Customization is available",
    description: "This is a description for card 4.",
    content: "you can bookmark any Notes! Just click the button. It's that simple.",
    image: "/id4.png",
  },
  {
    id: 5,
    title: "Try it out!",
    description: "This is a description for card 5.",
    content: "Sign up with your email and that's it!",
    image: "/id5.png",
  },
]

const Home: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center  pt-20 pb-20">
        <img src="/home.png" alt="logo" className=" pt-30 pb-4 " />
        <div>
        <h1 className="flex flex-col pb-20 p-5">Work with clean brain.</h1>
      </div>
      </div>
      
      
      <div className="flex items-center justify-center">

        <Carousel className="w-full max-w-xs pb-7">
          <CarouselContent>
            {cards.map((card) => (
              <CarouselItem key={card.id}>
                <div className="p-2">
                  <Card className="w-30 h-80">
                    <CardTitle className="flex flex-col justify-center pt-4 px-7">{card.title}</CardTitle>
                    <CardHeader>
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-1/2 h-auto rounded-lg mx-auto"
                      />
                      
                      
                    </CardHeader>
                    <CardContent>
                      <p className="text-base flex-col">{card.content}</p>
                    </CardContent>
                    {card.id === 5 && (
                    <CardFooter>
                      <button className="px-4 py-2 bg-black text-white rounded-lg mx-auto ">
                        Sign up
                      </button>
                    </CardFooter>
                    )}
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
       
        </Carousel>

      </div>

      <div className="flex flex-col items-center justify-center">
        <Accordion type="single" collapsible className="w-full max-w-md mt-20 mb-12">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is this?</AccordionTrigger>
            <AccordionContent>This is or9an!ze</AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>What the hell is or9an!ze?</AccordionTrigger>
            <AccordionContent>GO GOOGLE IT</AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>What?</AccordionTrigger>
            <AccordionContent>It is totally free, stfu</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Home;
