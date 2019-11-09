import React from 'react'
import ReactDOM from 'react-dom';

const modalRoot: HTMLElement | null = document.getElementById("modal-portal");

class ModalPortal extends React.Component<{}, {}> {

    el: HTMLDivElement;
    
    // eslint-disable-next-line
    constructor(props: {}) {
        super(props)
        this.el=document.createElement("div")
    }
    componentDidMount() {
        if(modalRoot)
            modalRoot.appendChild(this.el)
    }
    componentWillUnmount() {
        if(modalRoot)
            modalRoot.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(
          this.props.children,
          this.el,
        );
    }

}

export default ModalPortal