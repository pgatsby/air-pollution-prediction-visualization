import React, {Component} from 'react';
import "./facts.style.scss"


export default class Facts extends Component{

    render(){
        
        return(
            <div className='factoid'>
                <h4>Did You Know?</h4>
                <br/>
                <h6>General</h6>
                <ul>
                    <li>6% of global deaths are attributed to air pollution (OurWorldInData) </li>
                    <li>Outdoor air pollution is one of the leading factors for premature deaths and accounts for 3.4 million deaths each year (WHO)</li>
                    <li>95% of the global population is exposed to mean concentrations of particulate matter that exceed the recommended limit (WHO)</li>
                </ul>
                <h6>Wildfires</h6>
                <ul>
                    <li>The 6 primary air pollutant emissions from wildfires are Carbon, Methane, Carbon monoxide, Carbon dioxide, Dry Matter, and Particulate Matter (NASA)</li>
                    <li>The emissions from wildfires affect radiation, clouds, and climate on regional and global scales (NOAA)</li>
                    <li>Populations in regions far away from wildfires can still be affected as the air is transported (NOAA)</li>
                    <li>People with lung/heart disease, people who are older in age, people with diabetes, pregnant women and children are most at risk from air pollutants from wildfires (EPA)</li>
                </ul>
                <h6>Wind and Weather</h6>
                <ul>
                    <li>Wind allows for air pollutants to be transferred from one area to another (UCAR)</li>
                    <li>Cold temperatures allow for air pollution, especially exhaust from vehicles, chimneys, and smokestacks, to be more visible (UCAR)</li>
                    <li>Hot temperatures contribute to the increase in the amount of ozone and particulat matter pollution (UCAR)</li>
                    <li>Higher air temperatures speed up chemical reactions in the air (Waikato)</li>
                    <li>Sunlight makes certain air pollutants undergo checmical reactions producing smog (Waikato)</li>
                    <li>Rain helps wash out water-soluble pollutants and particulate matter (Waikato)</li>
                </ul>
            </div>
        );
    }

}