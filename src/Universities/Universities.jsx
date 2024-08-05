import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import CardComponent from "../CardComponent/CardComponent";

const Universities = ({ country, countryCode }) => {
    const [universities, setUniversities] = useState([]);
    const [flagLogo, setFlagLogo] = useState(`https://flagsapi.com/US/flat/64.png`);
    useEffect(() => {
        fetch(`http://universities.hipolabs.com/search?country=${country}`)
            .then((data) => data.json())
            .then((result) => setUniversities(result));
        setFlagLogo(`https://flagsapi.com/${countryCode}/flat/64.png`);
    }, [country]);

    return (<div >
        <center>
            <h1>{universities.length} Universities in {country}
                </h1>
        </center>
        <div class="card-container">
            {universities.map((data, index) => {
                return (
                    <div key={index}>
                        <CardComponent data={data} flagLogo={flagLogo} />
                    </div>)
            })
            }
        </div>
    </div>)
}

Universities.propTypes = {
    country: PropTypes.string,
    listOfCountries: PropTypes.array
}

export default Universities;