import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { connect } from "react-redux";
import './order.scss';
import axios from 'axios';
import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';

const pageVariant = {
    // in: {
    //     opacity: 1,
    //     y: 0
    // },
    // out: {
    //     opacity: 0,
    //     y: "-100vh"
    // }
    initial: {
        opacity: 0,
        x: "-100vw",
        scale: 0.8
    },
    in: {
        opacity: 1,
        x: 0,
        scale: 1
    },
    out: {
        opacity: 0,
        x: "-100vw",
        scale: 1.1
    }
}

const searchesVariant = {
    in: {
        opacity: 1,
    },
    out: {
        opacity: 0,
    }
}

interface Props {
    words: [],
    restaurant_id: number;
    darkTheme: any;
}

interface State {
    restaurant_data: any
}

class Order extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            restaurant_data: null
        }
    }


    componentDidMount() {

        // if (this.props.restaurant_id !== null) {
        // setTimeout(() => {


        // }, 6000);

        axios({
            method: "GET",
            url: `https://developers.zomato.com/api/v2.1/restaurant?res_id=${this.props.restaurant_id}`,
            headers: {
                "user-key": "f2abf689ae3e8e47f244f65e60ad747e",
                "content-type": "application/json"
            }
        }).then(response => {
            // console.log(response.data.restaurants[0].restaurant.name);
            this.setState({
                restaurant_data: response.data
            },
                () => {
                    console.log(this.state.restaurant_data);
                })

        })
            .catch(error => {
                console.log(error);
            });


    }

    showRestaurantData = () => {
        let data = this.state.restaurant_data;

        if (this.state.restaurant_data !== null) {
            return (
                <React.Fragment>

                    <div>
                        <img className="res_image" src={data.thumb} alt="restaurant image" />
                    </div>

                    <div className="title">
                        {data.name}
                    </div>

                    <div className="highlights">
                        {data.highlights.map((val: any) => {
                            return (
                                <div>{val}</div>
                            )
                        })}
                    </div>

                    <div className="location-container">
                        <div className="location">Address</div>
                        <div>
                            {data.location.address}
                        </div></div>

                    <div className="address-container" >
                        <div className="address">Phone Numbers</div>
                        <div>
                            {data.phone_numbers}
                        </div></div>




                    <div className="timings-container">
                        <div className="timings">Timings</div>
                        <div>
                            {data.timings}
                        </div></div>

                </React.Fragment>
            )
        }
    }

    // }

    render() {
        return (
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariant}
                className={`order-container ${this.props.darkTheme ? "dark-order-container" : ""}`}
            >
                <div className={`order ${this.props.darkTheme ? "dark-order" : ""}`}>
                    {/* <div>
                        <div>Name: {this.state.restaurant_data.name}</div>
                    </div> */}

                    {this.showRestaurantData()}
                </div>

            </motion.div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        words: state.words,
        restaurant_id: state.restaurant_id,
        darkTheme: state.darkTheme

    };
};


function mapDispatchToProps(dispatch: any) {
    return {
        // addWord: (addword: any) => dispatch(addWord(addword)),
        // addRestaurantCode: (addRestaurantCode: any) => dispatch(addRestaurantCode(addRestaurantCode))
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Order);