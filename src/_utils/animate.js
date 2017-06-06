import React, { Component } from 'react';
import anime from 'animejs';

export default (WrappedComponent) => {
    return class extends Component {
        componentDidMount() {
            this.el = this.wrapped.getDom();
        }

        componentWillEnter(cb) {
            const { direction, setNewState } = this.props;

            anime({
                targets: this.el,
                translateX: direction === 'right' ? ['100%', 0] : ['-100%', 0],
                duration: 450,
                complete() {
                    setNewState({ isAnimating: false });
                    cb();
                }
            });
        }

        componentWillLeave(cb) {
            const { direction, setNewState } = this.props;

            anime({
                targets: this.el,
                translateX: direction === 'right' ? '100%' : '-100%',
                duration: 450,
                complete() {
                    setNewState({ isAnimating: false, direction: null });
                    cb();
                }
            });
        }

        render() {
            return (
                <WrappedComponent ref={c => this.wrapped = c} {...this.props} />
            );
        }
    };
};