import React from 'react'

import './Community.css'

import communities from "../../../data/communities/communities.json"

import ArrowDropUp from '@material-ui/icons/ArrowDropUp'
import Button from '../../button/Button';

function Community() {
    return (
        <div className="community-section">
            <div className="title">
                <span className="hoverable">Lorem ipsum dolor sit amet.</span>
            </div>
            <div className="communities-wrapper">
                {communities.map((community, index) => (
                    <div className="community hoverable">
                        <span>{index + 1}</span>
                        <ArrowDropUp />
                        <img src={community.image_src} alt="" />
                        <span className="name">r/{community.name}</span>
                    </div>
                ))}
            </div>
            <div className="action-buttons">
                <Button primary label="VIEW ALL" />
                <div className="secondary-buttons">
                    <Button tertiary label="Sports" />
                    <Button tertiary label="News" />
                    <Button tertiary label="Gaming" />
                    <Button tertiary label="Aww" />
                </div>
            </div>
        </div>
    )
}

export default Community
