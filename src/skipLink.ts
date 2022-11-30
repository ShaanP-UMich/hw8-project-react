// Courtesy of https://levelup.gitconnected.com/build-an-accessible-skip-to-content-anchor-link-with-react-140903f3bd7e

import React from 'react';

interface SkipLinkProperties {
    className?: string;

    children: React.ReactElement;
    /**
     * The css query aiding the selection of the
     * container (main, section etc) we want to scroll to;
     */
    skipTo: string;
}

const SkipLink: React.FC<SkipLinkProperties> = props => {

    const onClick = (event: React.SyntheticEvent) => {
        event.preventDefault();

        const container: (HTMLElement | null) = document.querySelector(props.skipTo);

        if (container) {
            container.tabIndex = -1;
            container.focus();
            setTimeout(() => container.removeAttribute("tabindex"), 1000);
        }
    };

    return React.cloneElement(props.children, { onClick, className: props.className });
}

SkipLink.defaultProps = {
    className: "skip",
    skipTo: "main:first-of-type",
};

export default SkipLink;