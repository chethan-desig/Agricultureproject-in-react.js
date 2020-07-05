import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';

const  seed=()=>{
    return(
        <Fragment>
             <div className="panel panel-primary">
                <div className="panel-heading">
                    <h2>SEEDS INFORMATION AND BUY</h2>
                </div>
                </div>
                <div>
                    <h1>RAGI</h1>
                    <p>Ragi is a whole grain that is gluten-free and a staple in South IndiaIt is rich in fiber that helps with weight loss and diabetesIt packed with calcium good carbs ammino acids and Vitamin D</p>
                    <Link to="/seedsbuying" >BUY</Link>
                    <div>
                        <h1>JOWAR</h1>
                        <p>One species is grown for grain while many others are used as fodder plants either cultivated in warm climates worldwide or naturalized in pasture lands Sorghum is in the subfamily Panicoideae and the tribe Andropogoneae the tribe of big bluestem and sugarcane</p>
                        <Link to="/seedsbuying" >BUY</Link>
                    </div>
                    <div>
                        <h1>MAIZ</h1>
                        <p>Maize has become a staple food in many parts of the world, with total production surpassing that of wheat or rice. However not all of this maize is consumed directly by humans. Some of the maize production is used for corn ethanol, animal feed and other maize products, such as corn starch and corn syrup</p>
                        <Link to="/seedsbuying" >BUY</Link>
                        <div>
                            <h1>BEANS</h1>
                            <p>Unlike the closely related pea, beans are a summer crop that need warm temperatures to grow. Maturity is typically 55?60 days from planting to harvest. As the bean pods mature, they turn yellow and dry up, and the beans inside change from green to their mature colour. As a vine, bean plants need external support, which may be provided in the form of special "bean cages" or poles. Native Americans customarily grew them along with corn and squash</p>
                            <Link to="/seedsbuying" >BUY</Link>
                            <div>
                                <h1>WHEAT</h1>
                                <p>Wheat is a grass widely cultivated for its seed, a cereal grain which is a worldwide staple food. There are many species of wheat which together make up the genus Triticum; the most widely grown is common wheat (T. aestivum). The archaeological record suggests that wheat was first cultivated in the regions of the Fertile Crescent around 9600 BCE. Botanically, the wheat kernel is a type of fruit called a caryopsis.</p>
                                <Link to="/seedsbuying" >BUY</Link>

                            </div>

                        </div>
                    </div>


                </div>
        </Fragment>
        

    )
}
export default seed