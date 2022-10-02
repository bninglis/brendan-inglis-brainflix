import React from 'react';
import './Next.scss';
import NextItem from './NextItem/NextItem'

function Next(props) {
    return (
        <div className="next">
            <h3 class="next__title">NEXT VIDEOS</h3>
            <ul class="next__list">
                <NextItem />
                <NextItem />
                <NextItem />
                <NextItem />
                <NextItem />
                <NextItem />
            </ul>
        </div>
    );
}

export default Next;