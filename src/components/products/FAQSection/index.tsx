import SectionContainer from "@/components/common/SectionContainer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { FAQS } from "@/data/mockData";

const FAQSection = () => {
  return (
    <SectionContainer bgColor="var(--rose-app)">
      <div className="product-container grid grid-cols-1 md:grid-cols-2 gap-8 ">
        {/* title for mobile view */}
        <div className="block md:hidden">
          <p className="text-lg text-center text-orange-app md:text-left uppercase mb-4">
            FREQUENTLY ASKED QUESTIONS
          </p>
          <h2 className="font-wosker text-6.5xl text-center text-orange-app md:text-left pb-4 uppercase leading-none ">
            <span className="block">Questions?</span>
            <span className="block">We answer!</span>
          </h2>
        </div>
        <div className="flex flex-col justify-start space-y-2.5">
          <div>
            <p className="hidden text-lg text-center text-orange-app md:text-left uppercase mb-4 md:block">
              FREQUENTLY ASKED QUESTIONS
            </p>
            <h2 className="hidden font-wosker text-6.5xl text-center text-orange-app md:text-left pb-4 uppercase leading-none md:block">
              <span className="block">Questions?</span>
              <span className="block">We answer!</span>
            </h2>
            <div className="border-[3px] border-black-app bg-yellow-app p-6 rounded-[20px] ">
              <h5 className="font-wosker text-[32px] text-left pb-4 uppercase leading-none">
                NEED HELP?
              </h5>
              <p className="text-lg text-left text-black-app leading-7">
                Consultez notre centre d’aide, ou sinon vous pouvez contacter
                notre Customer Care du lundi au vendredi 9h à 18h.
              </p>
            </div>
          </div>
        </div>
        <div className="row-start-2 md:col-start-2 md:row-start-1">
          <Card>
            <CardContent>
              <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-1"
              >
                {FAQS.map((faq) => (
                  <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-base text-left text-black-app ">
                        {faq.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionContainer>
  );
};

export { FAQSection };
