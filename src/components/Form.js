import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TeamForm = styled.form`
display: flex;
flex-direction: column;
width: 500px;
margin: auto;
`;

const Form = props => {
    const [teamMember, setTeamMember] = useState ({
        name: "",
        email: "",
        role: "",
    });

    const [buttonPrompt, setButtonPrompt] = useState("Add Team Member");

    const changeHandler = event => {
        setTeamMember({...teamMember, [event.target.name]: event.target.value })
    };

    const submitForm = event => {
        event.preventDefault();
        if (props.memberToEdit !== "") {
            props.editTeamMember(teamMember);
            setTeamMember({name: "", email: "", role: ""});
            props.setMemberToEdit("");
        } else {
            props.addTeamMember(teamMember);
            setTeamMember({name: "", email: "", role: ""});
        }
    }

    useEffect(() => {
        if (props.memberToEdit !== "") {
            setTeamMember(props.memberToEdit)
            setButtonPrompt("Edit Team Member");
        } else {
            setButtonPrompt("Add Team Member");
        }
    },[props.memberToEdit])

    return(
        <TeamForm onSubmit={submitForm}>
            <label htmlFor="name">Team Member Name:</label>
            <input name="name" id="name" type="text" placeholder="Name" value={teamMember.name} onChange={changeHandler} />

            <label htmlFor="email">Team Member Email:</label>
            <input name="email" id="email" type="email" placeholder="Email" value={teamMember.email} onChange={changeHandler} />

            <label htmlFor="role">Team Member Role:</label>
            <textarea name="role" id="role" type="text" placeholder="Role" value={teamMember.role} onChange={changeHandler} />

            <button type="submit">{buttonPrompt}</button>
        </TeamForm>
    )
}

export default Form;