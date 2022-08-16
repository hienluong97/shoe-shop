import React from 'react';
import Videobgr from '~/Components/Videobgr';
import Bestsale from '~/Components/Bestsale';
import Trending from '~/Components/Trending';

function Home() {
    return (
        <div className="my-14">
            {/* <Videobgr /> */}
            <Bestsale />
            <Trending />
        </div>
    );
}

export default Home;
