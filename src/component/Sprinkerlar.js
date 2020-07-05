import React from 'react';
import {Link} from 'react-router-dom';

const Sprink =()=>{
    return(
        <div>
            <h1>SPRINKLER IRREGATION</h1>
	<img src="../images/i1.jpg" width="300" height="300" align="top"></img>
	<p>In sprinkler or overhead irrigation, water is piped to one or
		more central locations within the field and distributed by overhead
		high-pressure sprinklers or guns. A system utilizing sprinklers,
		sprays, or guns mounted overhead on permanently installed risers is
		often referred to as a solid-set irrigation system. Higher pressure
		sprinklers that rotate are called rotors an are driven by a ball
		drive, gear drive, or impact mechanism. Rotors can be designed to
		rotate in a full or partial circle. Guns are similar to rotors, except
		that they generally operate at very high pressures of 40 to 130
		lbf/in² (275 to 900 kPa) and flows of 50 to 1200 US gal/min (3 to 76
		L/s), usually with nozzle diameters in the range of 0.5 to 1.9 inches
		(10 to 50 mm). Guns are used not only for irrigation, but also for
		industrial applications such as dust suppression and logging.</p>
	<p>Sprinklers can also be mounted on moving platforms connected to
		the water source by a hose. Automatically moving wheeled systems known
		as traveling sprinklers may irrigate areas such as small farms, sports
		fields, parks, pastures, and cemeteries unattended. Most of these
		utilize a length of polyethylene tubing wound on a steel drum. As the
		tubing is wound on the drum powered by the irrigation water or a small
		gas engine, the sprinkler is pulled across the field. When the
		sprinkler arrives back at the reel the system shuts off. This type of
		system is known to most people as a "waterreel" traveling irrigation
		sprinkler and they are used extensively for dust suppression,
		irrigation, and land application of waste water.</p>
	<p>Other travelers use a flat rubber hose that is dragged along
		behind while the sprinkler platform is pulled by a cable. These
		cable-type travelers are definitely old technology and their use is
		limited in today's modern irrigation projects.</p>
        <Link to="/" className="btn btn-danger">
                        BACK
                      </Link>
        </div>
    )
}
export default Sprink;