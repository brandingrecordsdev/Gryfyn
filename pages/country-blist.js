const CountryBlist = () => {
    const countries = ["Afghanistan", "Belarus", "Central African Republic", "Cuba", "Democratic Republic of the Congo", "Iraq", "Islamic Republic of Iran", "Libya", "Mali", "Myanmar", "Nicaragua", "North Korea", "Pakistan", "Palestine", "Russia", "Somalia", "South Sudan", "Sudan", "Syria", "Ukraine", "Venezuela", "Yemen", "Zimbabwe"];
    return (
        <ul>
            {countries.map((name, idx) => <li key={`${name.toLowerCase()}-${idx}`} data-idx={idx}>{name}</li>)}
        </ul>
    );
}

export default CountryBlist;