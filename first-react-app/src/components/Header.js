import React from 'react'

class Header extends React.Component {
   

    render() {
        return (
            <div className="container" style={{
                textAlign: 'center',
                backgroundColor: 'grey',
                padding: '5px'
            }}>      
                <h1>Task Manager</h1>
            </div>
        )
    }
}

export default Header;
