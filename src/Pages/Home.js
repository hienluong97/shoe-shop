import React from 'react';
import Videobgr from '~/Components/Videobgr';
import Bestsale from '~/Components/Bestsale';
import Trending from '~/Components/Trending';

function Home() {
    return (
        <div className="my-16 lg:my-20">
            <Videobgr />
            <div className="container px-4 lg:px-8 mx-auto">
                <Bestsale />
                <Trending />
            </div>
        </div>
    );
}

export default Home;
