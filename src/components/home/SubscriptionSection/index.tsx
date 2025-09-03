import SectionContainer from "@/components/common/SectionContainer";
import { benefitsData } from "@/data/mockData";

const SubscriptionSection = () => {
  return (
    <SectionContainer>
      <div className="product-container grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <div className="h-[348px] md:h-auto overflow-hidden rounded-lg border-[3px] border-black-app">
          <img
            src={"/images/fishing-cravies.jpg"}
            alt={"Fishing Cravies"}
            className="w-full h-full object-cover bg-center"
          />
        </div>
        <div className="flex flex-col justify-start space-y-2.5">
          <h2 className="font-wosker text-6.5xl text-center md:text-left pb-12 uppercase leading-none">
            <span className="block">The Cravies</span>
            <span className="block">Subscription.</span>
            <span className="block">It’s kind of genius.</span>
          </h2>
          <div className="flex flex-col justify-end space-y-4 flex-1" >
            {
                benefitsData.map((benefit) => (
                    <div style={{ backgroundColor: `${benefit.backgroundColor}` }} key={benefit.id} className="basis-1/3 p-6 h-auto flex flex-col items-start justify-center space-x-3 rounded-lg border-[3px] border-black-app" >
                        <div className="flex-shrink-0 mt-1">
                            <div className="w-6 h-6 mb-2 text-3xl text-white flex items-center justify-center rounded-full font-bold" >
                                {benefit.id}
                            </div>
                        </div>
                        <h5 className="text-[32px] font-wosker text-left text-white" >
                            {benefit.title}
                        </h5>
                        <p className="text-lg text-left text-white" >
                            {benefit.description}
                        </p>
                    </div>
                ))
            }
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default SubscriptionSection;
