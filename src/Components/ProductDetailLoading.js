import React from 'react';
import Skeleton from 'react-loading-skeleton';

function ProductDetailLoading(props) {
    return (
        <div className="mt-16 flex flex-col lg:flex-row justify-center lg:justify-between items-center">
            <div className="w-full lg:w-1/2 flex justify-center">
                <Skeleton width={400} height={400} />
            </div>
            <div className="w-full mt-6 lg:w-1/2 lg:mt-0">
                <Skeleton count={1} width={300} />
                <Skeleton count={4} width={500} />
                <Skeleton count={1} width={200} height={48} />
                <div className="mt-5 flex ">
                    <div className="mr-5">
                        <Skeleton count={1} width={100} height={48} />
                    </div>

                    <div>
                        <Skeleton count={1} width={100} height={48} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetailLoading;
