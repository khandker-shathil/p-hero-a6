import React from 'react';

export default function Pricing() {
  const plans = [
    {
      id: 1,
      name: "Starter",
      desc: "Perfect for getting started",
      price: 0,
      features: [
        "Access to 10 free tools",
        "Basic templates",
        "Community support",
        "1 project per month",
      ],
      button: "Get Started Free",
    },
    {
      id: 2,
      name: "Pro",
      desc: "Best for professionals",
      price: 29,
      popular: true,
      features: [
        "Access to all premium tools",
        "Unlimited templates",
        "Priority support",
        "Unlimited projects",
        "Cloud sync",
        "Advanced analytics",
      ],
      button: "Start Pro Trial",
    },
    {
      id: 3,
      name: "Enterprise",
      desc: "For teams and businesses",
      price: 99,
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "Custom branding",
      ],
      button: "Contact Sales",
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 mt-3">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>
      {/* Card Starts */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`flex flex-col justify-between rounded-2xl p-6 border-0 shadow-lg transition
              ${
                plan.popular
                  ? "bg-linear-to-br from-blue-600 to-purple-700 text-white shadow-lg scale-105"
                  : "bg-white text-gray-900"
              }`}
          >
            {plan.popular && (
              <div className="absolute -mt-10 ml-24 bg-yellow-200 text-yellow-800 text-xs px-3 py-1 rounded-full">
                Most Popular
              </div>
            )}
            <div>
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p
                className={`text-sm mt-1 ${
                  plan.popular ? "text-purple-100" : "text-gray-500"
                }`}
              >
                {plan.desc}
              </p>
              <div className="mt-4">
                <span className="text-3xl font-bold">
                  ${plan.price}
                </span>
                <span className="text-sm"> /Month</span>
              </div>
              <ul className="mt-5 space-y-2">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <span className="text-green-400">✔</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <button
              className={`mt-6 w-full py-3 rounded-full font-medium
                ${
                  plan.popular
                    ? "bg-white text-purple-600"
                    : "bg-linear-to-r from-blue-600 to-purple-700 text-white"
                }`}
            >
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
