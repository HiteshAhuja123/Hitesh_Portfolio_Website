export default function Highlights() {
  const items = [
    "AI Systems & Chatbots",
    "Headless CMS (400+ pages)",
    "Full Product Flows (KYC + Payments)",
  ];

  return (
    <section className="py-16 px-6">
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item}
            className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl"
          >
            <p className="text-lg">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
