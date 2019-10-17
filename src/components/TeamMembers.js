import React from "react";

const TeamMembers = props => {
    return (
        <div>
            {props.teamList.map((person,index) => {
                const editMember = () => {
                    const setMemberToEdit = props.setMemberToEdit;
                    setMemberToEdit(person)
                }
                return (
                    <div key={index}>
                        <h2>{person.name}</h2>
                        <p>{person.email}</p>
                        <p>{person.role}</p>
                        <button type="submit" onClick={editMember}>Edit</button>
                    </div>
                )
            })}
        </div>
    )
}

export default TeamMembers;