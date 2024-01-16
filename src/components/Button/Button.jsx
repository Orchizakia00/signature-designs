/* eslint-disable react/prop-types */

const Button = ({ text }) => {
    const gradientStyle = {
        background: 'linear-gradient(to right, #D63484, #FF90BC)',
        transition: 'background 0.3s ease-in-out',
    };

    const hoverStyle = {
        background: 'linear-gradient(to right, #7743DB, #C683D7)',
    };

    return (
        <button
            className="btn bg-pink-600 text-black hover:bg-pink-400"
            style={gradientStyle}
            onMouseOver={(e) => e.currentTarget.style.background = hoverStyle.background}
            onMouseOut={(e) => e.currentTarget.style.background = gradientStyle.background}
        >
            {text}
        </button>
    );
};

export default Button;
