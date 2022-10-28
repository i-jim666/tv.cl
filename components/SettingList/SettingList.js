import React from 'react'
import './SettingChannelList.scss'
import SelectionList from './SelectionList';
import OrderedList from './OrderedList';

class SettinglList extends React.Component {

    constructor(){
        super()
        this.state = {
            showSelection: true,
            showOrdered: false
        }
    }

    showSelection = () => {
        this.setState({
            showSelection: true,
            showOrdered: false
        });
    }
    showOrdered = () => {
        this.setState({
            showSelection: false,
            showOrdered: true
        });
    }

    render() {

        let render_items

        if(this.state.showSelection){
            render_items = <SelectionList />
        }
        else{
            render_items = <OrderedList />
        }

        return(
            <div className="settings__wrapper">
                <div className="container">
                    <div className="title__filter">
                        <div className="flex_container">
                            <h3 className="title">Configuración de canales</h3>
                            <div className={`channel_filter filter`}>
                                <div onClick={this.showSelection} className={`today ${this.state.showSelection ? 'active' : ''}`}>Canales</div>
                                <div onClick={this.showOrdered} className={`tomorrow ${this.state.showOrdered ? 'active' : ''}`}>Ordenar la lista de canales</div>
                            </div>
                        </div>
                    </div>
                    <div className="setting__channels">

                        {render_items}

                    </div>
                </div>
            </div>
        )
    }
}


export default SettinglList