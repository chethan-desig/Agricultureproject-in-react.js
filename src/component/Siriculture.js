import React from 'react';
import {Link} from 'react-router-dom';

const Siriculture =()=>{
    return(
        <div>
            <h1>SERICULTURE</h1>
            <p>Sericulture, or silk farming, is the cultivation of silkworms to
		produce silk. Although there are several commercial species of
		silkworms, Bombyx mori (the caterpillar of the domesticated silk moth)
		is the most widely used and intensively studied silkworm. Silk was
		first produced in China as early as the Neolithic period.[1]
		Sericulture has become an important cottage industry in countries such
		as Brazil, China, France, India, Italy, Japan, Korea, and Russia.
		Today, China and India are the two main producers, with more than 60%
		of the world's annual production.</p>
	<img src="../images/s1.jpg" width="500" height="400" align="top"></img>
	<img src="../images/s2.jpg" width="500" height="400" align="right"></img>
	<h2>HISTORY</h2>
    <p>According to Confucian text, the discovery of silk production
		dates to about 2700 BC, although archaeological records point to silk
		cultivation as early as the Yangshao period (5000 – 3000 BC).[2] By
		about the first half of the 1st century AD it had reached ancient
		Khotan,[3] by a series of interactions along the Silk Road. By 140 AD
		the practice had been established in India.[4] In the 6th century the
		smuggling of silkworm eggs into the Byzantine Empire led to its
		establishment in the Mediterranean, remaining a monopoly in the
		Byzantine Empire for centuries (Byzantine silk). In 1147, during the
		Second Crusade, Roger II of Sicily (1095–1154) attacked Corinth and
		Thebes, two important centres of Byzantine silk production, capturing
		the weavers and their equipment and establishing his own silkworks in
		Palermo and Calabria,[5] eventually spreading the industry to Western
		Europe.</p>
        <h2>PRODUCTION</h2>
	<p>Silkworm larvae are fed with mulberry leaves, and, after the
		fourth moult, climb a twig placed near them and spin their silken
		cocoons. This process is achieved by the worm through a dense fluid
		secreted from its structural glands, resulting in the fiber of the
		cocoon. The silk is a continuous filament comprising fibroin protein,
		secreted from two salivary glands in the head of each larva, and a gum
		called sericin, which cements the filaments. The sericin is removed by
		placing the cocoons in hot water, which frees the silk filaments and
		readies them for reeling. This is known as the degumming process.[6]
		The immersion in hot water also kills the silkworm pupae.</p>
	<img src="../images/s3.jpg" width="500" height="400" align="middle"></img>
	<img src="../images/s4.jpg" width="500" height="400" align="right"></img>
	<p>Single filaments are combined to form thread, which is drawn
		under tension through several guides and wound onto reels. The threads
		may be plied to form yarn. After drying, the raw silk is packed
		according to quality.</p>



    <Link to="/" className="btn btn-success">
                        BACK
                      </Link>
        </div>
    )
}
export default Siriculture