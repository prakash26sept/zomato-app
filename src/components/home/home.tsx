import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import './home.scss';
import { motion } from 'framer-motion';
import { connect } from "react-redux";

const pageTransition = {
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
        x: "100vw",
        scale: 1.1
    }
}

const bikeTransition = {
    initial: {
        opacity: 0.5,
        x: "100vw"
    },
    in: {
        opacity: 1,
        x: "-5vw"
    },
    out: {
        opacity: 0,
        x: "26vw"
    },

}

const bikeTrans = {
    duration: 0.5

}

const pageTrans = {
    // duration: 0.5,
    // transition: 'linear'
    ease: 'anticipate',
    duration: 1,
    type: 'tween'

}

interface Props {
    darkTheme: any;
}

class Home extends React.Component<Props> {


    render() {

        return (
            <div className={`home-container ${this.props.darkTheme ? "dark-home-container" : ""}`}>
                <motion.div

                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageTransition}
                    className="home"
                    transition={pageTransition}
                >


                    <div className="home-left">
                        <motion.img
                            initial="out"
                            animate="in"
                            exit="out"
                            variants={bikeTransition}
                            transition={bikeTrans}
                            src="bike.png" alt="bike" className="bike" />
                    </div>
                    <div className="home-right">
                        <div className="info-container">

                            <div className="title">Explore Restaurents and their foods<br />Before You Order!</div>
                            <div className="details">This App helps you to choose your food wisely.</div>
                            <div className="details">Choose best Restaurents by Ratings</div>
                            <div className="details">Look into wide Range of food Categories</div>

                        </div>

                    </div>
                </motion.div>
            </div>

        );
    }
}


const mapStateToProps = (state: any) => {
    return {
        darkTheme: state.darkTheme
    };
};


function mapDispatchToProps(dispatch: any) {
    return {

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);