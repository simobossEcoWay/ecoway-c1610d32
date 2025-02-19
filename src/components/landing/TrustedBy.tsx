
const TrustedBy = () => {
  const companies = [
    { name: "McDonald's", logo: "https://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svg", className: "w-12" },
    { name: "Burger King", logo: "https://upload.wikimedia.org/wikipedia/commons/8/85/Burger_King_logo_%281999%29.svg", className: "w-16" },
    { name: "KFC", logo: "https://upload.wikimedia.org/wikipedia/en/b/bf/KFC_logo.svg", className: "w-14" },
    { name: "Pizza Hut", logo: "https://upload.wikimedia.org/wikipedia/commons/7/73/Pizza_Hut_1967-1999_logo.svg", className: "w-16" }
  ];

  return (
    <section className="py-8 bg-black/40">
      <div className="container-padding">
        <p className="text-center text-neutral-400 mb-12">Risparmia grazie a EcoWay</p>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {companies.map((company) => (
            <div key={company.name} className={`${company.className} h-auto`}>
              <img 
                src={company.logo} 
                alt={company.name} 
                className="w-full h-full object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
