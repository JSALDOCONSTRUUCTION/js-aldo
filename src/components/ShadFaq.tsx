import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Shadfaq = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-96">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            What are the signs that indicate I need a new roof?
          </AccordionTrigger>
          <AccordionContent>
            Answer: Look for signs such as missing or damaged shingles, water
            stains on ceilings, sagging roof deck, and excessive granules in
            gutters. If your roof is over 20 years old, it may also be time to
            consider replacement.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            How long does a roof typically last?
          </AccordionTrigger>
          <AccordionContent>
            Answer: The lifespan of a roof depends on several factors, including
            the materials used, climate conditions, and maintenance. Asphalt
            shingle roofs typically last around 20-30 years, while metal roofs
            can last 50 years or more.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            What should I consider when choosing roofing materials?
          </AccordionTrigger>
          <AccordionContent>
            Answer: Consider factors such as durability, cost, aesthetics, and
            suitability for your climate. Common roofing materials include
            asphalt shingles, metal, wood shakes, and tile, each with its own
            advantages and considerations.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            What does roof maintenance involve?
          </AccordionTrigger>
          <AccordionContent>
            Answer: Regular roof maintenance includes inspecting for damage,
            cleaning gutters, trimming overhanging branches, and checking for
            signs of wear and tear. Prompt repairs can extend the lifespan of
            your roof and prevent costly damage.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            Do I need a permit to replace my roof?
          </AccordionTrigger>
          <AccordionContent>
            Answer: In most areas, yes, you will need a permit to replace your
            roof. Regulations vary by location, so it&apos;s important to check
            with your local building department or contractor to ensure
            compliance with local codes and requirements.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Shadfaq;
