import React from 'react'
import './App.css';
import {Component} from 'react';
import User from './components/User';
import {TextBlock, RoundShape} from 'react-placeholder/lib/placeholders';
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";


export default class UsersList extends Component {
    state = {
        users: [],
        isLoaded: false
    };

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        fetch('https://randomuser.me/api/?results=10')
            .then(response => {
                if (response.ok) return response.json();
                throw new Error('Request failed.');
            })
            .then(data => {
                this.setState({users: data.results, isLoaded: true})
            })
            .catch(err => console.log(err))

    };
    handleClick = (id) => {
        const filteredResult = this.state.users.filter(user => user.login.uuid === id);
        this.props.history.push(`/users/:${id}`, filteredResult);
    };

    render() {
        const userList = this.state.users.map((user) => {
            return <User key={user.login.md5}
                         avatar={user.picture.large}
                         name={user.name.first !== "" || user.name.last !== "" ? `${user.name.first} ${user.name.last}` : "Nie przekazano imienia i nazwiska"}
                         address={user.location.street.name !== "" ? `${user.location.street.number}, ${user.location.street.name}, ${user.location.city}` : "brak"}
                         reqistered={user.registered.date}
                         id={user.login.uuid}
                         email={user.email}
                         click={this.handleClick}/>;
        });
        const awesomePlaceholder = (
            <div className='my-awesome-placeholder'>
                <RoundShape color='#80808030'  style={{width: 80, height: 80}} />
                <TextBlock rows={4} color='#80808030' style={{width: 600, height: 80}}/>
            </div>
        );
        return <div className={'container'}>
            <div className="container__context">{this.state.isLoaded ? userList :
                <ReactPlaceholder type='media' rows={7} ready={this.state.ready} customPlaceholder={awesomePlaceholder}>
                </ReactPlaceholder>}
            </div>

        </div>;
    }
}

