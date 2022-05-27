import React from "react";
import './tableOfContents.css'
import {Link} from "react-router-dom";

function TableOfContentsBar(contents) {
    const content = contents.contents;

    const handleScroll = (ref) => {
        window.scrollTo({
            top: ref.offsetTop,
            left: 0,
            behavior: "smooth",
        });
    };

    const createSubItems = (title) => {
        return (
            content[title]['subItems'].map((subtitle) =>
                <ul>
                    <li className="toc-contents-subitem">
                        <Link to={`#${subtitle}`} onClick={() => {handleScroll(null.current);}}>{ subtitle }</Link>
                    </li>
                </ul>
            ))
    }

    const resetItems = (title) => {
        content['items'].forEach((iTitle) => {
            content[iTitle]['setSelect'](false)
        });
        content[title]['setSelect'](!content[title]['selected'])
    }

    const resetAllItems = (prop) => {
        content['items'].forEach((iTitle) => {
            content[iTitle]['setSelect'](false)
        });
        console.log(prop)
    }

    const items = content['items'].map((title) =>
        <li className={`toc-contents-item${content[title]['selected'] ? '-selected' : ''}`}>
            <button onClick={ () => resetItems(title) }>{ title }</button>
            <li>{ createSubItems(title) }</li>
        </li>
    )

    return (
        <div className="toc">
            <h1 className="toc-title">
                <button onClick={ (prop) => resetAllItems() }>{content['title']}</button>
            </h1>
            <ul className="toc-contents">
                { items }
            </ul>
        </div>
    )
}

export default TableOfContentsBar;