import React, { Component } from 'react';
import { TransitionGroup } from 'react-transition-group';
import Button from 'components/Button/Button';
import Panel from 'components/Panel/Panel';
import animate from '_utils/animate';

const AnimatedPanel = animate(Panel);

export default class Main extends Component {
    constructor() {
        super();
        this.setNewState = this.setNewState.bind(this);
        this.handleclick = this.handleclick.bind(this);

        this.state = {
            showPanel: false,
            isAnimating: false,
            direction: null
        };
    }

    setNewState(newState) {
        this.setState({ ...newState });
    }

    handleclick(dir) {
        if(this.state.isAnimating) return;

        this.setNewState({ showPanel: !this.state.showPanel, isAnimating: true, direction: dir });
    }

    render() {
        const { direction } = this.state;

        return (
            <div>
                <Button disabled={direction === 'right'}
                        onClick={() => this.handleclick('left')}>
                    Animate left
                </Button>
                <Button disabled={direction === 'left'}
                        onClick={() => this.handleclick('right')}>
                    Animate right
                </Button>
                <TransitionGroup>
                    { this.state.showPanel && <AnimatedPanel direction={this.state.direction} setNewState={this.setNewState}/> }
                </TransitionGroup>
            </div>
        );
    }
}
