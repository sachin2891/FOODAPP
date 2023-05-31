const Shimmer = () => {
    const shimmerStyles = {
        background:
            "linear-gradient(-90deg, #f0f0f0 0%, #e0e0e0 50%, #f0f0f0 100%)",
        backgroundSize: "200% 100%",
        animation: "shimmerAnimation 1s infinite",
    };
    return (
        <div className="flex flex-wrap">
            {
                Array(10).fill("").map(() => <div className="w-56 p-2 m-2 bg-slate-50 shadow-lg">
                    <div className="h-44 rounded-md mb-2" style={shimmerStyles}></div>
                    <h2 className="font-bold text-xl" style={shimmerStyles}></h2>
                    <h3 style={shimmerStyles}></h3>
                    <h3 style={shimmerStyles}></h3>
                    <h3 className="cuisines" style={shimmerStyles}></h3>
                    <div className="flex">
                        <h4 className="m-2" style={shimmerStyles}></h4>
                        <h4 className="m-2" style={shimmerStyles}></h4>
                    </div>
                </div>
                )
            }
        </div >


    );
};


export default Shimmer;