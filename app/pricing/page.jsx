"use client";

// pages/pricing.js
import Head from 'next/head';
import Layout from '@/components/Layout';

const pricingPlans = [
  {
    name: 'Basic',
    price: '$50/month',
    features: [
      '100 leads per month',
      'Email support',
      'Basic analytics',
    ],
  },
  {
    name: 'Gold',
    price: '$150/month',
    features: [
      '500 leads per month',
      'Priority email support',
      'Advanced analytics',
      'Monthly strategy call',
    ],
  },
  {
    name: 'Platinum',
    price: '$300/month',
    features: [
      'Unlimited leads',
      'Dedicated account manager',
      'Advanced analytics',
      'Weekly strategy call',
      'Custom integrations',
    ],
  },
];

const Pricing = () => (
  <Layout>
    <Head>
      <title>Pricing - P4U</title>
    </Head>
    <section className="my-5 p-5 bg-secondary rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-primary">Pricing Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
        {pricingPlans.map((plan) => (
          <div key={plan.name} className="p-5 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-primary">{plan.name}</h3>
            <p className="text-dark mt-2">{plan.price}</p>
            <ul className="mt-3 list-disc list-inside text-dark">
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Pricing;

























































// // pages/pricing.js
// import Head from 'next/head';
// import Layout from '@/components/Layout';

// const pricingPlans = [
//   {
//     name: 'Basic',
//     price: '$50/month',
//     features: [
//       '100 leads per month',
//       'Email support',
//       'Basic analytics',
//     ],
//   },
//   {
//     name: 'Gold',
//     price: '$150/month',
//     features: [
//       '500 leads per month',
//       'Priority email support',
//       'Advanced analytics',
//       'Monthly strategy call',
//     ],
//   },
//   {
//     name: 'Platinum',
//     price: '$300/month',
//     features: [
//       'Unlimited leads',
//       'Dedicated account manager',
//       'Advanced analytics',
//       'Weekly strategy call',
//       'Custom integrations',
//     ],
//   },
// ];

// const Pricing = () => (
//   <Layout>
//     <Head>
//       <title>Pricing - P4U</title>
//     </Head>
//     <section className="my-5 p-5 bg-light rounded-lg shadow-md">
//       <h2 className="text-2xl font-semibold text-primary">Pricing Plans</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
//         {pricingPlans.map((plan) => (
//           <div key={plan.name} className="p-5 bg-white rounded-lg shadow-md">
//             <h3 className="text-xl font-semibold text-primary">{plan.name}</h3>
//             <p className="text-dark mt-2">{plan.price}</p>
//             <ul className="mt-3 list-disc list-inside text-dark">
//               {plan.features.map((feature) => (
//                 <li key={feature}>{feature}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </section>
//   </Layout>
// );

// export default Pricing;
