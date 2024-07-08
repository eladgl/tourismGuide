import React from 'react';
import Label from "../../components/label";

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
        </div>
    );
};

export default SidebarSection;