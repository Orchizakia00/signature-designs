import { TypeAnimation } from "react-type-animation";
import Button from "../Button/Button";


const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-300">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/qrjGPqs/f0f5a79764318a516a1957d28c813f2a.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    {/* <h1 className="text-5xl font-bold">Box Office News!</h1> */}
                    <div className="h-16">
                        <TypeAnimation
                                sequence={[
                                    500,
                                    'Zakia',
                                    200,
                                    'Zakia Tanzim',
                                    200,
                                    'Zakia Tanzim Orchi',
                                    200,
                                    '',
                                ]}
                                // wrapper="span"
                                cursor={true}
                                repeat={Infinity}
                                style={{ fontSize: '3em', fontWeight: 'bold', paddingBottom: '1.5rem', display: 'inline-block' }}
                            />
                    </div>
                    <p className="py-6 w-1/2">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <Button text={'Explore'} />
                </div>
            </div>
        </div>
    );
};

export default Banner;