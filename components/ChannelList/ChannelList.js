import React from 'react'
import styles from './ChannelList.module.scss'
import moment from 'moment'
import TodayList from './TodayList';
import TomorrowList from './TomorrowList';

let today = moment().format('DD MMM');
let tomorrow = moment().add(1,'days').format('DD MMM');


class ChannelList extends React.Component {

    constructor(){
        super()
        this.state = {
            showToday: true,
            showTomorrow: false
        }
    }

    showToday = () => {
        this.setState({
            showToday: true,
            showTomorrow: false
        });
    }
    showTomorrow = () => {
        this.setState({
            showToday: false,
            showTomorrow: true
        });
    }

    render() {

        let render_items

        if(this.state.showToday){
            render_items = <TodayList />
        }
        else{
            render_items = <TomorrowList />
        }

        return(
            <div className="channel__wrapper">
                <div className="container">
                    <div className="title__filter">
                        <div className={`${styles.flex_container}`}>
                            <h3 className={styles.title}>{this.props.title}</h3>
                            <div className={`channel_filter ${styles.filter}`}>
                                <div onClick={this.showToday} className={`today ${this.state.showToday ? 'active' : ''}`}>Today, {today}</div>
                                <div onClick={this.showTomorrow} className={`tomorrow ${this.state.showTomorrow ? 'active' : ''}`}>Tommorrow, {tomorrow}</div>
                            </div>
                        </div>
                    </div>
                    <div className={`channels ${styles.channels}`}>

                        {render_items}

                    </div>
                </div>
            </div>
        )
    }
}


export default ChannelList