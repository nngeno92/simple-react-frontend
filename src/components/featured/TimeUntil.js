import React, { Component } from 'react';

class TimeUntil extends Component {

    

    render() {
        return (
            <div className="countdown_wrapper">
                <div className="countdown_top">
                    Event starts in
                </div>
                <div className="countdown_bottom">
                    <div className="countdown_item">
                        <div className="countdown_time">
                            23
                        </div>
                        <div className="countdown_tag">
                            Days
                        </div>
                    </div>

                    <div className="countdown_item">
                        <div className="countdown_time">
                            2
                        </div>
                        <div className="countdown_tag">
                            Hrs
                        </div>
                    </div>

                    <div className="countdown_item">
                        <div className="countdown_time">
                            20
                        </div>
                        <div className="countdown_tag">
                            Min
                        </div>
                    </div>

                    <div className="countdown_item">
                        <div className="countdown_time">
                            40
                        </div>
                        <div className="countdown_tag">
                            Sec
                        </div>
                    </div>

                    

                </div>
                
            </div>
        );
    }
}

export default TimeUntil;