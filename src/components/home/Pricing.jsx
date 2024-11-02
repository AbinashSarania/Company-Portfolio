import React from "react";

function Button({ className, children }) {
  return (
    <button
      className={`px-6 py-3 text-lg font-semibold text-white bg-black rounded-md transition duration-300 font-[Anonymous Pro] ${className}`}
      style={{ fontFamily: "Anonymous Pro" }}
    >
      {children}
    </button>
  );
}

const cardDetails = [
  {
    title: "Landing Page Package",
    description:
      "A high-impact landing page with a super fast turnaround, perfect for businesses needing fast and high-quality results",
    price: "₹1499",
    buttonText: "Book a 15 min call",
    features: [
      "Fast turnaround: 1-2 weeks",
      "Custom design",
      "Development included",
      "Mobile responsive design",
      "SEO-friendly setup",
      "CMS included",
      "Revision available",
    ],
    textClass: "text-muted-foreground",
  },
  {
    title: "Landing Page Package",
    description:
      "A high-impact landing page with a super fast turnaround, perfect for businesses needing fast and high-quality results",
    price: "₹1499",
    buttonText: "Book a 15 min call",
    features: [
      "Fast turnaround: 1-2 weeks",
      "Custom design",
      "Development included",
      "Mobile responsive design",
      "SEO-friendly setup",
      "CMS included",
      "Revision available",
    ],
    textClass: "text-primary-foreground",
  },
  {
    title: "Landing Page Package",
    description:
      "A high-impact landing page with a super fast turnaround, perfect for businesses needing fast and high-quality results",
    price: "₹1499",
    buttonText: "Book a 15 min call",
    features: [
      "Fast turnaround: 1-2 weeks",
      "Custom design",
      "Development included",
      "Mobile responsive design",
      "SEO-friendly setup",
      "CMS included",
      "Revision available",
    ],
    textClass: "text-secondary-foreground",
  },
];

export default function Pricing() {
  return (
    <section className="bg-gray-100 py-12 md:py-24 lg:py-32 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        {/* Headings */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">Our Pricing Plans</h2>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cardDetails.map((card, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-none flex flex-col bg-white p-1" // Increased padding here
            >
              {/* Top Half */}
              <div
                className="flex-none p-6 text-left bg-gray-100 "
                style={{ flex: "1 0 50%" }}
              >
                <h3 className="text-2xl font-bold font-[Anybody]">
                  {card.title}
                </h3>
                <p className="text-xs font-[Heebo] mt-2">{card.description}</p>
                <div className="my-4 text-3xl font-bold text-left flex items-end">
                  {card.price}
                  <span className="text-xs ml-2 font-light mb-1">
                    (All-inclusive)
                  </span>
                </div>
                <Button className="w-full mt-10">{card.buttonText}</Button>
              </div>

              {/* Bottom Half */}
              <div
                className="p-6 border-gray-300"
                style={{ flex: "1 0 50%" }}
              >
                <ul className="space-y-2 text-muted-foreground">
                  {card.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <CheckIcon className="h-5 w-5 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
