import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div style={{ backgroundColor: '#5b42f3', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '2rem', padding: '2rem', color: 'white' }}>
                <h1>Movies App</h1>
                <h2>Favourites</h2>
            </div>
        )
    }
}
