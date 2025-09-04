import SectionContainer from "@/components/common/SectionContainer";
import { NUTRIENTS_DATA } from "@/data/mockData";

const ChildhoodCerealSection = () => {
  return (
    <SectionContainer bgColor="var(--rose-app)"> 
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
            <span className="block">Your favorite</span>
            <span className="block">childhood cereal,</span>
            <span className="block">all grown up</span>
          </h2>
          <div className="flex flex-col justify-end space-y-4 flex-1" >
            {
                NUTRIENTS_DATA.map((nutrient) => (
                    <div key={nutrient.id} className="basis-1/3 bg-white p-6 h-auto flex flex-col items-start justify-center space-x-3 rounded-[20px] border-[3px] border-black-app" >
                      
                        <h5 style={{ color: `${nutrient.color}` }}  className="text-[32px] font-wosker text-left text-white mb-5" >
                            {nutrient.title}
                        </h5>
                        <p className="text-lg text-left" >
                            {nutrient.description}
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

export default ChildhoodCerealSection;
