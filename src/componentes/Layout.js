import { Component } from "react";


class Layout extends Component{
    render(){
        return(
            <div className='layout'>
                <div>
                    {this.props.children}
                </div>
            </div>

        )
    }
}

export default Layout