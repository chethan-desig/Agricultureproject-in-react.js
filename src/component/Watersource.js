import React from 'react';
import {Link} from 'react-router-dom';
const Water =()=>{
    return(
        <div>
            <h1>WATER SOURCES</h1>
	<img src="../images/water.jpg" width="500" height="400" align="top"></img>
	<p>Irrigation water can come from groundwater (extracted from
		springs or by using wells), from surface water (withdrawn from rivers,
		lakes or reservoirs) or from non-conventional sources like treated
		wastewater, desalinated water or drainage water. A special form of
		irrigation using surface water is spate irrigation, also called
		floodwater harvesting. In case of a flood (spate), water is diverted
		to normally dry river beds (wadis) using a network of dams, gates and
		channels and spread over large areas. The moisture stored in the soil
		will be used thereafter to grow crops. Spate irrigation areas are in
		particular located in semi-arid or arid, mountainous regions. While
		floodwater harvesting belongs to the accepted irrigation methods,
		rainwater harvesting is usually not considered as a form of
		irrigation. Rainwater harvesting is the collection of runoff water
		from roofs or unused land and the concentration of this.</p>
	<p>Around 90% of wastewater produced globally remains untreated,
		causing widespread water pollution, especially in low-income
		countries. Increasingly, agriculture uses untreated wastewater as a
		source of irrigation water. Cities provide lucrative markets for fresh
		produce, so are attractive to farmers. However, because agriculture
		has to compete for increasingly scarce water resources with industry
		and municipal users (see Water scarcity below), there is often no
		alternative for farmers but to use water polluted with urban waste,
		including sewage, directly to water their crops. Significant health
		hazards can result from using water loaded with pathogens in this way,
		especially if people eat raw vegetables that have been irrigated with
		the polluted water. The International Water Management Institute has
		worked in India, Pakistan, Vietnam, Ghana, Ethiopia, Mexico and other
		countries on various projects aimed at assessing and reducing risks of
		wastewater irrigation. They advocate a 'multiple-barrier' approach to
		wastewater use, where farmers are encouraged to adopt various
		risk-reducing behaviours. These include ceasing irrigation a few days
		before harvesting to allow pathogens to die off in the sunlight,
		applying water carefully so it does not contaminate leaves likely to
		be eaten raw, cleaning vegetables with disinfectant or allowing fecal
		sludge used in farming to dry before being used as a human manure.[36]
		The World Health Organization has developed guidelines for safe water</p>
	<p>There are numerous benefits of using recycled water for
		irrigation, including the low cost (when compared to other sources,
		particularly in an urban area), consistency of supply (regardless of
		season, climatic conditions and associated water restrictions), and
		general consistency of quality. Irrigation of recycled wastewater is
		also considered as a means for plant fertilization and particularly
		nutrient supplementation. This approach carries with it a risk of soil
		and water pollution through excessive wastewater application. Hence, a
		detailed understanding of soil water conditions is essential for
		effective utilization of wastewater for irrigation use.</p>
        <Link to="/" className="btn btn-danger">
                        BACK
                      </Link>
        </div>
    )
}
export default Water;