import React from 'react';
import './Next.scss';
import "../../styles/styles.scss";
import NextItem from './NextItem/NextItem'

function Next(props) {
    return (
        <div className="next">
            <h3 className="next__subheader">NEXT VIDEOS</h3>
            <ul className="next__list">
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