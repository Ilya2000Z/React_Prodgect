import React, {Component} from 'react'

import Classes from './Layout.css'


class layout extends Component{
    render (){
        return(
            <div className="Layout" >
                <main>
                    {this.props.children}
                </main>

            </div>
        )
    }
}

export default layout
