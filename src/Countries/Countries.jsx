import { useEffect, useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import Universities from "../Universities/Universities";

const setCountries = (country) => {
    var list = [];
    for (let key in country) {
        if (country.hasOwnProperty(key)) {
            let value = {};
            value.id = key;
            value.country = country[key].country;
            list.push(value);
        }
    }
    return list;
};

const Countries = () => {
    const [selectedCountry, setSelectedCountry] = useState("India");
    const [countryCode, setCountryCode] = useState("IN");
    const [listOfCountries, setListOfCountries] = useState([]);

    useEffect(() => {
        fetch("https://api.first.org/data/v1/countries")
        .then((data) => data.json())
        .then((result) => {
            const list = setCountries(result.data);
            setListOfCountries(list);
        });
    }, []);

    const handleChange = (event) => {
        setSelectedCountry(event.target.value);
        const countryCode = listOfCountries.length && listOfCountries.filter((data) => {
            if(data.country === event.target.value){
                return data.id;
            }
        });
        setCountryCode(countryCode[0].id);
    };
    return (<div>
        <center><h1>Select Country</h1></center>
        <center><FormControl sx={{ m: 1, minWidth: 200 }}>
            <InputLabel id="demo-simple-select-label">Select Country</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedCountry}
                label="Country"
                onChange={handleChange}
            >
                {listOfCountries.map((data, index) => {
                    return <MenuItem value={data.country} key={index}>{data.country}</MenuItem>
                })}
            </Select>
        </FormControl>
        <Universities country={selectedCountry} countryCode={countryCode}/>
        </center>
    </div>)
}

export default Countries;