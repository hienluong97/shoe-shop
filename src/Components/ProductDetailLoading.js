import React from 'react';
import Skeleton from 'react-loading-skeleton';

function ProductDetailLoading(props) {
    return (
        <div className="flex justify-between items-center">
            <div className="w-1/2">
                <Skeleton width={500} height={500} />
            </div>
            <div className="w-1/2">
                <Skeleton count={1} width={300} />
                <Skeleton count={4} width={500} />
                <Skeleton count={1} width={200} height={48} />

                <div className="mt-5  flex ">
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
