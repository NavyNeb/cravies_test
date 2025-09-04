import SectionContainer from "@/components/common/SectionContainer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FounderMessageSection = () => {
  return (
    <SectionContainer bgColor="var(--rose-app)">
      <div className="product-container grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <div className="flex flex-col justify-start space-y-2.5">
          <div>
            <p className="text-lg text-center md:text-left text-black-app uppercase mb-4">
              founders msg
            </p>
            <h2 className="font-wosker text-6.5xl text-center md:text-left pb-4 uppercase leading-none">
              <span className="block">Miss Your</span>
              <span className="block">Childhood Cereals?</span>
            </h2>
            <div className="text-black-app text-lg text-center md:text-left mb-1.5">
              We loved cereal as kids. <br />
              But let’s be honest — it was mostly sugar in a bowl. <br />
              Then we tried the “healthy” stuff. <br />
              Tasted like sadness. <br />
              So we made Cravies. <br />
              All the taste, none of the junk. <br />
              Childhood vibes. Adult nutrition. <br /> <br />
              <span className="font-bold">— Alex, Founder of Cravies</span>
            </div>
           {/* CTA Button */}
          <Link to="/product-details" className="flex justify-center md:justify-start mt-6">
            <Button className="text-center" >BUILD YOUR BUNDLE</Button>
         </Link>
          </div>
        </div>
        <div className="row-start-1 h-[348px] overflow-hidden rounded-lg border-[3px] border-black-app md:h-auto md:col-start-2">
          <img
            src={"/images/woman-with-twiks.jpg"}
            alt={"Fishing Cravies"}
            className="w-full h-full object-cover bg-center"
          />
        </div>
         
      </div>
    </SectionContainer>
  );
};

export { FounderMessageSection };
