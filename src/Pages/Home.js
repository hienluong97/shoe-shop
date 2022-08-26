import React from 'react';
import Videobgr from '~/Components/Videobgr';
import Bestsale from '~/Components/Bestsale';
import Trending from '~/Components/Trending';

function Home() {
    return (
        <div className="my-14">
            {/* <Videobgr /> */}
            <div className="container px-4 lg:px-14 mx-auto">
                <Bestsale />
                <Trending />
            </div>
        </div>
    );
}

export default Home;
