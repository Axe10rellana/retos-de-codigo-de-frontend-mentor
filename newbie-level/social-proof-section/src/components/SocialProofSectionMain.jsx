//assets
import anne from "../assets/images/image-anne.jpg";
import colton from "../assets/images/image-colton.jpg";
import irene from "../assets/images/image-irene.jpg";

const SocialProofSectionMain = () => {
  return (
    <div className="flex flex-col gap-y-4 md:h-[600px] md:flex-row md:gap-x-6 lg:h-[400px] xl:h-[350px]">
      <article className="flex flex-col gap-y-4 rounded-lg bg-very-dark-magenta p-8 text-light-grayish-magenta md:self-start">
        <div className="flex gap-x-4">
          <img
            className="h-[50px] w-[50px] rounded-full"
            src={colton}
            alt="colton"
          />
          <div className="flex flex-col">
            <p className="text-lg font-bold">Colton Smith</p>
            <p className="text-lg text-soft-pink">Verified Buyer</p>
          </div>
        </div>
        <blockquote className="text-lg font-medium">
          "We needed the same printed design as the one we had ordered a week
          prior. Not only did they find the original order, but we also received
          it in time. Excellent!"
        </blockquote>
      </article>
      <article className="flex flex-col gap-y-4 rounded-lg bg-very-dark-magenta p-8 text-light-grayish-magenta md:self-center">
        <div className="flex gap-x-4">
          <img
            className="h-[50px] w-[50px] rounded-full"
            src={irene}
            alt="colton"
          />
          <div className="flex flex-col">
            <p className="text-lg font-bold">Irene Roberts</p>
            <p className="text-lg text-soft-pink">Verified Buyer</p>
          </div>
        </div>
        <blockquote className="text-lg font-medium">
          "Customer service is always excellent and very quick turn around.
          Completely delighted with the simplicity of the purchase and the speed
          of delivery."
        </blockquote>
      </article>
      <article className="flex flex-col gap-y-4 rounded-lg bg-very-dark-magenta p-8 text-light-grayish-magenta md:self-end">
        <div className="flex gap-x-4">
          <img
            className="h-[50px] w-[50px] rounded-full"
            src={anne}
            alt="colton"
          />
          <div className="flex flex-col">
            <p className="text-lg font-bold">Anne Wallace</p>
            <p className="text-lg text-soft-pink">Verified Buyer</p>
          </div>
        </div>
        <blockquote className="text-lg font-medium">
          "Put an order with this company and can only praise them for the very
          high standard. Will definitely use them again and recommend them to
          everyone!"
        </blockquote>
      </article>
    </div>
  );
};

export default SocialProofSectionMain;
