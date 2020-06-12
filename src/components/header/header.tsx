import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import './header.scss';
import DarkSwitch from '../switch/switch';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { changeFontSize, changeLanguage } from '../../redux/actions/actions';
import { withTranslation, Trans } from 'react-i18next';

interface Props {
    fontSize: any;
    changeFontSize: any;
    selectedLanguage: any;
    t?: any;
    i18n: any;
    changeLanguage: any;
}

interface State {

}

class Header extends React.Component<Props, State> {


    constructor(props: Props) {
        super(props);

        this.state = {

        }
    }


    changeTextSize = (e: any) => {
        let id = e.target.id;

        if (e.target.id === "plus") {
            if (this.props.fontSize === "small") {
                this.props.changeFontSize("medium");
            } else if (this.props.fontSize === "medium") {
                this.props.changeFontSize("large");
            }
        } if (e.target.id === "minus") {
            if (this.props.fontSize === "large") {
                this.props.changeFontSize("medium");
            } else if (this.props.fontSize === "medium") {
                this.props.changeFontSize("small");
            }
        }
    }

    changeLanguage = (e: any) => {
        // const { t, i18n } = this.props;
        this.props.i18n.changeLanguage(e.target.value);
        this.props.changeLanguage(this.props.i18n.language);

    }

    render() {
        const { t } = this.props;
        return (
            <div>
                <div className="header">
                    <div className="logo">

                        <Link to="/"><img src="zomato.png" alt="logo" /></Link>

                        <DarkSwitch />

                        <div className="text-sizer">
                            <div>{t('textSize')}</div>
                            <span ><img id="plus" onClick={this.changeTextSize} src="plus.png" alt="plus" /></span>
                            <span><img id="minus" onClick={this.changeTextSize} src="minus.png" alt="minus" /></span>
                        </div>

                    </div>

                    <div className="right-nav">
                        <div>
                            <select value={this.props.selectedLanguage} onChange={this.changeLanguage} className="language-selector">

                                <option selected={this.props.selectedLanguage === "en"} value="en">English</option>
                                <option selected={this.props.selectedLanguage === "hi"} value="hi">हिन्दी</option>

                            </select>
                        </div>
                        <div>{t('about')}</div>
                        <div><Link to="/search">{t('searchRestaurants')}</Link></div>

                        <div>{t('aboutMe')}</div>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state: any) => {
    return {
        fontSize: state.fontSize,
        selectedLanguage: state.selectedLanguage
    };
};


function mapDispatchToProps(dispatch: any) {
    return {
        changeFontSize: (font: any) => dispatch(changeFontSize(font)),
        changeLanguage: (lang: any) => dispatch(changeLanguage(lang)),
    };
}

export default (withTranslation()(connect(mapStateToProps, mapDispatchToProps)(Header)));