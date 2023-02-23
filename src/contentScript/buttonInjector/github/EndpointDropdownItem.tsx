/*-----------------------------------------------------------------------------------------------
 *  Copyright (c) Red Hat, Inc. All rights reserved.
 *  Licensed under the MIT License. See LICENSE file in the project root for license information.
 *-----------------------------------------------------------------------------------------------*/

import { Endpoint } from "../../../preferences/preferences";
import { getFactoryURL, getHostName } from "../util";
import { DropdownItem } from "./DropdownItem";

interface Props {
    projectURL: string;
    endpoint: Endpoint;
}

export const EndpointDropdownItem = (props: Props) => {
    const href = getFactoryURL(props.projectURL, props.endpoint);
    const text = `Open with ${getHostName(props.endpoint)}`;

    return (
        <DropdownItem href={href}>
            {text}
            {props.endpoint.active && (
                <div className="gh-pill-badge">Default</div>
            )}
        </DropdownItem>
    );
};
