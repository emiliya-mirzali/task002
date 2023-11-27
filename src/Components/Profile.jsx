import React from 'react'
import Email from './Email'
import Name from './Name'
import Address from './Adress'
import PersonalInfo from './PersonalInfo'

function Profile() {
    return (
        <div className='class'>
            <PersonalInfo personalInfo="Personal Information: available" />
            <Name name="Name: Emily" />
            <Email email="E-mail: emiliyamirza24@gmail.com" />
            <Address adress=" Adress:Baku, Azerbaijan" />

        </div>


    )
}

export default Profile