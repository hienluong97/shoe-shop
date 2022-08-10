import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function ProductlistLoading() {
    return (
        <div className="flex justify-between flex-wrap my-6 -mx-2.5">
            <div className="sm:px-2 md:px-2 lg:px-2 mb-2 w-1/3">
                <div className="px-2.5 shadow-sm shadow-gray-200 group">
                    <Skeleton height={300} width={250} />
                </div>
            </div>
            <div className="sm:px-2 md:px-2 lg:px-2 mb-2 w-1/3">
                <div className="px-2.5 shadow-sm shadow-gray-200 group">
                    <Skeleton height={300} width={250} />
                </div>
            </div>
            <div className="sm:px-2 md:px-2 lg:px-2 mb-2 w-1/3">
                <div className="px-2.5 shadow-sm shadow-gray-200 group">
                    <Skeleton height={300} width={250} />
                </div>
            </div>
            <div className="sm:px-2 md:px-2 lg:px-2 mb-2 w-1/3">
                <div className="px-2.5 shadow-sm shadow-gray-200 group">
                    <Skeleton height={300} width={250} />
                </div>
            </div>
            <div className="sm:px-2 md:px-2 lg:px-2 mb-2 w-1/3">
                <div className="px-2.5 shadow-sm shadow-gray-200 group">
                    <Skeleton height={300} width={250} />
                </div>
            </div>
            <div className="sm:px-2 md:px-2 lg:px-2 mb-2 w-1/3">
                <div className="px-2.5 shadow-sm shadow-gray-200 group">
                    <Skeleton height={300} width={250} />
                </div>
            </div>
            <div className="sm:px-2 md:px-2 lg:px-2 mb-2 w-1/3">
                <div className="px-2.5 shadow-sm shadow-gray-200 group">
                    <Skeleton height={300} width={250} />
                </div>
            </div>
            <div className="sm:px-2 md:px-2 lg:px-2 mb-2 w-1/3">
                <div className="px-2.5 shadow-sm shadow-gray-200 group">
                    <Skeleton height={300} width={250} />
                </div>
            </div>
            <div className="sm:px-2 md:px-2 lg:px-2 mb-2 w-1/3">
                <div className="px-2.5 shadow-sm shadow-gray-200 group">
                    <Skeleton height={300} width={250} />
                </div>
            </div>
        </div>
    );
}

export default ProductlistLoading;
