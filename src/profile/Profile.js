import React from 'react'
import PropTypes from 'prop-types'; // ES6

export default function Profile(props) {
    const handleclick = () => {
      alert(props.fullname)
  }
    return (
        <div><p>{props.fullname}
            <br />
            {props.bio}
            <br />
            {props.profession}
            <br />
            <button onClick={handleclick}>Click me !</button>
            {props.children}
        </p>
        </div>
        
  )
}
Profile.propTypes = {
    fullname: PropTypes.string.isRequired
};
