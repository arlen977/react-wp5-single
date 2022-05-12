import React, { Fragment } from "react";
import Icon from "@ant-design/icons";

/**
 * 自定义icon
 * 传入svg名称
 * <Aicon name={item.icon}></Aicon>
 */
export default class Aicon extends React.Component {
    static Component = null;
    state = { Component: Aicon.Component };
    componentDidMount() {
        const url = this.props.path
            ? import("../../assets/icon/" + this.props.path + "/" + this.props.name + ".svg?url")
            : import("../../assets/icon/lego/" + this.props.name + ".svg?url");
        url.then(({ default: Component }) => {
            Aicon.Component = Component;
            this.setState({ Component });
        }).catch(() => {
            this.setState({ Component: null });
        });
    }
    render() {
        const { Component } = this.state;
        return <Fragment>{Component ? <Icon component={Component} {...this.props}></Icon> : null}</Fragment>;
    }
}
