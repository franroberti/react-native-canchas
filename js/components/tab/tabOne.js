import React, { Component } from 'react';

import { Container, Content, Card, CardItem, Text, View, Body } from 'native-base';

import styles from './styles';


import DatePicker from 'react-native-datepicker'

class CustomDatePicker extends Component {
    constructor(props){
        super(props)
        this.state = {date:"2016-05-15"}
    }

    render(){
        return (
			<DatePicker
				style={{width: 200}}
				date={this.state.date}
				mode="date"
				placeholder="Seleccioná una fecha"
				format="YYYY-MM-DD hh"
				minDate="2016-05-01"
				maxDate="2016-06-01"
				confirmBtnText="Confirm"
				cancelBtnText="Cancel"
				customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                    },
                    dateInput: {
                        marginLeft: 36
                    },
                    // ... You can check the source to find the other keys.
                }}
				onDateChange={(date) => {this.setState({date: date})}}
			/>
        )
    }
}


export default class TabOne extends Component {
	// eslint-disable-line

	render() {
		// eslint-disable-line
		return (
			<Content padder>
				<Card>
					<CardItem>
						<Body>
							<Text>NativeBase is open source and free.</Text>
							<CustomDatePicker/>
						</Body>
					</CardItem>
					<CardItem>
						<Body>
							<Text>Platform specific codebase for components.</Text>
						</Body>
					</CardItem>
					<CardItem>
						<Body>
							<Text>Any native third-party libraries can be included.</Text>
						</Body>
					</CardItem>
				</Card>
			</Content>
		);
	}
}
