//assets
import circles from "../assets/icons/pattern-circles.svg";

const CTA = () => {
  return (
    <div className="header">
      <img
        className="bg-circles pointer-events-none select-none"
        src={circles}
        alt="Pattern circles"
      />
      <h1 className="font-bold">Simple, traffic-based pricing</h1>
      <div className="flex flex-col justify-center md:flex-row">
        <p>Sign-up for our 30-day trial.</p>
        <p>No credit card required.</p>
      </div>
    </div>
  );
};

export default CTA;
