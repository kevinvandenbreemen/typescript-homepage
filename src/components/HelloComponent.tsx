import * as React from "react";

interface MessageProps {
    message: string
};

export class Message extends React.Component<MessageProps> {
    render() {
        return(
            <span>
                <u>{this.props.message}</u>
            </span>
        );
    }
}

