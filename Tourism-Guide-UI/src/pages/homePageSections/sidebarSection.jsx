import React from 'react';
import Label from "../../components/label";
import styled from "styled-components";

const WordRectangle = styled.a`
    display: inline-flex;
    padding: 8px 10px;
    align-items: flex-start;
    gap: 10px;
    border: 1px solid #DEDEDE;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    margin-right: 4px; /* Adds space to the right of each box */
    margin-bottom: 10px; /* Adds space to the bottom of each box */
    text-decoration: none; /* Remove underline from links */
    color: #333; /* Link color */
    &:hover {
        transform: scale(1.05); /* Scale up by 5% on hover */
    }
`;


const SidebarSection = () => {

    const vacationTexts = [
        {
            text: "Explore tourist destinations in Banda Aceh",
            url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        },
        {
            text: "Cheap Padang specialty food restaurant",
            url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        },
        {
            text: "Mountain hiking in central Java",
            url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        }
    ];

    const discoverMoreWords = [
        { word: "Beach", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
        { word: "Street Food", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
        { word: "Palembang", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
        { word: "Mountain", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
        { word: "Caffe", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
        { word: "Recreation Park", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }
    ];


    return (
        <div className="SidebarSection">
            <Label className="SidebarSection-label">Popular</Label>
            <br />
            <div style={{ maxWidth: '300px' }}>
                {vacationTexts.map((item, index) => (
                    <React.Fragment key={index}>
                        <p style={{ fontWeight: 'bold', whiteSpace: 'normal', wordWrap: 'break-word' }}>
                            <a href={item.url} rel="noopener noreferrer">{item.text}</a>
                        </p>
                        <p style={{ fontWeight: 'bold' }}>16 reviews</p>
                        {index < vacationTexts.length - 1 && <hr style={{ width: '50%', margin: '8px 0' }} />}
                    </React.Fragment>
                ))}
            </div>
            <br />
            <br />
            <Label className="SidebarSection-label">Discover More</Label>
            <br />
            <div style={{ maxWidth: '300px' } }>
            {discoverMoreWords.map((item, index) => (
                    <WordRectangle key={index} href={item.url} rel="noopener noreferrer">{item.word}</WordRectangle>
                ))}
            </div>
        </div>
    );
};

export default SidebarSection;